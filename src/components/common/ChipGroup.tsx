import { Chip } from "@/src/components/common/Chip";
import { spacing } from "@/src/theme/spacing";
import { StyleSheet, View } from "react-native";

type ChipGroupProps = {
  items: { id: string; label: string }[];
  backgroundColor?: string;
  textColor?: string;
  onChipPress?: (id: string) => void;
};

export function ChipGroup({
  items,
  backgroundColor,
  textColor,
  onChipPress,
}: ChipGroupProps) {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Chip
          key={item.id}
          label={item.label}
          backgroundColor={backgroundColor}
          textColor={textColor}
          onPress={() => onChipPress?.(item.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
});
