import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Settings from "./page/Settings";
import Chat from "./page/Chat";
import Photography from "./page/Photography";
import Judgment from "./page/Judgment";
import History from "./page/History";
import AreaSetting from "./page/AreaSetting";
import PrivacyPolicy from "./page/PrivacyPolicy";
import Technology from "./page/Technology";
import Help from "./page/Help";
import SortingMethod from "./page/SortingMethod";
import OversizedGarbage from "./page/OversizedGarbage";
import UnburnableGarbage from "./page/UnburnableGarbage";
import BurnableGarbage from "./page/BurnableGarbage";
import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";

const MainStack = createStackNavigator({
  チャット: Chat,
  撮影: Photography,
  判定: Judgment,
  設定: Settings,
  履歴: History,
  地域設定: AreaSetting,
  プライバシーポリシー: PrivacyPolicy,
  使用技術: Technology,
  ヘルプ: Help,
  ゴミの出し方: SortingMethod,
  粗大ごみ: OversizedGarbage,
  可燃ごみ: BurnableGarbage,
  不燃ごみ: UnburnableGarbage
});

const storage = new Storage({
  storageBackend: AsyncStorage,
});

const AppContainer = createAppContainer(MainStack);

export default class App extends Component {
  render() {
    return <AppContainer screenProps={storage} />;
  }
}