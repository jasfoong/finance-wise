import "./InteractionPage.scss";
import Header from "../../components/Header/Header";
import Chart from "../../components/Chart/Chart";
import TotalBalance from "../../components/TotalBalance/TotalBalance";
import { useEffect } from "react";

import Pie from "../../components/Pie/Pie";

const InteractionPage = ({ totalBalance, categoryBalance }) => {
  console.log(categoryBalance); //access balance as needed

  return (
    <>
      <Header />

      <TotalBalance categoryBalance={categoryBalance} />

      <Chart categoryBalance={categoryBalance} totalBalance={totalBalance} />
      <Pie categoryBalance={categoryBalance} totalBalance={totalBalance} />
    </>
  );
};

export default InteractionPage;
