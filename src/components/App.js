import React, { useEffect, useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';
import PopupEditAvatar from './PopupEditAvatar';
import PopupEditProfile from "./PopupEditProfile";
import PopupAddCard from './PopupAddCard';
import ImagePopup from './ImagePopup';

import CurrentUserContext from '../contexts/CurrentUserContext';
import apiConnect from '../utils/Api';



function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  // Рендер карточек и данных пользователя
  useEffect(() => {
    Promise.all([apiConnect.getUserData(), apiConnect.getInitialCards()])
      .then(([userItem, initialCards]) => {
        setCurrentUser(userItem);
        setCards(initialCards);
      })
      .catch((err) => { console.log(`Возникла глобальная ошибка, ${err}`) })
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardDelete(card) {
    apiConnect.deleteCard(card._id)
      .then(() => { setCards((cardsArray) => cardsArray.filter((cardItem) => cardItem._id !== card._id)) })
      .catch((err) => { console.log(`Возникла ошибка при удалении карточки, ${err}`) })
  }

  function handleUpdateAvatar(link) {
    apiConnect.sendAvatarData(link)
      .then((res) => { setCurrentUser(res); closeAllPopups() })
      .catch((err) => { console.log(`Возникла ошибка при зименении аватара, ${err}`) })
  }

  function handleCardClick(cardItem) {
    setIsImageOpen(true);
    setSelectedCard({
      ...selectedCard,
      name: cardItem.name,
      link: cardItem.link
    })
  }

  // Обработчик лайков карточки
  function handleCardLike(card) {
    const isLiked = card.likes.some(cardItem => cardItem._id === currentUser._id);
    apiConnect.changeLikeCardStatus(card._id, !isLiked)
      .then((cardsItem) => {
        setCards((state) => state.map((cardItem) => cardItem._id === card._id ? cardsItem : cardItem))
      })
      .catch((err) => { console.log(`Возникла ошибка при обработке лайков, ${err}`) })
  }

  // Обработчик данных пользователя
  function handleUpdateUser(userItem) {
    apiConnect.sendUserData(userItem.name, userItem.about)
      .then((res) => { setCurrentUser(res); closeAllPopups() })
      .catch((err) => { console.log(`Возникла ошибка при редактировании профиля, ${err}`) })
  }

  // Обработчик добавления карточки
  function handleAddCard(cardItem) {
    apiConnect.addNewCard(cardItem.name, cardItem.link)
      .then((card) => { setCards([card, ...cards]); closeAllPopups() })
      .catch((err) => { console.log(`Возникла ошибка при добавлении новой карточки, ${err}`) })
  }

  // Функция для закрытия всех попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImageOpen(false);
  }

  return (
    < CurrentUserContext.Provider value={currentUser} >
      <div className="page">
        <Header />
        < Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
          cards={cards} />
        <Footer />
        < PopupEditAvatar
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar} />
        < PopupEditProfile
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} />
        < PopupAddCard
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddCard} />
        < ImagePopup
          isOpen={isImageOpen}
          onClose={closeAllPopups}
          card={selectedCard} />
      </div >
    </CurrentUserContext.Provider>
  );
}

export default App;
