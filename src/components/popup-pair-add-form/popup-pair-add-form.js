import "../../styles/popup.css";
import { useEffect, useState, useRef } from "react";

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

  const formRef = useRef(null);
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
      // setSelectedTruck("");
      // setSelectedTrailer("");
      if (formRef.current) formRef.current.reset();
    }
  }, [isOpen]);

  // Сабмит
  const handleSubmit = (e) => {
    e.preventDefault();

    // Получаем значения необязательных полей
    const date = e.target.date.value;
    const from_country = e.target.from_country.value;
    const to_country = e.target.to_country.value;
    const cargo = e.target.cargo.value;
    const comment = e.target.comment.value;

    // Создаём объект новой пары
    const newPair = {
      pair_id: Date.now(), // уникальный id
      truck_number: selectedTruck,
      trailer_number: selectedTrailer,
      date: date || Date.now(),
      from_country: from_country || "",
      to_country: to_country || "",
      cargo: cargo || "",
      comment: comment || "",
      flag: false,
    };

    // Добавляем в массив на верхнем уровне
    setPairs([...pairs, newPair]);

    // Закрываем попап и сбрасываем форму
    setSelectedTruck("");
    setSelectedTrailer("");
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

          <form className="form" onSubmit={handleSubmit} ref={formRef}>
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

              <div className="form__column">
                <h2 className="form__title">
                  Номер прицепа <span></span>
                </h2>
                <select
                  required
                  className="form__select form__input"
                  id="trailer_number"
                  name="trailer_number"
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
  );
};

export default PopupPairAddForm;
