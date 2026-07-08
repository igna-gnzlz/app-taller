import { Grid } from "@/src/components/common/Grid";
import { BrandCard } from "@/src/components/home/BrandCard";
import { brands } from "@/src/data/brands";
import { buildRoute, ROUTES } from "@/src/navigation/routes";
import { router } from "expo-router";

export function BrandsGrid() {
  return (
    <Grid
      data={brands}
      keyExtractor={(item) => item.id}
      renderItem={(item) => (
        <BrandCard
          title={item.name}
          onPress={() =>
            router.push(buildRoute(ROUTES.MARCA, { nombre: item.id }))
          }
        />
      )}
    />
  );
}
