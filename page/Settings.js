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

function Settings(props) {
  const { width, height, scale } = Dimensions.get("window");
  const styles = StyleSheet.create({
    button: {
      margin: 20,
      borderRadius: 12,
      backgroundColor: "rgba(255,255,255,0.7)",
    },
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
      <Button
        type="clear"
        icon={{ name: "settings", color: "rgb(110,110,110)" }}
        title="地域設定"
        style={styles.button}
        titleStyle={{ color: "rgb(110,110,110)", fontWeight: "bold" }}
        onPress={() => {
          props.navigation.navigate("地域設定");
        }}
      />
      <Button
        type="clear"
        icon={{ name: "help", color: "rgb(110,110,110)" }}
        title="ヘルプ"
        style={styles.button}
        titleStyle={{ color: "rgb(110,110,110)", fontWeight: "bold" }}
        onPress={() => {
          props.navigation.navigate("ヘルプ");
        }}
      />
      <Button
        type="clear"
        icon={{ name: "lock", color: "rgb(110,110,110)" }}
        title="プライバシーポリシー"
        style={styles.button}
        titleStyle={{ color: "rgb(110,110,110)", fontWeight: "bold" }}
        onPress={() => {
          props.navigation.navigate("プライバシーポリシー");
        }}
      />
      <Button
        type="clear"
        icon={{ name: "laptop", color: "rgb(110,110,110)" }}
        title="使用技術"
        style={styles.button}
        titleStyle={{ color: "rgb(110,110,110)", fontWeight: "bold" }}
        onPress={() => {
          props.navigation.navigate("使用技術");
        }}
      />
      <Button
        type="clear"
        icon={{ name: "laptop", color: "rgb(110,110,110)" }}
        title="ゴミの出し方"
        style={styles.button}
        titleStyle={{ color: "rgb(110,110,110)", fontWeight: "bold" }}
        onPress={() => {
          props.navigation.navigate("ゴミの出し方");
        }}
      />
    </LinearGradient>
  );
}

export default Settings;
