import Header from "../header/header";
import SearchPanel from "../search-pannel/search-panel";
import ActionBars from "../action-bars/action-bars";
import PairList from "../pair-list/pair-list";
import PopupLogin from "../popup-login/popup-login";
import PopupPairAddForm from "../popup-pair-add-form/popup-pair-add-form";
import PopupTrucks from "../popup-trucks/popup-trucks";
import PopupTrailers from "../popup-trailers/popup-trailers";

import "../../index.css";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <footer className="footer">
          <div className="footer__container">
            <ActionBars />
            <SearchPanel />
            <PairList />
          </div>
        </footer>
      </div>
      <PopupLogin />
      <PopupPairAddForm />
      <PopupTrucks />
      <PopupTrailers />
    </div>
  );
}

export default App;
