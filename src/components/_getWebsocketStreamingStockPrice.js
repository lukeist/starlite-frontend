// const [loading, setLoading] = useState(true);
// const [orders, setOrders] = useState([]);
// const ws = new WebSocket(`wss://ws.finnhub.io${api_key_websocket}`);
// import { api_key_websocket } from "../api";

// const initWebsocket = () => {
//   ws.onopen = () => {
//     ws.send(JSON.stringify({ type: "subscribe", symbol }));
//   };
//   ws.onmessage = (event) => {
//     const response = JSON.parse(event.data);
//      console.log(response.event)
//   };
//   ws.onclose = () => {
//     initWebsocket();
//   };
// };

// useEffect(() => {
//   initWebsocket();
//   // cleanup method which will be called before next execution. in your case unmount.
//   return () => {
//     ws.close;
//   };
// }, []);

// const getStreamingPrice = (symbol) => {
//   const socket = new WebSocket(`wss://ws.finnhub.io${api_key_websocket}`);
//   // Connection opened -> Subscribe
//   socket.addEventListener("open", function (event) {
//     socket.send(JSON.stringify({ type: "subscribe", symbol }));
//   });
//   let streamingPrice;
//   // Listen for messages
//   socket.addEventListener("message", function (event) {
//     const str = event.data;
//     streamingPrice = str.substring(str.indexOf(`"p"`) + 4, str.indexOf(`,"s"`));

//     // console.log("Message from server ", streamingPrice);
//     var unsubscribe = function (symbol) {
//       socket.send(JSON.stringify({ type: "unsubscribe", symbol }));
//     };
//   });
//   console.log("Message from server ", streamingPrice);
//   return streamingPrice;
// };
// export default getStreamingPrice;
