import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
} 
from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-elements";

function History(props) {
  const storage = props.screenProps;

  const [historyData, setHistoryData] = useState([]);
  let tmp = [];
  let flg = true;
  useEffect(() => {
    if (flg) {
      storage
        .load({ key: "messages" })
        .then((res) => {
          const messages = res;
          let i, j, a, q, date;
          j = 0;
          for(i = 0; i < messages.length; i++) {
            if(i % 2 == 0) {
              q = messages[i].text;
              //日付データの加工
              date = messages[i].createAt;
              date = date.split('T')[0];
              date = date.split('-');
              date = date[0]+"年"+date[1]+"月"+date[2]+"日";
            }else {
              a = messages[i].text;
              if(a=="メッセージが正しくありません。\nもう一度入力してください"){
                continue;
              }
              tmp[j] = {
                id: j,
                q: q,
                a: a,
                date: date,
              };
            }
            if(i % 2 != 0) {
              j++;
            }
          }
          setHistoryData(tmp);
        })
        .catch((err) => console.warn(err));
      flg = false;
    }
  },[])
  
  
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
        {historyData.reverse().map((data) => (
          <View style={styles.card}>
          <Text style={styles.cardTitle}>{data.q}</Text>
          <Text style={styles.dateText}>{data.date}</Text>
          <Divider style={styles.divider} />
          <Text style={styles.p}>
          {data.a}
          </Text>
        </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

export default History;