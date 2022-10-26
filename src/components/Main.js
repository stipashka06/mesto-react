import React, { useState } from 'react';
import api from '../utils/Api';
import Card from './Card';

export default function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [isCards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserData()
      .then((userInfo) => {
        setUserAvatar(userInfo.avatar);
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
      })
      .catch((err) => {
        console.log(
          `Ошибка запроса загрузки данный пользователя ${err}`
        );
      });
  });

  React.useEffect(() => {
    handleRequest()
  }, []);

  const handleRequest = () => {
    api.getCards()
      .then((data) => {
        const cards = data.map((item) => {
          return {
            id: item._id,
            src: item.link,
            name: item.name,
            likes: item.likes.length,
            idOwner: item.owner._id,
          }
        })
        setCards(cards)
      })
      .catch((err) => {
        console.log(
          `Ошибка запроса загрузки данный карточек ${err}`
        );
      })
  };

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__background-avatar">
          <img className="profile__avatar" src={userAvatar} alt="Жак-Ив Кусто" />
          <div className="profile__avatar-hover" onClick={props.onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-title">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button cursor" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__add-button cursor" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements" aria-label="Достопримечательности России">
        {isCards.map((item, i) => (
          <Card
            item={item}
            key={item.id}
            src={item.src}
            name={item.name}
            likes={item.likes}
            onDeleteCard={props.onDeleteCard}
            onOpenImage={props.onOpenImage}
          />
        ))}
      </section>
    </main>
  );
};