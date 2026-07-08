import { getProduct } from "@/src/services/products.service";
import { useQuery } from "@tanstack/react-query";

export function useProducto(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    staleTime: 5 * 60 * 1000,
  });
}
