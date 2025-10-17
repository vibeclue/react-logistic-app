import "../../styles/popup.css";
import { useEffect, useState } from "react";

const PopupPairAddForm = ({
  isOpen,
  onClose,
  trucks,
  trailers,
  pairs,
  setPairs,
}) => {
  const [selectedTruck, setSelectedTruck] = useState("");
  const [selectedTrailer, setSelectedTrailer] = useState("");
  const [date, setDate] = useState("");
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [cargo, setCargo] = useState("");
  const [comment, setComment] = useState("");

  // Закрытие при нажатии ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();

    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Закрытие при клике по фону
  const handleOverlayClick = (e) => {
    onClose();
  };

  // чищу форму при открытии попапа
  useEffect(() => {
    if (isOpen) {
      setSelectedTruck("");
      setSelectedTrailer("");
      setDate("");
      setFromCountry("");
      setToCountry("");
      setCargo("");
      setComment("");
    }
  }, [isOpen]);

  // Сабмит
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPair = {
      pair_id: Date.now(),
      truck_number: selectedTruck,
      trailer_number: selectedTrailer,
      date: date || new Date().toISOString().split("T")[0],
      from_country: fromCountry,
      to_country: toCountry,
      cargo,
      comment,
      flag: false,
    };

    setPairs([...pairs, newPair]);
    onClose();
  };

  return (
    <div
      id="popup-add-pair"
      className={`popup ${isOpen ? "popup_show" : ""}`}
      aria-hidden={!isOpen}
      onClick={handleOverlayClick}
    >
      <div className="popup__wrapper">
        <div
          className="popup__content popup__content--add-pair"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="popup__title">Добавить пару</h2>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form__content">
              {/* Тягач */}
              <div className="form__column">
                <h2 className="form__title">Номер тягача</h2>
                <select
                  required
                  className="form__select form__input"
                  value={selectedTruck}
                  onChange={(e) => setSelectedTruck(e.target.value)}
                >
                  <option value="">Выберите тягач</option>
                  {trucks.map((truck) => (
                    <option key={truck.id} value={truck.number}>
                      {truck.number}
                    </option>
                  ))}
                </select>
              </div>

              {/* Прицеп */}
              <div className="form__column">
                <h2 className="form__title">Номер прицепа</h2>
                <select
                  required
                  className="form__select form__input"
                  value={selectedTrailer}
                  onChange={(e) => setSelectedTrailer(e.target.value)}
                >
                  <option value="">Выберите прицеп</option>
                  {trailers.map((trailer) => (
                    <option key={trailer.id} value={trailer.number}>
                      {trailer.number}
                    </option>
                  ))}
                </select>
              </div>

              {/* Дата сцепки */}
              <div className="form__column">
                <h2 className="form__title">Дата сцепки</h2>
                <input
                  type="date"
                  className="form__input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              {/* Откуда */}
              <div className="form__column">
                <h2 className="form__title">Откуда</h2>
                <input
                  type="text"
                  className="form__input"
                  value={fromCountry}
                  onChange={(e) => setFromCountry(e.target.value)}
                />
              </div>

              {/* Куда */}
              <div className="form__column">
                <h2 className="form__title">Куда</h2>
                <input
                  type="text"
                  className="form__input"
                  value={toCountry}
                  onChange={(e) => setToCountry(e.target.value)}
                />
              </div>

              {/* Вид груза */}
              <div className="form__column">
                <h2 className="form__title">Вид груза</h2>
                <input
                  type="text"
                  className="form__input"
                  value={cargo}
                  onChange={(e) => setCargo(e.target.value)}
                />
              </div>

              {/* Комментарий */}
              <div className="form__column">
                <h2 className="form__title">Комментарий</h2>
                <input
                  type="text"
                  className="form__input"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
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
  );
};

export default PopupPairAddForm;
