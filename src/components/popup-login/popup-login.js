import "../../styles/popup.css";
import "../../styles/forms.css";
import "./popup-login.css";

const PopupLogin = () => {
  return (
    <div id="popup-login" aria-hidden="false" className="popup">
      <div className="popup__wrapper">
        <div className="popup__content popup__content--login">
          <h2 className="popup__title">Авторизация</h2>
          <form action="/perform_login" className="form-login" method="POST">
            <div className="form-login__item">
              <label className="form-login__label" for="username">
                Логин
              </label>
              <input
                required
                id="username"
                type="text"
                name="username"
                autocomplete="on"
                data-error="Error"
                classNameName="form-login__input form__input"
              />
            </div>
            <div className="form-login__item form-login__item--margin">
              <label className="form-login__label" for="password">
                Пароль
              </label>
              <input
                required
                id="password"
                type="password"
                name="password"
                autocomplete="on"
                data-error="Error"
                className="form-login__input form__input"
              />
              <span
                id="togglePassword"
                className="form-login__icon _icon-eye"
              ></span>
            </div>
            <div className="form-login__buttons">
              <button type="submit" className="form-login__button form__button">
                Войти
              </button>
              <button
                data-close
                type="button"
                className="form-login__button-close form__button-close"
              >
                Отмена
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PopupLogin;
