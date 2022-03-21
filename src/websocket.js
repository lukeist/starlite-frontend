const socket = new WebSocket(`wss://ws.finnhub.io${api_key_websocket}`);

// Connection opened -> Subscribe
socket.addEventListener("open", function (event) {
  socket.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
  // socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" }));
  // socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:ETHUSDT" }));
  // socket.send(JSON.stringify({ type: "subscribe", symbol: "IC MARKETS:1" }));
});

// Listen for messages
socket.addEventListener("message", function (event) {
  const str = event.data;
  console.log(
    "Message from server ",
    str.substring(str.indexOf(`"p"`) + 4, str.indexOf(`,"s"`))
  );
});

// Unsubscribe
var unsubscribe = function (symbol) {
  socket.send(JSON.stringify({ type: "unsubscribe", symbol: symbol }));
};
