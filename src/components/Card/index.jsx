import React from "react";
import { Text, View, Image } from "react-native";
import { Ionicons, SimpleLineIcons, FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

export default function InstaCard() {
  return (
    <View style={styles.container}>
      {/* InstaCardHeader */}
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-start",
          padding: 5,
          alignItems: "center",
        }}
      >
        <Image
          style={styles.imgPerfil}
          source={{
            uri: "https://github.com/GustavoKozlowski.png",
          }}
        />
        <View style={{ marginRight: 21 }}>
          <Text style={styles.user}>iamcoursin</Text>
          <Text style={styles.locale}>Florest Hills</Text>
        </View>
        <View style={{ marginLeft: 238, marginBottom: 4 }}>
          <SimpleLineIcons name="options" size={12} color="black" />
        </View>
      </View>

      {/* InstaCardHeader */}
      {/* InstaCardImage */}
      <Image
        style={styles.imgFeed}
        source={{
          uri: "https://github.com/GustavoKozlowski.png",
        }}
      />
      {/* InstaCardImage */}
      {/* Footer */}
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-start",
          padding: 5,
          alignItems: "center",
        }}
      >
        <Text>
          <Ionicons
            name="ios-heart-outline"
            size={21}
            color="black"
            style={styles.icones}
          />
          <Ionicons
            name="ios-chatbubble-outline"
            size={20}
            color="black"
            style={styles.icones}
          />
          <Ionicons
            name="ios-paper-plane-outline"
            size={20}
            color="black"
            style={styles.icones}
          />

          <FontAwesome
            name="bookmark-o"
            size={20}
            color="black"
            style={styles.save}
          />
        </Text>
      </View>
      {/* Footer */}
    </View>
  );
}
