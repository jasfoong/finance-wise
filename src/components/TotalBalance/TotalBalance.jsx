import { Link } from "react-router-dom";
import "./TotalBalance.scss"
import { useState } from "react";

const TotalBalance = ({categoryBalance, newBalance}) => {
    const moneyCategories = [
        "rent", 
        "bills",
        "transportation",
        "food",
        "health",
        "subscriptions",
        "fun",
        "savings",
        "investments"
    ];

    const categoryBalances = moneyCategories.map(category => {
        return(
            <li key={category}>
                {category}: ${categoryBalance[category]}
            </li>
        )
    })

    const [showForm, setShowForm] = useState(false);

    const handleFormToggle = () => {
        setShowForm(!showForm);
    };


    return (
        <>
            <section className="total-balance__overall">
                <h1 className="total-balance__title">Total Balance: ${newBalance.toFixed(2)}</h1>
            </section>

            <section className="total-balance__categories">
                <h2 className="total-balance__title">Your Allocation</h2>
                <ul className="total-balance__items">
                    {categoryBalances}
                </ul>
            </section>

            <p className="total-balance__paragraph">
                If you'd like to modify your allocation, click <Link to="/" onClick={handleFormToggle}>here</Link>
            </p>
        </>
    )
};

export default TotalBalance;