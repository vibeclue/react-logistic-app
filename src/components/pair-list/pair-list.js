import { useState } from "react";
import "./pair-list.css";

const PairList = ({ data }) => {
  const [pairs, setPairs] = useState(data);

  // Удаление строки
  const deletePair = (id) => {
    setPairs((prev) => prev.filter((p) => p.pair_id !== id));
  };

  // Переключение флага
  const toggleFlag = (id) => {
    setPairs((prev) =>
      prev.map((p) => (p.pair_id === id ? { ...p, flag: !p.flag } : p))
    );
  };

  return (
    <div className="page__list list">
      <div className="list__header">
        <div className="list__column">Тягач</div>
        <div className="list__column">Прицеп</div>
        <div className="list__column">Дата сцепки</div>
        <div className="list__column">Откуда</div>
        <div className="list__column">Куда</div>
        <div className="list__column">Вид груза</div>
        <div className="list__column">Комментарий</div>
        <div className="list__column">Действие</div>
      </div>

      <div className="list__table">
        {pairs.map((item) => (
          <div
            key={item.pair_id}
            className={`list__item ${item.flag ? "list__item--flag" : ""}`}
          >
            <div className="list__value">{item.truck_number}</div>
            <div className="list__value">{item.trailer_number}</div>
            <div className="list__value">
              {new Date(item.date).toLocaleDateString("ru-RU")}
            </div>
            <div className="list__value">{item.from_country}</div>
            <div className="list__value">{item.to_country}</div>
            <div className="list__value">{item.cargo}</div>
            <div className="list__value">{item.comment}</div>

            <div className="list__buttons">
              <button
                className="list__del _icon-del"
                onClick={() => deletePair(item.pair_id)}
                title="Удалить пару"
              ></button>
              <button
                className={
                  item.flag
                    ? "list__flag list__flag--active"
                    : "list__flag list__flag--passive"
                }
                onClick={() => toggleFlag(item.pair_id)}
                title="Важно"
              ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PairList;
