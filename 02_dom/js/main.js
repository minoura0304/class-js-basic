// console.log(`success!`);

// const mainTitle = document.getElementById('main-title');
// console.log(mainTitle);

// const title = document.querySelector('#main-title');
// console.dir(title);

// console.log(document.body);
// console.log(document.documentElement);

// const introText = document.getElementById('intro');
// console.log(introText);

// const changeBtn = querySelector('#change-btn');
// console.dir(changeBtn);

// const mainTitle = document.getElementById('main-title');
// console.log(mainTitle.textContent);

// const day = 12;
// const week = `月曜日`;
// mainTitle.textContent = `今日は${day}日の${week}です。`;

// const introText = document.querySelector('#intro');
// console.log(introText.innerHTML);

// introText.innerHTML = `ようこそ！<strong>JS</strong>の世界へ！`;

// console.log(document.body.textContent);
// console.log(document.body.innerHTML);

// introText.textContent = `ようこそ！<strong>JS</strong>の世界へ！`;

// const mainTitle = document.getElementById('main-title');
// mainTitle.textContent = `箕浦`;

// const introText = document.getElementById('intro');
// introText.innerHTML = `改行のある<br>文章です。`;

// const changeBtn = document.querySelector('#change-btn');
// changeBtn.innerHTML = `<strong>内容を変更する</strong>`;


// let newSize = 50;
// mainTitle.style.fontSize = `${newSize}px`;

// changeBtn.addEventListener('click', () => {
//     mainTitle.style.color = '#ff3366'
//     mainTitle.style.backgroundColor = '#000'

//     introText.style.fontSize = `20px`;
//     introText.style.paddingTop = `40px`;
//     introText.style.backgroundColor = `#888`;
// });

// 課題
const body = document.querySelector('body');
const themeTitle = document.getElementById('theme-title');
const themeDesc = document.getElementById('theme-desc');
const btnLight = document.getElementById('btn-light');
const btnDark = document.getElementById('btn-dark');
const btnNight = document.getElementById('btn-night');


btnLight.addEventListener('click', () => {
    themeTitle.textContent = `今のテーマ：☀️ ライト`
    themeTitle.style.color = `#000`;
    themeDesc.style.color = `#000`;
    body.style.backgroundColor = `#fff`;
});

btnDark.addEventListener('click', () => {
    themeTitle.textContent = `今のテーマ：🌙 ダーク`
    themeTitle.style.color = `#fff`;
    themeDesc.style.color = `#fff`;
    body.style.backgroundColor = `#000`;
});

btnNight.addEventListener('click', () => {
    themeTitle.textContent = `今のテーマ：💫夜空`
    themeTitle.style.color = `#ff0`;
    themeDesc.style.color = `#ff0`;
    body.style.backgroundColor = `#005`;
});
