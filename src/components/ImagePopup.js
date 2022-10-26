export default function ImagePopup({ card, onClose }) {
  const addStyle = () => {
    return card ? { display: 'flex' } : { display: 'none' };
  };

  return (
    <div className="popup-fade popup-fade_opacity_strong popup-fade_type_img" style={addStyle()}>
      <figure className="popup-figure">
        <img className="popup-figure__image" src={card?.src} alt={card?.name} />
        <p className="popup-figure__title">{card?.name}</p>
        <button className="close-button cursor" type="button" onClick={onClose}></button>
      </figure>
    </div>
  );
};