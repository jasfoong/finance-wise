import "./OnboardingPage.scss"
import Header from "../../components/Header/Header"
import OnboardingForm from "../../components/OnboardingForm/OnboardingForm"
import RandomizedTips from "../../components/RandomizedTips/RandomizedTips";


const OnboardingPage = ({ totalBalance, setCategoryBalance }) => {
    return (
        <>
          <Header />
          <RandomizedTips />
          <OnboardingForm 
            totalBalance={totalBalance}
            setCategoryBalance={setCategoryBalance} 
          />
        </>
    )
};

export default OnboardingPage;