import "../../styles/popup.css";
import "../../styles/forms.css";

const PopupTrucks = () => {
  return (
    <div id="popup-head" aria-hidden="false" class="popup">
      <div class="popup__wrapper">
        <div
          class="popup__content popup__content--management popup-management "
          id="popupManagement"
        >
          <div class="popup-management__title">
            Все тягачи{" "}
            <abbr title="Добавить тягач">
              <button id="addTruck"></button>
            </abbr>
          </div>
          <div class="popup-management__rows" id="managementRowsHead"></div>
        </div>
      </div>
    </div>
  );
};

export default PopupTrucks;
