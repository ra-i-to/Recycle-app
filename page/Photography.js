import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import base64 from 'react-native-base64'
import createReturnMessage from "../functions/GarbageBranch";
import chat from "./Chat";

export default function Photography(props) {
  const storage = props.screenProps;
  const [image, setImage] = useState(null);
  const [label, setLabel] = useState("");

  const takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
        allowsEditing: false
    });

    console.log(result);

    if (!result.cancelled) {
        setImage(result.uri);
    }
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="写真を撮影" onPress={takeImage} />
      <Button title="カメラロールから写真を選択" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="写真を決定" 
        onPress={
          async() => {
            const imageData = await require(image);
            const body = JSON.stringify({
              requests: [
                {
                  features: [{ type: "LABEL_DETECTION", maxResults: 1 }],
                  image: {
                    content: imageData
                  }
                }
              ]
            });
            const response = await fetch(
              "https://vision.googleapis.com/v1/images:annotate?key=" +
                "---------- API KEY ----------",
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                method: "POST",
                body: body
              }
            );

            const resJson = await response.json();
            setLabel(Object.entries(resJson)[0][1][0].labelAnnotations[0].description);
            console.log(resJson);
            storage
              .load({ key: "messages" })
              .then((res) => {
                storage.save({
                  key: "messages",
                  data: res.concat({
                    id: res.length,
                    text: label,
                    createAt: new Date(),
                    from: 0,
                  }).concat({
                    id: res.length+1,
                    text: createReturnMessage(label),
                    createAt: new Date(),
                    from: 1,
                  }),
                });
              });
              storage
                .load({ key: "messages" })
                .then((res) => {
                  chat.setMessages(res);
                })
              props.navigation.navigate("チャット");
          }
        } 
      />
    </View>
  );
}