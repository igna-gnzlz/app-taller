import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;

  actionLabel?: string;

  onPressAction?: () => void;
};

export function SectionHeader({
  title,
  subtitle,
  actionLabel,
  onPressAction,
}: SectionHeaderProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        {actionLabel && (
          <TouchableOpacity onPress={onPressAction}>
            <Text style={styles.actionText}>{actionLabel}</Text>
          </TouchableOpacity>
        )}
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
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    marginBottom: spacing.sm,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",

    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "400",

    color: colors.textSecondary,
  },
  actionText: {
    fontSize: 14,

    color: colors.primary,

    fontWeight: "500",
  },
});
