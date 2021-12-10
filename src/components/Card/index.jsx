import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import opcao from "../../../assets/opcao.jpg";

export default function InstaCard() {
  return (
    <View style={styles.container}>
        {/* InstaCardHeader */}
      <View style={{flexDirection: "row", alignSelf:"flex-start", padding:5, alignItems:'center'}}>
         <Image
          style={styles.imgPerfil}
          source={{
              uri: "https://github.com/GustavoKozlowski.png",
            }}
            />
            <Text>gustavokozlowski</Text>
      </View> 
      <View style= {{ backgroundColor: "tomato", height:200, width:150}}>

            <TouchableOpacity>
                <Image source={opcao}/>
                
                </TouchableOpacity> 


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
          <View style={{flexDirection: "row", alignSelf:"flex-start", padding:5, alignItems:'center'}}>
            <Text> 
          <Ionicons name="ios-heart-outline" size={24} color="black" />
            </Text>

          </View>  
            {/* Footer */}
    </View>
  );
}