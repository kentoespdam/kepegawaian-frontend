import {
	appwriteHeader,
	getExpToken,
	isHasSessionCookie,
	isHasTokenCookie,
	isValidIpAddress,
	newHostname,
} from "@helpers/index";
import { baseAuthUrl, sessionNames } from "@utils/index";
import type { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
	const response = NextResponse.next();
	const {
		host,
		pathname: currentPath,
		href: currentHref,
		origin: currentOrigin,
	} = req.nextUrl;
	const cookies = req.cookies;

	if (!isHasSessionCookie(cookies) && !currentPath.startsWith("/auth")) {
		return redirectAuth(currentHref, currentOrigin);
	}

	const activeSession = await isHasAuthSession(cookies);
	if (activeSession.status === 401) {
		for (const name of sessionNames) {
			response.cookies.delete(name);
		}
		if (currentPath.startsWith("/auth")) return response;
		return redirectAuth(currentHref, currentOrigin);
	}

	if (!isHasTokenCookie(cookies)) {
		const token = await renewToken(cookies, host.split(":")[0]);
		if (token) {
			response.cookies.set(token);
		}
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
	return await fetch(`${baseAuthUrl}/account/session/current`, {
		method: "GET",
		headers: reqHeaders,
	});
};

export const renewToken = async (cookies: RequestCookies, host: string) => {
	const reqHeaders = appwriteHeader(cookies);

	try {
		const { jwt } = await fetch(`${baseAuthUrl}/account/jwt`, {
			method: "POST",
			headers: reqHeaders,
		}).then((res) => res.json());

		const expires = getExpToken(jwt);
		const expDate = new Date(expires);
		const result = {
			name: sessionNames[2],
			value: jwt,
			path: "/",
			expires: expDate,
		};

		if (!isValidIpAddress(host)) {
			Object.assign(result, {
				domain: newHostname(host),
				httpOnly: true,
				secure: true,
			});
		}

		return result;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (e: any) {
		console.error("middleware create token", e.response.data.message);
		return undefined;
	}
};

function redirectAuth(currentHref: string, currentOrigin: string) {
	return NextResponse.redirect(new URL("/auth", currentOrigin), {
		headers: {
			"set-cookie": `callback_url=${encodeURIComponent(currentHref)}`,
		},
	});
}
