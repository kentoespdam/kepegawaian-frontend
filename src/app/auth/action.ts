import { cookies, headers } from "next/headers";
import { userToEmail } from "@helpers/email";

export const doLogin = async (_prevState: unknown, formData: FormData) => {
	const headerList = headers();
	const callbackUrl = cookies().get("callback_url")?.value;
	const username = String(formData.get("username"));
	const email = userToEmail(username);
	const password = String(formData.get("password"));

	const userExist = await getUserByNipam(username);
};
