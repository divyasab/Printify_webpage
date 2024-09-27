import "./siderbar_container.css";

const Siderbar_container = function() {
    return (
        <>
            <div className="siderbar-container">
                <div className="siderbar-main">
                    <div className="siderbar-description">
                        <h1>Create and sell custom products</h1>
                        <ul className="features-list">
                            <li>
                                <img className="correct" src="correct.png"/>100% Free to use
                            </li>
                            <li>
                                <img className="correct" src="correct.png"/>900+ High-Quality Products
                            </li>
                            <li>
                                <img  className="correct" src="correct.png"/>Largest global print network
                            </li>
                        </ul>
                        <div className="button-container">
                            <button className="start-button">Start for free</button>
                            <button className="how-button">
                                <img className="how-button-image" src="play.png"/>
                                How it Works?
                            </button>
                        </div>
                        <p className="trusted-text">Trusted by over 8M sellers around the world</p>
                    </div>
                    <div className="siderbar-picture">
                        <div className="siderbar-fistimage">
                            <img src="cloth.png" className="transformed-image  viewport" alt="Sidebar Image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Siderbar_container;
