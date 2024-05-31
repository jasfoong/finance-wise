import "./OnboardingPage.scss"
import Header from "../../components/Header/Header"
import OnboardingForm from "../../components/OnboardingForm/OnboardingForm"
import RandomizedTips from "../../components/RandomizedTips/RandomizedTips";


const OnboardingPage = ({ setTotalBalance, setCategoryBalance }) => {
    return (
        <>
          <Header />
          <RandomizedTips />
          <OnboardingForm 
            setTotalBalance={setTotalBalance}
            setCategoryBalance={setCategoryBalance} 
          />
        </>
    )
};

export default OnboardingPage;