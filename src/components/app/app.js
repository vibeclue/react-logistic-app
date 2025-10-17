import Header from "../header/header";
import SearchPanel from "../search-pannel/search-panel";
import ActionBars from "../action-bars/action-bars";
import PairList from "../pair-list/pair-list";
import PopupLogin from "../popup-login/popup-login";
import { useState } from "react";

import "../../index.css";

function App() {
  const [pairsData, setPairsData] = useState([
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
  ]);

  const [trucksData, setTrucksData] = useState([
    { id: 1, number: "AA 1234 BC" },
    { id: 2, number: "BB 5678 CC" },
    { id: 3, number: "CC 9012 DD" },
  ]);

  const [trailersData, setTrailersData] = useState([
    { id: 1, number: "AAA OOO 777" },
    { id: 2, number: "342AI" },
    { id: 3, number: "555 IO 73" },
  ]);

  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <footer className="footer">
          <div className="footer__container">
            <ActionBars
              trucksData={trucksData}
              trailersData={trailersData}
              setTrucksData={setTrucksData}
              setTrailersData={setTrailersData}
              pairs={pairsData}
              setPairs={setPairsData}
            />
            <SearchPanel />
            <PairList pairs={pairsData} setPairs={setPairsData} />
          </div>
        </footer>
      </div>
      <PopupLogin />
    </div>
  );
}

export default App;
