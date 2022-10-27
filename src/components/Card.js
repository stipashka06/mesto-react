export default function Card({ cardData, onOpenImage, onDeleteCard }) {
  const handleCardClick = () => {
    onOpenImage(cardData)
  };

  return (
    <article className="element">
      <img className="element__image" src={cardData?.link} alt={cardData?.name} onClick={handleCardClick} />
      <h2 className="element__title">{cardData?.name}</h2>
      <div className="element__block-like">
        <button className="element__like element__like_type_passive cursor" type="button" aria-label="Like"></button>
        <p className="element__amount-like">{cardData?.likes.length}</p>
      </div>
      <button className="element__basket cursor" type="button" aria-label="Удалить" onClick={onDeleteCard}></button>
    </article>
  );
};