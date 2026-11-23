const modalContainer = document.getElementById('modal-container');
const openModalBtn = document.getElementById('open-modal-btn');
const closeIconBtn = document.getElementById('close-icon-btn');
const agreeCloseBtn = document.getElementById('agree-close-btn');
const modalOverlay = document.getElementById('modal-overlay');

const openModal = () => {
    modalContainer.classList.add('is-open');
}

const closeModal = () => {
    modalContainer.classList.remove('is-close');
}
