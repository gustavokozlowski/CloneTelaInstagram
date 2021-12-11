import React from "react";
import { styles } from "./styles";
import { View,Image} from "react-native";


export default function Tabz() {
    return (
    <View style={{flex: 1,justifyContent:"center", }}>
        <Image style={styles.tabz} source= {require('../assets/tabs.png')}/>
    </View>
    );
  }