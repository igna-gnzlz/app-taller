import { colors } from "@/src/constants/colors";
import { radius } from "@/src/constants/radius";
import { spacing } from "@/src/constants/spacing";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

type CatProductCardProps = {
  name: string;
  brand: string;
  fact1?: string;
  fact2?: string;
  backgroundColor?: string;
};

export function CatProductCard({
  name,
  brand,
  backgroundColor = colors.surfaceSecondary,
  fact1 = "Fact 1",
  fact2 = "Fact 2",
}: CatProductCardProps) {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor },
        width >= 500 ? { width: "40%" } : { width: "100%" },
      ]}
    >
      <View style={styles.figure} />
      <View style={styles.textContent}>
        <Text style={styles.name}>{name}</Text>
        <Text>{brand}</Text>
        <View style={styles.factsContainer}>
          <Text style={styles.fact}>{fact1}</Text>
          <Text style={styles.fact}>{fact2}</Text>
        </View>
      </View>
      <Ionicons name={"arrow-forward"} size={20} color={colors.textSecondary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: spacing.sm,
    marginBottom: spacing.md,
    height: 100,
    borderRadius: radius.sm,
    elevation: 4, // shadow for android
    shadowColor: "#000", // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  figure: {
    width: 80,
    height: 80,
    borderRadius: radius.sm,
    backgroundColor: colors.primary,
  },
  textContent: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
  },
  factsContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
    justifyContent: "space-evenly",
  },
  fact: {
    fontSize: 14,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: colors.white,
    backgroundColor: colors.primary,
  },
  arrow: {
    width: 20,
    height: 20,
    backgroundColor: colors.primary,
  },
});
