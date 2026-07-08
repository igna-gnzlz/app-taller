import { Chip } from "@/src/components/common/Chip";
import { spacing } from "@/src/constants/spacing";
import { Label, labels } from "@/src/data/labels";
import { buildRoute, ROUTES } from "@/src/navigation/routes";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

type ChipGroupProps = {
  items?: Label[];
  backgroundColor?: string;
  textColor?: string;
};

export function ChipGroup({
  items = labels,
  backgroundColor,
  textColor,
}: ChipGroupProps) {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Chip
          key={item.id}
          label={item.name}
          backgroundColor={backgroundColor}
          textColor={textColor}
          onPress={() =>
            router.push(buildRoute(ROUTES.ETIQUETA, { nombre: item.id }))
          }
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
