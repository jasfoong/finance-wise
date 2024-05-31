import "./OnboardingPage.scss"
import Header from "../../components/Header/Header"
import OnboardingForm from "../../components/OnboardingForm/OnboardingForm"
import RandomizedTips from "../../components/RandomizedTips/RandomizedTips";


const OnboardingPage = () => {
    return (
        <>
          <Header />
          <OnboardingForm />
          <RandomizedTips />
        </>
    )
};

export default OnboardingPage;