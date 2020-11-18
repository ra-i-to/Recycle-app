import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-elements";
import { Button } from "react-native-elements";

function Technology() {
  const { width, height, scale } = Dimensions.get("window");
  const styles = StyleSheet.create({});
  return (
    <LinearGradient
      colors={["#4fc9a8", "#5face7"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        height: "auto",
        width: "100%",
        borderRadius: 0,
        flex: 1,
        paddingTop: 32,
      }}
    ></LinearGradient>
  );
}

export default Technology;
