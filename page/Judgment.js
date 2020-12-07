import { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";

export default function Judgment() {
  const [isTfReady, setIsTfReady] = useState(false);

  useEffect(() => {
    (async () => {
      await tf.ready();
      // Signal to the app that tensorflow.js can now be used.
      setIsTfReady(true);
    })();
  }, []);

  return {};
}
