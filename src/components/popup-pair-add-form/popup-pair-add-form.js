import "../../styles/popup.css";
import "./popup-pair-add-form.css";
import "../../styles/forms.css";

const PopupPairAddForm = () => {
  return (
    <div id="popup-add-pair" aria-hidden="false" className="popup">
      <div className="popup__wrapper">
        <div className="popup__content popup__content--add-pair">
          <h2 className="popup__title">Добавить пару</h2>
          <div className="popup__actions">
            <form
              id="form"
              className="form"
              action="#"
              target="_blank"
              method="post"
            >
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
                    data-className-modif="form"
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
                    data-className-modif="form"
                  ></select>
                </div>
                <div className="form__column">
                  <h2 className="form__title">Дата сцепки</h2>
                  <input
                    id="date"
                    autocomplete="off"
                    type="date"
                    name="date"
                    data-error="Error"
                    placeholder
                    className="form__input"
                  />
                </div>
                <div className="form__column">
                  <h2 className="form__title">Откуда</h2>
                  <input
                    autocomplete="on"
                    id="from_country"
                    type="text"
                    name="from_country"
                    data-error="Error"
                    placeholder
                    className="form__input"
                  />
                </div>
                <div className="form__column">
                  <h2 className="form__title">Куда</h2>
                  <input
                    autocomplete="on"
                    id="to_country"
                    type="text"
                    name="to_country"
                    data-error="Error"
                    placeholder
                    className="form__input"
                  />
                </div>
                <div className="form__column">
                  <h2 className="form__title">Вид груза</h2>
                  <input
                    autocomplete="on"
                    id="cargo"
                    type="text"
                    name="cargo"
                    data-error="Error"
                    placeholder
                    className="form__input"
                  />
                </div>
                <div className="form__column">
                  <label className="form__title" for="comment">
                    Комментарий
                  </label>
                  <input
                    id="comment"
                    type="text"
                    name="comment"
                    data-error="Error"
                    placeholder
                    className="form__input"
                  />
                </div>
              </div>
              <div className="form__buttons">
                <button data-close type="button" className="form__button-close">
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
