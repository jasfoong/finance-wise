import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastOptions = {
  position: "top-center",
  autoClose: 4000, // 2 seconds
  hideProgressBar: true,
};

export const notifyEmergencyCost = () => {
  toast.error("Emergency cost incurred! Consider revisiting your emergency fund to cover unexpected expenses.", toastOptions);
};

export const notifySurpriseGain = () => {
  toast.success("Surprise gain received! Great job on boosting your balance. Consider investing or saving a portion.", toastOptions);
};

export const notifyPayDay = () => {
  toast.info("Payday! You've received your income. Don't forget to budget for your monthly expenses and savings.", toastOptions);
};

export const notifyInflation = () => {
  toast.warning("Inflation hits your budget! Costs have increased. Review your spending habits and adjust accordingly.", toastOptions);
};
