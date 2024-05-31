import "./InteractionPage.scss";
import Header from "../../components/Header/Header";
import Chart from "../../components/Chart/Chart";
import TotalBalance from "../../components/TotalBalance/TotalBalance";

const InteractionPage = ({ categoryBalance }) => {
  return (
    <>
      <Header />
      <TotalBalance categoryBalance={categoryBalance} />
      <Chart />
    </>
  );
};

export default InteractionPage;
