import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupEditAvatar(props) {

  return (
    < PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      id='avatar-popup'
      title='Обновить аватар'
      type='avatar'
    >
      <label htmlFor="avatar-input" className="popup__field">
        <input id="avatar" type="url" className="popup__input"
          name="avatar" required placeholder="Введите ссылку на аватар" minLength="2" maxLength="200" />
        <span id="avatar-error" className="popup__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default PopupEditAvatar;