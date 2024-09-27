import "./financials.css"

const Financials = function () {
    return (
        <>
            <div className="financials-container">
                <div className="financials-main">
                    <div className="financials-left">
                        <h2>Make Money, Risk-Free</h2>
                        <p>You pay for fulfillment only when you make a sale</p>
                        <div className="financials-breakdown">
                            <div className="financials-row">
                                <span>You sell a t-shirt</span>
                                <span>$30</span>
                            </div>
                            <div className="financials-row">
                                <span>You pay for its production</span>
                                <span>$12</span>
                            </div>
                            <div className="headline"></div>
                            <div className="financials-row financials-profit">
                                <span>Your profit</span>
                                <span>$18</span>
                            </div>
                        </div>
                        <button className="financials-button">Start selling</button>
                        <p className="financials-footer">100% Free to use - 900+ Products - Largest print network</p>
                    </div>
                    <div className="financials-right">
                        <img src="sable.png" alt="Woman watering money tree" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Financials;
