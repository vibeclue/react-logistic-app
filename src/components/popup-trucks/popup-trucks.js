import "../../styles/popup.css";
import "../../styles/forms.css";

const PopupTrucks = () => {
  return (
    <div id="popup-head" aria-hidden="false" className="popup">
      <div className="popup__wrapper">
        <div
          className="popup__content popup__content--management popup-management "
          id="popupManagement"
        >
          <div className="popup-management__title">
            Все тягачи{" "}
            <abbr title="Добавить тягач">
              <button id="addTruck"></button>
            </abbr>
          </div>
          <div className="popup-management__rows" id="managementRowsHead"></div>
        </div>
      </div>
    </div>
  );
};

export default PopupTrucks;
