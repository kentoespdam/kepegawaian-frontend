import { z } from "zod";

// Define a generic Content type
const Content = <T>(elementType: z.ZodType<T>) => z.array(elementType);

// Define Pageable type
const Pageable = z.object({
	pageNumber: z.number(),
	pageSize: z.number(),
	sort: z.object({
		empty: z.boolean(),
		sorted: z.boolean(),
		unsorted: z.boolean(),
	}),
	offset: z.number(),
	unpaged: z.boolean(),
	paged: z.boolean(),
});

// Define Data type using the generic Content type
const Data = <T>(elementType: z.ZodType<T>) =>
	z.object({
		content: Content(elementType),
		pageable: Pageable,
		last: z.boolean(),
		totalElements: z.number(),
		totalPages: z.number(),
		size: z.number(),
		number: z.number(),
		sort: z.object({
			empty: z.boolean(),
			sorted: z.boolean(),
			unsorted: z.boolean(),
		}),
		first: z.boolean(),
		numberOfElements: z.number(),
		empty: z.boolean(),
	});

// Define MyZodType using the generic Data type
const MyZodType = <T>(elementType: z.ZodType<T>) =>
	z.object({
		status: z.number(),
		statusText: z.string(),
		message: z.string(),
		data: Data(elementType),
		timestamp: z.string(),
	});

// Example usage with a specific type for 'content'
interface ContentType {
	id: number;
	nama: string;
}

const jsonData = `{
	"status": 200,
	"statusText": "OK",
	"message": "Data Found",
	"data": {
		"content": [
			{
				"id": 1,
				"nama": "KONTRAK"
			},
			{
				"id": 2,
				"nama": "CAPEG"
			},
			{
				"id": 3,
				"nama": "PEGAWAI"
			},
			{
				"id": 4,
				"nama": "HONORER TETAP"
			}
		],
		"pageable": {
			"pageNumber": 0,
			"pageSize": 10,
			"sort": {
				"empty": true,
				"sorted": false,
				"unsorted": true
			},
			"offset": 0,
			"unpaged": false,
			"paged": true
		},
		"last": true,
		"totalElements": 4,
		"totalPages": 1,
		"size": 10,
		"number": 0,
		"sort": {
			"empty": true,
			"sorted": false,
			"unsorted": true
		},
		"first": true,
		"numberOfElements": 4,
		"empty": false
	},
	"timestamp": "2024-02-29 11:59:33"
}`;
const parsedData = MyZodType(
	Content(
		z.object({
			id: z.number(),
			nama: z.string(),
		}),
	),
).parse(jsonData);

console.log(parsedData);
