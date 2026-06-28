import { colors } from "@/src/constants/colors";
import { radius } from "@/src/constants/radius";
import { spacing } from "@/src/constants/spacing";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, useWindowDimensions, View } from "react-native";

type SearchBarCategoriesProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export function SearchBarCategories({
  value,
  onChangeText,
}: SearchBarCategoriesProps) {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        width >= 500 ? { width: "40%" } : { width: "100%" },
      ]}
    >
      <Ionicons name={"search"} size={20} color={colors.textSecondary} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search categories..."
        style={styles.textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceSecondary,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});
