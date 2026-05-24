import { CategoriesGrid } from "../components/categories/CategoriesGrid";
import { Header } from "../components/common/Header";
import { ScreenContainer } from "../components/common/ScreenContainer";
import { SectionHeader } from "../components/common/SectionHeader";

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
