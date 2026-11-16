const num = 4.6;

// 切り捨て（一番使う）
console.log(Math.floor(num));
// 切り上げ
console.log(Math.ceil(num));
// 四捨五入
console.log(Math.round(num));

console.log(Math.random() * 5);
const randomNum = Math.floor(Math.random() * 5);
console.log(randomNum);
// ０、１、２、３、４


// ⭐︎練習
const diceResult = document.getElementById('dice-result');
const rollDiceBtn = document.getElementById('roll-dice-btn');
rollDiceBtn.addEventListener('click', () => {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    diceResult.textContent = diceNumber;
});


const omikujiList = ['大吉', '中吉', '小吉', '吉', '凶'];
const omikujiMessage = document.getElementById('omikuji-message');
const randomIndex = Math.floor(Math.random() * omikujiList.length);
console.log(omikujiList[randomIndex]);

// ⭐︎練習
const omikujiResult = document.getElementById('omikuji-result');
const messages = [
    '最高の1日になります。新しいことに挑戦してみましょう。',
    '思いがけない嬉しい出来事があるかもしれません。',
    '焦らずマイペースに進むと良い結果につながります。',
    '普段通りの日常に小さな幸せが見つかりそうです。',
    '無理は禁物です。今日はゆっくり休んで体調を整えましょう。'
];
const omikujiBtn = document.getElementById('omikuji-btn');
omikujiBtn.addEventListener('click', () => {
    const omikujiIndex = Math.floor(Math.random() * omikujiList.length);
    omikujiResult.textContent = omikujiList[randomIndex];
    omikujiMessage.textContent = messages[randomIndex];
});


// ⭐︎練習
const card = document.querySelectorAll('.card');
const drawCardBtn = document.getElementById('draw-card-btn');

drawCardBtn.addEventListener('click', () => {
    for (let i = 0; i < card.length; i++) {
        card[i].classList.remove('is-active');
    };
    const randomIndex = Math.floor(Math.random() * card.length);
    card[randomIndex].classList.add('is-active');
});
