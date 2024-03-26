"use client";
import { ThemeProvider as NextThemeProvider, ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

const NextThemeProv = ({ children, ...props }: ThemeProviderProps) => {
	return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};
export default NextThemeProv;
