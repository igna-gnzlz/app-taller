import { colors } from "@/src/constants/colors";
import { radius } from "@/src/constants/radius";
import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

type HomeCardProps = {
  backgroundColor?: string;
  gradientColors?: [string, string];
  style?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
  onPress?: () => void;
};

export function HomeCard({
  backgroundColor = colors.primary,
  gradientColors,
  children,
  onPress,
  style,
  pressedStyle,
}: HomeCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        style,
        pressed && pressedStyle,
      ]}
    >
      {gradientColors ? (
        <LinearGradient
          colors={gradientColors}
          style={StyleSheet.absoluteFill}
        />
      ) : (
        <View style={[StyleSheet.absoluteFill, { backgroundColor }]} />
      )}
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    borderRadius: radius.sm,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
