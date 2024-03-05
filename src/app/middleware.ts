import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
	const response = NextResponse.next();
	const host = req.nextUrl.host.split(":")[0];
	const currentPath = req.nextUrl.pathname;
	const cookie = req.cookies;

    
}
