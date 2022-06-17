let editButton = document.querySelector('.editButton');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let popupSave = document.querySelector('.popup__save');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__name');
let occupationInput = formElement.querySelector('.popup__occupation');

let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');

function openPopup(evt) {
  popup.classList.add('popup__opened');
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;
}

function closePopup(evt) {
  popup.classList.remove('popup__opened');
}

editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = `${nameInput.value}`;
  profileOccupation.textContent = `${occupationInput.value}`;
  closePopup();
}

popupSave.addEventListener('click', formSubmitHandler);
popupSave.addEventListener('submit', formSubmitHandler);
