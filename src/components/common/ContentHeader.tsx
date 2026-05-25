import { colors } from "@/src/theme/colors";
import { spacing } from "@/src/theme/spacing";
import { StyleSheet, Text, View } from "react-native";

type ContentHeaderProps = {
  title: string;
  subtitle?: string;
};

export function ContentHeader({ title, subtitle }: ContentHeaderProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.md,
  },
  container: {
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textSecondary,
  },
});
