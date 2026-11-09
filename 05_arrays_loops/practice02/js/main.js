const colorBtns = document.querySelectorAll('.color-btn');

for (let i = 0; i < colorBtns.length; i++) {
    colorBtns[i].addEventListener('click', () => {
        console.log(colorBtns[i].getAttribute('type'));
    });

}

// ⭐︎練習問題⭐︎
// a[href ^= "http"]はaだけでもいい
const link = document.querySelectorAll('a[href^="http"]');
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', () => {
        // 新しいタブで開く属性は target（値は _blank）、セキュリティ属性は rel
        link[i].setAttribute('rel', 'target_blank');
    });
}

// ⭐︎練習問題⭐︎
const colorPreview = document.getElementById('color-preview');
const colorBtn = document.querySelectorAll('.color-btn');
const colorCodes = ['#e74c3c', '#27ae60', '#2980b9', '#8e44ad'];

for (let i = 0; i < colorBtns.length; i++) {
    colorBtn[i].addEventListener('click', () => {
        for (let j = 0; j < colorBtn.length; j++) {
            colorBtn[i].classList.remove('is-active');
        }

        colorBtn[i].classList.add('is-active');

        // クリックされた i番目のボタンの文字と、i番目の色コードを取得
        const colorName = colorBtn[i].textContent;
        const colorCode = colorCodes[i];

        colorPreview.style.backgroundColor = colorCode;
        colorPreview.style.color = '#ffffff';
        colorPreview.textContent = `${colorName}（${colorCode}）`;
    });
}

// ⭐︎練習問題⭐︎
const tabBtn = document.querySelectorAll('.tab-btn');
const tabPanel = document.querySelectorAll('.tab-panel');

for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', () => {
        for (let j = 0; j < tabBtn.length; j++) {
            tabBtn[j].classList.remove('is-active');
            tabPanel[j].classList.remove('is-active');
        }

        tabBtn[i].classList.add('is-active');
        tabPanel[i].classList.add('is-active');

    });
}
