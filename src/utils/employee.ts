import type { Employee } from "@_types/employee";
import { delay } from ".";

export const getEmployeeByNipam = async (nipam: string): Promise<Employee | undefined> => {
	try {
		await delay();
		// Contoh data pegawai, seharusnya diambil dari database atau API
		const employee: Employee = {
			id: 1,
			nipam: "123456",
			nama: "test pegawai",
		};
		// Mengembalikan data pegawai jika nipam cocok
		if (employee.nipam === nipam) {
			return employee;
		}
		return undefined;
	} catch (e) {
		console.error("Terjadi kesalahan saat mengambil data pegawai:", e);
	}
};
