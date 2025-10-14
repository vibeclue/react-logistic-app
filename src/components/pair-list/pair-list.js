import "./pair-list.css";

const PairList = () => {
  return (
    <div class="page__list list">
      <div class="list__header ">
        <div class="list__column">Тягач</div>
        <div class="list__column">Прицеп</div>
        <div class="list__column">Дата сцепки</div>
        <div class="list__column">Откуда</div>
        <div class="list__column">Куда</div>
        <div class="list__column">Вид груза </div>
        <div class="list__column">Комментарий</div>
        <div class="list__column list__column--action hidden">Действие</div>
      </div>
      <div id="list" class="list__table"></div>
    </div>
  );
};

export default PairList;
