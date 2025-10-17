import "../../styles/popup.css";
import "../../styles/forms.css";
import { useEffect, useState } from "react";

const PopupTrucks = ({ isOpen, onClose, trucksData, setTrucksData }) => {
  // Закрытие при ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  //закрытие по клику по вне попапа
  const handleOverlayClick = (e) => {
    onClose();
  };

  // сбрасывает ввод в форму при закрытии попапа
  useEffect(() => {
    if (!isOpen) {
      setIsAdding(false);
      setNewTruckNumber("");
    }
  }, [isOpen]);

  const [newTruckNumber, setNewTruckNumber] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  // Добавление тягача по Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTruckNumber.trim() !== "") {
      e.preventDefault(); // предотвращаю сабмит формы
      const newTruck = {
        id: Date.now(),
        number: newTruckNumber.trim(),
      };
      setTrucksData([...trucksData, newTruck]);
      setNewTruckNumber("");
      setIsAdding(false);
    }
  };

  // Удаление тягача
  const handleDeleteTruck = (id) => {
    setTrucksData(trucksData.filter((t) => t.id !== id));
  };

  return (
    <div
      id="popup-head"
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
          {/* Заголовок */}
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
            {!isAdding && <span style={{ fontWeight: "600" }}>Все тягачи</span>}

            {/* Правая часть (кнопка + и поле ввода) */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* Если добавляем — показываем input */}
              {isAdding && (
                <input
                  type="text"
                  placeholder="Введите номер"
                  value={newTruckNumber}
                  onChange={(e) => setNewTruckNumber(e.target.value)}
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
              <abbr title={isAdding ? "Отменить" : "Добавить тягач"}>
                <button
                  id="addTruck"
                  onClick={() => {
                    setIsAdding(!isAdding);
                    setNewTruckNumber("");
                  }}
                  className={`add-truck-button ${isAdding ? "active" : ""}`}
                ></button>
              </abbr>
            </div>
          </div>

          {/* Список тягачей */}
          <div className="popup-management__rows" id="managementRowsHead">
            {trucksData.length === 0 ? (
              <p style={{ textAlign: "center", marginTop: "20px" }}>
                Пока нет добавленных тягачей
              </p>
            ) : (
              trucksData.map((truck) => (
                <div className="popup-management__row" key={truck.id}>
                  <span>
                    <strong>{truck.number}</strong>
                  </span>
                  <button
                    className="popup-management__save"
                    onClick={() => handleDeleteTruck(truck.id)}
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

export default PopupTrucks;
