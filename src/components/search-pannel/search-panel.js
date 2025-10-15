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
          className="search__input"
        />
        <input
          id="searchTrailer"
          autoComplete="off"
          type="text"
          name="form[]"
          data-error="error"
          placeholder="Прицеп"
          className="search__input"
        />
        <input
          id="searchDate"
          autoComplete="off"
          type="date"
          name="form[]"
          data-error="error"
          placeholder=""
          className="search__input"
        />
      </div>
    </div>
  );
};

export default SearchPanel;
