const accordionBtn = document.getElementById('accordion-btn');
const accordionContent = document.getElementById('accordion-content');
const icon = document.querySelector('.icon');

accordionBtn.addEventListener('click', () => {
    accordionBtn.classList.toggle('is-open');
    accordionContent.classList.toggle('is-open');
    icon.classList.toggle('is-open');
});
