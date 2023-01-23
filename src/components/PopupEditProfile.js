import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupEditProfile (props) {

  return (
    < PopupWithForm
      isOpen = { props.isOpen }
      onClose = { props.onClose }
      id = 'profile-popup'
      title = 'Редактировать профиль'
      type = 'profile'
      buttonText = 'Сохранить'
    >
      <label htmlFor="username-input" className="popup__field">
        <input id="username-input" type="text" className="popup__input"
               name="username" required placeholder="Ваше имя" minLength="2" maxLength="40" />
          <span id="name-error" className="popup__input-error"></span>
      </label>
      <label htmlFor="job-input" className="popup__field">
        <input id="job-input" type="text" className="popup__input"
               name="job" required placeholder="Чем занимаетесь?" minLength="2" maxLength="200" />
          <span id="description-error" className="popup__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default PopupEditProfile;