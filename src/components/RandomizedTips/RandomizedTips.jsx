import "./RandomizedTips.scss"

const RandomizedTips = () => {
    const tips = [
        "Prioritize essential bills: Ensure you pay essential bills like rent, utilities, and insurance on time to avoid late fees and penalties.",
        "Maintain your vehicle: Regularly maintain your vehicle to avoid costly repairs and ensure it runs efficiently.",
        "Maintain a healthy lifestyle: Maintain a healthy lifestyle through regular exercise and a balanced diet to reduce healthcare costs.",
        "Cancel unused subscriptions: Cancel any unused subscriptions to reduce costs.",
        "Automate savings: Automate your savings by setting up automatic transfers to your savings accounts every time you get paid.",
        "Avoid dipping into savings: Avoid dipping into your savings for non-essential expenses.",
        "Set a savings goal: Set a savings goal and prioritize saving for emergencies, retirement, and other long-term goals.",
        "Start investing early to take advantage of compound interest and grow your wealth over time.",
    ]

    const randomIndex = Math.floor(Math.random() * tips.length);

    return (
        <>
        <section className="randomized-tips">
            <div className="randomized-tips__wrapper">
                <h3 className="randomized-tips__heading">Tip of the Day:</h3>
                <p className="randomized-tips__text">{tips[randomIndex]}</p>
            </div>
        </section>
        </>
    )
};

export default RandomizedTips;