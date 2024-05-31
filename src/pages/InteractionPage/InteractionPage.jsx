import "./InteractionPage.scss";
import Header from "../../components/Header/Header";
import Chart from "../../components/Chart/Chart";
import TotalBalance from "../../components/TotalBalance/TotalBalance";
import Pie from "../../components/Pie/Pie";

const InteractionPage = ({ totalBalance, categoryBalance }) => {
  console.log(categoryBalance); //access balance as needed
  return (
    <>
      <Header />

      <TotalBalance categoryBalance={categoryBalance} />
      <Chart categoryBalance={categoryBalance} totalBalance={totalBalance} />
      <p>Category balances and pie chart down here?</p>
      <div className="Piechart">
        <Pie totalBalance={totalBalance} categoryBalance={categoryBalance}/>
      </div>
    </>
  );
};

export default InteractionPage;
