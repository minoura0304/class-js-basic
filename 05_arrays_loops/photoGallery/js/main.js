const mainImg = document.getElementById('main-img');
const captionText = document.getElementById('caption-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const thumbImg = document.querySelectorAll('.thumb-img');
let currentIndex = 0;

for (let i = 0; i < thumbImg.length; i++) {
    thumbImg[i].addEventListener('click', () => {
        thumbImg[i].getAttribute('src');
        thumbImg[i].getAttribute('alt');
        thumbImg[i].setAttribute('alt',)
        captionText = ('${currentIndex}/${thumbImg.length}:');
        for (let j = 0; j < thumbImg.length; i++) {
            thumbImg[j].classList.remove('.is-active');
        }
        thumbImg[i].classList.add('is-active');
    });
}
