import { FlatList, useWindowDimensions } from "react-native";

import { CategoryCard } from "@/src/components/home/CategoryCard";

import { categories } from "@/src/data/categories";

export function CategoriesGrid() {
  const { width } = useWindowDimensions();

  let columns = 2;

  if (width >= 900) {
    columns = 6;
  } else if (width >= 600) {
    columns = 3;
  }

  return (
    <FlatList
      data={categories}
      key={columns}
      numColumns={columns}
      scrollEnabled={false}
      columnWrapperStyle={{
        gap: 16,
        marginBottom: 16,
      }}
      contentContainerStyle={{
        gap: 16,
      }}
      renderItem={({ item }) => (
        <CategoryCard
          title={item.title}
          background={item.color}
          style={{ flex: 1 }}
        />
      )}
    />
  );
}
