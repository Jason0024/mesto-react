import React, { useContext } from 'react';
import CurrentUserContext from '../context/CurrentUserContext';

function Card(props) {
    // Подписка на контекст
    const userItem = useContext(CurrentUserContext);
    // Определение владения карточкой
    const isOwn = props.card.owner._id === userItem._id;
    // Определение наличие поставленного лайка
    const isLiked = props.card.likes.some(item => item._id === userItem._id);
    function handleClick() { props.onCardClick(props.card) }
    function handleDelete() { props.onCardDelete(props.card) }
    function handleLike() { props.onCardLike(props.card) }

    return (
        <div className="element-grid-template">
            <li className="element-grid__item">
                <img src={props.link} className="element-grid__pic" onClick={handleClick} alt={props.name} />
                <div className="element-grid__item-description">
                    <h2 className="element-grid__title">{props.name}</h2>
                    {isOwn && <button type="button" className='element-grid__delete' onClick={handleDelete} aria-label="Удалить" />}
                    <div className="element-grid__likes">
                        <button type="button" className={`element-grid__like ${isLiked ? 'element-grid__like_active' : ''}`} onClick={handleLike} aria-label="Like" />
                        <span className="element-grid__likes-number">{props.likeCount > 0 ? props.likeCount : null}</span>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default Card;