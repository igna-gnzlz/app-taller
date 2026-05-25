import { Header } from "@/src/components/common/Header";
import { ScreenContainer } from "@/src/components/common/ScreenContainer";
import { useState } from "react";
import { ContentHeader } from "../components/common/ContentHeader";
import { CatProductCard } from "../components/search/CatProductCard";
import { SearchBarCategories } from "../components/search/SearchBarCategories";

export function SearchScreen() {
  const [search, setSearch] = useState("");
  return (
    <ScreenContainer>
      <Header title="DigitalEpicurean" />
      <ContentHeader title="Categories" subtitle="3 items found" />
      <SearchBarCategories value={search} onChangeText={setSearch} />
      <CatProductCard name="Drinks" brand="Coca-Cola" />
      <CatProductCard name="Desserts" brand="Grido" />
      <CatProductCard name="Snacks" brand="Lays" />
    </ScreenContainer>
  );
}
