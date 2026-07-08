import { searchProductsByCategory } from "@/src/services/products.service";
import { transformSearchProductsResponse } from "@/src/transformers/search-products.transformer";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfiniteProductosByCategoria(categoria: string) {
  return useInfiniteQuery({
    queryKey: ["products-infinite", categoria],
    staleTime: 2_000,
    initialPageParam: 1,
    queryFn: async ({ pageParam }) => {
      const response = await searchProductsByCategory(categoria, pageParam);
      return transformSearchProductsResponse(response);
    },
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.page_count ? nextPage : undefined;
    },
  });
}
