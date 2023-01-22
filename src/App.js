import logo from '../src/images/logo.svg';
import './index.css'


function App() {
  return (
    <>
    <div className="page">

      <header className="header">
        <img src={logo} alt="Логотип проекта Mesto" className="header__logo" />
      </header>

      <main className="content">

        <section className="profile">
          <img src="#" className="profile__avatar" alt="Аватар профиля" />
          <button className="profile__avatar-btn"></button>
          <div className="profile__info">
            <h1 className="profile__name">JASOn</h1>
            <p className="profile__job">Web-developer</p>
            <button className="profile__edit" type="button">Редактировать</button>
          </div>
          <button className="profile__add-button" type="button">Добавить фото</button>
        </section>

        <section className="elements"></section>

      </main>

      <footer className="footer">
        <p>&copy; 2022 Mesto Russia</p>
      </footer>

      <div className="popup popup_type_profile">
        <div className="popup__container">
          <button className="popup__close" type="button">Закрыть</button>
          <form className="popup__form popup__form_profile-type" method="POST" name="edit-form" novalidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <label className="popup__field">
              <input type="text" placeholder="Ваше имя" className="popup__input" name="username"
                id="name" minlength="2" maxlength="40" required />
              <span id="name-error" className="popup__input-error"></span>
            </label>
            <label className="popup__field">
              <input type="text" placeholder="Чем занимаетесь?" className="popup__input" name="job"
                id="job" minlength="2" maxlength="200" required />
              <span id="job-error" className="popup__input-error profile-job-error"></span>
            </label>
            <button type="submit" className="popup__submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button className="popup__close" type="button">Закрыть</button>
          <form name="edit-avatar-form" action="#" className="popup__form" novalidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <label className="popup__field">
              <input type="url" placeholder="Ссылка на картинку" className="popup__input" name="avatar"
                id="avatar" required />
              <span id="avatar-error" className="popup__input-error"></span>
            </label>
            <button type="submit" className="popup__submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <button className="popup__close" type="button">Закрыть</button>
          <form name="delete-form" action="#" className="popup__form" novalidate>
            <h2 className="popup__title-delete-card">Вы уверены?</h2>
            <button type="submit" className="popup__submit">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_photo">
        <div className="popup__container">
          <button className="popup__close" type="button">Закрыть</button>
          <form className="popup__form popup__form_photo-type" method="POST" name="add-photo" novalidate>
            <h2 className="popup__title">Новое место</h2>
            <label className="popup__field">
              <input type="text" value="" placeholder="Название" className="popup__input" name="name"
                id="title" minlength="2" maxlength="40" required />
              <span id="title-error" className="popup__input-error"></span>
            </label>
            <label className="popup__field">
              <input type="url" value="" placeholder="Ссылка на картинку" className="popup__input"
                name="link" id="link" required />
              <span id="link-error" className="popup__input-error"></span>
            </label>
            <button type="submit" className="popup__submit">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_modal">
        <div className="popup__container">
          <button className="popup__close" type="button">Закрыть</button>
          <figure className="popup__figure">
            <img className="popup__pic" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
      </div>

      <template className="element-grid-template">
        <li className="element-grid__item">
          <img className="element-grid__pic" />
          <div className="element-grid__item-description">
            <h2 className="element-grid__title"></h2>
            <button type="button" className="element-grid__delete">Удалить</button>
            <div className="element-grid__likes">
              <button type="button" className="element-grid__like">Нравится</button>
              <span className="element-grid__likes-number"></span>
            </div>
          </div>
        </li>
      </template>

    </div >
    </>
  );
}

export default App;
