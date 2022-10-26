import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
// import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  // const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  // const [isOpenImage, setOpenImage] = React.useState(false);

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={() => setEditAvatarPopupOpen(true)}
        onEditProfile={() => setEditProfilePopupOpen(true)}
        onAddPlace={() => setAddPlacePopupOpen(true)}
      // onDeleteCard={() => setDeleteCardPopupOpen(true)}
      // onOpenImage={() => setOpenImage(true)}
      />
      <Footer />
      <PopupWithForm isOpen={isEditAvatarPopupOpen} title={'Обновить аватар'} name={'nameAvatar'} textButton={'Сохранить'} onClose={() => setEditAvatarPopupOpen(false)}>
        <span className="popup__input-error popup__input-error_username"></span>
        <input className="popup__input popup__input_type_description" id="avatarurl" name="avatarurl" type="url" defaultValue=""
          placeholder="Ссылка на картинку" required />
        <span className="popup__input-error popup__input-error_avatarurl"></span>
      </PopupWithForm >

      <PopupWithForm isOpen={isEditProfilePopupOpen} title={'Редактировать профиль'} name={'username'} textButton={'Сохранить'} onClose={() => setEditProfilePopupOpen(false)}>
        <input className="popup__input popup__input_type_name" id="username" name="username" type="text" defaultValue="" required
          minLength="2" maxLength="40" />
        <span className="popup__input-error popup__input-error_username"></span>
        <input className="popup__input popup__input_type_description" id="userinfo" name="userinfo" type="text" defaultValue=""
          required minLength="2" maxLength="200" />
        <span className="popup__input-error popup__input-error_userinfo"></span>
      </PopupWithForm >

      <PopupWithForm isOpen={isAddPlacePopupOpen} title={'Новое место'} name={'nameCard'} textButton={'Создать'} onClose={() => setAddPlacePopupOpen(false)}>
        <input className="popup__input popup__input_type_name" id="cardinfo" name="cardinfo" type="text" defaultValue=""
          placeholder="Название" required minLength="2" maxLength="30" />
        <span className="popup__input-error popup__input-error_cardinfo"></span>
        <input className="popup__input popup__input_type_description" id="cardurl" name="cardurl" type="url" defaultValue=""
          placeholder="Ссылка на картинку" required />
        <span className="popup__input-error popup__input-error_cardurl"></span>
      </PopupWithForm >

      {/* <PopupWithForm isOpen={isDeleteCardPopupOpen} title={'Вы уверены?'} name={'namedelete'} textButton={'Да'} onClose={() => setDeleteCardPopupOpen(false)}>
        <span className="popup__input-error popup__input-error_cardurl"></span>
      </PopupWithForm > */}


      {/* <ImagePopup isOpen={isOpenImage} onClose={() => setOpenImage(false)} /> */}


    </div>
  );
}

export default App;

// <template className="template">
//   <article className="element" onClick={<ImagePopup />}>
//     <img className="element__image" />
//     <h2 className="element__title"></h2>
//     <div className="element__block-like">
//       <button className="element__like element__like_type_passive cursor" type="button" aria-label="Like"></button>
//       <p className="element__amount-like"></p>
//     </div>
//     <button className="element__basket cursor" type="button" aria-label="Удалить"/*  onClick={props.onDeleteCard} */></button>
//   </article>
// </template>


{/* <div className="popup-fade popup-fade_opacity_medium popup-fade_type_avatar">
        <div className="popup">
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form popup__form_avatar" name="nameAvatar" novalidate>
            <span className="popup__input-error popup__input-error_username"></span>
            <input clclassNameass="popup__input popup__input_type_description" id="avatarurl" name="avatarurl" type="url" value=""
              placeholder="Ссылка на картинку" required />
            <span className="popup__input-error popup__input-error_avatarurl"></span>
            <button className="popup__submit-button cursor" name="submit" type="submit">Сохранить</button>
          </form>
          <button className="close-button cursor" type="button"></button>
        </div>
      </div> */}

{/* <div className="popup-fade popup-fade_opacity_medium popup-fade_type_edit">
        <div className="popup">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form popup__form_info" name="nameInfo" novalidate>
            <input className="popup__input popup__input_type_name" id="username" name="username" type="text" value="" required
              minlength="2" maxlength="40" />
            <span className="popup__input-error popup__input-error_username"></span>
            <input className="popup__input popup__input_type_description" id="userinfo" name="userinfo" type="text" value=""
              required minlength="2" maxlength="200" />
            <span className="popup__input-error popup__input-error_userinfo"></span>
            <button className="popup__submit-button cursor" name="submit" type="submit">Сохранить</button>
          </form>
          <button className="close-button cursor" type="button" aria-label="Закрыть"></button>
        </div>
      </div>
      <div className="popup-fade popup-fade_opacity_medium popup-fade_type_new-card">
        <div className="popup">
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form popup__form_Card" name="nameCard" novalidate>
            <input className="popup__input popup__input_type_name" id="cardinfo" name="cardinfo" type="text" value=""
              placeholder="Название" required minlength="2" maxlength="30" />
            <span className="popup__input-error popup__input-error_cardinfo"></span>
            <input className="popup__input popup__input_type_description" id="cardurl" name="cardurl" type="url" value=""
              placeholder="Ссылка на картинку" required />
            <span className="popup__input-error popup__input-error_cardurl"></span>
            <button className="popup__submit-button cursor" name="submit" type="submit">Создать</button>
          </form>
          <button className="close-button cursor" type="button"></button>
        </div>
      </div>

      <div className="popup-fade popup-fade_opacity_medium popup-fade_type_delete-card">
        <div className="popup">
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form popup__form_delete" name="namedelete" novalidate>
            <span className="popup__input-error popup__input-error_cardurl"></span>
            <button className="popup__submit-button cursor" name="submit" type="submit">Да</button>
          </form>
          <button className="close-button cursor" type="button"></button>
        </div>
      </div> */}