import { spacing } from "@/src/theme/spacing";
import { FlatList, useWindowDimensions, View, ViewStyle } from "react-native";

type GridProps<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactElement | null;
  keyExtractor: (item: T) => string;
  mobileColumns?: number;
  tabletColumns?: number;
  desktopColumns?: number;
  contentContainerStyle?: ViewStyle;
};

export function Grid<T>({
  data,
  renderItem,
  keyExtractor,
  mobileColumns = 2,
  tabletColumns = 3,
  desktopColumns = 6,
  contentContainerStyle,
}: GridProps<T>) {
  const { width } = useWindowDimensions();

  let columns = mobileColumns;
  if (width >= 900) columns = desktopColumns;
  else if (width >= 600) columns = tabletColumns;

  return (
    <FlatList
      data={data}
      key={columns}
      numColumns={columns}
      scrollEnabled={false}
      keyExtractor={keyExtractor}
      columnWrapperStyle={{ gap: spacing.md, marginBottom: spacing.md }}
      contentContainerStyle={[{ gap: spacing.md }, contentContainerStyle]}
      renderItem={({ item }) => (
        <View style={{ flex: 1 }}>{renderItem(item)}</View>
      )}
    />
  );
}
