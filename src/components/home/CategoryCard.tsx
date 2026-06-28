import { HomeCard } from "@/src/components/home/HomeCard";
import { colors } from "@/src/constants/colors";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

type CategoryCardProps = {
  title: string;
  backgroundColor?: string;
  style?: ViewStyle;
};

export function CategoryCard({
  title,
  backgroundColor,
  style,
}: CategoryCardProps) {
  return (
    <HomeCard backgroundColor={backgroundColor} style={style}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </HomeCard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.white,
  },
});
