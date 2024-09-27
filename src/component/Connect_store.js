import "./connect_store.css";

const Connect_store = function () {
  return (
    <>
      <div className="connect-store-container">
        <div className="connect-store-main">
          <h2 className="content">Connect your store</h2>
          <p>Printify easily integrates with major e-commerce platforms and marketplaces</p>

          <div className="integration-grid">
            <div className="integration-item">
              <img src="big-commerce.png" alt="Platform 1" />
            </div>
            <div className="integration-item">
              <img src="presta.png" />
            </div>
            <div className="integration-item">
              <img src="shopify.png" />
            </div>
            <div className="integration-item">
              <img src="/squarespace.png" />
            </div>
            <div className="integration-item">
              <img src="wix.png" />
            </div>
            <div className="integration-item">
              <img src="woo.png"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect_store;
