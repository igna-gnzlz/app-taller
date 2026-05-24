import { CategoriesGrid } from "@/src/components/categories/CategoriesGrid";
import { Header } from "@/src/components/common/Header";
import { ScreenContainer } from "@/src/components/common/ScreenContainer";
import { SectionHeader } from "@/src/components/common/SectionHeader";

export function HomeScreen() {
  return (
    <ScreenContainer>
      <Header title="DigitalEpicurean" />

      <SectionHeader title="Categories" actionLabel="View Library" />
      <CategoriesGrid />

      <SectionHeader title="Refine by Taste" />
      <SectionHeader
        title="Global Brands"
        subtitle="Explored through the lens of quality"
      />
    </ScreenContainer>
  );
}
