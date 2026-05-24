import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

import { radius } from "@/src/theme/radius";

type HomeCardProps = {
  background: string;
  style?: ViewStyle;
  children: React.ReactNode;
  onPress?: () => void;
};

export function HomeCard({
  background,
  children,
  onPress,
  style,
}: HomeCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: background }, style]}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    borderRadius: radius.sm,
    // shadow for android
    elevation: 4,
    // shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
