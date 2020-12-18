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

function SortingMethod(props) {
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
        title="可燃ごみ"
        style={styles.button}
        titleStyle={{ color: "rgb(110,110,110)", fontWeight: "bold" }}
        onPress={() => {
          props.navigation.navigate("地域設定");
        }}
      />
      <Button
        type="clear"
        icon={{ name: "help", color: "rgb(110,110,110)" }}
        title="不燃ごみ"
        style={styles.button}
        titleStyle={{ color: "rgb(110,110,110)", fontWeight: "bold" }}
        onPress={() => {
          props.navigation.navigate("ヘルプ");
        }}
      />
      <Button
        type="clear"
        icon={{ name: "lock", color: "rgb(110,110,110)" }}
        title="粗大ごみ"
        style={styles.button}
        titleStyle={{ color: "rgb(110,110,110)", fontWeight: "bold" }}
        onPress={() => {
          props.navigation.navigate("粗大ごみ");
        }}
      />
    </LinearGradient>
  );
}

export default SortingMethod;