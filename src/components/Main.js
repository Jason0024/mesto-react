import React, { useContext } from 'react';
import Card from './Card';
import CurrentUserContext from '../context/CurrentUserContext';

function Main(props) {

    // Подписка на контекст
    const userItem = useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
                <img src={userItem.avatar} className="profile__avatar" alt="Аватар профиля" />
                <button type="button" className="profile__avatar-btn" aria-label="Редактировать аватар профиля" onClick={props.onEditAvatar} />
                <div className="profile__info">
                    <h1 className="profile__name">{userItem.name}</h1>
                    <p className="profile__job">{userItem.about}</p>
                    <button type="button" className="profile__edit" aria-label="Редактировать профиль" onClick={props.onEditProfile} />
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить место"
                    onClick={props.onAddPlace} />
            </section>
            <section className="elements">
                {props.cards.map((cardItem) => (
                    < Card
                        key={cardItem._id}
                        link={cardItem.link}
                        name={cardItem.name}
                        likeCount={cardItem.likes.length}
                        onCardClick={props.onCardClick}
                        onCardDelete={props.onCardDelete}
                        onCardLike={props.onCardLike}
                        card={cardItem} />
                ))}
            </section>
        </main>
    )
}

export default Main;
