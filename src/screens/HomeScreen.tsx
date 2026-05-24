import { CategoriesGrid } from "@/src/components/categories/CategoriesGrid";
import { ChipGroup } from "@/src/components/common/ChipGroup";
import { Header } from "@/src/components/common/Header";
import { ScreenContainer } from "@/src/components/common/ScreenContainer";
import { SectionHeader } from "@/src/components/common/SectionHeader";
import { labels } from "@/src/data/labels";

export function HomeScreen() {
  return (
    <ScreenContainer>
      <Header title="DigitalEpicurean" />

      <SectionHeader title="Categories" actionLabel="View Library" />
      <CategoriesGrid />

      <SectionHeader title="Refine by Taste" />
      <ChipGroup items={labels} />

      <SectionHeader
        title="Global Brands"
        subtitle="Explored through the lens of quality"
      />
    </ScreenContainer>
  );
}
