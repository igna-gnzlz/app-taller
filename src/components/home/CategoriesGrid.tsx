import { Grid } from "@/src/components/common/Grid";
import { CategoryCard } from "@/src/components/home/CategoryCard";
import { categories } from "@/src/data/categories";

export function CategoriesGrid() {
  return (
    <Grid
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <CategoryCard title={item.title} />}
    />
  );
}
