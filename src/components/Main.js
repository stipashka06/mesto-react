import React, { useState } from 'react';
import api from '../utils/Api';
import Card from './Card';

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onDeleteCard, onOpenImage }) {
  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [isCards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getAllInfo()
      .then(([userInfo, cardsInfo]) => {
        setUserAvatar(userInfo.avatar);
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setCards(cardsInfo)
      })
      .catch((err) => {
        console.log(
          `Ошибка запроса загрузки данный пользователя или карточек ${err}`
        );
      });
  }, []);

  const cardsElements = isCards.map((item, i) => (
    <Card
      cardData={item}
      key={item._id}
      onDeleteCard={onDeleteCard}
      onOpenImage={onOpenImage}
    />
  ));

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__background-avatar">
          <img className="profile__avatar" src={userAvatar} alt="Жак-Ив Кусто" />
          <div className="profile__avatar-hover cursor" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-title">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button cursor" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__add-button cursor" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>
      <section className="elements" aria-label="Достопримечательности России">
        {cardsElements}
      </section>
    </main>
  );
};