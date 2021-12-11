import AppLoading from 'expo-app-loading';
import { StyleSheet} from "react-native";
import {
    OpenSans_300Light,
    OpenSans_800ExtraBold,
  } from '@expo-google-fonts/open-sans';

export const styles = StyleSheet.create({
    barra:{
        width:'100%',
        height:40,
        flexDirection: "row",
        backgroundColor:"#fff",
        alignSelf: "flex-start",
        padding: 2,
        alignItems: "center",
        borderBottomWidth:1,
        borderColor:"#E8E8E8",
        borderStyle: ""
    },

    barra2:{
        marginLeft:'35%',
        alignItems:"center",
    },

    pub:{
        flexDirection: "column",
        alignSelf:"center",
        marginBottom:10,
        fontFamily:OpenSans_800ExtraBold,
        fontWeight:'bold',
        fontSize: 16,
        color:"#262626",
        marginBottom: 15

    },
    user:{
        fontFamily:OpenSans_300Light,
        fontSize:10,
        color:"#616161",
        marginTop:12
    }

})