import "./InteractionPage.scss";
import Header from "../../components/Header/Header";
import Chart from "../../components/Chart/Chart";

const InteractionPage = ({ totalBalance, categoryBalance }) => {
  console.log(categoryBalance); //access balance as needed

  return (
    <>
      <Header />
      <Chart categoryBalance={categoryBalance} totalBalance={totalBalance} />
    </>
  );
};

export default InteractionPage;
