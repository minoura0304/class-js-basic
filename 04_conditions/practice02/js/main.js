const link = document.getElementById('external-link');
const url = link.getAttribute('href');
console.log(url);

link.setAttribute('href', 'https://computer.trident.ac.jp/');

const postBtn = document.getElementById('post-btn');
postBtn.removeAttribute('disabled');
if (!postBtn.hasAttribute('disabled')) {
    console.log('有効化中');
}

const viewImg = document.getElementById('view-img');
const toggleImgBtn = document.getElementById('toggle-img-btn');
const DAY_IMG = 'https://picsum.photos/id/1015/500/300';
const NIGHT_IMG = 'https://picsum.photos/id/1040/500/300';

toggleImgBtn.addEventListener('click', () => {
    const currentSrc = viewImg.getAttribute('src');

    if (currentSrc === DAY_IMG) {
        viewImg.setAttribute('src', NIGHT_IMG);
        viewImg.setAttribute('alt', `夜の画像`)
    } else {
        viewImg.setAttribute('src', DAY_IMG);
        viewImg.setAttribute('alt', `昼の画像`)

    }
})

const switchSiteBtn = document.getElementById('switch-site-btn');
const externalLink = document.getElementById('external-link');

switchSiteBtn.addEventListener('click', () => {
    externalLink.setAttribute('href', 'https://computer.trident.ac.jp/');
    externalLink.textContent = 'トライデント公式サイトを開く（同じタブ）';
    externalLink.removeAttribute('target');
    switchSiteBtn.textContent = '切り替え完了！';
    switchSiteBtn.setAttribute('disabled', 'true');
    switchSiteBtn.style.cursor = 'not-allowed';
})

const passwordInput = document.getElementById('password-input');
const togglePasswordBtn = document.getElementById('toggle-password-btn');

togglePasswordBtn.addEventListener('click', () => {
    const currentType = passwordInput.getAttribute('type');
    if (currentType === 'password') {
        passwordInput.setAttribute('type', 'text');
        togglePasswordBtn.textContent = '非表示';
        togglePasswordBtn.classList.add('is-active');
    } else {
        passwordInput.setAttribute('type', 'password');
        togglePasswordBtn.textContent = '表示';
        togglePasswordBtn.classList.remove('is-active');
    }
})



const commentInput = document.getElementById('comment-input');
const charCount = document.getElementById('char-count');
const warningText = document.getElementById('warning-text');

const MAX_LENGTH = 15;
commentInput.addEventListener('input', () => {
    let value = commentInput.value.length;
    console.log(`現在の入力文字数: ${value}文字`);
    charCount.textContent = value;

    if (value === 0) {
        postBtn.setAttribute('disabled', 'true');
        warningText.textCOntent = '';
        commentInput.classList.remove('is-error');
        warningText.classList.remove('is-error');

    } else if (value > MAX_LENGTH) {
        postBtn.setAttribute('disabled', 'true');
        warningText.textContent = '文字数オーバーです！';
        commentInput.classList.add('is-error');
        warningText.classList.add('is-error');
    } else {
        postBtn.removeAttribute('disabled', 'true');
        warningText.textCOntent = '';
        commentInput.classList.remove('is-error');
        warningText.classList.remove('is-error');

    }
});
