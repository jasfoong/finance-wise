import "./InteractionPage.scss";
import Header from "../../components/Header/Header";
import Chart from "../../components/Chart/Chart";

import Pie from "../../components/Pie/Pie";

const InteractionPage = ({ totalBalance, categoryBalance }) => {
  return (
    <>
      <Header />
      <Chart categoryBalance={categoryBalance} totalBalance={totalBalance} />
      <Pie categoryBalance={categoryBalance} totalBalance={totalBalance} />
    </>
  );
};

export default InteractionPage;
