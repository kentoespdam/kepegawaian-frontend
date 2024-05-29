import type { Pageable } from "@_types/index";

export const getUrut = (data: Pageable<unknown>) => {
    return data.first ? 1 : Math.ceil(data.totalPages / data.number) + 1;
}