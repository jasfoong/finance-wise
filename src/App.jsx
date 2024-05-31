import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import InteractionPage from "./pages/InteractionPage/InteractionPage";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Toastify.scss";

function App() {
  return (
    <>
    <ToastContainer hideProgressBar={true}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/account" element={<InteractionPage />} />
        </Routes>
      </BrowserRouter>
      <Button />
      <Footer />
    </>
  );
}

export default App;
