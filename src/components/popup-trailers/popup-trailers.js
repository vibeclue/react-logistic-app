import "../../styles/forms.css";
import "../../styles/popup.css";

const PopupTrailers = () => {
  return (
    <div id="popup-trailer" aria-hidden="false" class="popup">
      <div class="popup__wrapper">
        <div class="popup__content popup__content--management popup-management">
          <div class="popup-management__title">
            Все прицепы{" "}
            <abbr title="Добавить прицеп">
              <button id="addTrailer"></button>
            </abbr>
          </div>
          <div class="popup-management__rows" id="managementRowsTrailer"></div>
        </div>
      </div>
    </div>
  );
};

export default PopupTrailers;
