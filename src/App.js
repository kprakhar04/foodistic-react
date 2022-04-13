// react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// constants
import { CHECKOUT, HOME } from "./constants/routes";

// components
import Header from "./components/header";
import Restaurant from "./pages/restaurant";
import Checkout from "./pages/checkout";

//css
import "./app.css";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path={HOME} element={<Restaurant />} />
          <Route path={CHECKOUT} element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
