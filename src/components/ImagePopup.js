import React from 'react';

function ImagePopup (props) {
  return (
    <div className={ `popup popup_type_modal ${ props.isOpen ? 'popup_open' : '' }` } id={ props.id }>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={ props.onClose } aria-label="Закрыть" />
        <img src={ props.card.link } className="popup__pic" alt={ props.card.name } />
        <p className="popup__caption">{ props.card.name }</p>
      </div>
    </div>
  )
}

export default ImagePopup;