import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

export default function Photography(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState();
  const [resText, setResText] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10,marginRight: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 18, position: "absolute", top: 100, zIndex: 100, textAlign: "center", color: "white"}}>
{resText}
          </Text>
          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={async () => {
              if (cameraRef) {
                // photo = await cameraRef.takePictureAsync();
                const options = { quality: 0.5, base64: true, skipProcessing: true, forceUpOrientation: true };
                setPhoto(await cameraRef.takePictureAsync(options));
                const body = JSON.stringify({
                requests: [
                  {
                    features: [{ type: "TEXT_DETECTION", maxResults: 1 }],
                    photo: {
                      content: photo
                    }
                  }
                ]
              });
              const response = await fetch(
                "https://vision.googleapis.com/v1/images:annotate?key=" +
                  "AIzaSyBg9AI4vwNclLvRHq8HVRVgdAd1y5DsktE",
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
              setResText(resJson.responses[0].textAnnotations[0].description);
                //props.navigation.navigate("判定");
              }
            }}
          >
            <View
              style={{
                borderWidth: 2,
                borderRadius: "50%",
                borderColor: "white",
                height: 50,
                width: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: "50%",
                  borderColor: "white",
                  height: 40,
                  width: 40,
                  backgroundColor: "white",
                }}
              ></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
