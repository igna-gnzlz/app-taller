import { searchProducts } from "@/src/services/products.service";
import { transformSearchProductsResponse } from "@/src/transformers/search-products.transformer";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfiniteSearchProducts(query: string) {
  return useInfiniteQuery({
    queryKey: ["search-products", query],
    staleTime: 2_000,
    initialPageParam: 1,

    queryFn: async ({ pageParam }) => {
      const response = await searchProducts(query, pageParam);

      return transformSearchProductsResponse(response);
    },

    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.page_count ? nextPage : undefined;
    },
  });
}
