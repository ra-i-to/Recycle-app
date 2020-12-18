import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-elements";
import { Button } from "react-native-elements";

function BurnableGarbage() {
  const { width, height, scale } = Dimensions.get("window");
  const styles = StyleSheet.create({
    whiteBack: {
      width: "90%",
      height: "auto",
      marginTop: 20,
      marginLeft: "5%",
      marginRight: "5%",
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
        color:"#666",
        fontWeight:"bold",
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
    <ScrollView>
      <View style={styles.whiteBack}>
      <Text style={styles.headerText1}>主なもの</Text>
      <Text style={styles.normalText}>生ごみ、プラスチック製品、汚れのひどい古布・古紙、発泡スチロール、生理用品、剪定枝、雑草など</Text>
      <View style={styles.spaceLine}></View>
      <Text style={styles.headerText2}>出し方</Text>
      <Text style={styles.normalText}>●可燃ごみ収集日の朝８時までに決められたごみステーション出してください。（一部地域は朝７時３０分まで）ごみステーションの場所は、ご近所または管理人に確認してください。</Text>
      <Text style={styles.normalText}>●岡山市有料指定袋に入れて出してください。</Text>
      <Text style={styles.normalText}>●可燃ごみの大きさの目安は、１８ℓ間よりも小さいものです。（４５リットルの）有料指定袋に入るものが、可燃ごみになるとは限りません。</Text>
      <Text style={styles.normalText}>●ふとん・カーペットは有料指定袋に入っても出せません。粗大ごみです。</Text>
      <Text style={styles.normalText}>※剪定枝、枯れ葉・落ち葉。雑草などは無料で収集します。</Text>
      <Text style={styles.normalText}>●枝は、長さ６０cm以下、直径１２cm以下に切って片手で持てる程度の重さで束ねてください。</Text>
      <Text style={styles.normalText}>●枯れ葉・落ち葉、庭に生えた雑草は土を取って、透明もしくは半透明の袋に入れて出してください。</Text>
     </View>
     </ScrollView>
    </LinearGradient>
  );
}

export default BurnableGarbage;
