const Message = ({ tradeMessage }) => {
  const dollarSymbol = `$`;

  return (
    <div>
      <p>
        {tradeMessage.buy ? "You bought" : "You sold"}{" "}
        {tradeMessage.tradeQuantityTotal}{" "}
        {tradeMessage.tradeQuantityTotal > 1 ? "shares" : "share"}
        {" of "}
        <span>{tradeMessage.symbol}</span>
        {" for "} {dollarSymbol + tradeMessage.tradeCostTotal}.
      </p>
    </div>
  );
};

export default Message;
