import { searchProductsByBrand } from "@/src/services/products.service";
import { transformSearchProductsResponse } from "@/src/transformers/search-products.transformer";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfiniteProductosByBrand(brandId: string) {
  return useInfiniteQuery({
    queryKey: ["brand-infinite", brandId],
    staleTime: 2_000,
    initialPageParam: 1,
    queryFn: async ({ pageParam }) => {
      const response = await searchProductsByBrand(brandId, pageParam);
      return transformSearchProductsResponse(response);
    },
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.page_count ? nextPage : undefined;
    },
  });
}
