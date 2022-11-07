import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onUpdateCard }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  function handleChangeName(e) {
    setName(e.target.value);
  };

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateCard({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      title={'Новое место'}
      name={'nameCard'}
      textButton={'Создать'}
      onClose={onClose}
      onSubmit={(cardInfo) => { handleSubmit(cardInfo) }}
    >
      <input className="popup__input popup__input_type_name" id="cardinfo" name="cardinfo" type="text" value={name} onChange={handleChangeName}
        placeholder="Название" required minLength="2" maxLength="30" />
      <span className="popup__input-error popup__input-error_cardinfo"></span>
      <input className="popup__input popup__input_type_description" id="cardurl" name="cardurl" type="url" value={description} onChange={handleChangeDescription}
        placeholder="Ссылка на картинку" required />
      <span className="popup__input-error popup__input-error_cardurl"></span>
    </PopupWithForm>
  );
};