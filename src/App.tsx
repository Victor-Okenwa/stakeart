import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppOutlet from "./outlets/AppOutlet";
import Home from "./pages/Home";
import Withdraw from "./pages/Withdraw";
import AddFund from "./pages/AddFund";
import Swap from "./pages/Swap";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import IntroPage from "./components/IntroPage";

function App() {
  const [isAppInitializing, setIsAppInitializing] = useState(false);

  // useEffect(() => {

  //   document.addEventListener("load",
  //     ()=> setIsAppInitializing(false);
  //     );
  //   return () =>
  //     document.removeEventListener("DOMContentLoaded", () =>
  //       handleIsAppInitializing()
  //     );
  // }, []);

  return (
    <div className="app">
      {isAppInitializing ? (
        <IntroPage />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<AppOutlet />}>
              <Route path="home" element={<Home />} />
              <Route path="withdraw" element={<Withdraw />} />
              <Route path="add-fund" element={<AddFund />} />
              <Route path="swap" element={<Swap />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
