import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Cryptr from "cryptr";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const authHostname = `${process.env.NEXT_PUBLIC_APPWRITE_HOSTNAME}`;
export const baseAuthUrl = `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/v1`;
export const authUrl = `${baseAuthUrl}/account/sessions/email`;
export const projectId = `${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;
export const appwriteKey = `${process.env.NEXT_PUBLIC_APPWRITE_API_KEY}`;
export const localAppUrl = `${process.env.PROTOCOL}://${process.env.APP_HOSTNAME}:${process.env.PORT}`;

export const sessionNames = [
	`a_session_${projectId.toLowerCase()}`,
	`a_session_${projectId.toLowerCase()}_legacy`,
	`a_session_${projectId.toLowerCase()}_token`,
];

export const DEFAULT_MAIL_DOMAIN = `${process.env.DEFAULT_MAIL_DOMAIN}`;
export const AUTH_SECRET = `${process.env.AUTH_SECRET}`;

export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const cryptr = new Cryptr(AUTH_SECRET);

export const delay = async (time = 1000) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, time);
	});
};
