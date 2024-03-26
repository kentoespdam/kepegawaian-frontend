import type { Employee } from "@tipes/employee";
import { delay } from ".";

export const getEmployeeByNipam = async (nipam: string) => {
	try {
		await delay();
		const employee:  Employee = {
			id: 1,
			nipam: "123456",
			nama: "test pegawai",
		};
		return employee;
	} catch (e) {
		console.log(e);
	}
};
