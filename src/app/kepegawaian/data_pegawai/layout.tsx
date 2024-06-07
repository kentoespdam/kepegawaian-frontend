"use client"

import type { ChildrenNode } from "@lib/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

const DataPegawaiLayout = ({ children }: ChildrenNode) => {
    return (
        <QueryClientProvider client={queryClient}>
            <div dir="ltr" data-aria-orientation="horizontal">
                {children}
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default DataPegawaiLayout;