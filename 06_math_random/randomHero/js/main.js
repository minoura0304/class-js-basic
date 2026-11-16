const heroHeader = document.getElementById('hero-header');
const heroTitle = document.getElementById('hero-title');
const heroLocation = document.getElementById('hero-location');
const changeBgBtn = document.getElementById('change-bg-btn');

// データの準備（4つの絶景スポット）
const imageUrls = [
    'https://picsum.photos/id/1015/1200/600',
    'https://picsum.photos/id/1018/1200/600',
    'https://picsum.photos/id/1036/1200/600',
    'https://picsum.photos/id/1043/1200/600'
];

const titles = [
    '静寂に包まれる北欧のフィヨルド',
    '霧が流れるスコットランドの大自然',
    'どこまでも広がる白銀の雪原',
    '夕陽に染まる険しいアルプスの稜線'
];

const locations = [
    'ノルウェー / ガイランゲルフィヨルド',
    'イギリス / ハイランド地方',
    'アイスランド / ヴァトナヨークトル氷河',
    'スイス / ベルナー・オーバーラント'
];

const colors = ['#CCDCFF', '#CCFFDE', '#F1CCFF', '#FFCCCC'];

let result = 0;
let lastIndex = -1;
changeBgBtn.addEventListener('click', () => {
    let newIndex = Math.floor(Math.random() * titles.length);
    while (newIndex === lastIndex) {
        newIndex = Math.floor(Math.random() * titles.length);
    }
    heroHeader.style.backgroundImage = `url("${imageUrls[newIndex]}")`;
    heroTitle.textContent = `${titles[newIndex]}`;
    heroLocation.textContent = `${locations[newIndex]}`;
    changeBgBtn.style.backgroundColor = colors[newIndex];
    lastIndex = newIndex;
});
