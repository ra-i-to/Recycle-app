export default function createReturnMessage(message) {
  let returnMessage = "";

  switch (true) {
    // //言い方が固定の場合　（例）テレビ
    // case /テレビ/.test(message):
    //   returnMessage = "テレビの捨て方の説明";
    //   break;

    // //複数の言い方のあるゴミの名前の場合　（例）ビン、瓶
    // case /ビン/.test(message):
    // case /瓶/.test(message):
    //   returnMessage = "瓶の捨て方の説明";
    //   break;

    // case /レンジ/.test(message):
    //   returnMessage =
    //     "レンジの分別方法\n分別：粗大ゴミ\n持ち込み：無料\n戸別収集手数料\n　・電子レンジ：500円\n　・ガスレンジ：200円";
    //   break;

    // case /カン/.test(message):
    // case /缶/.test(message):
    //   returnMessage =
    //     "空き缶の分別方法\n\n【食油缶（18ℓ缶未満）】\n分別：不燃ごみ\n出し方：\n中身がない状態にして出す　※資源にはならない\n\n【缶詰（ペットフード含む）】\n分別：資源化物\n出し方：\nきれいに洗って出してください。フタも資源化物\n\n【飲料水】\n分別：資源化物\n\n【スプレー缶】\n分別：資源化物\n出し方：\n穴をあけて中身が無い状態でだす\n\n【塗料】\n分別：不燃ゴミ\n出し方\n18ℓ缶未満　中身がない状態にしてだす";
    //   break;

    // case /ゴミの名前/.test(message):
    //   returnMessage = "〇〇の分別方法の説明";
    //   break;
    // default:
    //   returnMessage = "何もマッチしなかった場合のメッセージ";
    //   break;

    //あ行のゴミ
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

    //複数の言い方のあるゴミの名前の場合　（例）ビン、瓶
    case /缶/.test(message):
    case /カン/.test(message):
      returnMessage =
        "缶の分別方法\n\n【食油缶（18ℓ缶未満）】\n分別：不燃ごみ\n出し方：\n中身がない状態にして出す　※資源にはならない\n\n【缶詰（ペットフード含む）】\n分別：資源化物\n出し方：\nきれいに洗って出してください。フタも資源化物\n\n【飲料水】\n分別：資源化物\n\n【スプレー缶】\n分別：資源化物\n出し方：\n穴をあけて中身が無い状態でだす\n\n【塗料】\n分別：不燃ゴミ\n出し方\n18ℓ缶未満　中身がない状態にしてだす";
      break;

    case /瓶/.test(message):
    case /ビン/.test(message):
      returnMessage =
        "空き瓶の分別方法\n\n【食油】\n分別：不燃ごみ\n出し方：\n中身がない状態にして出す　※資源にはならない\n\n【化粧品】\n分別：資源化物\n出し方：\n乳白色のものは不燃\n\n【食料品】\n分別：資源化物\n出し方：\nウイスキーの瓶、梅酒の瓶、インスタントコーヒーの瓶なども該当します。日本酒などの瓶はできるだけ買ったお店に返してください\n\n【劇薬】\n分別：不燃ごみ\n出し方\n中身が無い状態にして出す ※資源にはならない";
      break;

    case /油/.test(message):
      returnMessage =
        "油の分別方法\n\n【機械用】\n分別：出せないごみ\n出し方：\n販売店に相談\n\n【食用(使用済)】\n分別：資源化物\n出し方：\nこして冷ました後、ペットボトルに入れキャップをしっかり締め、てんぷら油回収容器に立てて入れる\n\n【食用(未使用・未開封・賞味期限切れ等)】\n分別：資源化物\n出し方：\n缶やポリ容器の油は、開封せずそのまま出してください\n\n【食用(凝固剤で固めたもの)】\n分別：可燃ごみ";
      break;

    default:
      returnMessage = "何もマッチしなかった場合のメッセージ";
      break;
  }
  return returnMessage;
}
