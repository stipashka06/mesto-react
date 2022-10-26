export default function ImagePopup(props) {
  function addStyle() {
    return (props.isOpen) ? { display: 'flex' } : { display: 'none' };
  }

  return (
    // console.log(props)
    <div className="popup-fade popup-fade_opacity_strong popup-fade_type_img"
      style={addStyle()}
    >
      <figure className="popup-figure">
        <img className="popup-figure__image" src={props.src} alt={props.name} />
        <p className="popup-figure__title">{props.name}</p>
        <button className="close-button cursor" type="button" onClick={props.onClose}></button>
      </figure>
    </div>
  );
}