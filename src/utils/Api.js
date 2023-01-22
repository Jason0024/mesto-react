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
    addCard({ name, link }) {
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
    // Метод отправки лайка на сервер
    setLike(cardId) {
        return fetch(`${this._link}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(res => this._parseResponse(res));
    }
    // Метод удаления лайка с сервера
    deleteLike(cardId) {
        return fetch(`${this._link}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(res => this._parseResponse(res));
    }
    // Метод получения данных пользователя с сервера
    getUserInfo() {
        return fetch(`${this._link}/users/me`, {
            headers: this._headers
        })
            .then(res => this._parseResponse(res));
    }
    // Метод редактирования данных пользователя с отправкой на сервер
    editUserInfo(profileData) {
        return fetch(`${this._link}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: profileData.username,
                about: profileData.description,
            })
        })
            .then(res => this._parseResponse(res));
    }
    // Метод отправки данных о новом аватаре на сервер
    editAvatar(avatarLink) {
        return fetch(`${this._link}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatarLink.avatar
            })
        })
            .then(res => this._parseResponse(res));
    }
}

const apiConnect = new Api(apiFindings);

// Экспорт класса
export default apiConnect;