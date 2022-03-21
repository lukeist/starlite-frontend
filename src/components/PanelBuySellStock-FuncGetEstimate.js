import decimalConverter from "./_getDecimal";
import numberWithCommas from "./_getCommasAsThousandsSeparators ";

export const getEstimateCost = (getShares, stockPrice) => {
  const cost = decimalConverter(getShares * stockPrice, 100);

  return {
    estimateCost: cost,
    estimateCostToString: numberWithCommas(cost), // Display large numbers with commas https://stackoverflow.com/questions/27761543/how-do-i-display-large-numbers-with-commas-html
  };
};

export const getEstimateQuantity = (getDollars, stockPrice) => {
  const getNumberOfDollarsParseFloat = parseFloat(
    getDollars.replace("$", "").split(",").join("")
  );
  const getEstimatetradeQuantityToFiveNumberAfterPoint = decimalConverter(
    getNumberOfDollarsParseFloat / stockPrice,
    100000
  );
  // Math.round(
  //   (getNumberOfDollarsParseFloat / stockPrice + Number.EPSILON) * 100000
  // ) / 100000;
  return {
    estimateQuantity: getEstimatetradeQuantityToFiveNumberAfterPoint,
    estimateCost: getNumberOfDollarsParseFloat,
  };
};
