const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImg = document.querySelector('.popup_type_pic');
const popupCloseButtons = document.querySelectorAll('.popup__close');

const formElement = document.querySelector('.popup__form');
const formElementEdit = document.querySelector('.popup__form_type_edit');
const formElementAdd = document.querySelector('.popup__form_type_add');
const nameInput = formElement.querySelector('.popup__input_info_name');
const occupationInput = formElement.querySelector('.popup__input_info_occupation');

const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');

const addButton = document.querySelector('.profile__add-button');

function openPopup(item) {
  item.classList.add('popup_opened');
}

function editProfile() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;
}

function closePopup(item) {
  item.classList.remove('popup_opened');
}

editButton.addEventListener('click', editProfile);


popupCloseButtons.forEach((button) => {
  const closeX = button.closest('.popup');
  button.addEventListener('click', () => closePopup(closeX));
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;
  closePopup(popupEdit);
}

formElementEdit.addEventListener('submit', formSubmitHandler);


const elementsList = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element__template').content;

const elementTitleInput = popupAdd.querySelector('.popup__input_card_place');
const elementImageInput = popupAdd.querySelector('.popup__input_card_link');

function renderCards() {
  initialCards.forEach(renderCard);
}

renderCards();


function createCard(element) {
  const card = elementTemplate.querySelector('.element').cloneNode(true);
  card.querySelector('.element__title').textContent = element.name;
  card.querySelector('.element__image').src = element.link;
  card.querySelector('.element__image').alt = element.name;

  const likeButton = card.querySelector('.element__like-button');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  }); 

  const deleteButton = card.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', function(evt) {
    evt.target.closest('.element').remove();
  })

  card.querySelector('.element__image').addEventListener('click', function(evt) {
    openPopup(popupImg);
    document.querySelector('.popup__image').src = evt.target.src;
    document.querySelector('.popup__subtitle').textContent = evt.target.closest('.element').querySelector('.element__title').textContent;
    document.querySelector('.popup__image').alt = evt.target.closest('.element').querySelector('.element__title').textContent;
  })


  return card;
}

function renderCard(card) {
  elementsList.prepend(createCard(card));
};


function submitCard(evt) {
  evt.preventDefault();
  renderCard({name: elementTitleInput.value, link: elementImageInput.value});
  closePopup(popupAdd);
}

addButton.addEventListener('click', () => openPopup(popupAdd));

formElementAdd.addEventListener('submit', submitCard);

 

