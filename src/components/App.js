import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditAvatarClick = () => { setEditAvatarPopupOpen(true) };
  const handleEditProfileClick = () => { setEditProfilePopupOpen(true) };
  const handleAddPlaceClick = () => { setAddPlacePopupOpen(true) };
  const handleDeleteCardClick = () => { setDeleteCardPopupOpen(true) };

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onDeleteCard={handleDeleteCardClick}
        onOpenImage={setSelectedCard}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        title={'Обновить аватар'}
        name={'nameAvatar'}
        textButton={'Сохранить'}
        onClose={() => setEditAvatarPopupOpen(false)}
      >
        <span className="popup__input-error popup__input-error_username"></span>
        <input className="popup__input popup__input_type_description" id="avatarurl" name="avatarurl" type="url" defaultValue=""
          placeholder="Ссылка на картинку" required />
        <span className="popup__input-error popup__input-error_avatarurl"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        title={'Редактировать профиль'}
        name={'username'}
        textButton={'Сохранить'}
        onClose={() => setEditProfilePopupOpen(false)}
      >
        <input className="popup__input popup__input_type_name" id="username" name="username" type="text" defaultValue="" required
          minLength="2" maxLength="40" />
        <span className="popup__input-error popup__input-error_username"></span>
        <input className="popup__input popup__input_type_description" id="userinfo" name="userinfo" type="text" defaultValue=""
          required minLength="2" maxLength="200" />
        <span className="popup__input-error popup__input-error_userinfo"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        title={'Новое место'}
        name={'nameCard'}
        textButton={'Создать'}
        onClose={() => setAddPlacePopupOpen(false)}
      >
        <input className="popup__input popup__input_type_name" id="cardinfo" name="cardinfo" type="text" defaultValue=""
          placeholder="Название" required minLength="2" maxLength="30" />
        <span className="popup__input-error popup__input-error_cardinfo"></span>
        <input className="popup__input popup__input_type_description" id="cardurl" name="cardurl" type="url" defaultValue=""
          placeholder="Ссылка на картинку" required />
        <span className="popup__input-error popup__input-error_cardurl"></span>
      </PopupWithForm>

      <PopupWithForm isOpen={isDeleteCardPopupOpen}
        title={'Вы уверены?'}
        name={'namedelete'}
        textButton={'Да'}
        onClose={() => setDeleteCardPopupOpen(false)}
      >
        <span className="popup__input-error popup__input-error_cardurl"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={() => setSelectedCard(null)} />
    </div>
  );
};