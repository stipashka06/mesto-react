export default function Card({ item, onOpenImage, onDeleteCard }) {
  const setImage = () => {
    onOpenImage(item)
  };

  return (
    <article className="element">
      <img className="element__image" src={item?.src} alt={item?.name} onClick={setImage} />
      <h2 className="element__title">{item?.name}</h2>
      <div className="element__block-like">
        <button className="element__like element__like_type_passive cursor" type="button" aria-label="Like"></button>
        <p className="element__amount-like">{item?.likes}</p>
      </div>
      <button className="element__basket cursor" type="button" aria-label="Удалить" onClick={onDeleteCard}></button>
    </article>
  );
};