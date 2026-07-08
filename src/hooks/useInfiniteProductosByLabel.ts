import { searchProductsByLabel } from "@/src/services/products.service";
import { transformSearchProductsResponse } from "@/src/transformers/search-products.transformer";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfiniteProductosByLabel(labelId: string) {
  return useInfiniteQuery({
    queryKey: ["label-infinite", labelId],
    staleTime: 2_000,
    initialPageParam: 1,
    queryFn: async ({ pageParam }) => {
      const response = await searchProductsByLabel(labelId, pageParam);
      return transformSearchProductsResponse(response);
    },
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.page_count ? nextPage : undefined;
    },
  });
}
