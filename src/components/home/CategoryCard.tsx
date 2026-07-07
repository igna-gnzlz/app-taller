import { HomeCard } from "@/src/components/home/HomeCard";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

type CategoryCardProps = {
  name: string;
  backgroundColor?: string;
  gradientsColors: [string, string];
  textColor: string;
  style?: ViewStyle;
};

export function CategoryCard({
  name,
  gradientsColors,
  textColor,
  style,
}: CategoryCardProps) {
  return (
    <HomeCard gradientColors={gradientsColors} style={style}>
      <View style={styles.content}>
        <Text style={[styles.categoryText, { color: textColor }]}>{name}</Text>
      </View>
    </HomeCard>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 22,
  },
});
