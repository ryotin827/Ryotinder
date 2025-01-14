// HTML要素を取得
const photoElement = document.getElementById("profile-photo");
const descriptionElement = document.getElementById("profile-description");
const matchMessage = document.getElementById("match-message");
const likeButton = document.getElementById("like-btn");
const skipButton = document.getElementById("skip-btn");

// 画像とコメントをペアで保持
const profiles = [
    { photo: "images/photo1-min.JPEG", description: "目があった人を石にしたいです！" },
    { photo: "images/photo2-min.JPEG", description: "最近はお歯黒にハマってます！" },
    { photo: "images/photo3-min.JPEG", description: "スヌーピー好きな人と仲良くしたいです！" },
    { photo: "images/photo4-min.JPEG", description: "小さいときからよくおもしろいと言われました！" },
    { photo: "images/photo5-min.JPEG", description: "リュックが好きです。よろしくおねがいします。" },
    { photo: "images/photo6-min.JPEG", description: "お金持ちで可愛いくて頭いい人とマッチしたいです！" },
    { photo: "images/photo7-min.JPEG", description: "僕とマッチしたい人いいねお願いします！" },
    { photo: "images/photo8-min.JPEG", description: "韓国アイドル風です！" },
    { photo: "images/photo9-min.JPEG", description: "包み隠さずに過ごしたいです！" },
    { photo: "images/photo10-min.JPEG", description: "プリクラで盛れました！" },
    { photo: "images/photo11-min.JPEG", description: "野球好きな人とゲッツーしたいです！" },
    { photo: "images/photo12-min.JPEG", description: "暇なときは常に茶を立ててます。" },
    { photo: "images/photo13-min.JPEG", description: "日本の夜明けは近いぜよ！です！" },
    { photo: "images/photo14-min.JPEG", description: "おしゃれ好きさんと繋がりたいです！" },
    { photo: "images/photo15-min.JPEG", description: "深夜にパンケーキ作って食べちゃいます！" },
    { photo: "images/photo16-min.JPEG", description: "プリクラで盛れました！" },
    { photo: "images/photo17-min.JPEG", description: "仲良くしてください！" },
    { photo: "images/photo18-min.JPEG", description: "休みの日は部屋でより目してます。" },
    { photo: "images/photo19-min.JPEG", description: "サプライズしてくれる人が好きです。" },
    { photo: "images/photo20-min.JPEG", description: "近畿大学に通っています！" },
    { photo: "images/photo21-min.JPEG", description: "ブルーノマーズに憧れています！" },
    { photo: "images/photo22-min.JPEG", description: "おしりの割れ目が可愛いです！" },
    { photo: "images/photo23-min.JPEG", description: "たまにすねてしまいます！" },
    { photo: "images/photo24-min.JPEG", description: "サラサラマッシュヘアです！" },
    { photo: "images/photo25-min.JPEG", description: "ロングヘアはお好きですか？" },
    { photo: "images/photo26-min.JPEG", description: "喧嘩強いです！" },
    { photo: "images/photo27-min.JPEG", description: "ファンキーです！仲良くしましょう！" },
    { photo: "images/photo28-min.JPEG", description: "こんな僕ですが、仲良くしましょう！" },
    { photo: "images/photo29-min.JPEG", description: "ニッチェです！" },
    { photo: "images/photo30-min.JPEG", description: "アフロ！アフロ！アフロ！" },
    { photo: "images/photo31-min.JPEG", description: "普通免許持ってます！どこか行きましょう！" },
    { photo: "images/photo32-min.JPEG", description: "野球やってました！" },
    { photo: "images/photo33-min.JPEG", description: "元高校球児です！" },
    { photo: "images/photo34-min.JPEG", description: "アフロです！アフロ好きな人よろしく！" },
    { photo: "images/photo35-min.JPEG", description: "一緒にお出かけしたいです！" },
    { photo: "images/photo36-min.JPEG", description: "BBQのときはいっぱい焼きます！" },
    { photo: "images/photo37-min.JPEG", description: "仲良くしてください！" },
    { photo: "images/photo38-min.JPEG", description: "ついつい甘いもの食べちゃうます笑" },
    { photo: "images/photo39-min.JPEG", description: "趣味は自転車です！" },
    { photo: "images/photo40-min.JPEG", description: "昔は太っていました！" },
    { photo: "images/photo41-min.JPEG", description: "まずはお話しましょう！" },
    { photo: "images/photo42-min.JPEG", description: "たくさん笑かしてくれる人が好きです！" },
    { photo: "images/photo43-min.JPEG", description: "Nice to meet you! I love you!" },
    { photo: "images/photo44-min.JPEG", description: "まずは観覧車に乗りに行きましょう！" },
    { photo: "images/photo45-min.JPEG", description: "I am RYOTIN" },
    { photo: "images/photo46-min.JPEG", description: "タンクトップデートしたいです！" },
    { photo: "images/photo47-min.JPEG", description: "かわいいだけじゃだめですか？" },
    { photo: "images/photo48-min.JPEG", description: "I miss you. I want you." },
    { photo: "images/photo49-min.JPEG", description: "こんにちは！あ、夜の人はこんばんはwwwwww" },
    { photo: "images/photo50-min.JPEG", description: "一緒にランニングしてくれる人いませんか？" },
    { photo: "images/photo51-min.JPEG", description: "中学では番長でした！よろしく" },
    { photo: "images/photo52-min.JPEG", description: "家族ぐるみで仲良くしたいです！" },
    { photo: "images/photo53-min.JPEG", description: "パーマネントです！" },
    { photo: "images/photo54-min.JPEG", description: "ヘルメット侍もで良ければ仲良くしてください！" },
    { photo: "images/photo55-min.JPEG", description: "元々アフロでした！" },
    { photo: "images/photo56-min.JPEG", description: "一緒にアフロにしてくれる方募集してます！" },
    { photo: "images/photo57-min.JPEG", description: "リョウチンです！誠実な性格だとよく言われます。" },
    { photo: "images/photo58-min.JPEG", description: "面白いエピソードトークをしてくれる人がタイプです。" },
    { photo: "images/photo59-min.JPEG", description: "殴ってくれる人がタイプです！" },
    { photo: "images/photo60-min.JPEG", description: "こんにちは！好きな食べ物は焼き芋です！" },
    { photo: "images/photo61-min.JPEG", description: "韓国風ファッションです！" },
    { photo: "images/photo62-min.JPEG", description: "僕よりも車道側を歩いてくれる人と仲良くしたいです！" },
    { photo: "images/photo63-min.JPEG", description: "小学生時代から面白いね！とよく言われました。" },
    { photo: "images/photo64-min.JPEG", description: "結構強いです！よろしく！" },
    { photo: "images/photo65-min.JPEG", description: "女の子にもグイグイ威嚇できます！" },
    { photo: "images/photo66-min.JPEG", description: "大爆笑キャラです！笑ってください！" },
    { photo: "images/photo67-min.JPEG", description: "モヒカンが好きな人仲良くしてください！" },
    { photo: "images/photo68-min.JPEG", description: "こんにちは！とにかく仲良くしたいです！" },
    { photo: "images/photo69-min.JPEG", description: "こんにちは！ピザ屋さん！" },
    { photo: "images/photo70-min.JPEG", description: "甘いものが大好きです" },
    { photo: "images/photo71-min.JPEG", description: "こんにちは。特にないです" },
    { photo: "images/photo72-min.JPEG", description: "一緒にネットサーフィンしたいです！" },
    { photo: "images/photo73-min.JPEG", description: "最近はサングラスにハマってます！" },
    { photo: "images/photo74-min.JPEG", description: "サングラスをかけるのが趣味です！" },
    { photo: "images/photo75-min.JPEG", description: "シースルーの前髪が好きです！" },
    { photo: "images/photo76-min.JPEG", description: "運命の出会いを待ってます。" },
    { photo: "images/photo77-min.JPEG", description: "センター分け" },
    { photo: "images/photo78-min.JPEG", description: "アフロ歯磨きが好きな人よろしく！" },
    { photo: "images/photo79-min.JPEG", description: "一緒にユニバ行きたいです！" },
    { photo: "images/photo80-min.JPEG", description: "寝起きの顔は自信ないです。" },
    { photo: "images/photo81-min.JPEG", description: "こんにちは！一緒にダンスしましょう！" },
    { photo: "images/photo82-min.JPEG", description: "女の子に人気のマッシュヘアにしました！" },
    { photo: "images/photo83-min.JPEG", description: "マッシュでマッチョになりたいです！" },
    { photo: "images/photo84-min.JPEG", description: "映画好きです！一緒に映画見ましょう" },
    { photo: "images/photo85-min.JPEG", description: "一緒に一人旅行きたいです！" },
    { photo: "images/photo86-min.JPEG", description: "お酒強いです！勝負しましょう！" },
    { photo: "images/photo87-min.JPEG", description: "たぶん天才タイプ。ついてきてください。" },
    { photo: "images/photo88-min.JPEG", description: "キャンプ行きたいです！" },
    { photo: "images/photo89-min.JPEG", description: "美味しいご飯を届けたいです！" },
    { photo: "images/photo90-min.JPEG", description: "マッシュヘアが人気だと聞きました！" },
    { photo: "images/photo91-min.JPEG", description: "流行りのマッシュヘアです！" },
    { photo: "images/photo92-min.JPEG", description: "よろしくお願いします。お手柔らかに。" },
    { photo: "images/photo93-min.JPEG", description: "真摯に野球と向き合ってます。" },
];

