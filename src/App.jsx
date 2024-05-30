import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import InteractionPage from "./pages/InteractionPage/InteractionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/account" element={<InteractionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
