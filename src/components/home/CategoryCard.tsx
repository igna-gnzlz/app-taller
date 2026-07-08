import { HomeCard } from "@/src/components/home/HomeCard";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

type CategoryCardProps = {
  name: string;
  gradientsColors: [string, string];
  textColor: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export function CategoryCard({
  name,
  gradientsColors,
  textColor,
  style,
  onPress,
}: CategoryCardProps) {
  return (
    <HomeCard gradientColors={gradientsColors} style={style} onPress={onPress}>
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
