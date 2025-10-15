import "./header.css";

const Header = () => {
  return (
    <div className="app-head">
      <div className="header__container">
        <div className="header__body">
          <button href="#" className="header__logo">
            <img src="img/logo.svg" alt="" />
            <div className="header__text">
              <span>Logistic</span> Helper
            </div>
          </button>
          <div className="header__actions">
            <button
              id="login"
              type="submit"
              className="header__button header__button--icon"
              data-popup="#popup-login"
            >
              {" "}
              <span className="_icon-user"></span>Авторизация
            </button>
            {/* <form action="/perform_logout" method="POST">
              <button
                id="logout"
                type="submit"
                class="header__button header__button--icon hidden"
              >
                {" "}
                <span class="_icon-exit"></span>Выход
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
