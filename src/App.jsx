import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import InteractionPage from "./pages/InteractionPage/InteractionPage";
import Footer from "./components/Footer/Footer";

function App() {
  const [totalBalance, setTotalBalance] = useState();
  const [categoryBalance, setCategoryBalance] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingPage 
            setTotalBalance={setTotalBalance} 
            setCategoryBalance={setCategoryBalance} />} 
          />
          <Route path="/account" element={<InteractionPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
