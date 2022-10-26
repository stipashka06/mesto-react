export default function Card(props) {
  const setImage = () => {
    props.onOpenImage(props.src, props.name)
  }

  return (
    <article className="element" /* key={i} */ >
      <img className="element__image" src={props.src} alt={props.name} onClick={setImage} />
      <h2 className="element__title">{props.name}</h2>
      <div className="element__block-like">
        <button className="element__like element__like_type_passive cursor" type="button" aria-label="Like" /* onClick={handleLikeClick} */></button>
        <p className="element__amount-like">{props.likes}</p>
      </div>
      <button className="element__basket cursor" type="button" aria-label="Удалить" onClick={props.onDeleteCard}></button>
    </article>
  );
}