export default function PopupWithForm(props) {
  return (
    < div className={`popup-fade popup-fade_opacity_medium popup-fade_type_${props.name} popup-fade__${(props.isOpen) ? 'visible' : 'hidden'}`}>
      <div className="popup">
        <h2 className="popup__title">{props.title}</h2>
        <form className={`popup__form popup__form_${props.name} `} name={`${props.name} `} onSubmit={props.onSubmit} noValidate>
          {props.children}
          <button className="popup__submit-button cursor" name="submit" type="submit">{props.textButton}</button>
        </form>
        <button className="close-button cursor" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
      </div>
    </div >
  );
};