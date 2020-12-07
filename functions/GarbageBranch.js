export default function createReturnMessage(message) {
  let returnMessage = "";

  switch (true) {
    case /IHクッキングヒーター/.test(message):
    case /ガスコンロ/.test(message):
      returnMessage =
        "IHクッキングヒーターの分別方法\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n・500円\n\n【ガスコンロ】\n分別：不燃ごみ";
      break;

    case /アイロン/.test(message):
      returnMessage =
        "アイロンの分別方法\n分別：小型家電\n出し方\n協力店舗・市有施設等に持ち込んでください\n\n【プラスチック製】\n分別：可燃ごみ\n\n【金属部品が多い】\n分別不燃ごみ\n\n【アイロン台】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n・200円\n\n【アイロンケース(プラスチック制)】\n分別：可燃ごみ\n\nアイロンケース(金属部品が多い場合)\n分別：不燃ごみ";
      break;

    case /雨具/.test(message):
    case /カッパ/.test(message):
      returnMessage = "雨具（カッパ）の分別方法\n分別：可燃ごみ";
      break;

    case /編物機/.test(message):
      returnMessage =
        "編物機の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n・500円";
      break;

    default:
      returnMessage = "何もマッチしなかった場合のメッセージ";
      break;
  }
  return returnMessage;
}
