// import numberWithCommas from "../../components/_getCommasAsThousandsSeparators ";
import decimalConverter from "../../components/_getDecimal";
// const current = {
//   sharePriceNumber: 0,
//   sharePrice: "",
//   priceChangeNumber: 0,
//   priceChange: "",
//   priceChangePercentage: 0,
//   priceChangeNegative: 0,
//   dayChangeNumber: 0,
//   dayChange: "",
//   dayChangePercentage: 0,
//   dayChangeNegative: 0,
//   costBasis: '',costBasisNumber: 0,
//   gainLostAllTimeNumber: 0,
//   gainLostAllTime: "",
//   gainLostAllTimePercentage: 0,
//   gainLostAllTimeNegative: 0,
//   marketValueNumber: 0,
//   marketValue: "",
// };
const initStateQuickStart = [
  {
    symbol: "GME",
    companyName: "GameStop Corp",
    quantity: 1368,
    current: {
      // sharePriceNumber: 0,
      // sharePrice: "",
      // priceChangeNumber: 0,
      // priceChange: "",
      // priceChangePercentage: 0,
      // priceChangeNegative: 0,
      // dayChangeNumber: 0,
      // dayChange: "",
      // dayChangePercentage: 0,
      // dayChangeNegative: 0,
      // costBasis: "",
      // costBasisNumber: 0,
      // gainLostAllTimeNumber: 0,
      // gainLostAllTime: "",
      // gainLostAllTimePercentage: 0,
      // gainLostAllTimeNegative: 0,
      // marketValueNumber: 0,
      // marketValue: "",
    },
  },
  {
    symbol: "TSLA",
    companyName: "Tesla Inc",
    quantity: 211,
    current: {
      // sharePriceNumber: 0,
      // sharePrice: "",
      // priceChangeNumber: 0,
      // priceChange: "",
      // priceChangePercentage: 0,
      // priceChangeNegative: 0,
      // dayChangeNumber: 0,
      // dayChange: "",
      // dayChangePercentage: 0,
      // dayChangeNegative: 0,
      // costBasis: "",
      // costBasisNumber: 0,
      // gainLostAllTimeNumber: 0,
      // gainLostAllTime: "",
      // gainLostAllTimePercentage: 0,
      // gainLostAllTimeNegative: 0,
      // marketValueNumber: 0,
      // marketValue: "",
    },
  },
  {
    symbol: "AAPL",
    companyName: "Apple Inc",
    quantity: 231,
    current: {
      // sharePriceNumber: 0,
      // sharePrice: "",
      // priceChangeNumber: 0,
      // priceChange: "",
      // priceChangePercentage: 0,
      // priceChangeNegative: 0,
      // dayChangeNumber: 0,
      // dayChange: "",
      // dayChangePercentage: 0,
      // dayChangeNegative: 0,
      // costBasis: "",
      // costBasisNumber: 0,
      // gainLostAllTimeNumber: 0,
      // gainLostAllTime: "",
      // gainLostAllTimePercentage: 0,
      // gainLostAllTimeNegative: 0,
      // marketValueNumber: 0,
      // marketValue: "",
    },
  },
  {
    symbol: "MSFT",
    companyName: "Microsoft Corp",
    quantity: 320,
    current: {
      // sharePriceNumber: 0,
      // sharePrice: "",
      // priceChangeNumber: 0,
      // priceChange: "",
      // priceChangePercentage: 0,
      // priceChangeNegative: 0,
      // dayChangeNumber: 0,
      // dayChange: "",
      // dayChangePercentage: 0,
      // dayChangeNegative: 0,
      // costBasis: "",
      // costBasisNumber: 0,
      // gainLostAllTimeNumber: 0,
      // gainLostAllTime: "",
      // gainLostAllTimePercentage: 0,
      // gainLostAllTimeNegative: 0,
      // marketValueNumber: 0,
      // marketValue: "",
    },
  },
  {
    symbol: "AMZN",
    companyName: "Amazon.com Inc",
    quantity: 409,
    current: {
      // sharePriceNumber: 0,
      // sharePrice: "",
      // priceChangeNumber: 0,
      // priceChange: "",
      // priceChangePercentage: 0,
      // priceChangeNegative: 0,
      // dayChangeNumber: 0,
      // dayChange: "",
      // dayChangePercentage: 0,
      // dayChangeNegative: 0,
      // costBasis: "",
      // costBasisNumber: 0,
      // gainLostAllTimeNumber: 0,
      // gainLostAllTime: "",
      // gainLostAllTimePercentage: 0,
      // gainLostAllTimeNegative: 0,
      // marketValueNumber: 0,
      // marketValue: "",
    },
  },
  {
    symbol: "GOOGL",
    companyName: "Alphabet Inc",
    quantity: 428,
    current: {
      // sharePriceNumber: 0,
      // sharePrice: "",
      // priceChangeNumber: 0,
      // priceChange: "",
      // priceChangePercentage: 0,
      // priceChangeNegative: 0,
      // dayChangeNumber: 0,
      // dayChange: "",
      // dayChangePercentage: 0,
      // dayChangeNegative: 0,
      // costBasis: "",
      // costBasisNumber: 0,
      // gainLostAllTimeNumber: 0,
      // gainLostAllTime: "",
      // gainLostAllTimePercentage: 0,
      // gainLostAllTimeNegative: 0,
      // marketValueNumber: 0,
      // marketValue: "",
    },
  },
  {
    symbol: "RBLX",
    companyName: "Roblox Corp",
    quantity: 312,
    current: {
      // sharePriceNumber: 0,
      // sharePrice: "",
      // priceChangeNumber: 0,
      // priceChange: "",
      // priceChangePercentage: 0,
      // priceChangeNegative: 0,
      // dayChangeNumber: 0,
      // dayChange: "",
      // dayChangePercentage: 0,
      // dayChangeNegative: 0,
      // costBasis: "",
      // costBasisNumber: 0,
      // gainLostAllTimeNumber: 0,
      // gainLostAllTime: "",
      // gainLostAllTimePercentage: 0,
      // gainLostAllTimeNegative: 0,
      // marketValueNumber: 0,
      // marketValue: "",
    },
  },
  {
    symbol: "FB",
    companyName: "Meta Platforms Inc",
    quantity: 246,
    current: {
      // sharePriceNumber: 0,
      // sharePrice: "",
      // priceChangeNumber: 0,
      // priceChange: "",
      // priceChangePercentage: 0,
      // priceChangeNegative: 0,
      // dayChangeNumber: 0,
      // dayChange: "",
      // dayChangePercentage: 0,
      // dayChangeNegative: 0,
      // costBasis: "",
      // costBasisNumber: 0,
      // gainLostAllTimeNumber: 0,
      // gainLostAllTime: "",
      // gainLostAllTimePercentage: 0,
      // gainLostAllTimeNegative: 0,
      // marketValueNumber: 0,
      // marketValue: "",
    },
  },
  {
    symbol: "OXY",
    companyName: "Occidental Petroleum Corp",
    quantity: 950,
    current: {
      // sharePriceNumber: 0,
      // sharePrice: "",
      // priceChangeNumber: 0,
      // priceChange: "",
      // priceChangePercentage: 0,
      // priceChangeNegative: 0,
      // dayChangeNumber: 0,
      // dayChange: "",
      // dayChangePercentage: 0,
      // dayChangeNegative: 0,
      // costBasis: "",
      // costBasisNumber: 0,
      // gainLostAllTimeNumber: 0,
      // gainLostAllTime: "",
      // gainLostAllTimePercentage: 0,
      // gainLostAllTimeNegative: 0,
      // marketValueNumber: 0,
      // marketValue: "",
    },
  },
  {
    symbol: "ABNB",
    companyName: "Airbnb Inc",
    quantity: 950,
    current: {
      // sharePriceNumber: 0,
      // sharePrice: "",
      // priceChangeNumber: 0,
      // priceChange: "",
      // priceChangePercentage: 0,
      // priceChangeNegative: 0,
      // dayChangeNumber: 0,
      // dayChange: "",
      // dayChangePercentage: 0,
      // dayChangeNegative: 0,
      // costBasis: "",
      // costBasisNumber: 0,
      // gainLostAllTimeNumber: 0,
      // gainLostAllTime: "",
      // gainLostAllTimePercentage: 0,
      // gainLostAllTimeNegative: 0,
      // marketValueNumber: 0,
      // marketValue: "",
    },
  },
  {
    symbol: "SQ",
    companyName: "Block Inc",
    quantity: 350,
    current: {
      // sharePriceNumber: 0,
      // sharePrice: "",
      // priceChangeNumber: 0,
      // priceChange: "",
      // priceChangePercentage: 0,
      // priceChangeNegative: 0,
      // dayChangeNumber: 0,
      // dayChange: "",
      // dayChangePercentage: 0,
      // dayChangeNegative: 0,
      // costBasis: "",
      // costBasisNumber: 0,
      // gainLostAllTimeNumber: 0,
      // gainLostAllTime: "",
      // gainLostAllTimePercentage: 0,
      // gainLostAllTimeNegative: 0,
      // marketValueNumber: 0,
      // marketValue: "",
    },
  },
  {
    symbol: "COIN",
    companyName: "Coinbase Global Inc",
    quantity: 279,
    current: {
      // sharePriceNumber: 0,
      // sharePrice: "",
      // priceChangeNumber: 0,
      // priceChange: "",
      // priceChangePercentage: 0,
      // priceChangeNegative: 0,
      // dayChangeNumber: 0,
      // dayChange: "",
      // dayChangePercentage: 0,
      // dayChangeNegative: 0,
      // costBasis: "",
      // costBasisNumber: 0,
      // gainLostAllTimeNumber: 0,
      // gainLostAllTime: "",
      // gainLostAllTimePercentage: 0,
      // gainLostAllTimeNegative: 0,
      // marketValueNumber: 0,
      // marketValue: "",
    },
  },
  {
    symbol: "BABA",
    companyName: "Alibaba Group Holding Ltd",
    quantity: 220,
    current: {
      // sharePriceNumber: 0,
      // sharePrice: "",
      // priceChangeNumber: 0,
      // priceChange: "",
      // priceChangePercentage: 0,
      // priceChangeNegative: 0,
      // dayChangeNumber: 0,
      // dayChange: "",
      // dayChangePercentage: 0,
      // dayChangeNegative: 0,
      // costBasis: "",
      // costBasisNumber: 0,
      // gainLostAllTimeNumber: 0,
      // gainLostAllTime: "",
      // gainLostAllTimePercentage: 0,
      // gainLostAllTimeNegative: 0,
      // marketValueNumber: 0,
      // marketValue: "",
    },
  },
  {
    symbol: "CCL",
    companyName: "Carnival Corp",
    quantity: 1203,
    current: {
      // sharePriceNumber: 0,
      // sharePrice: "",
      // priceChangeNumber: 0,
      // priceChange: "",
      // priceChangePercentage: 0,
      // priceChangeNegative: 0,
      // dayChangeNumber: 0,
      // dayChange: "",
      // dayChangePercentage: 0,
      // dayChangeNegative: 0,
      // costBasis: "",
      // costBasisNumber: 0,
      // gainLostAllTimeNumber: 0,
      // gainLostAllTime: "",
      // gainLostAllTimePercentage: 0,
      // gainLostAllTimeNegative: 0,
      // marketValueNumber: 0,
      // marketValue: "",
    },
  },
];
const initState = [
  // {
  //   symbol: "",
  //   quantity: 0,
  // },
];

