import { colors } from "@/src/constants/colors";
import { radius } from "@/src/constants/radius";
import { ReactNode } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

type HomeCardProps = {
  backgroundColor?: string;
  style?: ViewStyle;
  children: ReactNode;
  onPress?: () => void;
};

export function HomeCard({
  backgroundColor = colors.primary,
  children,
  onPress,
  style,
}: HomeCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor }, style]}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    borderRadius: radius.sm,
    elevation: 4, // shadow for android
    shadowColor: "#000", // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
