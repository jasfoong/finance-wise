import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import InteractionPage from "./pages/InteractionPage/InteractionPage";
import Footer from "./components/Footer/Footer";

function App() {
  const totalBalance = 3000;
  const [categoryBalance, setCategoryBalance] = useState({});

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <OnboardingPage
                totalBalance={totalBalance}
                setCategoryBalance={setCategoryBalance}
              />
            }
          />
          <Route path="/account" element={<InteractionPage categoryBalance={categoryBalance}/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;