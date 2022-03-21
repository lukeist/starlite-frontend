import Nav from "./components/Nav";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import Messages from "./pages/Messages";
import Portfolio from "./pages/Portfolio";
import Account from "./pages/Account";
import List from "./pages/List";
import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App dark-mode">
      {/* <button onClick={() => console.log(quoteData)}>clik</button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/account" element={<Account />} />
        <Route path="/lists/:id" element={<List />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
