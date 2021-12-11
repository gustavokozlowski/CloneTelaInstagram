import React from "react";
import { Text, View, Image } from "react-native";
import {SimpleLineIcons,Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import { styles } from "./styles";
import Battery from "../Battery";
import Barra from "../Barra";

export default function Layout() {

    return (
        <View>
        <View style={styles.layout}>
            <View style={styles.firts}>
            <Ionicons name="airplane" size={10} color="black" />
            <Text style= {{fontSize:10, fontWeight:"400", marginLeft:165}}>09:28</Text>
            <Battery/>
            </View>
        </View>
        <View style={{flexDirection:"row"}}>
            <Barra/>
        </View>
        </View>
    );
}
