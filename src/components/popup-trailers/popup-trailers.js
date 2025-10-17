import "../../styles/forms.css";
import "../../styles/popup.css";
import { useEffect, useState } from "react";

const PopupTrailers = ({ isOpen, onClose, trailersData, setTrailersData }) => {
  // Закрываю попап на Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Закрываю попап по клику вне окна
  const handleOverlayClick = (e) => {
    onClose();
  };

  // сбрасывает инпут нового прицепа, если закрыт попап
  useEffect(() => {
    if (!isOpen) {
      setIsAdding(false);
      setNewTrailerNumber("");
    }
  }, [isOpen]);

  const [newTrailerNumber, setNewTrailerNumber] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  // Добавление прицепа в список по нажатию ENTER
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTrailerNumber.trim() !== "") {
      e.preventDefault(); // предотвращаю сабмит формы
      const newTrailer = {
        id: Date.now(),
        number: newTrailerNumber.trim(),
      };
      setTrailersData([...trailersData, newTrailer]);
      setNewTrailerNumber("");
      setIsAdding(false);
    }
  };

  // Удаление прицепа из списка
  const handleDeleteTrailer = (id) => {
    setTrailersData(trailersData.filter((t) => t.id !== id));
  };

  return (
    <div
      id="popup-trailer"
      className={`popup ${isOpen ? "popup_show" : ""}`}
      onClick={handleOverlayClick}
      aria-hidden={!isOpen}
    >
      <div className="popup__wrapper">
        <div
          className="popup__content popup__content--management popup-management"
          id="popupManagement"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="popup-management__title"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            {/* Если не добавляем — показываем заголовок */}
            {!isAdding && (
              <span style={{ fontWeight: "600" }}>Все прицепы</span>
            )}

            {/* Правая часть (кнопка + и поле ввода) */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* Если добавляем — показываем input */}
              {isAdding && (
                <input
                  type="text"
                  placeholder="Введите номер"
                  value={newTrailerNumber}
                  onChange={(e) => setNewTrailerNumber(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  style={{
                    flex: 1,
                    padding: "5px 8px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    outline: "none",
                  }}
                />
              )}

              {/* Кнопка “+” */}
              <abbr title={isAdding ? "Отменить" : "Добавить прицеп"}>
                <button
                  id="addTrailer"
                  onClick={() => {
                    setIsAdding(!isAdding);
                    setNewTrailerNumber("");
                  }}
                  className={`add-trailer-button ${isAdding ? "active" : ""}`}
                ></button>
              </abbr>
            </div>
          </div>

          {/* Список тягачей */}
          <div className="popup-management__rows" id="managementRowsHead">
            {trailersData.length === 0 ? (
              <p style={{ textAlign: "center", marginTop: "20px" }}>
                Пока нет добавленных тягачей
              </p>
            ) : (
              trailersData.map((trailer) => (
                <div className="popup-management__row" key={trailer.id}>
                  <span>
                    <strong>{trailer.number}</strong>
                  </span>
                  <button
                    className="popup-management__save"
                    onClick={() => handleDeleteTrailer(trailer.id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "red",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupTrailers;
