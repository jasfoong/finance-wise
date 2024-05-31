import "./InteractionPage.scss";
import Header from "../../components/Header/Header";
import Chart from "../../components/Chart/Chart";

const InteractionPage = ({ totalBalance, categoryBalance }) => {
  console.log(categoryBalance); //access balances as needed
  return (
    <>
      <Header />
      <h1>current account balance should go here</h1>
      <p>starting balance: {totalBalance}</p>
      <Chart categoryBalance={categoryBalance} totalBalance={totalBalance} />
      <p>Category balances and pie chart down here?</p>
    </>
  );
};

export default InteractionPage;
