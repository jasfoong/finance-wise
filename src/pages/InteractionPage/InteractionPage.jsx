import "./InteractionPage.scss";
import Header from "../../components/Header/Header";
import Chart from "../../components/Chart/Chart";
import TotalBalance from "../../components/TotalBalance/TotalBalance";
import { useEffect } from "react";

const InteractionPage = ({ totalBalance, categoryBalance }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Chart categoryBalance={categoryBalance} totalBalance={totalBalance} />
    </>
  );
};

export default InteractionPage;
