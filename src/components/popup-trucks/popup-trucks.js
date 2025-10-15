import "../../styles/popup.css";
import "../../styles/forms.css";
import { useEffect } from "react";

const PopupTrucks = ({ isOpen, onClose }) => {
  // Закрытие при ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <div
      id="popup-head"
      className={`popup ${isOpen ? "popup_show" : ""}`}
      onClick={onClose} // клик вне контента закрывает
      aria-hidden={!isOpen}
    >
      <div className="popup__wrapper" onClick={(e) => e.stopPropagation()}>
        <div
          className="popup__content popup__content--management popup-management"
          id="popupManagement"
        >
          <div className="popup-management__title">
            Все тягачи{" "}
            <abbr title="Добавить тягач">
              <button id="addTruck"></button>
            </abbr>
          </div>
          <div className="popup-management__rows" id="managementRowsHead"></div>
        </div>
      </div>
    </div>
  );
};

export default PopupTrucks;
