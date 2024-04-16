"use client";
import type { Employee } from "@_types/employee";
import type { User } from "@_types/user";
import { useSessionStore } from "@store/session";
import { useEffect } from "react";

interface EmployeeStateComponentProps {
	userAccount: User;
	employee?: Employee | null;
}

const EmployeeStateComponent: React.FC<EmployeeStateComponentProps> = ({
	userAccount,
}) => {
	const setUser = useSessionStore((state) => state.setUser);

	useEffect(() => {
		setUser(userAccount);
	}, [userAccount, setUser]);

	return null;
};

export default EmployeeStateComponent;
