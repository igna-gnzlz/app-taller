import { StyleSheet, Text, View, ViewStyle } from "react-native";

import { HomeCard } from "@/src/components/home/HomeCard";

import { colors } from "@/src/theme/colors";
import { spacing } from "@/src/theme/spacing";

type BrandCardProps = {
  title: string;
  background?: string;
  circleColor?: string;
  style?: ViewStyle;
};

export function BrandCard({
  title,
  background = colors.white,
  circleColor,
  style,
}: BrandCardProps) {
  return (
    <HomeCard background={background} style={style}>
      <View style={styles.container}>
        <View
          style={[
            styles.circle,
            { backgroundColor: circleColor ?? colors.primary },
          ]}
        >
          <Text style={styles.titleInCircle}>{title}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </HomeCard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
  },
  circle: {
    width: spacing.xxl,
    height: spacing.xxl,
    borderRadius: spacing.xxl / 2,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  titleInCircle: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.white,
    textAlign: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.black,
    textAlign: "center",
  },
});
