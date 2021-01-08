import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} 
from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Judgment() {
  const styles = StyleSheet.create({
    loader: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100,
    },
    centerText: {
      position: "absolute",
      width: "100%",
      bottom: 450,
      textAlign: "center",
      color: "white",
      fontSize: 32,
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
      <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />
      <View >
        <Text style={styles.centerText}>判定中</Text>
      </View>
    </LinearGradient>
  )
}
