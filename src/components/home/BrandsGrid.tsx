import { Grid } from "@/src/components/common/Grid";
import { BrandCard } from "@/src/components/home/BrandCard";
import { brands } from "@/src/data/brands";
import { colors } from "@/src/theme/colors";

export function BrandsGrid() {
  return (
    <Grid
      data={brands}
      keyExtractor={(item) => item.id}
      renderItem={(item) => (
        <BrandCard title={item.name} background={colors.white} />
      )}
    />
  );
}
