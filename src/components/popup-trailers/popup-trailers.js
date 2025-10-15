import "../../styles/forms.css";
import "../../styles/popup.css";

const PopupTrailers = () => {
  return (
    <div id="popup-trailer" aria-hidden="false" className="popup">
      <div className="popup__wrapper">
        <div className="popup__content popup__content--management popup-management">
          <div className="popup-management__title">
            Все прицепы{" "}
            <abbr title="Добавить прицеп">
              <button id="addTrailer"></button>
            </abbr>
          </div>
          <div
            className="popup-management__rows"
            id="managementRowsTrailer"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PopupTrailers;
