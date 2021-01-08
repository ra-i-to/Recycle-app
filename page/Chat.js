import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import createReturnMessage from "../functions/GarbageBranch";

function Chat(props) {
  const storage = props.screenProps;

  const { width, height } = Dimensions.get("window");

  const [inputMessage, setInputMessage] = useState("");

  const [sendMessageAreaStyle, setSendMessageAreaStyle] = useState({
    width: "100%",
    height: 100,
    paddingBottom: 60,
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 98,
    marginTop: height - 165,
  });

  const [displayMessagesAreaStyle, setDisplayMessagesAreaStyle] = useState({
    position: "absolute",
    top: 60,
    bottom: 100,
    width: "100%",
    right: 0,
    left: 0,
    height: height - 224,
    backgroundColor: "rgba(0,0,0,0)",
    overflow: "scroll",
    zIndex: 300,
  });

  const [messages, setMessages] = useState([]);
  let flg = true;
  if (flg) {
    storage
      .load({ key: "messages" })
      .then((res) => {
        setMessages(res);
      })
      .catch((err) => console.warn(err));
    flg = false;
  }

  async function sendMessage(text) {
    if (text == "") {
      return 0;
    }
    await storage.save({
      key: "messages",
      data: messages.concat({
        id: messages.length,
        text: text,
        createAt: new Date(),
        from: 0,
      }),
    }),
      setInputMessage("");
    storage
      .load({ key: "messages" })
      .then((res) => {
        setMessages(res);
      })
      .catch((err) => console.warn(err));
    // await sleep(1000);
    storage
      .load({ key: "messages" })
      .then((res) => {
        setMessages(res);
        storage.save({
          key: "messages",
          data: res.concat({
            id: res.length,
            text: createReturnMessage(text),
            createAt: new Date(),
            from: 1,
          }),
        });
        storage
          .load({ key: "messages" })
          .then((res) => {
            setMessages(res);
          })
          .catch((err) => console.warn(err));
      })
      .catch((err) => console.warn(err));
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonGroup: {
      flexDirection: "row",
      justifyContent: "space-between",
      position: "absolute",
      top: 0,
      zIndex: 99,
    },
    buttonSpace: {
      margin: 8,
      width: 120,
      borderRadius: 6,
      backgroundColor: "#42a69e",
    },
    chatArea: {
      width: "100%",
      height: "100%",
      backgroundColor: "#cdcdcd",
    },
    displayMessagesArea: {
      position: "absolute",
      top: 60,
      bottom: 100,
      width: "100%",
      right: 0,
      left: 0,
      height: height - 224,
      backgroundColor: "rgba(0,0,0,0)",
      overflow: "scroll",
      zIndex: 300,
    },
    sendMessageAreaSpace: {
      flex: 9,
    },
    sendMessageArea: {
      width: "100%",
      height: 100,
      paddingBottom: 60,
      backgroundColor: "rgba(0,0,0,0)",
      zIndex: 999,
      marginTop: height - 165,
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
      marginRight: 8,
    },
    input: {
      position: "relative",
      top: 0,
      height: 32,
      fontSize: 18,
      color: "gray",
      width: width - 24,
      paddingLeft: 16,
      paddingRight: 80,
      marginLeft: 12,
      marginRight: 12,
      marginTop: 14,
      backgroundColor: "white",
      borderRadius: 16,
    },
    messageArea: {
      width: "auto",
      maxWidth: "70%",
      right: 0,
      height: "auto",
      backgroundColor: "white",
      borderRadius: 18,
      padding: 6,
      paddingRight: 14,
      paddingLeft: 14,
      margin: 12,
      marginBottom: 6,
      marginLeft: "auto",
    },
    returnMessageArea: {
      width: "auto",
      maxWidth: "70%",
      right: 0,
      height: "auto",
      backgroundColor: "rgba(255,255,255,0.4)",
      borderRadius: 18,
      padding: 6,
      paddingRight: 14,
      paddingLeft: 14,
      margin: 12,
      marginBottom: 6,
      marginRight: "auto",
    },
    sendButtonArea: {
      position: "absolute",
      bottom: 54,
      right: 11,
      height: 32,
    },
    sendButton: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
      zIndex: 100,
      width: 80,
      height: 32,
      borderRadius: 15,
    },
    sendButtonText: {
      color: "#555",
      fontWeight: "bold",
      marginRight: 8,
      fontSize: 12,
      // transform: [{ translateY: -5 }],
    },
  });
