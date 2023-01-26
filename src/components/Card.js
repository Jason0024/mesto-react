import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }
    function handleDelete () { props.onCardDelete(props.card) }

    return (
        // props.id названо для того, чтобы обойти ошибку ('key' is not a prop). Попытка доступа к key приведёт к undefined.
        <div className="element-grid-template" key={props.id}>
            <li className="element-grid__item">
                <img src={props.link} className="element-grid__pic" onClick={handleClick} alt={props.name} />
                <div className="element-grid__item-description">
                    <h2 className="element-grid__title">{props.name}</h2>
                    <button type="button" className="element-grid__delete" onClick={ handleDelete } aria-label="Удалить" />
                    <div className="element-grid__likes">
                        <button type="button" className="element-grid__like" aria-label="Like"></button>
                        <span className="element-grid__likes-number">{ props.likeCount > 0 ? props.likeCount : null }</span>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default Card;