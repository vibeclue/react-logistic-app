import "./action-bars.css";
import { useState } from "react";
import PopupPairAddForm from "../popup-pair-add-form/popup-pair-add-form";

const ActionBars = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div className="page__pairs pairs">
        <h1 className="pairs__title">Существующие пары</h1>
        <button className="pairs__button" onClick={openPopup}>
          Добавить пару
        </button>
        <div className="pairs__buttons">
          <button
            className="pairs__button pairs__button--small"
            onClick={openPopup}
          >
            Управление БД тягача
          </button>
          <button
            className="pairs__button pairs__button--small"
            onClick={openPopup}
          >
            Управление БД прицепа
          </button>
        </div>
      </div>

      {/* Попап окно */}
      <PopupPairAddForm isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default ActionBars;
