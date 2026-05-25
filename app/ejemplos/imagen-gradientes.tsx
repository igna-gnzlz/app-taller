import { LinearGradient } from "expo-linear-gradient";
import { Image as ImageRN, StyleSheet, Text, View } from "react-native";

import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function ImagenGradients() {
  return (
    <View style={styles.container}>
      <Text>Imagen Local con RN</Text>
      <Text>Imagen Remota con RN</Text>
      <ImageRN
        source={{ uri: "https://www.untdf.edu.ar/img/isologotipo.png" }}
        height={50}
        style={{ backgroundColor: "red" }}
      />
      <Text>Expo image Local</Text>
      <Text>Expo image Remota</Text>
      <Image
        source="https://www.untdf.edu.ar/img/isologotipo.png"
        style={{ height: 50, backgroundColor: "red" }}
        contentFit="contain"
      />
      <Text>
        Linear <Text style={{ fontSize: 50 }}>Gradient</Text>
      </Text>
      <LinearGradient
        colors={["white", "blue"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={{ width: 200, height: 200 }}
      >
        <Text style={{ color: "white" }}>Sign in with Facebook</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