const tradeReducer = (state = initState, action) => {
  const index = state.findIndex(
    (stock) => stock.symbol === action.payload.symbol
  );
  switch (action.type) {
    case "BUY_STOCK_FROM_ZERO_POSITION":
      const firstQuantityAfterBuyParseFloat = decimalConverter(
        action.payload.quantity,
        10000
      );

      return [
        ...state,
        {
          symbol: action.payload.symbol,
          companyName: action.payload.companyName,
          quantity: firstQuantityAfterBuyParseFloat,
        },
      ];
    case "BUY_STOCK_FROM_SOME_POSITIONS":
      // const indexBuy = state.findIndex(
      //   (stock) => stock.symbol === action.payload.symbol
      // );
      const totalQuantityAfterBuyParseFloat = decimalConverter(
        parseFloat(state[index].quantity) + action.payload.quantity,
        10000
      );
      // Math.round(
      //   (parseFloat(state[index].quantity) +
      //     action.payload.quantity +
      //     Number.EPSILON) *
      //     10000
      // ) / 10000;
      state[index].quantity = totalQuantityAfterBuyParseFloat;
      return [...state];
    case "SELL_POSITION":
      // const indexSell = state.findIndex(
      //   (stock) => stock.symbol === action.payload.symbol
      // );
      const quantityAfterSellParseFloat = decimalConverter(
        parseFloat(state[index].quantity) - action.payload.quantity,
        10000
      );
      // Math.round(
      //   (parseFloat(state[index].quantity) +
      //     action.payload.quantity +
      //     Number.EPSILON) *
      //     10000
      // ) / 10000;
      // quantityAfterSellParseFloat === 0
      //   ? // REMOVE ITEM IF NO POSITION LEFT
      //     (state = state.filter(
      //       (item) => item.quantity !== state[indexSell].quantity
      //     ))
      //   :
      state[index].quantity = quantityAfterSellParseFloat;
      return [...state];

    case "SELL_POSITION_ALL":
      // const indexSellAll = state.findIndex(
      //   (stock) => stock.symbol === action.payload.symbol
      // );
      state = state.filter((item) => item.quantity !== state[index].quantity);
      return [...state];

    case "GET_SAMPLE":
      return initStateQuickStart;

    case "GET_PORTFOLIO_UPDATE_TO_CURRENT_PRICE":
      // const dollarSign = "$";
      // const dollarSignPositive = "+$";
      // const dollarSignNegative = "-$";
      // const indexAfterMinusSign = 1;

      // const current = state[index].current;
      // const quantity = state[index].quantity;
      // const quote = action.payload.quote.data;

      // current.costBasisNumber = action.payload.costBasisNumber;
      // current.sharePriceNumber = quote.c;

      // current.priceChangePercentage = decimalConverter(quote.dp, 100);
      // current.priceChangeNumber = quote.d;
      // // .substring(
      // //   indexAfterMinusSign
      // // ); // remove -
      // current.marketValueNumber = decimalConverter(
      //   current.sharePriceNumber * quantity,
      //   100
      // );
      // current.dayChangeNumber = decimalConverter(
      //   current.priceChangeNumber * quantity,
      //   100
      // );
      // current.dayChangePercentage = decimalConverter(
      //   (current.dayChangeNumber * 100) / current.costBasisNumber,
      //   100
      // );
      // current.gainLostAllTimeNumber = decimalConverter(
      //   current.marketValueNumber - current.costBasisNumber,
      //   100
      // );

      // current.gainLostAllTimePercentage = decimalConverter(
      //   (current.gainLostAllTimeNumber * 100) / current.costBasisNumber,
      //   100
      // );
      // // if (state.length > 0) {

      // //   // ToString

      // current.sharePrice =
      //   dollarSign + numberWithCommas(current.sharePriceNumber);
      // current.priceChange =
      //   dollarSignPositive + numberWithCommas(current.priceChangeNumber);
      // current.priceChangeNegative =
      //   dollarSignNegative +
      //   numberWithCommas(current.priceChangeNumber).substring(
      //     indexAfterMinusSign
      //   ); // remove -;
      // current.marketValue =
      //   dollarSign + numberWithCommas(current.marketValueNumber);
      // current.dayChange =
      //   dollarSignPositive + numberWithCommas(current.dayChangeNumber);
      // current.dayChangeNegative =
      //   dollarSignNegative +
      //   numberWithCommas(current.dayChangeNumber).substring(
      //     indexAfterMinusSign
      //   ); // remove -;;
      // // .substring(indexAfterMinusSign); // remove -
      // current.gainLostAllTime =
      //   dollarSignPositive + numberWithCommas(current.gainLostAllTimeNumber);
      // current.gainLostAllTimeNegative =
      //   dollarSignNegative +
      //   numberWithCommas(current.gainLostAllTimeNumber).substring(
      //     indexAfterMinusSign
      //   ); // remove -
      // }

      // state[indexCurrent].quote = action.payload.quote; THIS WORKS

      state[index].current = action.payload.current;
      return [...state];
    default:
      return state;
  }
};

export default tradeReducer;
