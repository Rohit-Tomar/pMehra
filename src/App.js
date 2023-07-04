import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/navbar";
import Finances from "./components/finances";
import Send from "./components/sendandrequest";
import Deals from "./components/deals";
import Wallet from "./components/wallet";
import Help from "./components/help";
import Activity from "./components/activity";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              background: "#222D65",
              height: "60px",
            }}
          >
            <Navbar />
          </div>
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/finances" element={<Finances />} />
              <Route path="/send_request" element={<Send />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;
