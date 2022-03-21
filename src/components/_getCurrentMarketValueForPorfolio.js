import axios from "axios";
import { quoteData } from "../api";
import { currentTotalAction } from "../store/actions/totalAllPositionsAction";
import { getPortfolioUpdateToCurrentPriceAction } from "../store/actions/tradeAction";
import numberWithCommas from "./_getCommasAsThousandsSeparators ";
import getCostBasisOfAPosition from "./_getCostBasisofAPosition";
import decimalConverter from "./_getDecimal";
import getTotalSumOfAllPositions from "./_getTotalSumOfAllPositions";

/////////////////////////////////////////////////////// For Automate
const getCurrentMarketValueForPorfolio = async (
  dispatch,
  tradeMessages,
  positions
) => {
  for (let i = 0; i < positions.length; i++) {
    const dollarSign = "$";
    const dollarSignPositive = "+$";
    const dollarSignNegative = "-$";
    const indexAfterMinusSign = 1;
    //fetch axios
    // const getCompany = await axios.get(companyProfile(arrayOfStocks[i]));
    const symbol = positions[i].symbol;

    const getQuote = await axios.get(quoteData(symbol));
    const costBasisNumber = await getCostBasisOfAPosition(
      symbol,
      tradeMessages
    );
    const costBasis = dollarSign + numberWithCommas(costBasisNumber);

    // const current = positions[i].current;
    const quantity = positions[i].quantity;
    const quote = getQuote.data;

    const sharePriceNumber = quote.c;

    const priceChangePercentage = decimalConverter(quote.dp, 100);
    const priceChangeNumber = quote.d;

    const marketValueNumber = decimalConverter(
      sharePriceNumber * quantity,
      100
    );

    const dayChangeNumber = decimalConverter(priceChangeNumber * quantity, 100);
    const dayChangePercentage = decimalConverter(
      (dayChangeNumber * 100) / costBasisNumber,
      100
    );
    const gainLostAllTimeNumber = decimalConverter(
      marketValueNumber - costBasisNumber,
      100
    );

    const gainLostAllTimePercentage = decimalConverter(
      (gainLostAllTimeNumber * 100) / costBasisNumber,
      100
    );

    //   // ToString
    const sharePrice = dollarSign + numberWithCommas(sharePriceNumber);
    const priceChange =
      dollarSignPositive + numberWithCommas(priceChangeNumber);
    const priceChangeNegative =
      dollarSignNegative +
      numberWithCommas(priceChangeNumber).substring(indexAfterMinusSign); // remove -;
    const marketValue = dollarSign + numberWithCommas(marketValueNumber);
    const dayChange = dollarSignPositive + numberWithCommas(dayChangeNumber);
    const dayChangeNegative =
      dollarSignNegative +
      numberWithCommas(dayChangeNumber).substring(indexAfterMinusSign); // remove -;;
    // .substring(indexAfterMinusSign); // remove -
    const gainLostAllTime =
      dollarSignPositive + numberWithCommas(gainLostAllTimeNumber);
    const gainLostAllTimeNegative =
      dollarSignNegative +
      numberWithCommas(gainLostAllTimeNumber).substring(indexAfterMinusSign); // remove -
    // }
    const current = {
      sharePriceNumber,
      sharePrice,
      priceChangeNumber,
      priceChange,
      priceChangePercentage,
      priceChangeNegative,
      dayChangeNumber,
      dayChange,
      dayChangePercentage,
      dayChangeNegative,
      costBasis,
      costBasisNumber,
      gainLostAllTimeNumber,
      gainLostAllTime,
      gainLostAllTimePercentage,
      gainLostAllTimeNegative,
      marketValueNumber,
      marketValue,
    };
    dispatch(getPortfolioUpdateToCurrentPriceAction(symbol, current));
    // dispatch(currentTotalAction(getTotalSumOfAllPositions(positions)));
    // console.log(getTotalSumOfAllPositions(positions));
  }
  dispatch(currentTotalAction(getTotalSumOfAllPositions(positions)));
};

export default getCurrentMarketValueForPorfolio;
