import Header from "../header/header";
import SearchPanel from "../search-pannel/search-panel";
import ActionBars from "../action-bars/action-bars";
import PairList from "../pair-list/pair-list";
import PopupLogin from "../popup-login/popup-login";

import "../../index.css";

function App() {
  const data = [
    {
      pair_id: 1,
      truck_number: "TR-100",
      trailer_number: "TL-200",
      date: "2025-10-10",
      from_country: "PL",
      to_country: "DE",
      cargo: "Электроника",
      comment: "Срочная доставка",
      flag: true,
    },
    {
      pair_id: 2,
      truck_number: "TR-101",
      trailer_number: "TL-201",
      date: "2025-10-11",
      from_country: "LT",
      to_country: "FR",
      cargo: "Одежда",
      comment: "",
      flag: false,
    },
    {
      pair_id: 3,
      truck_number: "TR-102",
      trailer_number: "TL-202",
      date: "2025-10-12",
      from_country: "PL",
      to_country: "IT",
      cargo: "Автозапчасти",
      comment: "Нужно перегрузить в Берлине",
      flag: false,
    },
  ];

  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <footer className="footer">
          <div className="footer__container">
            <ActionBars />
            <SearchPanel />
            <PairList data={data} />
          </div>
        </footer>
      </div>
      <PopupLogin />
      {/* <PopupPairAddForm /> */}
      {/* <PopupTrucks />
      <PopupTrailers /> */}
    </div>
  );
}

export default App;
