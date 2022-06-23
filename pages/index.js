let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupContainer = document.querySelector('.popup__container');
let popupCloseButton = document.querySelector('.popup__close');
let popupSave = document.querySelector('.popup__save');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__form_info_name');
let occupationInput = formElement.querySelector('.popup__form_info_occupation');

let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;
  closePopup();
}

popupContainer.addEventListener('submit', formSubmitHandler);


// popup.addEventListener('click',(event) => {
//   if (!event.defaultPrevented) {
//     closePopup();
//   }
// })

// popupContainer.addEventListener('click', (event) => {
//   event.preventDefault();
// })


