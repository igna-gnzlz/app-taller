import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/src/constants/colors";
import { spacing } from "@/src/constants/spacing";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      {/* Left section */}
      <TouchableOpacity>
        <Ionicons name="menu-outline" size={28} color={colors.text} />
      </TouchableOpacity>

      {/* Center title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right section */}
      <TouchableOpacity>
        <Ionicons
          name="person-circle-outline"
          size={28}
          color={colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
  },

  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    marginLeft: spacing.sm,
    color: colors.text,
  },
});
