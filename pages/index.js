const editButton = document.querySelector('.editButton');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');

function openPopup(event){
  popup.classList.add('popup_opened');
}

function closePopup(event){
  popupCloseButton.classList.add('popup_closed');
}

editButton.addEventListener('click', openPopup);
editButton.addEventListener('click', closePopup);
