import { StyleSheet, Text, View, ViewStyle } from "react-native";

import { HomeCard } from "./HomeCard";

import { colors } from "../../theme/colors";

type CategoryCardProps = {
  title: string;

  background: string;
  style?: ViewStyle;
};

export function CategoryCard({ title, background, style }: CategoryCardProps) {
  return (
    <HomeCard background={background} style={style}>
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
