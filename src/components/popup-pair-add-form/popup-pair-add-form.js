import "../../styles/popup.css";
import "./popup-pair-add-form.css";
import { useEffect } from "react";

const PopupPairAddForm = ({ isOpen, onClose }) => {
  // Закрытие при нажатии ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    // очистка слушателя при закрытии
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // Закрытие при клике по фону  -- не работает
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup")) {
      onClose();
    }
  };
  return (
    <div
      id="popup-add-pair"
      className={`popup ${isOpen ? "popup_show" : ""}`}
      aria-hidden={!isOpen}
      onClick={onClose} // Закрытие при клике вне контента
    >
      <div className="popup__wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="popup__content popup__content--add-pair">
          <h2 className="popup__title">Добавить пару</h2>
          <div className="popup__actions">
            <form id="form" className="form" action="#" method="post">
              <div className="form__content">
                <div className="form__column">
                  <h2 className="form__title">
                    Номер тягача <span></span>
                  </h2>
                  <select
                    required
                    className="form__select form__input"
                    id="truck_number"
                    name="truck_number"
                  ></select>
                </div>

                <div className="form__column">
                  <h2 className="form__title">
                    Номер прицепа <span></span>
                  </h2>
                  <select
                    required
                    className="form__select form__input"
                    id="trailer_number"
                    name="trailer_number"
                  ></select>
                </div>

                <div className="form__column">
                  <h2 className="form__title">Дата сцепки</h2>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    className="form__input"
                  />
                </div>

                <div className="form__column">
                  <h2 className="form__title">Откуда</h2>
                  <input
                    id="from_country"
                    type="text"
                    name="from_country"
                    className="form__input"
                  />
                </div>

                <div className="form__column">
                  <h2 className="form__title">Куда</h2>
                  <input
                    id="to_country"
                    type="text"
                    name="to_country"
                    className="form__input"
                  />
                </div>

                <div className="form__column">
                  <h2 className="form__title">Вид груза</h2>
                  <input
                    id="cargo"
                    type="text"
                    name="cargo"
                    className="form__input"
                  />
                </div>

                <div className="form__column">
                  <label className="form__title" htmlFor="comment">
                    Комментарий
                  </label>
                  <input
                    id="comment"
                    type="text"
                    name="comment"
                    className="form__input"
                  />
                </div>
              </div>

              <div className="form__buttons">
                <button
                  type="button"
                  className="form__button-close"
                  onClick={onClose}
                >
                  Отмена
                </button>
                <button type="submit" className="form__button">
                  Принять
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupPairAddForm;
