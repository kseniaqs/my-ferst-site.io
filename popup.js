const button = document.querySelector('.button');
const popup = document.querySelector('.popup__container');
const closeButton = document.querySelector('.popup__close');
const username = document.querySelector('Логин');
const password = document.querySelector('Пароль');
const buttonEl = document.querySelector('header_button_login');

function openPopup() {
    popup.classList.add('popup__container_opened');
}

function closePopup() {
    popup.classList.remove('popup__container_opened');
}

button.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);