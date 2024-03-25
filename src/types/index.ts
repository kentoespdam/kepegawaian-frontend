import { z } from "zod";

export const USER_ROLE = { USER: "USER", ADMIN: "ADMIN" } as const;
export const UserRole = z.nativeEnum(USER_ROLE);
export type UserRole = z.infer<typeof UserRole>;

export interface AxiosErrorData {
	message: string;
	code: number;
	type: string;
	version: string;
}

export const BaseId = z.object({
	id: z.number(),
});

export const BaseDelete = z.object({
	id: z.string().startsWith("DELETE-", {
		message: "invalid delete code!",
	}),
});

export type BaseDelete = z.infer<typeof BaseDelete>;

export const PageableSort = z.object({
	sorted: z.boolean(),
	unsorted: z.boolean(),
	empty: z.boolean(),
});

export type PageableSort = z.infer<typeof PageableSort>;

export const BasePageable = z.object({
	pageNumber: z.number(),
	pageSize: z.number(),
	sort: PageableSort,
	offset: z.number(),
	paged: z.boolean(),
	unpaged: z.boolean(),
});

export type BasePageable = z.infer<typeof BasePageable>;

// export const Pageable = z.object({
// 	content: z.ZodAny(),
// 	totalPages: z.number(),
// 	totalElements: z.number(),
// 	last: z.boolean(),
// 	size: z.number(),
// 	number: z.number(),
// 	sort: PageableSort,
// 	numberOfElements: z.number(),
// 	first: z.boolean(),
// 	empty: z.boolean(),
// });

const Content = <T>(schema: z.ZodType<T>) => z.array(schema);
type Content = z.infer<ReturnType<typeof Content>>;

// const Pageable = <T>(schema: z.ZodType<T>) => {
// 	return z.object({
// 		content: Content(schema),
// 		totalPages: z.number(),
// 		totalElements: z.number(),
// 		last: z.boolean(),
// 		size: z.number(),
// 		number: z.number(),
// 		sort: PageableSort,
// 		numberOfElements: z.number(),
// 		first: z.boolean(),
// 		empty: z.boolean(),
// 	});
// };
//
// export type Pageable<T> = z.infer<ReturnType<typeof Pageable<T>>>;

export interface Pageable<TData> {
	content: TData[];
	totalPages: number;
	totalElements: number;
	last: boolean;
	size: number;
	number: number;
	sort: PageableSort;
	numberOfElements: number;
	first: boolean;
	empty: boolean;
}

export const PageResponse = <T extends z.ZodTypeAny>(schema: T) => {
	return z.object({
		status: z.number(),
		statusText: z.string(),
		message: z.string(),
		// data: Pageable(schema),
		timestamp: z.string(),
	});
};

export const ESearchType = z.enum(["text", "number", "level"]);

// export type BaseColumnDef=z.infer<typeof {
// 	id: z.string(),
// 	label: z.string(),
// }>

// export const CustomColumnDef = z.object({

// 	search: z.optional(z.boolean()),
// 	searchType: ESearchType,
// });

// export type CustomColumnDef = z.infer<typeof CustomColumnDef>;

export type BaseColumnDef = {
	id: string;
	label: string;
};

export type CustomColumnDef = BaseColumnDef & { search?: boolean; searchType?: z.infer<typeof ESearchType> };
