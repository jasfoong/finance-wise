import { useNavigate } from "react-router-dom";
import { useState } from "react"
import "./OnboardingForm.scss"

const OnboardingForm = ({ totalBalance, setCategoryBalance }) => {
    const navigate = useNavigate();
    const initialBalance = totalBalance;
    const moneyCategories = [
        "rent/mortgage", "bills", "transportation", "food", "health", "subscriptions", "fun", "savings", "investments"
    ];
    const [values, setValues] = useState(
        moneyCategories.reduce((accumulator, category) => ({ ...accumulator, [category]: "" }), {})
    );
    const [inputErrors, setInputErrors] = useState({});
    const [balanceError, setBalanceError] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        setIsFormValid(false);
    };

    const allocatedSum = () => {
        return Object.values(values).reduce((total, value) => {
            const numericValue = parseFloat(value) || 0;
            return total + numericValue;
        }, 0);
    };

    const remainingBalance = initialBalance - allocatedSum();

    const validateForm = () => {
        const errors = {};
        let formIsValid = true;

        moneyCategories.forEach((category) => {
            if (!values[category]) {
                errors[category] = true;
                formIsValid = false;
            } else {
                errors[category] = false;
            }
        });

        if (remainingBalance !== 0) {
            setBalanceError("Please allocate all of your balance");
            formIsValid = false;
        } else {
            setBalanceError("");
        }

        setInputErrors(errors);
        setIsFormValid(formIsValid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategoryBalance(values);
        validateForm();
        if (!Object.values(inputErrors).some(error => error) && remainingBalance === 0) {
            navigate("/account");
        }
    };

    return (
        <form className="onboarding-form" onSubmit={handleSubmit}>
            <h1 className="onboarding-form__heading">Wallet</h1>
            <h2 className="onboarding-form__subheading">Allocate your account balance into each category as you see fit</h2>
            {
                moneyCategories.map((category, index) => {
                    return (
                        <div className="onboarding-form__list-item" key={index}>
                            <label className="onboarding-form__label" htmlFor={category}>{category}</label>
                            {inputErrors[category] && <span className="onboarding-form__required-text">Required</span>}
                            <input 
                                className={`onboarding-form__input ${(!isFormValid && inputErrors[category]) && 'onboarding-form__input--error'}`}
                                type="text"
                                id={category}
                                name={category}
                                value={values[category]}
                                onChange={handleInputChange}
                            />
                            <br />
                        </div>
                    )
                })
            }
            <div className="onboarding-form__balance">
                <h4 className="onboarding-form__balance-label">Balance</h4>
                <h4 className={`onboarding-form__balance-amount ${(balanceError || Object.keys(inputErrors).some(category => inputErrors[category])) && "onboarding-form__balance-error"}`}>${remainingBalance}</h4>
            </div>
            <div className="onboarding-form__error-container">
                {!isFormValid && (Object.keys(inputErrors).length > 0 || balanceError) && <div className="onboarding-form__balance-error-text">Please allocate your remaining balance</div>}
            </div>
            <div className="onboarding-form__button-container">
                <button className="onboarding-form__button">Next ➔</button>
            </div>
        </form>
    )
};

export default OnboardingForm;