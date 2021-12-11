import React from "react";
import { Text, View, Image } from "react-native";
import {SimpleLineIcons,Ionicons, MaterialCommunityIcons,Feather } from "@expo/vector-icons";
import { styles } from "./styles";

export default function Battery() {

    return (
        <View style={styles.firts}>
            <MaterialCommunityIcons name="clock-time-seven" size={10} color="black" style={{marginTop:2}} />
            <Text style={styles.text}>20%</Text>
            <Ionicons name="ios-battery-dead" size={15} color="black" style={{marginBottom:50}} />
        </View>
    );
}