"use client";
import { useSessionStore } from "@store/session";
import { Employee } from "@tipes/employee";
import { User } from "@tipes/user";
import { useEffect } from "react";

type EmployeeStateComponentProps = {
  userAccount: User;
  employee?: Employee | null;
};
const EmployeeStateComponent = (props: EmployeeStateComponentProps) => {
  const setUser = useSessionStore((state) => state.setUser);

  useEffect(() => {
    setUser(props.userAccount);
    return () => console.log("effect finish");
  }, [props.userAccount, setUser]);

  return null;
};

export default EmployeeStateComponent;
