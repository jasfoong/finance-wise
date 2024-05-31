import "./InteractionPage.scss";
import Header from "../../components/Header/Header";
import Chart from "../../components/Chart/Chart";
import TotalBalance from "../../components/TotalBalance/TotalBalance";

const InteractionPage = ({ totalBalance, categoryBalance }) => {
  console.log(categoryBalance); //access balance as needed

  return (
    <>
      <Header />
      <h1>current account balance should go here</h1>
      <p>starting balance: {totalBalance}</p>
      <TotalBalance categoryBalance={categoryBalance} />
      <Chart />
      <p>Category balances and pie chart down here?</p>
    </>
  );
};

export default InteractionPage;
