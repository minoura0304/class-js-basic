const mainImg = document.getElementById('main-img');
const captionText = document.getElementById('caption-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const thumbImg = document.querySelectorAll('.thumb-img');
let currentIndex = 0;

for (let i = 0; i < thumbImg.length; i++) {
    thumbImg[i].addEventListener('click', () => {
        currentIndex = i;
        const newSrc = thumbImg[currentIndex].getAttribute('src');
        const newAlt = thumbImg[currentIndex].getAttribute('alt');

        mainImg.setAttribute('src', newSrc);
        mainImg.setAttribute('alt', newAlt);

        captionText.textContent = `${currentIndex + 1} / ${thumbImg.length} : ${newAlt}`;
        for (let j = 0; j < thumbImg.length; j++) {
            thumbImg[j].classList.remove('is-active');
        }
        thumbImg[currentIndex].classList.add('is-active');
    });
}
