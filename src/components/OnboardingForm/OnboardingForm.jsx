
/*
- users choose how much to put in each category - Jasmine
- form inputs:
- amount for each money category
*/

import "./OnboardingForm.scss"
import { useState } from "react"

const OnboardingForm = () => {
    const initialBalance = 3000;
    const moneyCategories = [
        "rent/mortgage", "bills", "transportation", "food", "health", "subscriptions", "fun", "income", "savings", "investments"
    ];

    const [values, setValues] = useState(
        moneyCategories.reduce((accumulator, category) => ({...accumulator, [category]: "$"}), {})
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values, [name]: value
        });
    };

    const allocatedSum = () => {
        return Object.values(values).reduce((total, value) => {
            const numericValue = parseFloat(value.replace('$', '')) || 0;
            return total + numericValue;
        }, 0);
    };

    const remainingBalance = initialBalance - allocatedSum();

    return (
        <form className="onboarding-form">
            {
                moneyCategories.map((category, index) => {
                    return (
                        <div className="onboarding-form__list-item" key={index}>
                            <label className="onboarding-form__label" htmlFor={category}>{category}</label>
                                <input 
                                    className="onboarding-form__input"
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
                <h4 className="onboarding-form__balance-label">Total Balance</h4>
                <h4 className="onboarding-form__balance-amount">${remainingBalance}</h4>
            </div>
        </form>
    )
};

export default OnboardingForm;