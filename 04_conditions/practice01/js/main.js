const score = `80`;

if (score == 80) {
    console.log(`合格！`);
} else if (score >= 50) {
    console.log(`もう少し！`);
} else {
    console.log(`不合格！`);
}

const age = 16;
const hasLicense = true;

if (age >= 18 || hasLicense === true) {
    console.log(`運転できる`);
} else {
    console.log(`運転できない`);
}

const btn = document.getElementById('btn');
const message = document.getElementById('message');
const countDisplay = document.getElementById('count');
let count = 0;

btn.addEventListener('click', () => {

    // const isMember = true; // 会員フラグ：true または false
    // const total = 6000; // 購入金額：数値

    // if (isMember == true && total >= 10000) {
    //     message.textContent = '【送料無料＋20%OFF】プレミアム会員特典が適用されました！';
    //     message.style.color = '#0066cc';
    // } else if (isMember == true && total >= 5000) {
    //     message.textContent = '【送料無料】会員特別割引が適用されました！';
    //     message.style.color = '#27ae60';
    // } else {
    //     message.textContent = '通常送料がかかります（会員登録＋5,000円以上で送料無料）。';
    //     message.style.color = '#e74c3c';
    // }

    count++;
    countDisplay.textContent = count;
    if (count == 30) {
        message.textContent = '30回達成！ゲームクリアです！';
        message.style.color = '#e74c3c';
    } else if (count % 10 === 0) {
        message.textContent = `${count}回達成！あと少し！`;
        message.style.color = '#0066cc';
    } else {
        message.textContent = 'ボタンをクリックしてカウントを増やそう！';
        message.style.color = '#333';
    }
})

const pageTop = document.getElementById('page-top');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        pageTop.classList.add('is-active');
    } else {
        pageTop.classList.remove('is-active');
    }
});
pageTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
