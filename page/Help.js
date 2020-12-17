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
      <Text style={styles.normalText}>使用方法１{"\n"}撮影ボタンを押すと、写真を撮影し、ごみの判定を行います。</Text>
      <Text style={styles.normalText}>使用方法２{"\n"}履歴ボタンを押すと、過去に調べたごみを確認できます。</Text>
      <Text style={styles.normalText}>使用方法３{"\n"}設定ボタンを押すと、地域設定や技術情報が見ることができます。</Text>
      <Text style={styles.normalText}>使用方法４{"\n"}画面下の入力フォームに調べたいごみの名称を入力し、送信ボタンを押すとチャット形式でゴミの情報を確認できます。</Text>
    </View>
    </LinearGradient>
  );
}

export default Help;