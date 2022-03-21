// export const PopupSubmit = () => {
//   return (
//     <div className="popup-trade-submit">
//       <h4>Congratulations</h4>
//     </div>
//   );
// };

// export const PopupNotEnoughMoney = () => {
//   return (
//     <div className="popup-trade-submit">
//       <h4>You don't have enough money to buy.</h4>
//     </div>
//   );
// };

// export const PopupNotEnoughSharesToSell = () => {
//   return (
//     <div className="popup-trade-submit">
//       <h4>You don't have enough shares to sell.</h4>
//     </div>
//   );
// };

const PopupEveryting = ({
  exitPopUpShadow,
  isPopupSubmit,
  notEnoughMoney,
  isTradeQuantityGreaterThanQuantityOfCurrentStock,
}) => {
  return (
    <div>
      {(isPopupSubmit ||
        notEnoughMoney ||
        isTradeQuantityGreaterThanQuantityOfCurrentStock) && (
        <div onClick={exitPopUpShadow} className="popup-shadow"></div>
      )}
      {isPopupSubmit && (
        <div className="popup-trade-submit">
          <h4>Congratulations</h4>
        </div>
      )}
      {notEnoughMoney && (
        <div className="popup-trade-submit">
          <h4>You don't have enough money to buy.</h4>
        </div>
      )}
      {isTradeQuantityGreaterThanQuantityOfCurrentStock && (
        <div className="popup-trade-submit">
          <h4>You don't have enough shares to sell.</h4>
        </div>
      )}
    </div>
  );
};

export default PopupEveryting;
