import React from "react";
import { Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { styles } from "./styles";

export default function Barra() {
  return (
    <View style={styles.barra}>
      <SimpleLineIcons name="arrow-left" size={20} color="black" />
      <View style={styles.barra2}>
        <Text style={styles.user}>IAMCOURSIN</Text>
        <Text style={styles.pub}>Publicações</Text>
      </View>
    </View>
  );
}
