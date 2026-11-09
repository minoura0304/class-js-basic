const fruits = ['りんご', 'ばなな', 'みかん']
fruits[1] = 'いちご';
fruits.push('ぶどう');
console.log(fruits);
// 変数の値自体を変更するとエラー
// fruits = ['いちご'];

const steps = [
    'ようこそ！まずはアカウント登録を始めましょう。',
    'お名前とメールアドレスを入力してください。',
    '入力内容を確認し、利用規約に同意してください。',
    '登録が完了しました！サービスをお楽しみください🎉'
];

const stepIndicator = document.getElementById('step-indicator');
const stepMessage = document.getElementById('step-message');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

stepMessage.textContent = steps[currentIndex];
stepIndicator.textContent = `STEP ${currentIndex + 1} / 4`;
nextBtn.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex >= steps.length) {
        console.log(steps[currentIndex]);
        currentIndex = 0;
    }
    stepMessage.textContent = steps[currentIndex];
    stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;

});

const newStepInput = document.getElementById('new-step-input');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
    // 別の条件は: newStepInput.value.length > 0
    if (newStepInput.value !== '') {
        steps.push(newStepInput.value);
        stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;

        newStepInput.value = '';
    }
});

const removeBtn = document.getElementById('remove-btn');
removeBtn.addEventListener('click', () => {
    steps.pop();
    stepIndicator.textContent = `STEP ${currentIndex + 1}/${steps.length}`;
});

for (let i = 0; i < 5; i++) {
    console.log(i);
};

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i}回目の処理です。`)

    }
}

let total = 0;
for (let i = 1; i <= 10; i++) {
    total += i;
}
console.log(`1〜10の合計は${total}です。`);

// length・・・文字の数まで繰り返す
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}番目: ${fruits[i]}`);
};
const menus = ['ホーム', 'サービス紹介', '制作実績', '会社概要', 'お問い合わせ'];
const menuList = document.getElementById('menu-list');
let text = '';

for (let i = 0; i < menus.length; i++) {
    text += (`<li>${menus[i]}</li>`);
}
// textだと<li>も出てくるので、innerHTMLにする
menuList.innerHTML = text;
