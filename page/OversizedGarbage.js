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

function OversizedGarbage() {
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
      <Text style={styles.normalText}>１８リットル缶以上のもの</Text>
      <View style={styles.spaceLine}></View>
      <Text style={styles.headerText2}>出し方</Text>
      <Text style={styles.normalText}>
        ご自身で市有施設へ持込む、市の戸別収集がありますが。どちらも必ず事前の予約が必要です。{"\n"}
    　</Text>
      <Text style={styles.normalText}>
        事前に粗大ごみ受付センター（０８０－２２７－５３００）にて予約を行ってください。
        受付時間　９：００～１６：００（月～金曜日、年末年始を除く祝日を含みます。）{"\n"}
    　</Text>
    　<Text style={styles.normalText}>
        持込みの場合は無料です。{"\n"}
    　</Text>
    　<Text style={styles.normalText}>
        持込み施設：東部リサイクルプラザ・西部リサイクルプラザ{"\n"}
        戸別収集の場合は収集手数料が必要です。
    　</Text>
    　<Text style={styles.normalText}>
        インターネット受付（２４時間受付）
        <Button 
          title="インターネット受付（２４時間受付）"
          type="clear"
          onPress={() => {
            const url = "https://qiita.com/Horie1024/items/3f672e04720bbc043760";
            Linking.canOpenURL(url).then(supported => {
  if (!supported) {
    console.log('無効なURLです: ' + url);
  } else {
    return Linking.openURL(url);
  }
}).catch(err => console.error('URLを開けませんでした。', err));
          }}
        />
    　</Text>
    </View>
    
    </LinearGradient>
  );
}

export default OversizedGarbage;