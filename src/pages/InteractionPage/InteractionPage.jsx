import "./InteractionPage.scss";
import Header from "../../components/Header/Header";
import Chart from "../../components/Chart/Chart";
import Pie from "../../components/Pie/Pie";

const InteractionPage = () => {
  return (
    <>
      <Header />
      <h1>interaction page goes here</h1>
      <Chart />
      <div className="Piechart">
        <Pie />
      </div>
    </>
  );
};

export default InteractionPage;
