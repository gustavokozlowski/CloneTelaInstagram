import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import InstaCard from "./src/components/Card";
import Layout from "./src/components/Header";
import Tabz from "./Tabz";


export default function App() {
  return (
    <>
      <Layout />
      <InstaCard />
      <Tabz/>
    </>

  );
}
