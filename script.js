// HTML要素を取得
const photoElement = document.getElementById("profile-photo");
const descriptionElement = document.getElementById("profile-description");
const matchMessage = document.getElementById("match-message");
const likeButton = document.getElementById("like-btn");
const skipButton = document.getElementById("skip-btn");

// 画像ファイル名の配列
const photos = Array.from({ length: 93 }, (_, i) => `images/photo${i + 1}-min.JPEG`);

// コメントを配列に追加
const descriptions = [
    "目があった人を石にしたいです！",
    "最近はお歯黒にハマってます！",
    "スヌーピー好きな人と仲良くしたいです！",
    "小さいときからよくおもしろいと言われました！",
    "リュックが好きです。よろしくおねがいします。",
    "お金持ちで可愛いくて頭いい人とマッチしたいです！",
    "僕とマッチしたい人いいねお願いします！",
    "韓国アイドル風です！",
    "包み隠さずに過ごしたいです！",
    "プリクラで盛れました！",
    "野球好きな人とゲッツーしたいです！",
    "暇なときは常に茶を立ててます。",
    "日本の夜明けは近いぜよ！です！",
    "おしゃれ好きさんと繋がりたいです！",
    "深夜にパンケーキ作って食べちゃいます！",
    "プリクラで盛れました！",
    "仲良くしてください！",
    "休みの日は部屋でより目してます。",
    "サプライズしてくれる人が好きです。",
    "近畿大学に通っています！",
    "ブルーノマーズに憧れています！",
    "おしりの割れ目が可愛いです！",
    "たまにすねてしまいます！",
    "サラサラマッシュヘアです！",
    "ロングヘアはお好きですか？",
    "喧嘩強いです！",
    "ファンキーです！仲良くしましょう！",
    "こんな僕ですが、仲良くしましょう！",
    "ニッチェです！",
    "アフロ！アフロ！アフロ！",
    "普通免許持ってます！どこか行きましょう！",
    "野球やってました！",
    "元高校球児です！",
    "アフロです！アフロ好きな人よろしく！",
    "一緒にお出かけしたいです！",
    "BBQのときはいっぱい焼きます！",
    "仲良くしてください！",
    "ついつい甘いもの食べちゃうます笑",
    "趣味は自転車です！",
    "昔は太っていました！",
    "まずはお話しましょう！",
    "たくさん笑かしてくれる人が好きです！",
    "Nice to meet you! I love you!",
    "まずは観覧車に乗りに行きましょう！",
    "I am RYOTIN",
    "タンクトップデートしたいです！",
    "かわいいだけじゃだめですか？",
    "I miss you. I want you.",
    "こんにちは！あ、夜の人はこんばんはwwwwww",
    "一緒にランニングしてくれる人いませんか？",
    "中学では番長でした！よろしく",
    "家族ぐるみで仲良くしたいです！",
    "パーマネントです！",
    "ヘルメット侍もで良ければ仲良くしてください！",
    "元々アフロでした！",
    "一緒にアフロにしてくれる方募集してます！",
    "リョウチンです！誠実な性格だとよく言われます。",
    "面白いエピソードトークをしてくれる人がタイプです。",
    "殴ってくれる人がタイプです！",
    "こんにちは！好きな食べ物は焼き芋です！",
    "韓国風ファッションです！",
    "僕よりも車道側を歩いてくれる人と仲良くしたいです！",
    "小学生時代から面白いね！とよく言われました。",
    "結構強いです！よろしく！",
    "女の子にもグイグイ威嚇できます！",
    "大爆笑キャラです！笑ってください！",
    "モヒカンが好きな人仲良くしてください！",
    "こんにちは！とにかく仲良くしたいです！",
    "こんにちは！ピザ屋さん！",
    "甘いものが大好きです",
    "こんにちは。特にないです",
    "一緒にネットサーフィンしたいです！",
    "最近はサングラスにハマってます！",
    "サングラスをかけるのが趣味です！",
    "シースルーの前髪が好きです！",
    "運命の出会いを待ってます。",
    "センター分け",
    "アフロ歯磨きが好きな人よろしく！",
    "一緒にユニバ行きたいです！",
    "寝起きの顔は自信ないです。",
    "こんにちは！一緒にダンスしましょう！",
    "女の子に人気のマッシュヘアにしました！",
    "マッシュでマッチョになりたいです！",
    "映画好きです！一緒に映画見ましょう",
    "一緒に一人旅行きたいです！",
    "お酒強いです！勝負しましょう！",
    "たぶん天才タイプ。ついてきてください。",
    "キャンプ行きたいです！",
    "美味しいご飯を届けたいです！",
    "マッシュヘアが人気だと聞きました！",
    "流行りのマッシュヘアです！",
    "よろしくお願いします。お手柔らかに。",
    "真摯に野球と向き合ってます。"
];

// 現在の画像インデックス
let currentIndex = 0;

// プロフィールを更新する関数
function updateProfile() {
    if (photos[currentIndex]) {
        photoElement.src = photos[currentIndex];
        descriptionElement.textContent = descriptions[currentIndex];
        matchMessage.classList.remove("active", "fixed"); // 「マッチ」を消す
    } else {
        console.error(`画像が見つかりません: ${photos[currentIndex]}`);
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
            }, 2000); // 2秒間表示させる
        });
    }
    likeButton.style.backgroundColor = "#ff1493";
    currentIndex = (currentIndex + 1) % photos.length;
    updateProfile();
    setTimeout(() => {
        likeButton.style.backgroundColor = "white";
    }, 100);
});

skipButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % photos.length;
    updateProfile();
});

// 初期化
updateProfile();