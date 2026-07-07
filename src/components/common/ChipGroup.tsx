import { Chip } from "@/src/components/common/Chip";
import { spacing } from "@/src/constants/spacing";
import { Label, labels } from "@/src/data/labels";
import { StyleSheet, View } from "react-native";

type ChipGroupProps = {
  items?: Label[];
  backgroundColor?: string;
  textColor?: string;
  onChipPress?: (id: string) => void;
};

export function ChipGroup({
  items = labels,
  backgroundColor,
  textColor,
  onChipPress,
}: ChipGroupProps) {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Chip
          key={item.id}
          label={item.name}
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
