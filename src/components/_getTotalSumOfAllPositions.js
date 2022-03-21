// import { currentTotalAction } from "../store/actions/totalAllPositionsAction";
import numberWithCommas from "./_getCommasAsThousandsSeparators ";
import decimalConverter from "./_getDecimal";

const getTotalSumOfAllPositions = (positions) => {
  const getTotal = (item) => {
    let totalResult = 0;
    for (let i = 0; i < positions.length; i++) {
      totalResult =
        Math.round(
          (positions[i].current[item] + totalResult + Number.EPSILON) * 100
        ) / 100;
    }
    return totalResult;
  };
  const indexAfterMinusSign = 1;
  const cost = getTotal("costBasisNumber");
  const gainLoss = getTotal("gainLostAllTimeNumber");
  const marketValue = getTotal("marketValueNumber");

  const gainLossPercentage = decimalConverter(
    ((gainLoss - cost) * 100) / cost,
    100
  );
  const gainLostNegative =
    numberWithCommas(gainLoss).substring(indexAfterMinusSign);

  const total = {
    cost,
    gainLoss,
    marketValue,
    gainLossPercentage,
    gainLostNegative,
  };
  //   console.log(total);
  //   dispatch(currentTotalAction(total));
  return total;
};

export default getTotalSumOfAllPositions;
