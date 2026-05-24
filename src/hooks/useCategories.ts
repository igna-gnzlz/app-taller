import { getCategoriesV3 } from "@/src/services/categories";
import { useQuery } from "@tanstack/react-query";

// centralize keys to prevent typos
const QUERY_KEYS = {
  categories: (type: string) => ["categories", type] as const,
};

export function useCategories(type: string) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: QUERY_KEYS.categories(type),
    staleTime: 6_000,
    queryFn: () => getCategoriesV3(type),
  });

  // return what is necessary
  return { categorias: data, isLoading, isError, error };
}
