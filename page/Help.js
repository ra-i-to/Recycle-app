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

function Help() {
  const { width, height, scale } = Dimensions.get("window");
  const styles = StyleSheet.create({
    whiteBack: {
      width: "90%",
      height: "auto",
      marginTop: 20,
      marginLeft: "5%",
      marginright: "5%",
      marginBottom: 40,
      backgroundColor: "white",
      padding: 20,
      paddingTop: 24,
      borderRadius: 12,
    },
    headerText: {
      fontSize: 18,
      marginBottom: 12,
      padding: 4,
    },
    normalText: {
      padding: 8,
    },
    spaceLine: {
      width: "100%",
      height: 1,
      backgroundColor: "gray",
      marginTop: 20,
      marginBottom: 32,
    }
  });
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
    >
    <View style={styles.whiteBack}>
      <Text style={styles.headerText}>アプリの使い方</Text>
      <Text style={styles.normalText}>test test test test test</Text>
      <View style={styles.spaceLine}></View>
      <Text style={styles.headerText}>アプリの使い方</Text>
      <Text style={styles.normalText}>test test test test test</Text>
    </View>
    </LinearGradient>
  );
}

export default Help;
