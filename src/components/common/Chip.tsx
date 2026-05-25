import { colors } from "@/src/theme/colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ChipProps = {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  onPress?: () => void;
};

export function Chip({
  label,
  backgroundColor = colors.surfaceSecondary,
  textColor = colors.textSecondary,
  onPress,
}: ChipProps) {
  return (
    <TouchableOpacity
      style={[styles.chip, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 50,
    alignSelf: "flex-start",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
});
