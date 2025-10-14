import "./search-panel.css";

const SearchPanel = () => {
  return (
    <div className="page__search search">
      <h3 className="search__title">Поиск</h3>
      <div className="search__actions">
        <input
          id="searchTruck"
          autoComplete="off"
          type="text"
          name="form[]"
          data-error="error"
          placeholder="Тягач"
          class="search__input"
        />
        <input
          id="searchTrailer"
          autoComplete="off"
          type="text"
          name="form[]"
          data-error="error"
          placeholder="Прицеп"
          class="search__input"
        />
        <input
          id="searchDate"
          autoComplete="off"
          type="date"
          name="form[]"
          data-error="error"
          placeholder=""
          class="search__input"
        />
      </div>
    </div>
  );
};

export default SearchPanel;

{
  /* <div class="page__serch serch">
        <h3 class="serch__title">Поиск</h3>
        <div class="serch__actions">
            <input id="searchTruck" autocomplete="off" type="text" name="form[]" data-error="error" placeholder="Тягач" class="serch__input">
            <input id="searchTrailer" autocomplete="off" type="text" name="form[]" data-error="error" placeholder="Прицеп" class="serch__input">
            <input id="searchDate" autocomplete="off" type="date" name="form[]" data-error="error" placeholder class="serch__input">
        </div>
    </div>  */
}
