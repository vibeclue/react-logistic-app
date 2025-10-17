import "./action-bars.css";
import { useState } from "react";
import PopupPairAddForm from "../popup-pair-add-form/popup-pair-add-form";
import PopupTrucks from "../popup-trucks/popup-trucks";
import PopupTrailers from "../popup-trailers/popup-trailers";

const ActionBars = ({
  trucksData,
  trailersData,
  setTrucksData,
  setTrailersData,
  pairs,
  setPairs,
}) => {
  const [isPopupPairOpen, setIsPopupPairOpen] = useState(false);
  const [isPopupTrucksOpen, setIsPopupTrucksOpen] = useState(false);
  const [isPopupTrailersOpen, setIsPopupTrailersOpen] = useState(false);

  const openPopupPair = () => setIsPopupPairOpen(true);
  const closePopupPair = () => setIsPopupPairOpen(false);

  const openPopupTrucks = () => setIsPopupTrucksOpen(true);
  const closePopupTrucks = () => setIsPopupTrucksOpen(false);

  const openPopupTrailers = () => setIsPopupTrailersOpen(true);
  const closePopupTrailers = () => setIsPopupTrailersOpen(false);

  return (
    <>
      <div className="page__pairs pairs">
        <h1 className="pairs__title">Существующие пары</h1>
        <button className="pairs__button" onClick={openPopupPair}>
          Добавить пару
        </button>
        <div className="pairs__buttons">
          <button
            className="pairs__button pairs__button--small"
            onClick={openPopupTrucks}
          >
            Управление БД тягача
          </button>
          <button
            className="pairs__button pairs__button--small"
            onClick={openPopupTrailers} // пока открывает тот же попап
          >
            Управление БД прицепа
          </button>
        </div>
      </div>

      {/* Попапы */}
      <PopupPairAddForm
        isOpen={isPopupPairOpen}
        onClose={closePopupPair}
        trucks={trucksData}
        trailers={trailersData}
        pairs={pairs} // из App
        setPairs={setPairs} // из App
      />
      <PopupTrucks
        isOpen={isPopupTrucksOpen}
        onClose={closePopupTrucks}
        trucksData={trucksData}
        setTrucksData={setTrucksData}
      />
      <PopupTrailers
        isOpen={isPopupTrailersOpen}
        onClose={closePopupTrailers}
        trailersData={trailersData}
        setTrailersData={setTrailersData}
      />
    </>
  );
};

export default ActionBars;