// プロフィールをシャッフル
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(profiles); // シャッフルを実行
  
  let currentIndex = 0; // 現在のプロフィールインデックス
  
  // プロフィールを更新する関数
  function updateProfile() {
    if (profiles[currentIndex]) {
      photoElement.src = profiles[currentIndex].photo;
      descriptionElement.textContent = profiles[currentIndex].comment;
      matchMessage.classList.remove("active", "fixed"); // マッチをリセット
    } else {
      console.error(`プロフィールが見つかりません: ${currentIndex}`);
    }
  }
  
  // ボタンのクリックイベント設定
  likeButton.addEventListener("click", () => {
    const isMatch = Math.random() < 0.5; // 50%の確率でマッチ！
    if (isMatch) {
      matchMessage.style.transition = "none"; // トランジションを一時的に無効化
      matchMessage.classList.add("active");
      requestAnimationFrame(() => {
        matchMessage.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        setTimeout(() => {
          matchMessage.classList.remove("active"); // 大きい表示を解除
          matchMessage.classList.add("fixed"); // 小さく写真中央上部に移動
        }, 1500); // 1.5秒後に次のアニメーションへ
      });
    }
    likeButton.style.backgroundColor = "#ff1493";
    currentIndex = (currentIndex + 1) % profiles.length;
    updateProfile();
    setTimeout(() => {
      likeButton.style.backgroundColor = "white";
    }, 100);
  });
  
  skipButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % profiles.length;
    updateProfile();
  });
  
  // 初期化
  updateProfile();