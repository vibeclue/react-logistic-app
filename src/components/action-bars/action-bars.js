import "./action-bars.css";

const ActionBars = () => {
  return (
    <div className="page__pairs pairs">
      <h1 className="pairs__title">Существующие пары</h1>
      <button
        className="pairs__button hidden"
        href="#"
        data-popup="#popup-add-pair"
      >
        Добавить пару
      </button>
      <div className="pairs__buttons hidden">
        <button
          className="pairs__button pairs__button--small"
          href="#"
          data-popup="#popup-head"
        >
          Управление БД тягача
        </button>
        <button
          className="pairs__button pairs__button--small"
          href="#"
          data-popup="#popup-trailer"
        >
          Управление БД прицепа
        </button>
      </div>
    </div>
  );
};

export default ActionBars;
