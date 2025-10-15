import "../../styles/forms.css";
import "../../styles/popup.css";
import { useEffect } from "react";

const PopupTrailers = ({ isOpen, onClose }) => {
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
      id="popup-trailer"
      className={`popup ${isOpen ? "popup_show" : ""}`}
      onClick={onClose} // клик вне контента закрывает
      aria-hidden={!isOpen}
    >
      <div className="popup__wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="popup__content popup__content--management popup-management">
          <div className="popup-management__title">
            Все прицепы{" "}
            <abbr title="Добавить прицеп">
              <button id="addTrailer"></button>
            </abbr>
          </div>
          <div
            className="popup-management__rows"
            id="managementRowsTrailer"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PopupTrailers;
