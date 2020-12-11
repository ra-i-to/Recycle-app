export default function createReturnMessage(message) {
  let returnMessage = "";

  switch (true) {
    //あ行のゴミ
    case /IHクッキングヒーター/.test(message):
    case /ガスコンロ/.test(message):
    case /ヒーター/.test(message):
      returnMessage =
        "IHクッキングヒーターの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:500円\n\n【ガスコンロ】\n分別：不燃ごみ\n\n【オイルヒーター】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円";
      break;

    case /アイロン/.test(message):
      returnMessage =
        "アイロンの分別方法\n\n分別：小型家電\n出し方\n協力店舗・市有施設等に持ち込んでください\n\n【プラスチック製】\n分別：可燃ごみ\n\n【金属部品が多い】\n分別不燃ごみ\n\n【アイロン台】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n：200円\n\n【アイロンケース(プラスチック制)】\n分別：可燃ごみ\n\nアイロンケース(金属部品が多い場合)\n分別：不燃ごみ";
      break;

    case /雨具/.test(message):
    case /カッパ/.test(message):
      returnMessage = "雨具（カッパ）の分別方法\n\n分別：可燃ごみ";
      break;

    case /編物機/.test(message):
      returnMessage =
        "編物機の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:500円";
      break;

    case /アルバム/.test(message):
      returnMessage = "アルバムの分別方法\n\n分別：可燃ごみ";
      break;

    case /網戸/.test(message):
      returnMessage =
        "網戸の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円\n\n【網戸の枠】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円\n\n【網戸の網（ナイロン製）】\n分別：可燃ごみ";
      break;

    case /缶/.test(message):
    case /カン/.test(message):
      returnMessage =
        "缶の分別方法\n\n【食油缶（18ℓ缶未満）】\n分別：不燃ごみ\n出し方\n中身がない状態にして出す　※資源にはならない\n\n【缶詰（ペットフード含む）】\n分別：資源化物\n出し方：\nきれいに洗って出してください。フタも資源化物\n\n【飲料水】\n分別：資源化物\n\n【スプレー缶】\n分別：資源化物\n出し方：\n穴をあけて中身が無い状態でだす\n\n【塗料】\n分別：不燃ゴミ\n出し方\n18ℓ缶未満　中身がない状態にしてだす\n\n【オイル缶（18ℓ缶未満）】\n分別：不燃ごみ\n出し方\n中身がない状態にして出す";
      break;

    case /瓶/.test(message):
    case /ビン/.test(message):
      returnMessage =
        "空き瓶の分別方法\n\n【食油】\n分別：不燃ごみ\n出し方\n中身がない状態にして出す　※資源にはならない\n\n【化粧品】\n分別：資源化物\n出し方：\n乳白色のものは不燃\n\n【食料品】\n分別：資源化物\n出し方：\nウイスキーの瓶、梅酒の瓶、インスタントコーヒーの瓶なども該当します。日本酒などの瓶はできるだけ買ったお店に返してください\n\n【劇薬】\n分別：不燃ごみ\n出し方\n中身が無い状態にして出す ※資源にはならない";
      break;

    case /油/.test(message):
      returnMessage =
        "油の分別方法\n\n【機械用】\n分別：出せないごみ\n出し方\n販売店に相談\n\n【食用(使用済)】\n分別：資源化物\n出し方：\nこして冷ました後、ペットボトルに入れキャップをしっかり締め、てんぷら油回収容器に立てて入れる\n\n【食用(未使用・未開封・賞味期限切れ等)】\n分別：資源化物\n出し方：\n缶やポリ容器の油は、開封せずそのまま出してください\n\n【食用(凝固剤で固めたもの)】\n分別：可燃ごみ";
      break;

    case /アルミ/.test(message):
      returnMessage =
        "アルミの分別方法\n\n【アルミコーティング袋】\n分別：可燃ごみ\n\n【アルミホイル】\n分別：可燃ごみ";
      break;

    case /アンテナ/.test(message):
      returnMessage =
        "アンテナの分別方法\n\n【テレビ用・室内用の小さいもの】\n分別：小型家電\n出し方\n協力店舗・市有施設等に持ち込んでください。(持ち込み施設MAP参照)\n\n【テレビ用・屋外用・BS・CSを含む】\n分別：粗大ごみ\n出し方：\n持ち込み：無料\n  戸別収集手数料\n：500円\n";
      break;

    //い行
    case /イーゼル/.test(message):
      returnMessage =
        "イーゼルの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料 \n 戸別収集手数料\n：粗大ごみ受付センターで金額などを確認してください";
      break;

    case /衣装ケース/.test(message):
    case /衣装箱/.test(message):
      returnMessage =
        "衣装ケースの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料 \n戸別収集手数料\n：200円\n\n【衣装箱】\n分別粗大ごみ\n出し方\n持ち込み：無料 \n戸別収集手数料\n：200円";
      break;

    case /いす/.test(message):
    case /イス/.test(message):
    case /椅子/.test(message):
      returnMessage =
        "椅子の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料 \n戸別収集手数料\n：200円\n\n【応接用いす 1人掛け用】\n分別：粗大ごみ\n出し方\n持ち込み：無料 \n戸別収集手数料\n：500円\n\n【応接用いす 2人掛け用】\n分別：粗大ごみ\n出し方\n持ち込み：無料 \n戸別収集手数料\n：1000円";
      break;

    case /板きれ/.test(message):
      returnMessage =
        "板切れの分別方法\n\n分別：可燃ごみ\n出し方\n持ち込み：無料 \n戸別収集手数料\n：200円";
      break;

    case /一輪車/.test(message):
      returnMessage =
        "一輪車の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料 \n戸別収集手数料\n：200円\n\n【運搬用一輪車（ねこ車）】\n分別：粗大ごみ\n持ち込み：無料\n戸別収集手数料\n：500円";
      break;

    case /鋳物鍋/.test(message):
      returnMessage = "鋳物鍋の分別方法\n\n分別：不燃ごみ";
      break;

    case /イヤリング/.test(message):
      returnMessage = "イヤリングの分別方法\n\n分別：不燃ごみ";
      break;

    case /衣類乾燥機/.test(message):
      returnMessage =
        "衣類乾燥機の分別方法\n\n分別：家電4品目\n出し方\n家庭用のもの 粗大ごみで個別収集の場合は、家電リサイクル料＋個別収集手数料 家電4品目の出し方参照";
      break;

    case /インクカートリッジ/.test(message):
      returnMessage =
        "インクカートリッジの分別方法\n\n分別：可燃ごみ\n出し方\n電気店等でリサイクル有り";
      break;

    case /印判/.test(message):
      returnMessage = "印判（金属製以外）の分別方法\n\n分別：可燃ごみ";
      break;

    case /インスタントカメラ/.test(message):
      returnMessage =
        "インスタントカメラの分別方法\n\n分別：可燃ごみ\n出し方\n使い捨て";
      break;

    //ウ行

    case /ウインドサーフィン/.test(message):
      returnMessage = "ウインドサーフィンの分別方法\n\n分別：粗大ごみ";
      break;

    case /ウインドファン/.test(message):
      returnMessage =
        "ウインドファン（家電4品目以外）の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料 \n戸別収集手数料\n：1000円";
      break;

    case /植木鉢/.test(message):
      returnMessage =
        "植木鉢の分別方法\n\n【陶磁器類】分別：不燃ごみ\n出し方\n18ℓ缶以上は粗大ごみ\n\n【プラスチック製】\n分別：可燃ごみ\n18ℓ缶以上は粗大ごみ";
      break;

    case /ウェットティッシュ/.test(message):
      returnMessage = "ウェットティッシュの分別方法\n\n分別：可燃ごみ";
      break;

    case /浮き輪/.test(message):
      returnMessage = "浮き輪の分別方法\n\n分別：可燃ごみ";
      break;

    case /腕時計/.test(message):
      returnMessage =
        "腕時計の分別方法\n\n【機械式】\n分別：不燃ごみ\n\n【電池式】\n分別：小型家電";
      break;

    case /ウレタン/.test(message):
      returnMessage = "ウレタンの分別方法\n\n分別：可燃ごみ";
      break;

    //え行
    case /エアコン/.test(message):
      returnMessage =
        "エアコンの分別方法\n\n【家庭用】\n分別：家電4品目\n出し方\n（うめこみ式機は販売店へ）粗大ごみで個別収集の場合は、家電リサイクル料＋個別収集手数料 家電4品目の出し方を参照\n\n【室外機のホース 自分で外したもの】\n分別：可燃ごみ\n 出し方\n35cm以下に切ってだす。切れない場合は粗大。";
      break;

    case /エアロバイク/.test(message):
      returnMessage =
        "エアロバイク（健康器具）の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料 \n戸別収集手数料\n：500円";
      break;

    case /絵の具チューブ/.test(message):
      returnMessage =
        "絵の具チューブの分別方法\n\n分別：可燃ごみ\n出し方\n中身を使い切ったもの";
      break;

    case /絵本/.test(message):
      returnMessage = "絵本の分別方法\n\n分別：資源化物\n出し方\n古紙";
      break;

    case /エムディー/.test(message):
    case /MD/.test(message):
      returnMessage = "エムディー（MD）の分別方法\n\n分別：可燃ごみ";
      break;

    case /LD/.test(message):
    case /CD/.test(message):
    case /DVD/.test(message):
      returnMessage = "LD（CD・DVD）の分別方法\n\n分別：可燃ごみみ";
      break;

    case /LPGタンク/.test(message):
      returnMessage =
        "LPGタンクの分別方法\n\n分別：出せないごみ\n出し方\n販売店に相談";
      break;

    case /園芸支柱/.test(message):
      returnMessage = "園芸支柱（長いもの）の分別方法\n\n分別：粗大ごみ";
      break;

    case /エンジンオイル/.test(message):
      returnMessage =
        "エンジンオイルの分別方法\n\n分別：出せないごみ\n出し方\n販売店に相談";
      break;

    case /延長コード/.test(message):
      returnMessage = "延長コード（室内用）の分別方法\n\n分別：小型家電";
      break;

    case /鉛筆削り器/.test(message):
      returnMessage =
        "鉛筆削り器の分別方法\n\n【電動】\n分別：小型家電\n\n【携帯用・簡易・手動】\n分別：可燃ごみ";
      break;

    case /鉛筆ケース/.test(message):
      returnMessage = "鉛筆ケース（スチール製）の分別方法\n\n分別：資源化物";
      break;

    //お行
    case /OA用紙/.test(message):
      returnMessage = "OA用紙の分別方法\n\n分別：資源化物\n出し方\n古紙";
      break;

    case /オートバイ/.test(message):
      returnMessage =
        "オートバイの分別方法\n\n分別：出せないごみ\n出し方\n販売店に相談";
      break;

    case /オーブン/.test(message):
      returnMessage =
        "オーブンの分別方法\n\n【18ℓ缶未満】分別：小型家電\n\n【18ℓ缶以上】\n分別：粗大ごみ\n\n【オーブンレンジ】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円";
      break;

    case /大型バック/.test(message):
      returnMessage =
        "大型バック（スーツケースを含む）の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料 \n戸別収集手数料\n：200円";
      break;

    case /置き時計/.test(message):
      returnMessage =
        "置き時計の分別方法\n\n分別：小型家電\n出し方\n電気式・電池式";
      break;

    case /桶/.test(message):
    case /おけ/.test(message):
      returnMessage =
        "桶の分別方法\n\n【金属製】\n分別：不燃ごみ\n\n【金属以外】\n分別：可燃ごみ";
      break;

    case /おたま/.test(message):
      returnMessage =
        "おたまの分別方法\n\n【金属製】\n分別：不燃ごみ\n\n【プラスチック】\n分別：可燃ごみ";
      break;

    case /落ち葉/.test(message):
      returnMessage =
        "落ち葉の分別方法\n\n分別：可燃ごみ\n出し方\n透明または半透明の袋に入れて出す";
      break;

    case /おまる/.test(message):
    case /お丸/.test(message):
    case /オマル/.test(message):
      returnMessage =
        "おまる（幼児用）の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料 \n戸別収集手数料\n：200円";
      break;

    case /おむつ/.test(message):
    case /オムツ/.test(message):
      returnMessage =
        "おむつの分別方法\n\n【おむつ（布）】\n分別：可燃ごみ\n出し方\n汚物は取り除いて出す\n\n【おむつカバー】\n分別：可燃ごみ";
      break;

    case /おもちゃ/.test(message):
    case /玩具/.test(message):
      returnMessage =
        "おもちゃの分別方法\n\n【金属製】\n分別：小型家電\n出し方\n電気式・電池式 18ℓ缶以上は粗大\n\n【プラスチック】\n分別：可燃ごみ\n出し方\n機械部分があれば不燃 18ℓ缶以上は粗大";
      break;

    case /オルガン/.test(message):
    case /おるがん/.test(message):
      returnMessage =
        "オルガン（電子オルガン）の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n  戸別収集手数料\n：1500円\n なるべく販売店に引き取ってもらう";
      break;

    case /おろしがね/.test(message):
    case /おろし金/.test(message):
    case /おろし器/.test(message):
    case /下ろしがね/.test(message):
    case /下ろし金/.test(message):
      returnMessage =
        "おろしがねの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料 \n戸別収集手数料\n：1000円";
      break;

    case /温度計/.test(message):
      returnMessage =
        "温度計の分別方法\n\n【水銀有】分別：資源化物\n出し方\nナイロン袋に入れて専用コンテナへ出す 廃乾電池、体温計の出し方参照\n\n【温度計 水銀なし】\n分別：不燃ごみ\n出し方\n新聞紙等に「危険」と表示して出す";
      break;

    //か行
    case /カーテン/.test(message):
      returnMessage =
        "カーテンの分別方法\n\n【カーテン】\n分別：資源化物\n出し方：\nああ\n\n【カーテン（レース）】\n分別：資源化物\n出し方：\nあとで\n\n【アコーディオンカーテン（レール込み）】\n分別：粗大ゴミ\n出し方：\nあとで\n\n";
      break;

    case /カーテンレール/.test(message):
    case /カーテンのレール/.test(message):
      returnMessage = "持ち込み：無料  戸別収集手数料：200円（4本まで）";
      break;

    case /カーナビ/.test(message):
      returnMessage = "分別：小型家電";
      break;

    case /カーペット/.test(message):
    case /じゅうたん/.test(message):
    case /絨毯/.test(message):
      returnMessage = "持ち込み：無料  戸別収集手数料：200円";
      break;

    case /懐中電灯/.test(message):
    case /フラッシュライト/.test(message):
      returnMessage = "持ち込み：無料  戸別収集手数料：200円　電池は資源化物";
      break;

    case /カイロ/.test(message):
    case /かいろ/.test(message):
      returnMessage = "分別：不燃ごみ";
      break;

    case /鏡/.test(message):
    case /ミラー/.test(message):
      returnMessage =
        "鏡の分別方法\n\n【鏡（鏡台用）】\n分別：粗大ごみ\n出し方：\n保留\n\n【手鏡】\n分別：不燃ごみ\n出し方：\n保留\n\n【アコーディオンカーテン（レール込み）】\n分別：粗大ゴミ\n出し方：\n保留\n\n";
      break;

    case /鍵/.test(message):
    case /かぎ/.test(message):
    case /カギ/.test(message):
      returnMessage = "分別：不燃ごみ";
      break;

    case /額/.test(message):
    case /がく/.test(message):
    case /額縁/.test(message):
    case /がくぶち/.test(message):
      returnMessage = "分別：粗大ごみ";
      break;

    case /傘立て/.test(message):
    case /かさ立て/.test(message):
    case /傘たて/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円　電池は資源化物";
      break;

    case /傘/.test(message):
    case /かさ/.test(message):
      returnMessage =
        "傘の分別方法\n\n【傘】\n分別：不燃ごみ\n\n【傘（ゴルフ用等の大きいタイプ】\n分別：粗大ごみ\n出し方：\n持ち込み：無料  戸別収集手数料：200円\n\n【折りたたみ傘】\n分別：不燃ごみ";
      break;

    case /加湿器/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円　電池は資源化物";
      break;

    case /ガスストーブ/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円\n\n";
      break;

    case /ガステーブル/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円\n\n";
      break;

    case /ガスボンベ/.test(message):
    case /ボンベ/.test(message):
      returnMessage =
        "分別：資源化物\n使い切って、穴を開ける 空き缶の出し方参照　URL:https://www.city.okayama.jp/kurashi/0000005251.html\n\n";
      break;

    case /ガス湯沸かし器/.test(message):
    case /ガス湯沸し器/.test(message):
    case /ガス湯わかし器/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円\n\n";
      break;

    case /ガスレンジ/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円\n\n";
      break;

    case /カセットテープ/.test(message):
    case /ビデオテープ/.test(message):
      returnMessage = "分別：粗大ごみ";
      break;

    case /カセットデッキ/.test(message):
      returnMessage =
        "カセットデッキの分別方法\n\n【カセットデッキ18ℓ缶未満】\n分別：小型家電\n【カセットデッキ18ℓ缶以上】\n分別：粗大ごみ\n出し方：\n持ち込み：無料  戸別収集手数料：200円\n\n";
      break;

    case /ガソリン缶/.test(message):
      returnMessage = "分別：不燃ごみ\n中身がない状態にして出す\n\n";
      break;

    case /楽器/.test(message):
      returnMessage =
        "楽器類の分別方法\n\n【楽器類18ℓ缶未満】\n分別：不燃ごみ\n電気式・電池式のものは、小型家電\n【楽器類18ℓ缶以上（オルガン・電子オルガン以外）】\n分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円\n\n";
      break;

    case /楽器ケース/.test(message):
    case /楽器入れ/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円\n\n";
      break;

    case /カッターナイフ/.test(message):
    case /カッター/.test(message):
      returnMessage = "分別：不燃ごみ\n新聞紙等に包み、危険と記載\n\n";
      break;

    case /かっぱ/.test(message):
    case /カッパ/.test(message):
    case /雨具/.test(message):
      returnMessage = "分別：不燃ごみ";
      break;

    case /かつら/.test(message):
      returnMessage = "分別：可燃ごみ";
      break;

    case /家庭用ゲーム機/.test(message):
    case /ゲーム機/.test(message):
      returnMessage = "分別：小型家電";
      break;

    case /家庭用ゲームソフト/.test(message):
    case /ゲームソフト/.test(message):
    case /ゲームカセット/.test(message):
      returnMessage = "分別：小型家電\nカセットタイプのもの\n\n";
      break;

    case /かなづち/.test(message):
    case /金槌/.test(message):
      returnMessage = "分別：不燃ごみ\nカセットタイプのもの\n\n";
      break;

    case /かばん/.test(message):
    case /カバン/.test(message):
    case /バッグ/.test(message):
      returnMessage =
        "かばんの分別方法\n\n【かばん（革、布製）】\n分別：資源化物\n使用可能なものは古布（18ℓ缶以上は粗大）\n\n【かばん（ナイロン、皮革）】\n分別：可燃ごみ\n18ℓ缶以上粗大\n\n【キャディーバッグ】\n分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円\n\n【キャリーバッグ（ソフト・ハード）】\n分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円\n\n";
      break;

    case /壁紙/.test(message):
      returnMessage = "分別：可燃ごみ\n建築業者が行った場合は事業系ごみ\n\n";
      break;

    case /花瓶/.test(message):
    case /カビン/.test(message):
      returnMessage = "分別：不燃ごみ";
      break;

    case /鎌/.test(message):
    case /カマ/.test(message):
      returnMessage = "分別：不燃ごみ\n刃物部分は新聞紙等に包んで出す\n\n";
      break;

    case /紙おむつ/.test(message):
    case /紙オムツ/.test(message):
      returnMessage = "分別：可燃ごみ\n汚物は取り除いてください\n\n";
      break;

    case /紙パック/.test(message):
      returnMessage =
        "紙パックの分別方法\n\n【紙パック(500ml以上で内側が白いもの)】\n分別：資源化物\n出し方：\n古紙\n\n【紙パック（500ml未満）】\n分別：資源化物\n\n【紙パック（アルミコーティングしてあるもの）】\n分別：可燃ごみ\n資源化物にならない\n\n";
      break;

    case /カメラ/.test(message):
    case /かめら/.test(message):
      returnMessage =
        "カメラの分別方法\n\n【カメラ（使い捨て以外）】\n分別：小型家電\n\n【カメラ（使い捨て）】\n分別：可燃ごみ\n\n";
      break;

    case /蚊帳/.test(message):
    case /かや/.test(message):
      returnMessage = "分別：可燃ごみ\n60cm以内に切る\n\n";
      break;

    case /カラーボックス/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円\n\n";
      break;

    case /カラオケセット/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：1500円\n\n";
      break;

    case /ガラス/.test(message):
      returnMessage =
        "ガラスの分別方法\n\n【ガラスくず】\n分別：不燃ごみ\n出し方：\n新聞紙等で包み、「危険」と書いてだす\n\n【ガラス食器】\n分別：不燃ごみ\n出し方：\n新聞紙等で包む\n\n【ガラス戸】\n分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：500円\n\n";
      break;

    case /枯れ葉/.test(message):
    case /木葉/.test(message):
    case /木の葉/.test(message):
      returnMessage = "分別：可燃ごみ\n透明または半透明の袋に入れて出す\n\n";
      break;

    case /換気扇/.test(message):
      returnMessage =
        "換気扇の分別方法\n\n【換気扇（35cm以下）】\n分別：小型家電\n\n【換気扇（35cm越え）】\n分別：粗大ごみ\n\n";
      break;

    case /缶切り/.test(message):
    case /カン切り/.test(message):
      returnMessage = "分別：不燃ごみ\n透明または半透明の袋に入れて出す\n\n";
      break;

    case /玩具/.test(message):
    case /おもちゃ/.test(message):
      returnMessage =
        "玩具の分別方法\n\n【玩具（金属）】\n分別：不燃ごみ\n出し方：\n18ℓ缶以上は粗大\n\n【玩具（電気式・電動式のもの）】\n分別：小型家電\n18ℓ缶以上は粗大\n\n【玩具　金属以外】\n分別：可燃ごみ\n18ℓ缶以上は粗大\n\n";
      break;

    case /乾燥剤/.test(message):
      returnMessage = "分別：不燃ごみ\n\n";
      break;

    //き行

    case /キーボード/.test(message):
      returnMessage =
        "キーボードの分別方法\n\n【キーボード（楽器）】\n分別：粗大ごみ\n出し方：\n持ち込み：無料  戸別収集手数料：1000円\n\n【キーボード（パソコン）】\n分別：小型家電\n\n";
      break;

    case /木屑/.test(message):
    case /木くず/.test(message):
    case /おがくず/.test(message):
      returnMessage = "分別：可燃ごみ\n有料袋に入れる\n";
      break;

    case /着物/.test(message):
    case /きもの/.test(message):
      returnMessage = "分別：資源化物\n\n";
      break;

    case /脚立/.test(message):
    case /きゃたつ/.test(message):
      returnMessage =
        "脚立の分別方法\n\n【脚立（150cm以下のもの）】\n分別：粗大ごみ \n持ち込み：無料  戸別収集手数料：200円\n\n【脚立（150cm超）】\n分別：粗大ごみ \n持ち込み：無料  戸別収集手数料：500円\n\n";
      break;

    case /キャップ/.test(message):
      returnMessage =
        "キャップの分別方法\n\n【キャップ（金属）】\n分別：不燃ごみ\n\n【キャップ（プラスチック）】\n分別：可燃ごみ\n\n";
      break;

    case /急須/.test(message):
    case /きゅうす/.test(message):
      returnMessage = "分別：不燃ごみ\n\n";
      break;

    case /給油ポンプ/.test(message):
      returnMessage =
        "給油ポンプの分別方法\n\n【給油ポンプ（電動式）】\n分別：小型家電\n電池は資源化物\n\n【給油ポンプ（手動式）】\n分別：可燃ごみ\n\n";
      break;

    case /鏡台/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：500円\n\n";
      break;

    case /金庫/.test(message):
    case /きんこ/.test(message):
      returnMessage =
        "金庫の分別方法\n\n【金庫（耐火）】\n分別：出せないごみ \n販売店に相談\n\n【金庫（手提げ）】\n分別：不燃ごみ \n\n";
      break;

    //く行
    case /空気入れ/.test(message):
      returnMessage =
        "空気入れの分別方法\n\n【空気入れ（金属）】\n分別：不燃ごみ \n60cm以上なら粗大\n\n【脚立（プラスチック制）】\n分別：可燃ごみ \n\n";
      break;

    case /空気清浄機/.test(message):
      returnMessage = "分別：粗大ごみ\n\n";
      break;

    case /クーラーボックス/.test(message):
      returnMessage =
        "分別：粗大ごみ(18ℓ缶未満は可燃)\n持ち込み：無料  戸別収集手数料：200円\n\n";
      break;

    case /釘/.test(message):
    case /くぎ/.test(message):
      returnMessage = "分別：不燃ごみ\n\n";
      break;

    case /草刈り機/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：500円\n\n";
      break;

    case /薬/.test(message):
      returnMessage = "分別：可燃ごみ\n\n";
      break;

    case /口紅/.test(message):
      returnMessage =
        "口紅の分別方法\n\n【口紅（金属）】\n分別：不燃ごみ　\n\n【口紅（プラスチック）】\n分別：可燃ごみ \n\n";
      break;

    case /靴/.test(message):
    case /くつ/.test(message):
    case /シューズ/.test(message):
      returnMessage =
        "靴類の分別方法\n\n【靴（革・布・ナイロン・合成皮革）】\n分別：可燃ごみ\n【安全靴】\n分別：可燃ごみ \n\n【運動靴】\n分別：可燃ごみ\n\n";
      break;

    case /靴下/.test(message):
    case /くつした/.test(message):
      returnMessage = "分別：資源化物\n古布（ペアのもの）\n\n";
      break;

    case /クッキングヒーター/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：500円\n\n";
      break;

    case /クッション/.test(message):
      returnMessage = "分別：可燃ごみ\n18ℓ缶以上は粗大\n\n";
      break;

    case /車いす/.test(message):
    case /車椅子/.test(message):
      returnMessage = "分別：粗大ごみ\n一般家庭から出るもの\n\n";
      break;

    case /クレパス/.test(message):
      returnMessage = "分別：可燃ごみ\n\n";
      break;

    case /クレヨン/.test(message):
      returnMessage = "分別：可燃ごみ\n\n";
      break;

    case /軍手/.test(message):
    case /ぐんて/.test(message):
    case /手袋/.test(message):
    case /てぶくろ/.test(message):
      returnMessage = "分別：可燃ごみ\n\n";
      break;

    //け行

    case /携帯電話/.test(message):
    case /携帯/.test(message):
      returnMessage = "分別：小型家電\n\n";
      break;

    case /劇薬/.test(message):
      returnMessage = "分別：出せないごみ\n販売店に相談\n\n";
      break;

    case /下駄/.test(message):
      returnMessage = "分別：可燃ごみ\n\n";
      break;

    case /げた箱/.test(message):
    case /下駄箱/.test(message):
    case /げたばこ/.test(message):
      returnMessage =
        "げた箱の分別方法\n\n【げた箱（60cm以下）】\n分別：粗大ごみ \n持ち込み：無料  戸別収集手数料：200円　\n\n【げた箱（60cm超）】\n分別：粗大ごみ \n持ち込み：無料  戸別収集手数料：500円\n\n";
      break;

    case /血圧計/.test(message):
      returnMessage =
        "血圧計の分別方法\n\n【血圧計（電池式）】\n分別：小型家電\n電子・電池式　\n\n【血圧計（水銀含む）】\n分別：資源化物\n水銀入りの体温計に準じて扱う。廃乾電池、体温計の出し方を参照\n\n";
      break;

    case /玄関マット/.test(message):
      returnMessage =
        "玄関マットの分別方法\n\n【玄関マット（60cm）】\n分別：可燃ごみ\n【玄関マット（60cm超180cm以下）】\n分別：粗大ごみ \n持ち込み：無料  戸別収集手数料：200円\n\n【玄関マット外用】\n分別：粗大ごみ\n\n";
      break;

    case /健康器具/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：500円\n\n";
      break;

    case /剣山/.test(message):
      returnMessage = "分別：不燃ごみ\n\n";
      break;

    case /竹刀/.test(message):
    case /木刀/.test(message):
    case /しない/.test(message):
    case /ぼくとう/.test(message):
      returnMessage = "分別：粗大ごみ\n\n";
      break;

    case /剣道/.test(message):
      returnMessage =
        "分別：粗大ごみ\n竹刀・こて・面・胴まで一組。動議は資源（古布）\n\n";
      break;

    case /鍵盤ハーモニカ/.test(message):
    case /鍵盤ハモニカ/.test(message):
    case /けんばんハーモニカ/.test(message):
    case /けんばんハモニカ/.test(message):
      returnMessage = "分別：可燃ごみ\n\n";
      break;

    //こ行

    case /ゴーグル/.test(message):
      returnMessage = "分別：可燃ごみ\n\n";
      break;

    case /コード/.test(message):
      returnMessage =
        "コード・コードリールの分別方法\n\n【コード（延長コード類）】\n分別：小型家電\n【コードリール（ゴム・プラスチック製）】\n分別：不燃ごみ\n\n【コードリール（金属製）】\n分別：不燃ごみ\n18ℓ缶以上は粗大\n\n";
      break;

    case /コーヒーメーカー/.test(message):
      returnMessage = "分別：小型家電\nガラス部分は不燃物。18ℓ以上は粗大\n\n";
      break;

    case /碁石/.test(message):
      returnMessage = "分別：不燃ごみ\n\n";
      break;

    case /ござ/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円（180cm以下）\n\n";
      break;

    case /こたつ/.test(message):
    case /コタツ/.test(message):
      returnMessage =
        "こたつの分別方法\n\n【こたつ（75cm以下）】\n分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円\n\n【こたつ（75cm超）】\n分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：500円\n\n【こたつ板】\n分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円\n\n";
      break;

    case /琴/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円\n\n";
      break;

    case /三輪車/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円（子ども用）\n\n";
      break;

    case /遊具/.test(message):
      returnMessage =
        "遊具の分別方法\n\n【遊具（90cm以下）】\n分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円\n\n【遊具（90cm超）】\n分別：粗大ごみ \n持ち込み：無料  戸別収集手数料：500円\n\n";
      break;

    case /米びつ/.test(message):
      returnMessage =
        "分別：可燃ごみ\n持ち込み：無料  戸別収集手数料：500円\n\n";
      break;

    case /米袋/.test(message):
      returnMessage = "分別：可燃ごみ\n家庭から出るもの\n\n";
      break;

    case /米/.test(message):
      returnMessage = "分別：可燃ごみ\n家庭から出るもの\n\n";
      break;

    case /ゴルフクラブ/.test(message):
      returnMessage =
        "分別：粗大ごみ\n持ち込み：無料  戸別収集手数料：200円（14本まで1セット）\n\n";
      break;

    case /ゴルフボール/.test(message):
    case /ゴルフマット/.test(message):
      returnMessage = "分別：可燃ごみ \n\n";
      break;

    case /コンクリート片/.test(message):
      returnMessage = "分別：出せないごみ \n\n";
      break;

    //さ行のゴミ

    case /サーフボード/.test(message):
      returnMessage =
        "サーフボードの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円";
      break;

    case /サイクリングマシーン/.test(message):
    case /サイクリングマシン/.test(message):
      returnMessage =
        "サイクリングマシーン(健康器具)の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円";
      break;

    case /座いす/.test(message):
      returnMessage =
        "座いすの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /サイドボード/.test(message):
      returnMessage =
        "サイドボードの分別方法\n\n【サイドボード120cm以下】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：1000円\n\n【サイドボード120cm超】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：1500円";
      break;

    case /酒用の紙パック/.test(message):
      returnMessage = "酒用の紙パックの分別方法\n\n分別：可燃ごみ";
      break;

    case /酒びん(日本酒)/.test(message):
      returnMessage =
        "酒びん（日本酒）の分別方法\n\n分別：資源化物\n出し方\n販売店に返す 資源化物ステーションにも出せます";
      break;

    case /座敷ぼうき/.test(message):
      returnMessage =
        "座敷ぼうきの分別方法\n\n分別：可燃ごみ\n出し方\n60cm超は粗大";
      break;

    case /座卓/.test(message):
    case /座敷机/.test(message):
      returnMessage =
        "座卓(座敷机)の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円";
      break;

    case /サッシ枠/.test(message):
      returnMessage =
        "サッシ枠の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円";
      break;

    case /雑誌/.test(message):
      returnMessage = "雑誌の分別方法\n\n分別：資源化物\n出し方\n古紙";
      break;

    case /殺虫スプレー/.test(message):
      returnMessage =
        "殺虫間スプレーの空き缶の分別方法\n\n分別：資源化物\n出し方\n空き缶の出し方参照";
      break;

    case /さびた缶/.test(message):
      returnMessage = "さびた缶の分別方法\n\n分別：不燃ごみ";
      break;

    case /座布団/.test(message):
      returnMessage =
        "座布団の分別方法\n\n【座布団60cm以下】\n分別：可燃ごみ\n\n【座布団60cm超(5枚まで1組)】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n:200円";
      break;

    case /サマーベッド/.test(message):
    case /ボンボンベッド/.test(message):
      returnMessage =
        "サマーベッド(ボンボンベッド)の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円";
      break;

    case /サングラス/.test(message):
      returnMessage =
        "サングラスの分別方法\n\n分別：不燃ごみ\n出し方\nプラスチック製は可燃";
      break;

    case /参考書/.test(message):
      returnMessage = "参考書の分別方法\n\n分別：資源化物\n出し方\n古紙";
      break;

    case /サンダル/.test(message):
      returnMessage = "サンダルの分別方法\n\n分別：可燃ごみ";
      break;

    case /三段ボックス(カラーボックス)/.test(message):
      returnMessage =
        "三段ボックス(カラーボックス)の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /三輪車/.test(message):
      returnMessage =
        "三輪車(子供用)の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    //し行のゴミ

    case /シーツ(掛布・敷布)/.test(message):
    case /掛布/.test(message):
    case /敷布/.test(message):
      returnMessage =
        "シーツ(掛布・敷布)の分別方法\n\n分別：資源化物\n出し方\n古布";
      break;

    case /CD/.test(message):
      returnMessage = "CDの分別方法\n\n分別：可燃ごみ\n出し方\nLD・DVDも含む";
      break;

    case /CDラジカセ/.test(message):
      returnMessage =
        "CDラジカセの分別方法\n\n分別：小型家電\n出し方\n18ℓ缶以上は粗大 200円";
      break;

    case /CDプレイヤー/.test(message):
      returnMessage =
        "CDプレイヤーの分別方法\n\n分別：小型家電\n出し方\n18ℓ缶以上は粗大 200円";
      break;

    case /ジーンズ/.test(message):
      returnMessage = "ジーンズの分別方法\n\n分別：資源化物\n出し方\n古布";
      break;

    case /ジェルパッド/.test(message):
      returnMessage = "ジェルパッド(敷マット)の分別方法\n\n分別：粗大ごみ";
      break;

    case /磁石/.test(message):
      returnMessage = "磁石の分別方法\n\n分別：不燃ごみ";
      break;

    case /辞書・辞典/.test(message):
      returnMessage = "辞書・辞典の分別方法\n\n分別：資源化物\n出し方\n古紙";
      break;

    case /下着類/.test(message):
      returnMessage =
        "下着類の分別方法\n\n分別：資源化物\n出し方\n古布の出し方参照";
      break;

    case /室内用滑り台/.test(message):
      returnMessage =
        "室内用滑り台の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /室内用洗濯物干し/.test(message):
      returnMessage =
        "室内用洗濯物干しの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /自転車/.test(message):
      returnMessage =
        "自転車の分別方法\n\n【自転車(16インチ以下)】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円\n\n【自転車16インチ超】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円";
      break;

    case /自転車のタイヤ/.test(message):
    case /自転車のチューブ/.test(message):
      returnMessage =
        "自転車のタイヤ・チューブの分別方法\n\n分別：可燃ごみ\n出し方\n60cm以下に切ってだす。リムが付いたら粗大";
      break;

    case /芝/.test(message):
    case /芝生/.test(message):
      returnMessage =
        "芝・芝生の分別方法\n\n分別：可燃ごみ\n出し方\n有料袋に入れる";
      break;

    case /芝刈り機/.test(message):
      returnMessage =
        "芝刈り機の分別方法\n\n【芝刈り機 エンジン】\n分別：出せないゴミ\n出し方\nメーカー、販売店に相談\n\n【芝刈り機 手押し】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円\n\n【芝刈り機 電動】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円";
      break;

    case /シャープペンシル/.test(message):
      returnMessage =
        "シャープペンシルの分別方法\n\n【シャープペンシル 金属製】\n分別：不燃ごみ\n\n【シャープペンシル	プラスチック製】\n分別：可燃ごみ";
      break;

    case /ジャッキ/.test(message):
      returnMessage =
        "ジャッキの分別方法\n\n分別：出せないゴミ\n出し方\n販売店に相談";
      break;

    case /写真・フィルム(ネガ)/.test(message):
      returnMessage = "写真・フィルム(ネガ)の分別方法\n\n分別：可燃ごみ";
      break;

    case /ジューサー(ミキサー)/.test(message):
    case /ミキサー/.test(message):
      returnMessage =
        "ジューサー(ミキサー)の分別方法\n\n分別：小型家電\n出し方\nガラス部分は不燃物、18ℓ缶以上は粗大";
      break;

    case /じゅうたん(カーペット)/.test(message):
    case /カーペット/.test(message):
      returnMessage =
        "じゅうたん(カーペット)の分別方法\n\n【じゅうたん(カーペット) 60cm以下】\n分別：可燃ごみ\n\n【じゅうたん(カーペット)60cm超180cm以下】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /柔道着/.test(message):
      returnMessage = "柔道着の分別方法\n\n分別：資源化物\n出し方\n古布";
      break;

    case /ジュニアシート/.test(message):
      returnMessage =
        "ジュニアシートの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /瞬間湯沸かし器/.test(message):
      returnMessage =
        "瞬間湯沸かし器の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /消火器/.test(message):
      returnMessage =
        "消火器の分別方法\n\n分別：出せないゴミ\n出し方\n販売店・消火器リサイクル促進センター(03-5829-6773 平日9:00～17:00)に相談";
      break;

    case /障子戸/.test(message):
      returnMessage =
        "障子戸(網戸を含む)の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /消臭スプレー空き缶/.test(message):
      returnMessage =
        "消臭スプレー空き缶の分別方法\n\n分別：資源化物\n出し方\n空き缶の出し方参照";
      break;

    case /照明器具/.test(message):
      returnMessage =
        "照明器具の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /醤油のペットボトル/.test(message):
      returnMessage = "醤油のペットボトルの分別方法\n\n分別：資源化物";
      break;

    case /除湿器/.test(message):
      returnMessage =
        "除湿器の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /除湿剤/.test(message):
      returnMessage =
        "除湿剤の分別方法\n\n分別：可燃ごみ\n\n除草剤(スプレー缶)の分別方法\n\n分別：資源化物\n出し方\n使い切って、穴をあけて出す 空き缶の出し方参照";
      break;

    case /食器洗い乾燥機/.test(message):
      returnMessage =
        "食器洗い乾燥機の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円";
      break;

    case /食器乾燥機/.test(message):
      returnMessage =
        "食器乾燥機の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /食器棚/.test(message):
      returnMessage =
        "食器棚の分別方法\n\n【食器棚 120cm以下】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料：1000円\n\n【食器棚 120cm超】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：1500円";
      break;

    case /シルバーガー/.test(message):
      returnMessage =
        "シルバーガーの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /シンナー/.test(message):
      returnMessage =
        "シンナーの分別方法\n\n分別：出せないゴミ\n出し方\n販売店に相談";
      break;

    case /新聞紙/.test(message):
      returnMessage = "新聞紙の分別方法\n\n分別：資源化物\n出し方\n古紙";
      break;

    //す行のゴミ

    case /水銀灯/.test(message):
      returnMessage =
        "水銀灯の分別方法\n\n分別：出せないゴミ\n出し方\nメーカー、販売店に相談";
      break;

    case /水槽/.test(message):
      returnMessage =
        "水槽(プラスチック)の分別方法\n\n【水槽(プラスチック)18ℓ缶未満】\n分別：可燃ごみ\n\n【水槽(プラスチック)90cm以下】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円\n\n【水槽(プラスチック)90cm超】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円\n水槽(ガラス)の分別方法\n\n【水槽(ガラス)18ℓ缶未満】\n分別：不燃ごみ\n\n【水槽(ガラス)90cm以下】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円\n\n【水槽(ガラス)90cm超】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円";
      break;

    case /水筒/.test(message):
      returnMessage =
        "水筒の分別方法\n\n【水筒(金属)】\n分別：不燃ごみ\n\n【水筒(プラスチック)】\n分別：可燃ごみ";
      break;

    case /炊飯器/.test(message):
      returnMessage =
        "炊飯器の分別方法\n\n【炊飯器(5合炊き未満)】\n分別：小型家電\n\n【炊飯器(5合炊き以上)】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /スーツ/.test(message):
      returnMessage = "スーツの分別方法\n\n分別：資源化物\n出し方\n古布";
      break;

    case /スーツケース/.test(message):
      returnMessage =
        "スーツケースの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /スカート/.test(message):
      returnMessage = "スカートの分別方法\n\n分別：資源化物\n出し方\n古布";
      break;

    case /姿見/.test(message):
      returnMessage =
        "姿見(鏡)の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /図鑑/.test(message):
      returnMessage = "図鑑の分別方法\n\n分別：資源化物\n出し方\n古紙";
      break;

    case /スキー板/.test(message):
      returnMessage =
        "スキー板の分別方法\n\n分別：粗大ごみ\n出し方\n2枚まで1組200円";
      break;

    case /スキーストック/.test(message):
      returnMessage =
        "スキーストックの分別方法\n\n分別：粗大ごみ\n出し方\n2本まで1組200円";
      break;

    case /スキーセット/.test(message):
      returnMessage =
        "スキーセットの分別方法\n\n分別：粗大ごみ\n出し方\n板2枚まで、ストック2本までをあわせて1組200円";
      break;

    case /スキーウェア/.test(message):
      returnMessage = "スキーウェアの分別方法\n\n分別：資源化物\n出し方\n古布";
      break;

    case /スキー靴/.test(message):
      returnMessage = "スキー靴(プラスチック製)の分別方法\n\n分別：可燃ごみ";
      break;

    case /スクーター/.test(message):
      returnMessage =
        "スクーターの分別方法\n\n分別：出せないゴミ\n出し方\n販売店に相談";
      break;

    case /スケート靴/.test(message):
      returnMessage =
        "スケート靴の分別方法\n\n分別：可燃ごみ\n出し方\n金具はなるべく不燃ごみに出す";
      break;

    case /スコップ/.test(message):
      returnMessage =
        "スコップの分別方法\n\n【スコップ 金属】\n分別：不燃ごみ\n出し方\n60cm超は粗大\n\n【スコップ プラスチック】\n分別：可燃ごみ";
      break;

    case /硯/.test(message):
    case /すずり/.test(message):
      returnMessage = "硯(すずり)の分別方法\n\n分別：不燃ごみ";
      break;

    case /すだれ/.test(message):
      returnMessage =
        "すだれの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /スタンプ台/.test(message):
      returnMessage =
        "スタンプ台の分別方法\n\n【スタンプ台 金属】\n分別：不燃ごみ\n\n【スタンプ台 プラスチック】\n分別：可燃ごみ";
      break;

    case /スチール机/.test(message):
      returnMessage = "スチール机 家庭使用の分別方法\n\n分別：粗大ごみ";
      break;

    case /ステッパー/.test(message):
      returnMessage =
        "ステッパー(家庭用足踏み器具)の分別方法\n\n分別：粗大ごみ";
      break;

    case /ステレオセット/.test(message):
      returnMessage =
        "ステレオセットの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料：1000円";
      break;

    case /ステレオアンプ/.test(message):
      returnMessage =
        "ステレオアンプの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料：200円";
      break;

    case /ストーブ/.test(message):
      returnMessage =
        "ストーブの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料：200円";
      break;

    case /ストッキング/.test(message):
      returnMessage = "ストッキングの分別方法\n\n分別：資源\n出し方\n古布";
      break;

    case /砂/.test(message):
      returnMessage = "砂の分別方法\n\n分別：出せないゴミ";
      break;

    case /スノーボード/.test(message):
      returnMessage =
        "スノーボードの分別方法\n\n粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円";
      break;

    case /すのこ/.test(message):
      returnMessage =
        "すのこの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /スパイクシューズ/.test(message):
      returnMessage = "スパイクシューズの分別方法\n\n分別：可燃ごみ";
      break;

    case /スパナ/.test(message):
      returnMessage = "スパナの分別方法\n\n分別：不燃ごみ";
      break;

    case /スピーカー/.test(message):
      returnMessage =
        "スピーカーの分別方法\n\n【スピーカー 18ℓ缶未満】\n分別：小型家電\n\n【スピーカー 18ℓ缶以上】\n分別：粗大ごみ\n出し方\n500円(2個まで1組扱い)";
      break;

    case /スプリング入りマットレス/.test(message):
      returnMessage =
        "スプリング入りマットレスの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：2500円";
      break;

    case /すべり台/.test(message):
      returnMessage = "すべり台(幼児用)の分別方法\n\n分別：粗大ごみ";
      break;

    case /スポンジ/.test(message):
      returnMessage = "スポンジの分別方法\n\n分別：可燃ごみ";
      break;

    case /ズボンプレッサー/.test(message):
      returnMessage =
        "ズボンプレッサー(パンツプレス)の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /半紙/.test(message):
      returnMessage =
        "墨で書かれた半紙の分別方法\n\n分別：資源化物\n出し方\nクレヨンで書かれた紙も資源";
      break;

    case /スラックス/.test(message):
      returnMessage = "スラックスの分別方法\n\n分別：資源化物\n出し方\n古布";
      break;

    case /スリッパ/.test(message):
      returnMessage = "スリッパの分別方法\n\n分別：可燃ごみ";
      break;

    case /スレート/.test(message):
      returnMessage =
        "スレート(粘板岩、瓦、塀などの建築材料)の分別方法\n\n分別：出せないゴミ";
      break;

    //せ行のゴミ

    case /生理用品/.test(message):
      returnMessage = "生理用品の分別方法\n\n分別：可燃ごみ";
      break;

    case /セーター/.test(message):
      returnMessage = "セーターの分別方法\n\n分別：資源化物\n出し方\n古布";
      break;

    case /石油ストーブ/.test(message):
      returnMessage = "石油ストーブの分別方法\n\n粗大ごみ\n出し方\n200円";
      break;

    case /石油ファンヒーター/.test(message):
      returnMessage =
        "石油ファンヒーターの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /石油ポンプ/.test(message):
      returnMessage = "石油ポンプ(プラスチック)の分別方法\n\n分別：可燃ごみ";
      break;

    case /石灰/.test(message):
      returnMessage =
        "石灰の分別方法\n\n分別：不燃ごみ\n出し方\n少量なら水に湿らせて出す";
      break;

    case /石鹸/.test(message):
      returnMessage = "石鹸の分別方法\n\n分別：可燃ごみ";
      break;

    case /石膏像/.test(message):
      returnMessage =
        "石膏像の分別方法\n\n分別：不燃ごみ\n出し方\n18ℓ缶以上は粗大";
      break;

    case /石膏ボード/.test(message):
      returnMessage = "石膏ボードの分別方法\n\n分別：出せないゴミ";
      break;

    case /セロハンテープの台/.test(message):
    case /セロハンテープ台/.test(message):
      returnMessage = "セロハンテープの台の分別方法\n\n分別：不燃ごみ";
      break;

    case /洗剤容器/.test(message):
      returnMessage = "洗剤容器の分別方法\n\n分別：可燃ごみ";
      break;

    case /洗濯機/.test(message):
      returnMessage =
        "洗濯機の分別方法\n\n分別：家電4品目\n出し方\n粗大ごみで個別収集の場合は、家電リサイクル料＋戸別収集手数料 家電4品目の出し方を参照";
      break;

    case /剪定枝木/.test(message):
      returnMessage =
        "剪定枝木の分別方法\n\n【剪定枝木 枝木】\n分別：可燃ごみ\n出し方\n60cm以下に切り、片手で持てる程度に束ね、少量ずつ出す\n\n【剪定枝木 小枝・葉っぱ】\n分別：可燃ごみ\n出し方\n透明または半透明の袋に入れる\n\n【剪定枝木 果実(有料)】\n分別：可燃ごみ\n出し方\n有料指定袋に入れる";
      break;

    case /剪定ばさみ/.test(message):
      returnMessage =
        "剪定ばさみの分別方法\n\n分別：不燃ごみ\n出し方\n60cm超は粗大。はさみのところは紙で包んで出す";
      break;

    case /扇風機/.test(message):
      returnMessage =
        "扇風機の分別方法\n\n【扇風機 18ℓ缶未満の卓上タイプ】\n分別：小型家電\n\n【扇風機 18ℓ缶以上】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円";
      break;

    case /洗面器/.test(message):
      returnMessage =
        "洗面器の分別方法\n\n【洗面器 金属】\n分別：不燃ごみ\n\n【洗面器 プラスチック】\n分別：可燃ごみ";
      break;

    case /洗面台/.test(message):
      returnMessage =
        "洗面台の分別方法\n\n【洗面台 120cm以下】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：500円\n\n【洗面台 120cm超】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：1000円";
      break;

    case /洗剤/.test(message):
      returnMessage = "洗剤(粉)の分別方法\n\n分別：可燃ごみ";
      break;

    //そ行のゴミ

    case /双眼鏡/.test(message):
      returnMessage =
        "双眼鏡の分別方法\n\n分別：不燃ごみ\n出し方\nプラスチック製は可燃";
      break;

    case /造花/.test(message):
      returnMessage = "造花の分別方法\n\n分別：可燃ごみ";
      break;

    case /雑巾/.test(message):
      returnMessage = "雑巾の分別方法\n\n分別：可燃ごみ\n出し方\n汚れた布";
      break;

    case /掃除機/.test(message):
      returnMessage =
        "掃除機の分別方法\n\n【掃除機 35cm以下のハンディタイプ】\n分別：小型家電\n\n【掃除機 18ℓ缶以上】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料\n：200円\n\n【掃除機 ※筒のみ】\n分別：可燃ごみ\n\n【掃除機 ※ブラシのみ(付属品等)】\n分別：可燃ごみ\n\n【掃除機 ※ヘッドのみ(モーターなし)】\n分別：可燃ごみ\n\n【掃除機 ※ヘッドのみ(モーターあり)】\n分別：可燃ごみ";
      break;

    case /ぞうり/.test(message):
      returnMessage = "ぞうりの分別方法\n\n分別：可燃ごみ";
      break;

    case /外付けHD/.test(message):
    case /外付けHDD/.test(message):
    case /外付けハードディスク/.test(message):
      returnMessage = "外付けHD(ハードディスク)の分別方法\n\n分別:小型家電";
      break;

    case /ソファー/.test(message):
      returnMessage = "ソファーの分別方法\n\n分別：粗大ごみ";
      break;

    case /そり/.test(message):
      returnMessage =
        "そり(子供用玩具)の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n戸別収集手数料：200円";
      break;

    //た行
    case /体温計/.test(message):
      returnMessage = "水銀あり:資源化物\n電子式:小型家電";
      break;

    case /台車/.test(message):
      returnMessage = "粗大ごみ";
      break;

    case /体重計 /.test(message):
      returnMessage = "アナログ式：不燃ごみ\nデジタル式:小型家電";
      break;

    case /耐熱ガラス/.test(message):
      returnMessage = "不燃ごみ\n新聞紙に包み、「危険」と書いて出す";
      break;

    case /タイヤ/.test(message):
      returnMessage = "出せないごみ\n販売店へ相談";
      break;

    case /タイル/.test(message):
      returnMessage = "不燃ごみ\n一般家庭から出たもののみ";
      break;

    case /タオル/.test(message):
      returnMessage = "資源化物\n古布";
      break;

    case /タオルケット/.test(message):
      returnMessage = "粗大ごみ\n寝具";
      break;

    case /ダウンジャケット/.test(message):
      returnMessage = "資源化物\n古布";
      break;

    case /高枝切りバサミ/.test(message):
      returnMessage = "粗大ごみ\n500円";
      break;

    case /卓上ミシン/.test(message):
      returnMessage = "粗大ごみ\n200円";
      break;

    case /竹馬/.test(message):
      returnMessage = "粗大ごみ\n200円";
      break;

    case /竹ぼうき/.test(message):
      returnMessage = "粗大ごみ\n60cm以下なら可燃";
      break;

    case /竹/.test(message):
      returnMessage =
        " 庭に生えたもの（無料）:可燃ごみ\n60cm以下に切り、片手で持てる程度に束ね、少量ずつ出す\n山に生えた自然発生的なもの（有料):可燃ごみ\n60cm以下に切って、有料指定袋に入れる。";
      break;

    case /畳/.test(message):
      returnMessage = "粗大ごみ\n500円";
      break;

    case /脱臭剤/.test(message):
      returnMessage = "可燃ごみ";
      break;

    case /タッパー/.test(message):
      returnMessage = "可燃ごみ\n金属製・アルミは不燃ごみ";
      break;

    case /立てず/.test(message):
      returnMessage = "粗大ごみ\n200円（180cm以下に切る）";
      break;

    case /卵の殻/.test(message):
      returnMessage = "可燃ごみ";
      break;

    case /たらい/.test(message):
      returnMessage =
        "（プラスチック）18ℓ缶未満:可燃ごみ\nプラスチック）18ℓ缶以上:粗大ごみ\n200円";
      break;

    case /たわし /.test(message):
      returnMessage = "ナイロン・ヤシ製:可燃ごみ\n金属製:不燃ごみ";
      break;

    case /単行本/.test(message):
      returnMessage = "資源化物";
      break;

    case /ダンベル/.test(message):
      returnMessage = "不燃ごみ";
      break;

    case /ダンボール/.test(message):
      returnMessage = "資源化物\n古紙";
      break;

    case /たんす/.test(message):
      returnMessage = " 120cm以下:粗大ごみ\n1000円\n120cm超:粗大ごみ\n1500円";
      break;

    //ち行
    case /チェーン/.test(message):
      returnMessage =
        "（タイヤ用）金属製:不燃ごみ\n18ℓ缶以上は粗大\n（タイヤ用）ゴム製:可燃ごみ\n60cm以下に切ってだす。18ℓ缶以上は粗大\n（タイヤ用）プラスチック製:可燃ごみ\n60cm以下に切ってだす。18ℓ缶以上は粗大";
      break;

    case /地球儀/.test(message):
      returnMessage = "可燃ごみ\n18ℓ缶以上は粗大";
      break;

    case /竹炭/.test(message):
      returnMessage = "可燃ごみ";
      break;

    case /チャイルドシート/.test(message):
      returnMessage = "粗大ごみ\n200円";
      break;

    case /着火剤/.test(message):
      returnMessage =
        "出せないごみ\n販売店へ相談。使い切って外装が金属なら不燃ごみ";
      break;

    case /茶筒缶/.test(message):
      returnMessage = "資源化物";
      break;

    case /茶箱/.test(message):
      returnMessage = "可燃ごみ\n18ℓ缶以上は粗大";
      break;

    case /茶碗/.test(message):
      returnMessage = "不燃ごみ";
      break;

    case /注射器/.test(message):
      returnMessage =
        "出せないごみ\n医療機関や購入した薬局などに持込み、処理を依頼してください";
      break;

    case /調理台/.test(message):
      returnMessage = "90cm以下:粗大ごみ\n500円\n90cm超:粗大ごみ\n1000円";
      break;

    case /貯米機/.test(message):
      returnMessage = "（ブリキ製のもの 10俵まで）:粗大ごみ\n1000円";
      break;

    //つ行
    case /使い捨てカイロ/.test(message):
      returnMessage = "可燃ごみ";
      break;

    case /使い捨てライター/.test(message):
      returnMessage = "粗大ごみ\n中身を使い切ってだす";
      break;

    case /杖/.test(message):
    case /つえ/.test(message):
      returnMessage = "粗大ごみ";
      break;

    case /机/.test(message):
      returnMessage =
        " 両袖以外のもの:粗大ごみ\n1000円\n\n両袖のもの:粗大ごみ\n1500円";
      break;

    case /土/.test(message):
      returnMessage = "出せないごみ";
      break;

    case /爪切り/.test(message):
      returnMessage = "不燃ごみ";
      break;

    case /釣り糸/.test(message):
      returnMessage = "可燃ごみ";
      break;

    case /釣り竿/.test(message):
      returnMessage = "粗大ごみ\n竹製:可燃ごみ\n60cm以下に切る";
      break;

    case /鉛/.test(message):
      returnMessage = "不燃ごみ";
      break;

    //て行
    case /DVDプレーヤー/.test(message):
      returnMessage = " 18ℓ缶未満:小型家電\n18ℓ缶以上:粗大ごみ\n200円";
      break;

    case /テーブル/.test(message):
      returnMessage = "90cm以下:粗大ごみ\n500円\n90cm超:粗大ごみ\n1000円";
      break;

    case /手押し芝刈り機/.test(message):
      returnMessage = "粗大ごみ\n500円";
      break;

    case /手さげ袋/.test(message):
      returnMessage = "可燃ごみ\n使用可能な紙製、革製、布製のものは資源化物";
      break;

    case /デスクマット/.test(message):
      returnMessage = "粗大ごみ\n200円";
      break;

    case /鉄アレイ/.test(message):
      returnMessage = "不燃ごみ";
      break;

    case /鉄板/.test(message):
      returnMessage = "粗大ごみ\n厚さ4ミリメートル以内のもの";
      break;

    case /テニスボール/.test(message):
      returnMessage = "可燃ごみ";
      break;

    case /手袋/.test(message):
      returnMessage = "資源化物\n古布（布製でペアのもの）";
      break;

    case /テレビ/.test(message):
      returnMessage =
        "家電4品目\n戸別収集について リサイクル料＋収集手数料 家電4品目の出し方を参照 https://www.city.okayama.jp/kurashi/0000005163.html";
      break;

    case /テレビアンテナ/.test(message):
      returnMessage = "屋内用:小型家電\n屋外用・BS・CSを含む:粗大ごみ\n500円";
      break;

    case /テレビ台/.test(message):
      returnMessage = "粗大ごみ";
      break;

    case /テレフォンカード/.test(message):
      returnMessage = "可燃ごみ";
      break;

    case /電気あんか/.test(message):
    case /電気あんかー/.test(message):
    case /電気アンカー/.test(message):
    case /電気アンカ/.test(message):
      returnMessage = "小型家電";
      break;

    case /電気カーペット/.test(message):
      returnMessage = "粗大ごみ";
      break;

    case /電気カミソリ/.test(message):
      returnMessage = "小型家電";
      break;

    case /電気器具/.test(message):
      returnMessage = "小型家電\nドライヤー、アイロン、ひげそり、電卓など";
      break;

    case /電気コード・ケーブル/.test(message):
    case /電気ケーブル/.test(message):
      returnMessage = "小型家電";
      break;

    case /電気スタンド/.test(message):
      returnMessage = "小型家電\n18ℓ缶以上は粗大";
      break;

    case /電気ストーブ/.test(message):
      returnMessage = "小型家電\n18ℓ缶以上は粗大";
      break;

    case /電気ポット/.test(message):
      returnMessage = "小型家電";
      break;

    case /電気毛布/.test(message):
      returnMessage = "粗大ごみ\n200円";
      break;

    case /電球（白熱球、LEDなど）/.test(message):
      returnMessage = "不燃ごみ\n購入した時に包んである紙や箱に入れて出す";
      break;

    case /電子オルガン/.test(message):
      returnMessage = "粗大ごみ\n1500円";
      break;

    case /電子レンジ/.test(message):
      returnMessage = "粗大ごみ\n500円";
      break;

    case /電卓/.test(message):
      returnMessage = "小型家電";
      break;

    case /電池/.test(message):
    case /充電池/.test(message):
    case /ボタン電池/.test(message):
    case /二カド電池/.test(message):
      returnMessage =
        "資源化物\n資源化物と同じときに専用コンテナへ出す 錆びていても、液がもれていても可能";
      break;

    case /テント/.test(message):
      returnMessage = "粗大ごみ";
      break;

    case /てんぷら油/.test(message):
      returnMessage =
        "資源化物\n冷ましてペットボトルに入れ、しっかりとフタを。動物系・鉱物系・水や異質が混ざった油は出せない。";
      break;

    //と行
    case /電話機/.test(message):
      returnMessage = "小型家電";
      break;

    case /電話帳/.test(message):
      returnMessage = "資源化物\n古紙";
      break;

    case /砥石（といし）/.test(message):
      returnMessage = "不燃ごみ";
      break;

    case /トイレットペーパー/.test(message):
      returnMessage = "可燃ごみ";
      break;

    case /トイレットペーパーの芯/.test(message):
      returnMessage = "資源化物\n古紙";
      break;

    case /道着/.test(message):
      returnMessage = "資源化物\n古布 柔道・剣道等のもの";
      break;

    case /陶磁器類/.test(message):
      returnMessage = "不燃ごみ";
      break;

    case /灯油/.test(message):
      returnMessage = "出せないごみ\n販売店に相談";
      break;

    case /灯油タンク/.test(message):
      returnMessage = "粗大ごみ\n200円（18ℓ缶未満のものは可燃）";
      break;

    case /灯油のポンプ/.test(message):
    case /灯油ポンプ/.test(message):
      returnMessage = "（電動式）小型家電\n電池は資源化物";
      break;

    case /トースター/.test(message):
      returnMessage = "小型家電";
      break;

    case /時計/.test(message):
      returnMessage =
        "機械式:不燃ごみ\n18ℓ缶以上は粗大\n電気式:小型家電\n18ℓ缶以上は粗大";
      break;

    case /戸棚/.test(message):
      returnMessage =
        "（ラック類・分解されたものを含む）60cm以下:粗大ごみ\n200円\n60cm以上120cm以下\n500円\n120センチメートル超\n1000円";
      break;

    case /トタン/.test(message):
    case /ブリキ/.test(message):
      returnMessage = "粗大ごみ\n200円（5枚まで1組）";
      break;

    case /土鍋/.test(message):
      returnMessage = "不燃ごみ";
      break;

    case /ドライバー/.test(message):
      returnMessage = "不燃ごみ";
      break;

    case /ドライヤー/.test(message):
      returnMessage = "小型家電";
      break;

    case /ドラム缶/.test(message):
      returnMessage = "出せないごみ";
      break;

    case /塗料/.test(message):
      returnMessage = "出せないごみ";
      break;

    case /塗料空き缶/.test(message):
    case /ペンキの空き缶/.test(message):
    case /ペンキ缶/.test(message):
      returnMessage = "不燃ごみ";
      break;

    case /塗料スプレー空き缶/.test(message):
    case /スプレー缶/.test(message):
      returnMessage =
        "資源化物\n使い切って、穴を開ける 空き缶の出し方参照 https://www.city.okayama.jp/kurashi/0000005251.html";
      break;
    //な行
    case /ナイフ/.test(message):
      returnMessage =
        "ナイフの分別方法\n \n分別：不燃ごみ \n出し方: 刃物部分は紙等に包んで出す";
      break;

    case /ジャンパー/.test(message):
      returnMessage =
        "ナイロンのジャンパーの分別方法\n \n分別：資源化物 \n出し方: 古布(ひとまとめにし、透明又は半透明の袋に入れて出してください。（有料指定袋で出す必要はありません）) ";
      break;

    case /長靴/.test(message):
      returnMessage =
        "長靴の分別方法\n \n分別：可燃ごみ  \n出し方: 長いものは60cm以下に切る";
      break;

    case /流し台/.test(message):
      returnMessage =
        "流し台(流し台90cm以下)の分別方法\n \n分別：粗大ごみ /n金額: 500円 \n流し台(流し台90cm超) \n分別: 粗大ごみ \n金額1000円";
      break;

    case /なべ/.test(message):
    case /鍋」/.test(message):
      returnMessage =
        "なべ(金属製)の分別方法\n \n分別：不燃ごみ \n出し方: 18ℓ缶以上は粗大ゴミで出してください。";
      break;

    case /波板/.test(message):
      returnMessage =
        "波板(金属製,プラスチック製),(180cm以下),(5枚まで1組)の分別方法\n \n分別：粗大ごみ /n金額200円（ポリカーボネート製は受入不可です。） ";
      break;

    //に行
    case /ニッケル水素/.test(message):
      returnMessage =
        "ニッケル水素電池の分別方法\n \n分別：資源化物 \n出し方 資源化物とおなじときに専用コンテナに出してください。";
      break;

    case /人形/.test(message):
      returnMessage =
        "人形(18ℓ缶未満)の分別方法\n \n分別：可燃ごみ \n人形 (18ℓ缶以上)の分別方法\n /n分別: 粗大ごみ";
      break;

    //ぬ行
    case /ぬいぐるみ/.test(message):
    case /縫いぐるみ/.test(message):
      returnMessage =
        "ぬいぐるみ(18ℓ缶未満)の分別方法\n \n分別：可燃ごみ　\nぬいぐるみ(18ℓ缶以上)の分別方法\n \n分別: 粗大ごみ";
      break;

    case /ぬい針/.test(message):
    case /縫い針/.test(message):
      returnMessage =
        "ぬい針の分別方法\n \n分別：不燃ごみ　\n出し方 新聞紙などに包み「針」と書いて出してください。";
      break;

    //ね行
    case /ネガフィルム/.test(message):
      returnMessage = "ネガフィルムの分別方法\n \n分別：可燃ごみ ";
      break;

    case /ネクタイ/.test(message):
    case /襟飾/.test(message):
      returnMessage =
        "ネクタイの分別方法\n \n分別：資源化物　\n出し方 古布(ひとまとめにし、透明又は半透明の袋に入れて出してください。";
      break;

    case /ねこの砂/.test(message):
    case /猫の砂/.test(message):
    case /ネコの砂/.test(message):
      returnMessage = "ぬいぐるみ(18ℓ缶未満)の分別方法\n \n分別：可燃ごみ";
      break;

    case /ねじ/.test(message):
    case /ネジ/.test(message):
    case /螺子/.test(message):
    case /捩子/.test(message):
    case /捻子/.test(message):
      returnMessage = "ネジの分別方法\n \n分別：不燃ごみ";
      break;

    case /寝袋/.test(message):
      returnMessage = "寝袋の分別方法\n \n分別：粗大ごみ ";
      break;

    case /ネット/.test(message):
      returnMessage =
        "ネット(60cm以下)の分別方法\n \n分別：可燃ごみ \n出し方: 家庭菜園、くだもの用などが可 \nネット(60cm超)の分別方法 \n分別: 粗大ごみ \n出し方 1辺の長さ60cm以下にできる場合は、可燃ごみでも可";
      break;

    case /粘土/.test(message):
      returnMessage =
        "粘土の分別方法\n \n分別：不燃ごみ \n出し方: 家庭工作用のみです。 ";
      break;

    //の行
    case /農園芸用ビニール/.test(message):
      returnMessage =
        "農園芸用ビニール類の分別方法\n \n分別：出せないごみ \n出し方: 販売店か、取扱店へ相談してください。 ";
      break;

    case /農機具/.test(message):
      returnMessage =
        "ネガフィルムの分別方法\n \n分別：出せないごみ \n出し方: 販売店か、取扱店へ相談 ";
      break;

    case /農薬/.test(message):
      returnMessage =
        "農薬の分別方法\n \n分別：出せないごみ \n出し方: 販売店か、取扱店へ相談 ";
      break;

    case /のこぎり/.test(message):
    case /ノコギリ/.test(message):
    case /鋸/.test(message):
      returnMessage =
        "のこぎり(60cm以下)の分別方法\n \n分別：不燃ごみ \nのこぎり(60cm超) \n出し方: 粗大ごみ \n のこぎり(電動)の分別方法 \n分別: 粗大ごみ ";
      break;

    case /海苔の空きびん/.test(message):
    case /のりの空きびん/.test(message):
    case /海苔の空きびん/.test(message):
    case /海苔の空き瓶/.test(message):
    case /海苔の空きビン/.test(message):
      returnMessage =
        "海苔の空きびんの分別方法\n \n分別：資源化物 \n出し方: プラスチック製のふたは可燃ごみで出して、金属製のふたは不燃ごみで出してください ";
      break;

    case /ノンカーボン紙/.test(message):
      returnMessage = "ノンカーボン紙の分別方法\n \n分別：可燃ごみ ";
      break;

    case /ハードディスク/.test(message):
    case /HDD/.test(message):
      returnMessage =
        "ハードディスク（外付のHDのみ)の分別方法\n\n分別：小型家電";
      break;

    case /バーベキューセット/.test(message):
      returnMessage =
        "バーベキューセットの分別方法\n\n分別：粗大ごみ\n出し方\n：持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /灰/.test(message):
    case /灰皿/.test(message):
    case /はい/.test(message):
      returnMessage =
        "灰の分別方法\n\n【灰（少量）】分別：不燃ごみ\n出し方\n：水に湿らせて新聞紙に包んでから袋に入れ、少量ずつ出す（「灰」と書く）\n\n【灰皿 卓上用】\n分別：不燃ごみ\n\n【灰皿 据置型】\n分別：粗大ごみ";
      break;

    case /バイク/.test(message):
    case /ばいく/.test(message):
      returnMessage =
        "バイクの分別方法\n\n分別：出せないごみ\n出し方\n：販売店か、取扱店へ相談";
      break;

    case /バインダー/.test(message):
    case /ばいんだー/.test(message):
      returnMessage =
        "/バインダーの分別方法\n\n【紙製】分別：資源化物\n出し方\n：（古紙）金具は不燃ごみにだす\n\n【プラスチック製】\n分別：可燃ごみ\n出し方\n：金具は不燃ごみにだす";
      break;

    case /廃油/.test(message):
    case /はいゆ/.test(message):
      returnMessage =
        "廃油（エンジンオイル等）の分別方法\n\n分別：出せないごみ\n出し方\n：販売店か、取扱店へ相談";
      break;

    case /はがき/.test(message):
      returnMessage = "はがきの分別方法\n\n分別：資源化物\n出し方\n：古紙";
      break;

    case /はかり/.test(message):
      returnMessage =
        "はかり（台所用等）の分別方法\n\n【アナログ式】\n分別：不燃ごみ\n出し方\n：18ℓ缶以上は粗大\n\n【デジタル式】\n分別：小型家電\n出し方\n：18ℓ缶以上は粗大";
      break;

    case /発炎筒/.test(message):
    case /はつえんとう/.test(message):
      returnMessage =
        "発炎筒の分別方法\n\n【発炎筒（未使用）】\n分別：出せないごみ\n出し方\n：販売店か、取扱店へ相談\n\n【発炎筒（使用済】\n分別：可燃ごみ";
      break;

    case /バケツ/.test(message):
    case /ばけつ/.test(message):
      returnMessage =
        "バケツの分別方法\n\n【プラスチック製】\n分別：可燃ごみ\n出し方\n：18ℓ缶以上は粗大\n\n【金属製】\n分別：不燃ごみ\n出し方\n:18ℓ缶以上は粗大";
      break;

    case /はさみ/.test(message):
    case /ハサミ/.test(message):
    case /鋏/.test(message):
      returnMessage = "はさみの分別方法\n\n分別：不燃ごみ";
      break;

    case /はしご/.test(message):
    case /ハシゴ/.test(message):
    case /梯子/.test(message):
    case /梯/.test(message):
      returnMessage = "はしごの分別方法\n\n分別：粗大ごみ";
      break;

    case /バスタオル/.test(message):
      returnMessage = "バスタオルの分別方法\n\n分別：資源化物\n出し方\n：古布";
      break;

    case /パソコン関連/.test(message):
      returnMessage =
        "パソコン関連の分別方法\n\n【パソコン（PCリサイクルマークあり）】分別：出せないごみ\n出し方\n各メーカーへ問い合わせる\n\n【パソコン（PCリサイクルマークなし）デスクトップのみ】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:500円\n\n【パソコン（PCリサイクルマークなし）ノート型（35cm未満）】\n分別：小型家電\n出し方\n持ち込み：無料\n 戸別収集手数料\n:500円・18ℓ缶以上は粗大ごみ\n\n【パソコン キーボードのみ】\n分別：小型家電\n出し方\n協力店舗に持ち込む\n\n【パソコン マウスのみ】\n分別：小型家電\n出し方\n協力店舗に持ち込む\n【パソコン モニター（CRT・液晶）】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:500円\n【パソコン 中身の機械】\n分別：小型家電\n出し方\n協力店舗に持ち込む\n\n【パソコンプリンター】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円\n【パソコンラック】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:粗大ごみ受付センターで金額を確認";
      break;

    case /鉢/.test(message):
    case /はり/.test(message):
    case /ハリ/.test(message):
    case /針金/.test(message):
      returnMessage =
        "鉢の分別方法\n\n【プラスチック製】\n分別：可燃ごみ\n出し方\n：18ℓ缶以上は粗大\n\n【素焼き、陶磁器】\n分別：不燃ごみ\n出し方\n:18ℓ缶以上は粗大\n\n【針金】\n分別：不燃ごみ";
      break;

    case /パチンコ台/.test(message):
    case /スロットマシーン/.test(message):
      returnMessage =
        "パチンコ台・スロットマシーンの分別方法\n\n分別：出せないごみ";
      break;

    case /発泡スチロール/.test(message):
      returnMessage =
        "発泡スチロールの分別方法\n\n分別：可燃ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:500円";
      break;

    case /発泡トレイ/.test(message):
      returnMessage =
        "発泡トレイの分別方法\n\n分別：拠点\n出し方\n：拠点回収所に出す。地域の資源化物収集ステーションには出せません。資源化物の拠点回収（民間協力事業者・登録電器店）資源化物の拠点回収（市有施設）";
      break;

    case /バッテリー/.test(message):
      returnMessage =
        "バッテリーの分別方法\n\n分別：出せないごみ\n出し方\n：販売店か、取扱店へ相談";
      break;

    case /バット/.test(message):
    case /ばっと/.test(message):
      returnMessage =
        "バットの分別方法\n\n【木製】\n分別：可燃ごみ\n\n【金属製】\n分別：不燃ごみ";
      break;

    case /バドミントンのラケット/.test(message):
      returnMessage = "バドミントンのラケットの分別方法\n\n分別：不燃ごみ";
      break;

    case /花/.test(message):
    case /はな/.test(message):
      returnMessage =
        "花の分別方法\n\n分別：可燃ごみ\n出し方\n：庭に生えた自然発生的な彼岸花、コスモスなどは、無料収集。";
      break;

    case /花火/.test(message):
    case /はなび/.test(message):
      returnMessage =
        "花火の分別方法\n\n分別：可燃ごみ\n出し方\n：水に湿らせてから少量ずつ出す";
      break;

    case /パネルヒーター/.test(message):
      returnMessage =
        "パネルヒーターの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /刃物/.test(message):
    case /はもの/.test(message):
      returnMessage =
        "刃物の分別方法\n\n分別：不燃ごみ\n出し方\n:刃物部分は紙等に包んで出す";
      break;

    case /ハンガー /.test(message):
    case /ハンガーラック /.test(message):
    case /パイプハンガー /.test(message):
      returnMessage =
        "ハンガーの分別方法\n\n【木製・プラスチック製】\n分別：可燃ごみ\n\n【金属製・はりがね】\n分別：不燃ごみ\n\n【ハンガーラック】\n分別：粗大ごみ\n持ち込み：無料\n 戸別収集手数料\n:200円\n\n【パイプハンガー】\n分別：粗大ごみ\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /ハンカチ/.test(message):
      returnMessage = "ハンカチの分別方法\n\n分別：資源化物\n出し方\n古布";
      break;

    case /はんこ /.test(message):
    case /ハンコ/.test(message):
    case /印鑑/.test(message):
      returnMessage =
        "はんこの分別方法\n\n【金属製以外】\n分別：可燃ごみ\n\n【金属製】\n分別：不燃ごみ";
      break;

    case /ハンドバック/.test(message):
      returnMessage =
        "ハンドバックの分別方法\n\n分別：資源化物\n出し方\n：古布（使用可能な革・布製のもの）";
      break;

    case /車のハンドル/.test(message):
    case /ハンドル/.test(message):
      returnMessage =
        "ハンドルの分別方法\n\n分別：出せないごみ\n出し方\n販売店か、取扱店へ相談";
      break;

    case /パンフレット/.test(message):
      returnMessage = "パンフレットの分別方法\n\n分別：資源化物\n出し方\n古紙";
      break;

    //ひ行
    case /ピアノ/.test(message):
      returnMessage =
        "ピアノの分別方法\n\n【ピアノ及び電気ピアノ】\n分別：出せないごみ\n出し方\n販売店へ相談\n\n【ピアノ 電子ピアノ】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:粗大ごみ受付センターで金額などを確認。";
      break;

    case /Pタイル/.test(message):
    case /プラスチックタイル/.test(message):
    case /ぷらすちっくたいる/.test(message):
      returnMessage = "プラスチックタイルの分別方法\n\n分別：可燃ごみ";
      break;

    case /ビー玉/.test(message):
    case /ビーダマ/.test(message):
    case /びーだま/.test(message):
      returnMessage =
        "ビー玉の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:500円";
      break;

    case /ビーチパラソル/.test(message):
      returnMessage =
        "ビーチパラソルの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:粗大ごみ受付センターで金額などを確認。";
      break;

    case /ビールびん/.test(message):
    case /ビール瓶/.test(message):
      returnMessage =
        "ビールびんの分別方法\n\n分別：資源化物\n出し方\n購入したお店に返す 資源化物ステーションにも出せます";
      break;

    case /ピクニックテーブル/.test(message):
      returnMessage =
        "ピクニックテーブルの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /ビデオカメラ/.test(message):
      returnMessage =
        "ビデオカメラの分別方法\n\n分別：小型家電\n出し方\n協力店舗・市有施設等に持ち込む。";
      break;

    case /ビデオ/.test(message):
      returnMessage =
        "ビデオの分別方法\n\n【ビデオテープ】\n分別：可燃ごみ\n\n【ビデオデッキ】\n分別：小型家電\n出し方\n協力店舗・市有施設等に持ち込む。18リットル缶以上は粗大ごみ。";
      break;

    case /雛壇/.test(message):
    case /ひな壇/.test(message):
      returnMessage = "雛壇の分別方法\n\n分別：粗大ごみ";
      break;

    case /ビニール/.test(message):
      returnMessage =
        "ビニールの分別方法\n\n【ビニールシート】\n分別：可燃ごみ\n出し方\n1辺の長さ60cm以下に切り有料指定袋に入れて出す\n\n【ビニール袋】\n分別：可燃ごみ";
      break;

    case /火鉢/.test(message):
    case /ひばち/.test(message):
      returnMessage =
        "火鉢の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:粗大ごみ受付センターで金額などを確認してください。18リットル缶以上は粗大ごみ。";
      break;

    case /漂白剤の容器/.test(message):
      returnMessage =
        "漂白剤の容器の分別方法\n\n分別：可燃ごみ\n出し方\n漂白剤の中身については、布とか、新聞にしみこませて買い物袋等に入れて、可燃ごみとしてだす。";
      break;

    case /肥料/.test(message):
    case /ひりょう/.test(message):
      returnMessage =
        "肥料の分別方法\n\n分別：出せないごみ\n出し方\n販売店に相談してください。";
      break;

    //ふ行
    case /ファイル/.test(message):
      returnMessage =
        "ファイルの分別方法\n\n【ファイル 紙製】\n分別：資源化物\n出し方\n金具は不燃ごみに出す\n\n【ファイル プラスチック製】\n分別：可燃ごみ\n出し方\n金具は不燃ごみに出す";
      break;

    case /ファクス/.test(message):
      returnMessage =
        "ファクスの分別方法\n\n【ファクス 18ℓ缶未満】\n分別：小型家電\n出し方\n協力店舗・市有施設等に持ち込む。\n\n【ファクス 18ℓ缶以上】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:粗大ごみ受付センターで金額などを確認。";
      break;

    case /ファンシーケース/.test(message):
      returnMessage =
        "ファンシーケースの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /ファンヒーター/.test(message):
      returnMessage =
        "ファンヒーターの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /フィルム/.test(message):
      returnMessage = "フィルムの分別方法\n\n分別：可燃ごみ";
      break;

    case /封筒/.test(message):
    case /ふうとう/.test(message):
      returnMessage = "封筒の分別方法\n\n分別：資源化物";
      break;

    case /ブーツ/.test(message):
      returnMessage = "ブーツの分別方法\n\n分別：可燃ごみ";
      break;

    case /ふすま/.test(message):
    case /襖/.test(message):
      returnMessage =
        "ふすまの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /ふた/.test(message):
    case /フタ/.test(message):
    case /蓋/.test(message):
      returnMessage =
        "ふたの分別方法\n\n【ふた プラスチック製】\n分別：可燃ごみ\n\n【ふた 金属製】\n分別：不燃ごみ";
      break;

    case /仏壇/.test(message):
    case /仏具/.test(message):
    case /ぶつだん/.test(message):
      returnMessage =
        "仏壇の分別方法\n\n分別：出せないごみ\n出し方\n販売店へ相談";
      break;

    case /布団/.test(message):
    case /ふとん/.test(message):
      returnMessage =
        "布団の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円\n\n【ふとんカバー】\n分別：資源化物\n出し方\n十字に縛って出す\n\n【羽毛布団】\n分別：粗大ごみ\n出し方\n他の布団と分け、ひもで十字に縛って出す\n\n【布団乾燥機】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /フライパン/.test(message):
      returnMessage =
        "フライパンの分別方法\n\n分別：不燃ごみ\n出し方\n18ℓ缶以上は粗大";
      break;

    case /ブラインド/.test(message):
      returnMessage =
        "ブラインドの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /ぶら下がり健康器/.test(message):
      returnMessage =
        "ぶら下がり健康器の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:500円・18ℓ缶未満は可燃";
      break;

    case /プラスチック収納ケース/.test(message):
      returnMessage =
        "プラスチック収納ケースの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円\n\n【プラスチック製品（シャンプーの容器等）】\n分別：可燃ごみ";
      break;

    case /ブランコ/.test(message):
      returnMessage =
        "ブランコの分別方法\n\n【ブランコ プラスチック製室内用】\n分別：粗大ごみ\n\n【ブランコ プラスチック製以外】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:1000円";
      break;

    case /プランター/.test(message):
      returnMessage =
        "プランターの分別方法\n\n【プランター（プラスチック製）18ℓ缶未満】\n分別：可燃ごみ\n\n【プランター（プラスチック製）18ℓ缶以上】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 粗大ごみ受付センターで金額などを確認";
      break;

    case /プリペイドカード/.test(message):
      returnMessage = "プリペイドカードの分別方法\n\n分別：可燃ごみ";
      break;

    case /ブルーシート/.test(message):
      returnMessage =
        "ブルーシートの分別方法\n\n分別：可燃ごみ\n出し方\n1辺の長さ60cm以下に切り、有料指定袋にいれて出す";
      break;

    case /古本/.test(message):
      returnMessage = "古本の分別方法\n\n分別：資源化物\n出し方\n古紙";
      break;

    case /フロアマット/.test(message):
      returnMessage =
        "フロアマット（自動車用）の分別方法\n\n分別：出せないごみ\n出し方\n販売店に相談";
      break;

    case /フロッピーディスク/.test(message):
      returnMessage = "フロッピーディスクの分別方法\n\n分別：可燃ごみ";
      break;

    case /風呂ふた/.test(message):
    case /風呂蓋/.test(message):
      returnMessage =
        "風呂ふたの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円\n\n【風呂マット 60cm以下】\n分別：可燃ごみ\n\n【風呂マット 60cm超180cm以下】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /ブロック/.test(message):
      returnMessage =
        "ブロックの分別方法\n\n【ブロック（おもちゃ）】\n分別：可燃ごみ\n\n【ブロック（コンクリート）】\n分別：出せないごみ\n出し方\n販売店に相談";
      break;

    case /文鎮/.test(message):
    case /ぶんちん/.test(message):
      returnMessage = "の分別方法\n\n分別：不燃ごみ";
      break;

    //へ行

    case /ヘアーブラシ/.test(message):
      returnMessage =
        "ヘアーブラシの分別方法\n\n分別：可燃ごみ\n\n【ヘアースプレー空き缶】\n分別：資源化物\n出し方\n使い切ってから火気のない所で穴を開けて出す 空き缶の出し方参照";
      break;

    case /ヘッドホン/.test(message):
      returnMessage =
        "ヘッドホンのみの分別方法\n\n【ヘッドホンのみ】\n分別：小型家電\n出し方\n協力店舗・市有施設等に持ち込む。\n\n【ヘッドホンステレオ】\n分別：小型家電\n出し方\n協力店舗・市有施設等に持ち込む。";
      break;

    case /ペット関連/.test(message):
      returnMessage =
        "ペット用品の分別方法\n\n【ペットフードの空き缶】\n分別：資源化物\n出し方\n缶のふたも資源化物\n\n【ペット用の砂（プラスチック製）】\n分別：可燃ごみ\n\n【ペット用かご又は小屋（90cm以下）】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:500円\n\n【ペット用かご又は小屋（90cm超150cm以下）】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:1000円\n\n【ペット用かご又は小屋（分解された150cm超のもの）】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:2500円\n\n【ペット用トイレマット】\n分別：可燃ごみ";
      break;

    case /ベッド/.test(message):
      returnMessage =
        "ベッドの分別方法\n\n【ベッド 介護用以外のもの・マットレスを除く】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:1000円\n\n【ベッド ソファーベッド】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:1000円\n\n【ベッド 介護用・マットレスを除く】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:1500円（分解されたもの）\n\n【ベッド スプリング入りベッドマットレス】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:2500円\n\n【パイプベッド】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:1000円";
      break;

    case /ベビーグッズ/.test(message):
    case /ベビー用品/.test(message):
      returnMessage =
        "ベビー用品の分別方法\n\n【ベビーカー（手押し車含む）】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円\n\n【ベビーチェア】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円\n\n【ベビーバス】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円（分解されたもの）\n\n【ベビーベッド（マットレスを除く）】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:500円";
      break;

    case /ベニヤ板/.test(message):
      returnMessage =
        "ベニヤ板の分別方法\n\n分別：粗大ごみ\n出し方\n長さ35cm以下のものは有料指定袋にいれて可燃ごみにだす";
      break;

    case /ヘルスメーター/.test(message):
      returnMessage =
        "ヘルスメーターの分別方法\n\n分別：小型家電\n出し方\n協力店舗・市有施設に等に持ち込む";
      break;

    case /ベルト/.test(message):
      returnMessage =
        "ベルトの分別方法\n\n分別：可燃ごみ\n出し方\n金具部分は不燃";
      break;

    case /ヘルメット/.test(message):
      returnMessage =
        "ヘルメットの分別方法\n\n【ヘルメット 自転車用】\n分別：可燃ごみ\n【ヘルメット バイク用】\n分別：不燃ごみ";
      break;

    case /ペンキ/.test(message):
      returnMessage =
        "ペンキの分別方法\n\n分別：出せないごみ\n出し方\n販売店へ相談\n\n【ペンキの空き缶】\n分別：不燃ごみ";
      break;

    case /便座/.test(message):
      returnMessage =
        "便座の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /ベンジン/.test(message):
      returnMessage =
        "ベンジンの分別方法\n\n分別：出せないごみ\n出し方\n販売店へ相談";
      break;

    case /ペンチ/.test(message):
      returnMessage = "ペンチの分別方法\n\n分別：不燃ごみ";
      break;

    //ほ行
    case /ホース/.test(message):
      returnMessage =
        "ホースの分別方法\n\n分別：可燃ごみ\n出し方\n60cm以下に切る\nm【ホース（ワイヤー入り）】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n：粗大ごみ受付センターで金額などを確認してください\n【ホースリール（ドラム）】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /ボウリングのボール/.test(message):
    case /ボウリングボール/.test(message):
    case /ボウリング玉/.test(message):
      returnMessage = "ボウリングのボールの分別方法\n\n分別：不燃ごみ";
      break;

    case /ボール紙/.test(message):
      returnMessage =
        "ボール紙（菓子箱など）の分別方法\n\n分別：資源化物\n出し方\n古紙";
      break;

    case /ボールペン/.test(message):
      returnMessage =
        "ボールペン外の分別方法\n\n【ボールペン 金属製以外】\n分別：可燃ごみ\n\n【ボールペン 金属製】\nn分別：不燃ごみ";
      break;

    case /ボール/.test(message):
      returnMessage = "ボールの分別方法\n\n分別：可燃ごみ";
      break;

    case /ホーロー鍋/.test(message):
      returnMessage = "ホーロー鍋の分別方法\n\n分別：不燃ごみ";
      break;

    case /ホイール/.test(message):
    case /タイヤ/.test(message):
      returnMessage =
        "/ホイールの分別方法\n\n分別：出せないごみ\n出し方\n販売店へ相談";
      break;

    case /望遠鏡/.test(message):
      returnMessage =
        "望遠鏡の分別方法\n\n分別：不燃ごみ\n出し方\n18ℓ缶以上は粗大ごみ";
      break;

    case /帽子/.test(message):
      returnMessage = "帽子の分別方法\n\n分別：資源化物\n出し方\n古布";
      break;

    case /包装紙/.test(message):
      returnMessage = "包装紙の分別方法\n\n分別：資源化物\n出し方\n古紙";
      break;

    case /ボウル/.test(message):
      returnMessage =
        "ボウルの分別方法\n\n【ボウル プラスチック製】\n分別：可燃ごみ\n\n【ボウル 金属製】\n分別：不燃ごみ";
      break;

    case /包丁/.test(message):
      returnMessage =
        "包丁の分別方法\n\n分別：不燃ごみ\n出し方\n刃物部分は紙等に包んで出す\n\n【包丁研ぎ器】\n分別：不燃ごみ";
      break;

    case /防虫剤/.test(message):
      returnMessage = "防虫剤の分別方法\n\n分別：可燃ごみ";
      break;

    case /歩行器/.test(message):
      returnMessage =
        "歩行器の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:粗大ごみ受付センターで金額を確認";
      break;

    case /ボタン電池/.test(message):
      returnMessage =
        "ボタン電池の分別方法\n\n分別：資源化物\n出し方\n資源化物と同じときに専用コンテナに出す";
      break;

    case /ホチキス/.test(message):
    case /ホッチキス/.test(message):
    case /ステープラー/.test(message):
      returnMessage =
        "ホチキスの分別方法\n\n分別：可燃ごみ\n\n【ホチキス針】\n分別：不燃ごみ";
      break;

    case /ホットカーペット/.test(message):
      returnMessage =
        "ホットカーペットの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /ホットプレート/.test(message):
      returnMessage =
        "ホットプレートの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /ポット/.test(message):
    case /魔法ビン/.test(message):
      returnMessage = "ポットの分別方法\n\n分別：不燃ごみ";
      break;

    case /ボディボード/.test(message):
      returnMessage =
        "ボディボードの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:粗大ごみ受付センターで金額を確認";
      break;

    case /ほ乳ビン/.test(message):
    case /ほ乳瓶/.test(message):
    case /哺乳瓶/.test(message):
    case /哺乳ビン/.test(message):
      returnMessage =
        "ほ乳ビン製の分別方法\n\n【ほ乳ビン プラスチック製】\n分別：可燃ごみ\n\n【ほ乳ビン ガラス製】\n分別：不燃ごみ";
      break;

    case /ポリタンク/.test(message):
      returnMessage =
        "ポリタンクの分別方法\n\n【ポリタンク 18ℓ缶未満】\n分別：可燃ごみ\n\n【ポリタンク 18ℓ缶以上】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /ポリバケツ/.test(message):
      returnMessage =
        "ポリバケツの分別方法\n\n【ポリバケツ 18ℓ缶未満】\n分別：可燃ごみ\n\n【ポリバケツ 18ℓ缶以上】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /ポリ容器/.test(message):
      returnMessage =
        "ポリ容器の分別方法\n\n【ポリ容器 18ℓ缶未満】\n分別：可燃ごみ\n\n【ポリ容器 18ℓ缶以上】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /保冷剤/.test(message):
      returnMessage = "保冷剤の分別方法\n\n分別：可燃ごみ";
      break;

    case /本棚/.test(message):
      returnMessage =
        "本棚の分別方法\n\n【本棚 120cm以下】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:1000円\n\n【本棚 120cm以下超】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:1500円";
      break;

    case /ボンボンベッド/.test(message):
    case /サマーベッド/.test(message):
      returnMessage =
        "ボンボンベッドの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n:500円";
      break;
    //ま行のゴミ
    case /麻雀卓/.test(message):
    case /マージャン卓/.test(message):
    case /雀卓/.test(message):
      returnMessage = "麻雀卓の分別方法\n分別：粗大ごみ";
      break;

    case /麻雀パイ/.test(message):
    case /麻雀牌/.test(message):
    case /雀牌/.test(message):
    case /ジャンパイ/.test(message):
    case /じゃんぱい/.test(message):
      returnMessage =
        "麻雀パイ（プラスチック・象牙等）の分別方法\n分別：可燃ごみ";
      break;

    case /マイク/.test(message):
      returnMessage = "マイクの分別方法\n分別：小型家電";
      break;

    case /マウス/.test(message):
      returnMessage = "マウス（パソコン）の分別方法\n\n分別：小型家電";
      break;

    case /マグネット/.test(message):
    case /磁石/.test(message):
      returnMessage = "マグネット（磁石）の分別方法\n\n分別：不燃ごみ";
      break;

    case /枕/.test(message):
    case /まくら/.test(message):
      returnMessage =
        "まくらの分別方法\n\n【まくら（18ℓ缶未満）】\n分別：可燃ごみ\n\n【まくら（18ℓ缶以上）】\n分別：粗大ごみ";
      break;

    case /マジックペン/.test(message):
      returnMessage = "マジックペンの分別方法\n\n分別：可燃ごみ";
      break;

    case /マッサージ機/.test(message):
    case /マッサージ器/.test(message):
      returnMessage =
        "マッサージ機の分別方法\n\n【マッサージ機（18ℓ缶未満）】\n分別：小型家電\n\n【マッサージ機（18ℓ缶以上いす型以外）】\n分別：粗大ごみ\n持ち込み：無料\n 戸別収集手数料\n:500円\n\n【マッサージ機（いす型のもの）】\n分別：粗大ごみ\n持ち込み：無料\n 戸別収集手数料\n:2500円";
      break;

    case /マッチ/.test(message):
      returnMessage =
        "マッチの分別方法\n\n分別：可燃ごみ\n出し方：水に湿らせてから袋に入れて少量ずつ出してください。";
      break;

    case /マットレス/.test(message):
      returnMessage =
        "マットレスの分別方法\n\n【マットレス（スプリング入りを除く）】\n分別：粗大ごみ\n持ち込み：無料\n 戸別収集手数料\n:200円（折りたたみできるもの）\n\n【マットレス（スプリング入り）】\n分別：粗大ごみ\n持ち込み：無料\n 戸別収集手数料\n:2500円";
      break;

    case /窓ガラス/.test(message):
      returnMessage =
        "窓ガラスの分別方法\n\n分別：不燃ごみ　※35cm以上の物は粗大ごみで出してください。";
      break;

    case /まな板/.test(message):
      returnMessage =
        "まな板（木製・プラスチック製）の分別方法\n\n分別：可燃ごみ";
      break;

    case /マニキュアの瓶/.test(message):
    case /マニキュア/.test(message):
      returnMessage = "マニキュアの瓶の分別方法\n\n分別：不燃ごみ";
      break;

    case /豆電球/.test(message):
      returnMessage = "豆電球の分別方法\n\n分別：不燃ごみ";
      break;

    case /漫画本/.test(message):
    case /まんが本/.test(message):
    case /漫画/.test(message):
      returnMessage = "まんが本の分別方法\n\n分別：資源化物\n出し方\n：古紙";
      break;

    //み行
    case /ミキサー/.test(message):
    case /ジューサー/.test(message):
      returnMessage =
        "ミキサー（ジューサー）の分別方法\n\n分別：小型電球\nガラス部分は不燃ごみとして出してください。";
      break;

    case /ミシン/.test(message):
      returnMessage =
        "ミシンの分別方法\n\n【ミシン（卓上用）】\n分別：粗大ごみ\n持ち込み：無料\n 戸別収集手数料\n:200円\n\n【ミシン（卓上ミシンを除く）\n分別：粗大ごみ\n持ち込み：無料\n 戸別収集手数料\n:1000円";
      break;

    case /水枕/.test(message):
    case /氷枕/.test(message):
      returnMessage =
        "水枕（氷枕）の分別方法\n\n分別：可燃ごみ\n出し方\n：ゴム製品";
      break;

    case /ミニコンポセット/.test(message):
    case /ミニコンポ/.test(message):
      returnMessage =
        "ミニコンポセットの分別方法\n\n分別：粗大ごみ\n持ち込み：無料\n 戸別収集手数料\n:500円";
      break;

    case /MD/.test(message):
    case /ミニディスク/.test(message):
      returnMessage = "MD（ミニディスク）の分別方法\n\n分別：可燃ごみ";
      break;

    //む行
    case /虫かご/.test(message):
      returnMessage =
        "虫かごの分別方法\n\n【虫かご（プラスチック製）】\n分別：可燃ごみ\n\n【虫かご（金属製）】\n分別：不燃ごみ";
      break;

    case /虫めがね/.test(message):
    case /虫メガネ/.test(message):
      returnMessage =
        "虫メガネの分別方法\n\n分別：不燃ごみ\n：プラスチック製の場合は可燃ごみで出してください。";
      break;

    //め行
    case /名刺/.test(message):
      returnMessage = "名刺の分別方法\n\n分別：資源ごみ\n出し方\n：古紙";
      break;

    case /メガネ/.test(message):
    case /眼鏡/.test(message):
      returnMessage =
        "メガネの分別方法\n\n【メガネ（プラスチック製）】\n分別：可燃ごみ\n\n【メガネ（金属製＋ガラス）】\n分別：不燃ごみ";
      break;

    case /メジャー/.test(message):
    case /巻尺/.test(message):
      returnMessage = "メジャー（金属製）の分別方法\n\n分別：不燃ごみ";
      break;

    //も行
    case /毛布/.test(message):
      returnMessage =
        "毛布（ベビー用含む）の分別方法\n\n分別：資源化物\n出し方：古布として透明化半透明のナイロン袋に入れて出してください。";
      break;

    case /木材/.test(message):
      returnMessage =
        "木材の分別方法\n\n分別：可燃ごみ\n出し方：長さ35cm以下、太さ直径12cm以下もしくは、太さ8cm角にして、有料指定袋に入れて出してください。";
      break;

    case /モップセット/.test(message):
    case /モップ/.test(message):
      returnMessage =
        "モップセットの分別方法\n\n【モップセット（鉄製の柄）】\n分別：粗大ごみ\n\n【モップセット（木製）】\n分別：可燃ごみ\n出し方：60cmに切って出してください。\n※できない場合は粗大ごみで出してください\n\n【モップセット（プラスチック製）】\n分別：可燃ごみ\n出し方：60cmに切って出してください。\n※できない場合は粗大ごみで出してください";
      break;

    case /餅つき機/.test(message):
      returnMessage =
        "餅つき機の分別方法\n\n分別：粗大ごみ\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /物置/.test(message):
      returnMessage =
        "物置（分解されたもののみ）（120cm超）の分別方法\n\n分別：粗大ごみ\n持ち込み：無料\n 戸別収集手数料\n:2500円";
      break;

    case /ものさし/.test(message):
    case /物差し/.test(message):
      returnMessage =
        "ものさしの分別方法\n\n【ものさし（木・プラスチック製）】\n分別：可燃ごみ\n\n【ものさし（金属製）】\n分別：不燃ごみ";
      break;

    case /物干し竿/.test(message):
      returnMessage =
        "物干し竿（2本まで1組）の分別方法\n\n分別：粗大ごみ\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    case /物干し台/.test(message):
      returnMessage =
        "物干し台（1対）の分別方法\n\n分別：粗大ごみ\n持ち込み：無料\n 戸別収集手数料\n:200円";
      break;

    //や行
    case /やかん/.test(message):
      returnMessage = "やかんの分別方法\n \n分別：不燃ごみ";
      break;

    case /野球グローブ/.test(message):
      returnMessage = "野球グローブの分別方法\n \n分別：可燃ごみ";
      break;

    case /柳行李/.test(message):
      returnMessage = "柳行李（やなぎごうり）の分別方法\n \n分別：粗大ごみ";
      break;

    case /屋根瓦/.test(message):
      returnMessage = "屋根瓦の分別方法\n \n分別：出せないごみ";
      break;

    case /資源化物/.test(message):
      returnMessage = "資源化物の分別方法\n \n分別：古布";
      break;
    //ゆ行
    case /ゆたんぽ/.test(message):
      returnMessage =
        "ゆたんぽ(金属製)の分別方法\n \n分別：不燃ごみ \nゆたんぽ(プラスチック製)\n \n分別:可燃ゴミ ";
      break;

    case /タンス/.test(message):
    case /箪笥/.test(message):
    case /たんす/.test(message):
      returnMessage = "洋服タンスの分別方法\n \n分別：粗大ごみ";
      break;
    //よ行
    case /浴槽/.test(message):
      returnMessage =
        "浴槽の分別方法\n \n分別：粗大ごみ \n持ち込み：無料 \n戸別収集手数料:1500円";
      break;

    case /よしず/.test(message):
    case /葦簀/.test(message):
      returnMessage =
        "よしずの分別方法\n \n分別：粗大ごみ　\n出し方:　\n180cm以下に切る \n持ち込み：無料 \n戸別収集手数料：200円";
      break;

    //ら行
    case /ライター/.test(message):
      returnMessage =
        "ライター(金属製)の分別方法\n \n分別：不燃ごみ \n使い捨てライターの分別方法 \n分別: 可燃ごみ ";
      break;

    case /ラケット/.test(message):
      returnMessage =
        "ラケット(卓球等)の分別方法\n \n分別：可燃ごみ \nラケット(テニス等)の分別方法\n \n分別: 可燃ごみ \nラケット(金属製)の分別方法\n \n分別: 可燃ごみ ";
      break;

    case /ラジオ/.test(message):
      returnMessage = "ラジオの分別方法\n \n分別：小型家電 ";
      break;

    case /ラジコン/.test(message):
      returnMessage =
        "ラジコン(18ℓ缶未満)の分別方法\n \n分別：小型家電 \nラジコン（18ℓ缶以上）の分別方法 \n分別: 粗大ごみ";
      break;

    case /ラップ/.test(message):
      returnMessage =
        "ラップ(フィルム)の分別方法\n \n分別：可燃ごみ \nラップ(芯)の分別方法\n \n分別: 資源化物 \n出し方: 古布(ひとまとめにし、透明又は半透明の袋に入れて出してください。（有料指定袋で出す必要はありません） \nラップ(箱)の分別方法 \n分別: 資源化物 \n出し方: 古布(ひとまとめにし、透明又は半透明の袋に入れて出してください。（有料指定袋で出す必要はありません） ";
      break;

    case /ラブチェアー/.test(message):
      returnMessage =
        "ラブチェアーの分別方法\n \n分別：粗大ごみ \n金額: 持ち込み：無料\n  戸別収集手数料\n：500円 ";
      break;

    case /ランケーブル/.test(message):
    case /LANケーブル/.test(message):
    case /lanケーブル/.test(message):
      returnMessage = "ランケーブルの分別方法\n \n分別：小型家電 ";
      break;

    case /ランドセル/.test(message):
      returnMessage = "ランドセルの分別方法\n \n分別：可燃ごみ ";
      break;

    case /ランニングマシーン/.test(message):
      returnMessage =
        "ランニングマシーンの分別方法\n \n分別：粗大ごみ　\n金額: 持ち込み：無料\n  戸別収集手数料\n：500円";
      break;

    //り行
    case /リコーダー/.test(message):
      returnMessage = "リコーダーの分別方法\n \n分別：資源化物";
      break;

    case /リチウム電池/.test(message):
      returnMessage =
        "リチウム電池の分別方法\n \n分別：可燃ごみ \n出し方: 資源化物と同じときに専用コンテナに出してください。";
      break;

    case /リモコン/.test(message):
      returnMessage = "リモコンの分別方法\n \n分別：小型家電";
      break;

    case /旅行かばん/.test(message):
    case /旅行カバン/.test(message):
    case /旅行鞄/.test(message):
      returnMessage =
        "旅行かばん（スーツケース）の分別方法\n \n分別：粗大ごみ \n金額: 持ち込み：無料\n  戸別収集手数料\n：200円";
      break;

    case /リール/.test(message):
      returnMessage = "リール(釣り用)の分別方法\n \n分別：不燃ごみ ";
      break;

    case /リンスの容器/.test(message):
      returnMessage = "リンスの容器の分別方法\n \n分別：可燃ごみ";
      break;

    //る行
    case /ルアー/.test(message):
      returnMessage =
        "ルアー（つり用）の分別方法\n \n分別：可燃ごみ \nルアー(金属製)の分別方法 \n分別: 不燃ごみ ";
      break;

    case /ルーフキャリア/.test(message):
      returnMessage = "ルーフキャリアの分別方法\n \n分別：粗大ごみ ";
      break;

    case /ルームランナー/.test(message):
      returnMessage =
        "ルームランナーの分別方法\n \n分別：粗大ごみ \n金額: 持ち込み：無料\n  戸別収集手数料：500円 ";
      break;

    //れ行
    case /レーザーディスク/.test(message):
      returnMessage = "レーザーディスクの分別方法\n\n分別：可燃ごみ";
      break;

    case /レーザーディスクプレイヤー/.test(message):
    case /LDプレイヤー/.test(message):
    case /ldプレイヤー/.test(message):
      returnMessage =
        "レーザーディスクプレイヤーの分別方法\n\n分別：小型家電\n出し方\n18ℓ缶以上は粗大ごみ";
      break;

    case /冷蔵庫/.test(message):
      returnMessage =
        "冷蔵庫の分別方法\n\n分別：家電4品目\n出し方\n粗大ごみで個別収集の場合は、家電リサイクル料＋個別収集手数料 家電4品目の出し方を参照\n\n【冷凍庫】\n分別：家電4品目\n出し方\n粗大ごみで個別収集の場合は、家電リサイクル料＋個別収集手数料 家電4品目の出し方を参照";
      break;

    case /冷風機/.test(message):
      returnMessage =
        "冷風機の分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n：200円";
      break;

    case /レインコート/.test(message):
      returnMessage = "レインコートの分別方法\n\n分別：可燃ごみ";
      break;

    case /レコード盤/.test(message):
      returnMessage = "レコード盤の分別方法\n\n分別：可燃ごみ";
      break;

    case /レコードプレイヤー/.test(message):
      returnMessage =
        "レコードプレイヤーの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n：200円";
      break;

    case /レシート/.test(message):
      returnMessage = "レシートの分別方法\n\n分別：資源化物\n出し方\n古紙";
      break;

    case /レジャーシート/.test(message):
      returnMessage =
        "レジャーシートの分別方法\n\n分別：可燃ごみ\n出し方\n60cmに切って出す";
      break;

    case /れんが/.test(message):
    case /レンガ/.test(message):
      returnMessage =
        "れんがの分別方法\n\n分別：出せないごみ\n出し方\n販売店か、取扱店へ相談";
      break;

    case /レンジ台/.test(message):
      returnMessage =
        "レンジ台の分別方法\n\n【レンジ台 90cm以下】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n：500円\n\n【レンジ台 90cm超】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n：1000円";
      break;

    case /練炭/.test(message):
      returnMessage = "練炭の分別方法\n\n分別：可燃ごみ";
      break;

    //ろ行
    case /老眼鏡/.test(message):
      returnMessage =
        "老眼鏡の分別方法\n\n【老眼鏡 プラスチック製】\n分別：可燃ごみ\n\n【老眼鏡 金属製＋ガラス】\n分別：不燃ごみ";
      break;

    case /ローソク/.test(message):
    case /蝋燭/.test(message):
    case /ろうそく/.test(message):
      returnMessage = "ローソクの分別方法\n\n分別：可燃ごみ";
      break;

    case /ローチェスト/.test(message):
      returnMessage =
        "ローチェストの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n：粗大ごみ受付センターで金額などを確認";
      break;

    case /ロープ/.test(message):
      returnMessage =
        "ロープの分別方法\n\n分別：可燃ごみ\n出し方\n60cmに切って出す";
      break;

    case /ローラースケート/.test(message):
      returnMessage =
        "ローラースケート（インラインスケート）の分別方法\n\n分別：可燃ごみ\n出し方\n金属製のものは不燃ごみ";
      break;

    case /ロールカーテン/.test(message):
      returnMessage =
        "ロールカーテンの分別方法\n\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n：粗大ごみ受付センターで金額などを確認";
      break;

    case /ロッカー/.test(message):
      returnMessage =
        "ロッカーの分別方法\n\n【ロッカー 120cm以下】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n：1000円\n\n【ロッカー 120cm超】\n分別：粗大ごみ\n出し方\n持ち込み：無料\n 戸別収集手数料\n：1500円";
      break;

    //ワ行
    case /ワープロ/.test(message):
      returnMessage =
        "ワープロ（ノート型）の分別方法\n \n分別：小型家電 \nワープロ（ノート型以外）\n \n分別: 粗大ごみ\n \n金額 持ち込み：無料  戸別収集手数料：200円";
      break;

    case /ワープロ用インクリボン/.test(message):
      returnMessage = "ワープロ用インクリボンの分別方法\n \n分別：可燃ごみ";
      break;

    case /ワイシャツ/.test(message):
      returnMessage =
        "ワイシャツの分別方法\n \n分別：資源化物 \n出し方: 古布(ひとまとめにし、透明又は半透明の袋に入れて出してください。（有料指定袋で出す必要はありません）";
      break;

    case /ワイヤーハンガー/.test(message):
      returnMessage = "ワイヤーハンガーの分別方法\n \n分別：不燃ごみ";
      break;

    case /ワインセラー/.test(message):
      returnMessage =
        "ワインセラー(ワイン庫）家庭用のものの分別方法\n \n分別：家電4品目 \n出し方: 家電リサイクル料＋個別収集手数料 家電4品目の出し方を参照です。";
      break;

    case /綿/.test(message):
    case /わた/.test(message):
      returnMessage = "綿（わた）の分別方法\n \n分別：可燃ごみ ";
      break;

    case /ワゴン/.test(message):
      returnMessage =
        "ワゴン(60cm以下)の分別方法\n \n分別：粗大ごみ \n金額 持ち込み：無料  戸別収集手数料：200円 \nワゴン(60cm超)の分別方法 \n分別: 粗大ごみ \n金額: 持ち込み：無料  戸別収集手数料：500円";
      break;

    case /和服/.test(message):
      returnMessage =
        "和服の分別方法\n \n分別： 資源化物 \n出し方: 古布(ひとまとめにし、透明又は半透明の袋に入れて出してください。（有料指定袋で出す必要はありません）";
      break;

    case /割り瓶/.test(message):
    case /割れ瓶/.test(message):
    case /割れたビン/.test(message):
    case /割れたびん/.test(message):
    case /割れた瓶/.test(message):
      returnMessage =
        "割れたビンの分別方法\n \n分別：不燃ごみ　\n出し方: 新聞紙等に包み「危険」と書いて出してください。";
      break;

    //なにもマッチしなかった場合
    default:
      returnMessage = "何もマッチしなかった場合のメッセージ";
      break;
  }
  return returnMessage;
}
