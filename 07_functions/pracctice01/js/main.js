function showWelcome() {
    console.log('いらっしゃいませ。');
}
showWelcome();

const greet = function () {
    console.log('こんにちは');
}
greet();

// 現在の主流（アロー関数）
const showGreet = () => {
    console.log('また、こんにちは');
}
showGreet();


const printLog = () => {
    console.log('-- システムチェック開始 ---');
    console.log('異常はありませんでした。');
}

printLog();
printLog();

// ⭐︎練習
const cartDisplay = document.getElementById('cart-display');
const addCartBtn = document.getElementById('add-cart-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');

let itemCount = 0;

const clearCart = () => {
    itemCount = 0;
    cartDisplay.textContent = ('カートに商品はありません（0点）');
    cartDisplay.classList.remove('has-item');
}

clearCart();

addCartBtn.addEventListener('click', () => {
    itemCount++;
    cartDisplay.textContent = `現在カートに ${itemCount}点 の商品が入っています`;
    cartDisplay.classList.add('has-item');
});

clearCartBtn.addEventListener('click', () => {
    clearCart();
});


const greetUser = (userName = 'ゲスト', count = 0) => {
    console.log(`こんにちは、${userName}さん。${count}回目の訪問です。`);
}

greetUser();

// ディホルト値から変わる可能性が高い引数ほど、前に設定する
const orderDrink = (drink = 'ドリンク名', size = 'M') => {
    console.log(`注文：${drink}（${size}サイズ） `);
}
orderDrink('アイスコーヒー', 'L');

// ⭐︎練習
const alertBanner = document.getElementById('alert-banner');
const successBtn = document.getElementById('success-btn');
const warningBtn = document.getElementById('warning-btn');
const errorBtn = document.getElementById('error-btn');

const updateBanner = (message = 'メッセージ', typeClass) => {
    alertBanner.textContent = `${message}`;
    alertBanner.classList.remove('is-success', 'is-warning', 'is-error');
    alertBanner.classList.add('typeClass');
}

successBtn.addEventListener('click', () => {
    updateBanner();
    alertBanner.textContent = `データの保存が完了しました。`;
    alertBanner.classList.add('is-success');
})
warningBtn.addEventListener('click', () => {
    updateBanner();
    alertBanner.textContent = `ストレージの残り容量が少なくなっています。`;
    alertBanner.classList.add('is-warning');
})
errorBtn.addEventListener('click', () => {
    updateBanner();
    alertBanner.textContent = `通信エラーが発生しました。再試行してください。`;
    alertBanner.classList.add('is-error');
})


const addNumbers = (a, b) => {
    const sum = a + b;
    return sum;
}

console.log(addNumbers(10, 20));

// const floor = (a) => {
//     const num = aを小数点を切り捨てる;
//     return num;
// }

const buyTicket = (age) => {
    if (age < 18) {
        console.log('未成年お断り');
        return;
    }
    console.log('先に進んでください');
    let num = 100;
}
buyTicket(15);
// console.log(num);

const calcTaxPrice = (price) => {
    const taxed = Math.floor(price * 1.1);
    return taxed;
}
console.log(calcTaxPrice(500));

// 身長（cm）と体重（kg）を渡したらBMI値を計算して返す
const calcBMI = (height, weight) => {
    const heightM = height / 100;
    return weight / (heightM * heightM);
}
console.log(calcBMI(150, 43))

// ⭐︎練習
const priceResult = document.getElementById('price-result');
const coffeeBtn = document.getElementById('coffee-btn');
const lunchBtn = document.getElementById('lunch-btn');

coffeeBtn.addEventListener('click', () => {
    const total = calcTaxPrice(500);
    priceResult.textContent = `ブレンドコーヒー：税込 ${total}円`;
})
lunchBtn.addEventListener('click', () => {
    const total = calcTaxPrice(1200);
    priceResult.textContent = `ランチセット：税込 ${total}円`;
})
