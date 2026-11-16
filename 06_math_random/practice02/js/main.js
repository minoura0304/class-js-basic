let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

console.log('ループ終了');


// ⭐︎練習
let dice = 0;
while (dice !== 6) {
    dice = Math.floor(Math.random() * 6) + 1;
    console.log('出た目：${dice}');
};
console.log('６が出たので終了しました。');

// ⭐︎練習
const omikujiList = ['大吉', '中吉', '小吉', '吉', '凶'];
const drawUntileBtn = document.getElementById('draw-until-btn');
const drawLog = document.getElementById('draw-log');


drawUntileBtn.addEventListener('click', () => {
    let count = 0;
    let result = 1;
    let logHtml = '';

    while (result !== 0) {
        count++;
        result = Math.floor(Math.random() * omikujiList.length);
        logHtml += `${count}回目：${omikujiList[result]}<br>`;
    }
    logHtml += `<strong>見事、${count}回目で大吉が出ました。</strong>`;
    drawLog.innerHTML = logHtml;
});

// ⭐︎練習（名言ジェネレーター）
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const quoteBtn = document.getElementById('quote-btn');
// 名言リスト
const quotes = [
    'シンプルであることは、複雑であることよりもむずかしい。',
    '失敗したことがない人間というのは、新しいことに挑戦したことがない人間だ。',
    '今日できることを明日に延ばすな。',
    '情熱を持て。さもなければ、どんな簡単な仕事もやり遂げられない。'
];

// 発言者リスト
const authors = [
    'スティーブ・ジョブズ',
    'アルベルト・アインシュタイン',
    'ベンジャミン・フランクリン',
    'ラルフ・ウォルド・エマーソン'
];
let lastIndex = -1;

quoteBtn.addEventListener('click', () => {
    let newIndex = Math.floor(Math.random() * quotes.length);
    while (newIndex === lastIndex) {
        newIndex = Math.floor(Math.random() * quotes.length);
    }
    quoteText.textContent = `${quotes[newIndex]}`;
    quoteAuthor.textContent = `${authors[newIndex]}`;

    lastIndex = newIndex;
});


const fruits = ['りんご', 'ばなな', 'みかん'];
const removed = fruits.splice(1, 1);
console.log(fruits);
console.log(removed);




// ⭐︎練習（発表者ルーレット）
// console.log(picked);

const presenterResult = document.getElementById('presenter-result');
const remainingCount = document.getElementById('remaining-count');
const presenterBtn = document.getElementById('presenter-btn');

const members = ['佐藤さん', '鈴木さん', '高橋さん', '田中さん'];

presenterBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * members.length);
    const picked = members.splice(randomIndex, 1)[0];
    presenterResult.textContent = picked;
    remainingCount.textContent = `残りの候補：${members.length}人`

    if (members.length === 0) {
        presenterBtn.setAttribute('disabled', 'true');
        presenterBtn.setAttribute('disabled', 'true')
        remainingCount.textContent = `全員の発表順が決まりました。お疲れ様でした。`;
    };
});
