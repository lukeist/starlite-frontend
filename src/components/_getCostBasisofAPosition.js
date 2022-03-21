const getCostBasisOfAPosition = (symbol, tradeMessages) => {
  const allOrdersFromCurrentPosition = tradeMessages.filter(
    (order) => order.symbol === symbol
  );
  let costBasisNumber = 0;
  if (allOrdersFromCurrentPosition.length > 0) {
    for (let i = 0; i < allOrdersFromCurrentPosition.length; i++) {
      costBasisNumber =
        Math.round(
          (allOrdersFromCurrentPosition[i].tradeCostTotal +
            costBasisNumber +
            Number.EPSILON) *
            100
        ) / 100;
    }
  }
  //   const costBasis = dollarSign + numberWithCommas(costBasisNumber);
  return costBasisNumber;
};

export default getCostBasisOfAPosition;
