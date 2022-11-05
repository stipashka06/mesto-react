import React from 'react';
import api from '../utils/Api';
import Card from './Card';
import ContextUser from '../contexts/CurrentUserContext';
import ContextCard from '../contexts/CurrentCard';

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onDeleteCard, onOpenImage, setCurrentCard }) {
  const user = React.useContext(ContextUser);
  const cards = React.useContext(ContextCard);
  const cardsElements = cards?.map((item, i) => (
    <Card
      cardData={item}
      key={item?._id}
      onDeleteCard={onDeleteCard}
      onOpenImage={onOpenImage}
      onCardLike={handleCardLike}
    />
  ));
  function handleCardLike(card) {
    const isLiked = card?.likes.some(i => i?._id === user?._id);
    api.stagingLike(card?._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c?._id === newCard?._id ? newCard : c);
        setCurrentCard(newCards);
      });
  };

  function handleCardDelete(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card?.likes.some(i => i?._id === user?._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.stagingLike(card?._id, isLiked)
      .then((newCard) => {
        console.log(newCard);
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => c?._id === newCard?._id ? newCard : c);
        console.log(newCards);
        // Обновляем стейт
        setCurrentCard(newCards);
      });
  };

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__background-avatar">
          <img className="profile__avatar" src={user?.avatar} alt="Жак-Ив Кусто" />
          <div className="profile__avatar-hover cursor" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-title">
            <h1 className="profile__title">{user?.name}</h1>
            <button className="profile__edit-button cursor" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{user?.about}</p>
        </div>
        <button className="profile__add-button cursor" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>
      <section className="elements" aria-label="Достопримечательности России">
        {cardsElements}
      </section>
    </main>
  );
};