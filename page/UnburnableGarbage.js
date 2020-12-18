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

function UnburnableGarbage() {
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
    headerText1: {
      fontSize: 24,
      marginBottom: 12,
      padding: 4,
    },
    headerText2: {
        fontSize: 18,
        marginBottom: 12,
        padding: 4,
        color: "#666",
        fontWeight: "bold",
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
      <Text style={styles.headerText1}>主なもの</Text>
      <Text style={styles.normalText}>金属類、ガラス・陶磁器類、汚れた缶、汚れたびん</Text>
      <View style={styles.spaceLine}></View>
      <Text style={styles.headerText2}>出し方</Text>
      <Text style={styles.normalText}>● 不燃ごみ収集日の朝8時までに決められたごみステーションに出してください。(一部地域は朝7時30分まで)ごみステーションの場所は、ご近所又は管理人等に確認してください。</Text>
      <Text style={styles.normalText}>● 岡山市有料指定袋に入れて出してください。</Text>
      <Text style={styles.normalText}>● 不燃ごみの大きさの目安は、18リットル缶より小さいものです。(45リットルの有料指定袋に入るものが、不燃ごみになるとは限りません。)</Text>
    </View>
    </LinearGradient>
  );
}

export default UnburnableGarbage;