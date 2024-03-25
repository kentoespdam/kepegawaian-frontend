"use server";

import { setAuthorizeHeader } from "@helpers/index";
import { BaseDelete, Pageable } from "@tipes/index";
import { Grade, GradeForm, GradeFormSchema } from "@tipes/master/grade";
import { API_URL } from "@utils/index";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getDataGrade = async (
	searchParams: string,
): Promise<Pageable<Grade> | null> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data } = await axios.get(
			`${API_URL}/master/grade?${searchParams}`,
			{ headers: headers },
		);

		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (err: any) {
		console.log(err.response.data);
		return null;
	}
};

export const getGradeById = async (id: number) => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data } = await axios.get(`${API_URL}/master/grade/${id}`, {
			headers: headers,
		});
		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		console.log(error.response.data);
	}
};

export const saveGrade = async (_prevState: unknown, formData: FormData) => {
	const cookieList = cookies();
	const headers = setAuthorizeHeader(cookieList);

	// console.log(formData.get("level"))

	try {
		const validate = GradeForm.safeParse({
			id: Number(formData.get("id")),
			levelId: Number(formData.get("levelId")),
			grade: Number(formData.get("grade")),
			tukin: Number(formData.get("tukin")),
		});
		// const validate = GradeFormSchema.safeParse(formData);
		// {
		// 	id:formData.id,
		// 	levelId:formData.levelId,
		// 	grade:formData.grade,
		// 	tukin:formData.tukin,
		// })

		// return {
		// 	status: 500,
		// 	data: JSON.stringify(validate),
		// };
		if (!validate.success)
			return { error: validate.error.flatten().fieldErrors };

		// if (!validate.success)
		// 	return {
		// 		status: 500,
		// 		data: validate.error.message,
		// 	};
		// validate.data.id
		// 	? await axios.put(
		// 			`${API_URL}/master/grade/${validate.data.id}`,
		// 			formData,
		// 			{ headers: headers },
		// 	  )
		// 	: await axios.post(`${API_URL}/master/grade`, formData, {
		// 			headers: headers,
		// 	  });

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (err: any) {
		// console.log(err.response.data);
		// return {
		// 	status: err.response?.status,
		// 	data: err.response?.data.message,
		// };
	}

	// revalidateTag("grade");
	// redirect("/master/grade");
};

export const hapus = async (_prevState: unknown, formData: FormData) => {
	const cookieList = cookies();
	const headers = setAuthorizeHeader(cookieList);

	try {
		const validate = BaseDelete.safeParse({
			id: formData.get("deleteRef"),
		});

		if (!validate.success)
			return {
				success: validate.success,
				error: {
					message: validate.error.message,
				},
			};

		const id = Number(validate.data.id.substring("DELETE-".length));
		if (id <= 0)
			return {
				success: false,
				error: { message: "invalid data" },
			};

		await axios.delete(`${API_URL}/master/grade/${id}`, {
			headers: headers,
		});

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (err: any) {
		console.log(err.response?.data);
		return {
			success: false,
			error: {
				message: String(err.response?.data.message),
			},
		};
	}

	revalidateTag("grade");
	redirect("/master/grade");
};
