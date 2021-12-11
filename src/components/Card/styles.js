import { StyleSheet } from "react-native";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from "@expo-google-fonts/open-sans";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  imgPerfil: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  imgFeed: {
    width: "100%",
    height: 350,
    borderWidth: 1,
  },
  icones: {
    marginLeft: 5,
  },

  save: {
    marginLeft: 265,
  },
  locale: {
    fontFamily: OpenSans_400Regular,
    fontSize: 10,
    fontWeight: "bold",
    color: "#262626",
  },
  user: {
    fontFamily: OpenSans_300Light,
    fontSize: 10,
    color: "#616161",
    fontWeight: "bold",
    
  },
});
