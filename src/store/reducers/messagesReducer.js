import { v4 as uuidv4 } from "uuid";

const initState = [];
const initStateQuickStart = [
  {
    id: uuidv4(),
    symbol: "GME",
    companyName: "GameStop Corp",
    tradeQuantityTotal: 200,
    tradeCostPerShare: 241.23,
    tradeCostTotal: 72035,
    buy: true,
    time: "Mon Jan 11 2021 at 21:37:15",
  },
  {
    id: uuidv4(),
    symbol: "TSLA",
    companyName: "Tesla Inc",
    tradeQuantityTotal: 200,
    tradeCostPerShare: 241.23,
    tradeCostTotal: 24123,
    buy: true,
    time: "Mon Jan 11 2021 at 21:37:15",
  },
  {
    id: uuidv4(),
    symbol: "AAPL",
    companyName: "Apple Inc",
    tradeQuantityTotal: 200,
    tradeCostPerShare: 241.23,
    tradeCostTotal: 18003,
    buy: true,
    time: "Mon Jan 11 2021 at 21:37:15",
  },
  {
    id: uuidv4(),
    symbol: "MSFT",
    companyName: "Microsoft Corp",
    tradeQuantityTotal: 200,
    tradeCostPerShare: 241.23,
    tradeCostTotal: 22020,
    buy: true,
    time: "Mon Jan 11 2021 at 21:37:15",
  },
  {
    id: uuidv4(),
    symbol: "AMZN",
    companyName: "Amazon.com Inc",
    tradeQuantityTotal: 200,
    tradeCostPerShare: 241.23,
    tradeCostTotal: 340000,
    buy: true,
    time: "Mon Jan 11 2021 at 21:37:15",
  },
  {
    id: uuidv4(),
    symbol: "GOOGL",
    companyName: "Alphabet Inc",
    tradeQuantityTotal: 200,
    tradeCostPerShare: 241.23,
    tradeCostTotal: 250550,
    buy: true,
    time: "Mon Jan 11 2021 at 21:37:15",
  },
  {
    id: uuidv4(),
    symbol: "RBLX",
    companyName: "Roblox Corp",
    tradeQuantityTotal: 200,
    tradeCostPerShare: 241.23,
    tradeCostTotal: 18000,
    buy: true,
    time: "Mon Jan 11 2021 at 21:37:15",
  },
  {
    id: uuidv4(),
    symbol: "FB",
    companyName: "Meta Platforms Inc",
    tradeQuantityTotal: 200,
    tradeCostPerShare: 241.23,
    tradeCostTotal: 34862,
    buy: true,
    time: "Mon Jan 11 2021 at 21:37:15",
  },
  {
    id: uuidv4(),
    symbol: "OXY",
    companyName: "Occidental Petroleum Corp",
    tradeQuantityTotal: 200,
    tradeCostPerShare: 241.23,
    tradeCostTotal: 3750,
    buy: true,
    time: "Mon Jan 11 2021 at 21:37:15",
  },
  {
    id: uuidv4(),
    symbol: "ABNB",
    companyName: "Airbnb Inc",
    tradeQuantityTotal: 200,
    tradeCostPerShare: 241.23,
    tradeCostTotal: 69005,
    buy: true,
    time: "Mon Jan 11 2021 at 21:37:15",
  },
  {
    id: uuidv4(),
    symbol: "SQ",
    companyName: "Block Inc",
    tradeQuantityTotal: 200,
    tradeCostPerShare: 241.23,
    tradeCostTotal: 7820,
    buy: true,
    time: "Mon Jan 11 2021 at 21:37:15",
  },
  {
    id: uuidv4(),
    symbol: "COIN",
    companyName: "Coinbase Global Inc",
    tradeQuantityTotal: 200,
    tradeCostPerShare: 241.23,
    tradeCostTotal: 58060,
    buy: true,
    time: "Mon Jan 11 2021 at 21:37:15",
  },
  {
    id: uuidv4(),
    symbol: "BABA",
    companyName: "Alibaba Group Holding Ltd",
    tradeQuantityTotal: 200,
    tradeCostPerShare: 241.23,
    tradeCostTotal: 600508,
    buy: true,
    time: "Mon Jan 11 2021 at 21:37:15",
  },
  {
    id: uuidv4(),
    symbol: "CCL",
    companyName: "Carnival Corp",
    tradeQuantityTotal: 200,
    tradeCostPerShare: 241.23,
    tradeCostTotal: 22105,
    buy: true,
    time: "Mon Jan 11 2021 at 21:37:15",
  },
];
const tradeMessagesReducer = (state = initState, action) => {
  switch (action.type) {
    case "TRADE_MESSAGE":
      return [
        {
          id: uuidv4(),
          symbol: action.payload.symbol,
          tradeQuantityTotal: action.payload.tradeQuantityTotal,
          tradeCostPerShare: action.payload.tradeCostPerShare,
          tradeCostTotal: action.payload.tradeCostTotal,
          buy: action.payload.buy,
          time: action.payload.time,
        },
        ...state,
      ];

    case "TRADE_MESSAGE_SAMPLE":
      return initStateQuickStart;
    default:
      return state;
  }
};

export default tradeMessagesReducer;
