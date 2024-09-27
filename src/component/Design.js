import "./design.css"

const Design = function(){
    return(
        <div className=" design-container">
            <div className="design-main">
                <div className="design-description">
                    <div className="design-main-image">
                        <img className ="design-image desktop"src="clothes.png"/>
                        <img className="design-image mobile " src="clothes-mobile.webp"/>
                    </div>
                    <div className="design-overview">
                        <h2 className="design-content">Easily add your design to a wide range of products</h2>
                        <p>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
                        <a>All products  <img className="link-arrow "src="link-arrow.png"/></a>
                    </div>
                </div>
                <div className="swiper-container">
                    <div className="swiper-slide">
                        <img className="swiper-icon" src="custom-products.png"/>
                        <h6 className="swiper-content">CREATE</h6>
                        <h4 className="swiper-text">custom products
                        </h4>
                        <p className="swiper-message">
                        Easily add your designs to a wide range of products using our free tools <br className="moblie-only"></br><span className="hide">Description of the image
                        </span>

                        </p>
                    </div>
                    <div className="swiper-slide">
                        <img className="swiper-icon" src="your-products.webp"/>
                        <h6 className="swiper-content">Sell</h6>
                        <h4 className="swiper-text">on your terms
                        </h4>
                        <p className="swiper-message">
                            You choose the products, sale price, and where to sell
                        </p>
                    </div>
                    <div className="swiper-slide">
                        <img className="swiper-icon" src="fullfillment.webp"/>
                        <h6 className="swiper-content">We handle</h6>
                        <h4 className="swiper-text">fulfillment
                        </h4>
                        <p className="swiper-message">
                            Once an order is placed, we automatically handle all the printing and delivery logistics 
                        </p>
                    </div>
                   
                   
                </div>

            </div>

        </div>
    )
};
export default Design;