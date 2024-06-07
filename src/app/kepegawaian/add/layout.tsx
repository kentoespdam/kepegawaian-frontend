"use client"

import type { ChildrenNode } from "@lib/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000
            }
        }
    })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
    if (typeof window === "undefined")
        return makeQueryClient()

    if (!browserQueryClient)
        browserQueryClient = makeQueryClient()

    return browserQueryClient
}


const AddPegawaiLayout = ({ children }: ChildrenNode) => {
    const queryClient = getQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div dir="ltr" data-aria-orientation="horizontal">
                {children}
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default AddPegawaiLayout;