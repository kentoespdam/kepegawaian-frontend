import {
	appwriteHeader,
	getExpToken,
	isHasSessionCookie,
	isHasTokenCookie,
	isValidIpAddress,
	newHostname,
} from "@helpers/index";
import { baseAuthUrl, sessionNames } from "@utils/index";
import type {
	RequestCookie,
	RequestCookies,
} from "next/dist/compiled/@edge-runtime/cookies";
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
	const response = NextResponse.next();
	const host = req.nextUrl.host.split(":")[0];
	const currentPath = req.nextUrl.pathname;
	const currentHref = req.nextUrl.href;
	const currentOrigin = req.nextUrl.origin;
	const cookies = req.cookies;

	if (!isHasSessionCookie(cookies) && !currentPath.startsWith("/auth"))
		return NextResponse.redirect(
			new URL(
				`/auth?callbackUrl=${encodeURIComponent(currentHref)}`,
				currentOrigin,
			),
			{
				headers: {
					"set-cookie": `callback_url=${encodeURIComponent(currentHref)}`,
				},
			},
		);

	const activeSession = await isHasAuthSession(cookies);
	if (activeSession.status === 401) {
		response.cookies.delete(sessionNames[0]);
		response.cookies.delete(sessionNames[1]);
		response.cookies.delete(sessionNames[2]);
		if (currentPath.startsWith("/auth")) return response;
		return NextResponse.redirect(
			new URL(
				`/auth?callbackUrl=${encodeURIComponent(currentHref)}`,
				currentOrigin,
			),
			{
				headers: {
					"set-cookie": `callback_url=${encodeURIComponent(currentHref)}`,
				},
			},
		);
	}

	response.cookies.set("callback_url", encodeURIComponent(currentHref));

	if (!isHasTokenCookie(cookies)) {
		const token = await renewToken(cookies, host);
		response.cookies.set(token);
	}

	if (currentPath === "/")
		return NextResponse.redirect(new URL("/dashboard", currentOrigin));

	return response;
}

export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|logo_pdam_40x40|api/auth/|test).*)",
	],
};

export const isHasAuthSession = async (cookies: RequestCookies) => {
	const reqHeaders = appwriteHeader(cookies);
	const req = await fetch(`${baseAuthUrl}/account/session/current`, {
		method: "GET",
		headers: reqHeaders,
	});
	return req;
};

export const renewToken = async (cookies: RequestCookies, host: string) => {
	const reqHeaders = appwriteHeader(cookies);

	try {
		const req = await fetch(`${baseAuthUrl}/account/jwt`, {
			method: "POST",
			headers: reqHeaders,
		});

		const data = await req.json();
		const expires = getExpToken(data.jwt);
		const result = {
			name: sessionNames[2],
			value: data.jwt,
			path: "/",
			expires: new Date(expires),
		};
		if (!isValidIpAddress(host)) {
			Object.assign(result, {
				domain: newHostname(host),
				httpOnly: true,
				secure: true,
				sameSite: true,
				priority: "high",
			});
		}

		return result as RequestCookie;
	} catch (e) {
		console.log("middleware create token", e);
		return {} as RequestCookie;
	}
};