// //Cloud Vision Test
// //-------------------------------------------------------------------------------------------------
//   async function testFunc() {
//     const image = require('../assets/test.jpg');
//                 const body = JSON.stringify({
//                 requests: [
//                   {
//                     features: [{ type: "TEXT_DETECTION", maxResults: 1 }],
//                     photo: {
//                       content: image
//                     }
//                   }
//                 ]
//               });
//               const response = await fetch(
//                 "https://vision.googleapis.com/v1/images:annotate?key=" +
//                   "---APIKEY---",
//                 {
//                   headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json"
//                   },
//                   method: "POST",
//                   body: body
//                 }
//               );
//               const resJson = await response.json();
//               console.log(resJson);
//               // console.log(resJson.responses[0].textAnnotations[0].description);
//   }

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <Button
          style={styles.buttonSpace}
          type="clear"
          onPress={() => {
            props.navigation.navigate("撮影");
          }}
          icon={<Icon name="camera" size={24} color="white" />}
          iconRight
          title="撮影"
          titleStyle={styles.buttonText}
        />
        <Button
          style={styles.buttonSpace}
          type="clear"
          onPress={() => {
            props.navigation.navigate("履歴");
          }}
          icon={<Icon name="history" size={24} color="white" />}
          iconRight
          title="履歴"
          titleStyle={styles.buttonText}
        />
        <Button
          style={styles.buttonSpace}
          type="clear"
          onPress={() => {
            props.navigation.navigate("設定");
          }}
          icon={<Icon name="cogs" size={24} color="white" />}
          iconRight
          title="設定"
          titleStyle={styles.buttonText}
        />
      </View>
      <View style={styles.chatArea}>
        <LinearGradient
          colors={["#4fc9a8", "#5face7"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 0,
          }}
        >
          <View style={displayMessagesAreaStyle}>
            <Button
              style={{
                width: 120,
                alignItems: "center",
                marginLeft: width - 100,
              }}
              title="Reset"
              type="outline"
              onPress={() => {
                storage.save({
                  key: "messages",
                  data: [],
                });
                storage.load({ key: "messages" }).then((res) => {
                  setMessages(res);
                });
                // testFunc();
              }}
            />
            <ScrollView>
              {messages.map((message) => (
                <View
                  style={
                    message.from == 0
                      ? styles.messageArea
                      : styles.returnMessageArea
                  }
                >
                  <Text>{message.text}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.s}></View>
          <View style={sendMessageAreaStyle}>
            <TextInput
              style={styles.input}
              value={inputMessage}
              onChangeText={(e) => {
                setInputMessage(e);
              }}
              onFocus={() => {
                setSendMessageAreaStyle({
                  width: "100%",
                  height: 100,
                  paddingTop: 80,
                  paddingBottom: 100,
                  backgroundColor: "rgba(0,0,0,0.2)",
                  zIndex: 999,
                  transition: "all 0.3s ease-out",
                });
                setDisplayMessagesAreaStyle({
                  position: "absolute",
                  top: 180,
                  bottom: 100,
                  width: "100%",
                  right: 0,
                  left: 0,
                  height: height - 224,
                  backgroundColor: "rgba(0,0,0,0)",
                  overflow: "scroll",
                  zIndex: 300,
                  transition: "all 0.3s ease-out",
                });
              }}
              onBlur={() => {
                setSendMessageAreaStyle({
                  width: "100%",
                  height: 100,
                  paddingBottom: 60,
                  backgroundColor: "rgba(0,0,0,0.2)",
                  zIndex: 999,
                  marginTop: height - 165,
                  transition: "all 0.3s ease-out",
                });
                setDisplayMessagesAreaStyle({
                  position: "absolute",
                  top: 60,
                  bottom: 100,
                  width: "100%",
                  right: 0,
                  left: 0,
                  height: height - 224,
                  backgroundColor: "rgba(0,0,0,0)",
                  overflow: "scroll",
                  zIndex: 300,
                  transition: "all 0.3s ease-out",
                });
              }}
            />

            <View style={styles.sendButtonArea}>
              <Button
                style={styles.sendButton}
                type="clear"
                onPress={() => {
                  sendMessage(inputMessage);
                }}
                icon={
                  <Icon
                    name="paper-plane"
                    size={16}
                    color="#555"
                    // style={[{ transform: [{ translateY: -5 }] }]}
                  />
                }
                iconRight
                title="送信"
                titleStyle={styles.sendButtonText}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

export default Chat;
