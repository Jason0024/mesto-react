import apiFindings from './apiFindings';

class Api {
    constructor({ link, headers }) {
        this._link = link;
        this._headers = headers;
    }
    // Метод обработки ответа сервера
    _parseResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }
    // Метод инициализации карточек с сервера
    getInitialCards() {
        return fetch(`${this._link}/cards`, {
            headers: this._headers
        })
            .then(res => this._parseResponse(res));
    }
    // Метод добавления новой карточки на сервер
    addNewCard(name, link) {
        return fetch(`${this._link}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, link })
        })
            .then(res => this._parseResponse(res));
    }
    // Метод удаления карточки с сервера
    deleteCard(cardId) {
        return fetch(`${this._link}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(res => this._parseResponse(res));
    }
    // Метод получения данных пользователя с сервера
    getUserData() {
        return fetch(`${this._link}/users/me`, {
            headers: this._headers
        })
            .then(res => this._parseResponse(res));
    }
    // Метод редактирования данных пользователя с отправкой на сервер
    sendUserData(userName, userAbout) {
        return fetch(`${this._link}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ name: userName, about: userAbout })
        })
            .then(res => this._parseResponse(res));
    }
    // Метод отправки данных о новом аватаре на сервер
    sendAvatarData(avatarLink) {
        return fetch(`${this._link}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatarLink.avatar
            })
        })
            .then(res => this._parseResponse(res));
    }
    // Метод обработки лайков карточки
    changeLikeCardStatus(cardId, isLiked) {
        if (isLiked) {
            return fetch(`${this._link}cards/${cardId}/likes`, {
                headers: this._headers,
                method: 'PUT',
            })
                .then(res => { return this._parseResponse(res); })
        } else {
            return fetch(`${this._link}cards/${cardId}/likes`, {
                headers: this._headers,
                method: 'DELETE',
            })
                .then(res => { return this._parseResponse(res); })
        }
    }
}

// Создание экземпляра класса
const apiConnect = new Api(apiFindings);

// Экспорт класса
export default apiConnect;