import "./features.css"
const Features=function(){
    return(
        <>
            <div className="features-container">
                <div className="features-main">
                    <div className="features-profit">
                        <img className="profit-icon" src="higher-profits.png"/>
                        <h4 className="profit-name">Higher Profits</h4>
                        <p className="profit-content">We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
                    </div>
                    <div className="features-profit">
                        <img className="profit-icon" src="robust-scaling.png"/>
                        <h4 className="profit-name">Robust Scaling</h4>
                        <p className="profit-content">Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
                    </div>
                    <div className="features-profit">
                        <img className="profit-icon" src="best-selection.png"/>
                        <h4 className="profit-name">Best Selection</h4>
                        <p className="profit-content">With 900+ products and top quality brands, you can choose the best products for your business.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;