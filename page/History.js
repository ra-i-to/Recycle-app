import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-elements";

function History() {
  const { width } = Dimensions.get("window");
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      height: "auto",
      backgroundColor: "#f5f6f7",
      width: width - 40,
      margin: 20,
      marginTop: 0,
      padding: 20,
      borderRadius: 20,
    },
    p: {
      marginBottom: 12,
      color: "rgb(104, 104, 104)",
    },
    divider: {
      backgroundColor: "rgba(72, 144, 169, 0.5)",
      marginBottom: 12,
      marginTop: 12,
    },
    cardTitle: {
      fontSize: 18,
      color: "rgb(60, 60, 60)",
    },
    dateText: {
      fontSize: 11,
      color: "rgb(110, 110, 110)",
      textAlign: "right",
      margin: 0,
      padding: 0,
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
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>瓶の捨て方教えて</Text>
          <Text style={styles.dateText}>2020年11月10日　9:24</Text>
          <Divider style={styles.divider} />
          <Text style={styles.p}>
            黄コンテナは、入れることができるびんの色により、「無色」「茶色」「青・黒・緑等」の3種類に分かれています
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default History;
