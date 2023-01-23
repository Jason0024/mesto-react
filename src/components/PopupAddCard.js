import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupAddCard (props) {

  return (
    < PopupWithForm
      isOpen = { props.isOpen }
      onClose = { props.onClose }
      id = 'cards-popup'
      title = 'Новое место'
      type = 'mesto'
      buttonText = 'Создать'
    >
      <label htmlFor="place-name-input" className="popup__field">
        <input id="place-name-input" type="text" className="popup__input"
               name="placename" required placeholder="Название" minLength="2" maxLength="30" />
          <span id="title-error" className="popup__input-error"></span>
      </label>
      <label htmlFor="place-image-input" className="popup__field">
        <input id="place-image-input" type="url" className="popup__input"
               name="placeimage" required placeholder="Ссылка на картинку" />
          <span id="link-error" className="popup__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default PopupAddCard;