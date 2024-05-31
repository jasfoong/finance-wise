import "./InteractionPage.scss";
import Header from "../../components/Header/Header";
import Chart from "../../components/Chart/Chart";
import TotalBalance from "../../components/TotalBalance/TotalBalance";

const InteractionPage = ({categoryBalance}) => {
  return (
    <>
      <Header />
      <TotalBalance categoryBalance={categoryBalance}/>
      <h1>interaction page goes here</h1>
      <Chart />
    </>
  );
};

export default InteractionPage;
