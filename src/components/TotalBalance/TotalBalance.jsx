import "./TotalBalance.scss"

const TotalBalance = ({categoryBalance}) => {
    const moneyCategories = [
        "rent/mortgage", 
        "bills",
        "transportation",
        "food",
        "health",
        "subscriptions",
        "fun",
        "savings",
        "investments"
    ];

    const totalBalance = Object.values(categoryBalance).reduce((total, value) => {
        const amount = parseFloat(value) || 0;
        return total + amount;
    }, 0).toFixed(2);

    const categoryBalances = moneyCategories.map(category => {
        return(
            <li key={category}>
                {category}: {categoryBalance[category]}
            </li>
        )
    })

    return (
        <>
            <section className="total-balance__overall">
                <h1 className="total-balance__title">Total Balance: ${totalBalance}</h1>
            </section>

            <section className="total-balance__categories">
                <h2 className="total-balance__title">Total Category Balances:</h2>
                <ul>
                    {categoryBalances}
                </ul>
            </section>
        </>
    )
};

export default TotalBalance;