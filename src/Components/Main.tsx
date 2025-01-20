import React, { useState, useEffect } from "react";
import data from "../Products.json";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Main({HandleMainBGColor}) {
  const [selectedProduct, setSelectedProduct] = useState(data.products[0]);
  const [isSubscription, setIsSubscription] = useState(false);
  const [cartProduct, setCartProduct] = useState(0);
  const [productBenifit, setProductBenifit] = useState('benifit');

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };
  useEffect(() => {
    if (selectedProduct.bgcolor) {
      HandleMainBGColor(selectedProduct.bgcolor);
    }
  }, [selectedProduct, HandleMainBGColor]);

  const handleThumbnailClick = (image) => {
    setSelectedProduct((prevProduct) => ({
      ...prevProduct,
      image,
    }));
  };
  const handleBenifits = (purchases) => {
      setProductBenifit(purchases);
  }
  return (
    <div className="product-page" style={{backgroundColor : selectedProduct.bgcolor}}>
      <div className="product-images">
        <img
          className="main-image"
          src={selectedProduct.image}
          alt={selectedProduct.name}
        />
        <div className="thumbnail-images">
          {selectedProduct.thumbnils.map((img: String, index: any) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
              onClick={() => handleThumbnailClick(img)}
            />
          ))}
        </div>
      </div>

      <div className="product-details">
        <h2 className="product-title">{selectedProduct.name}</h2>
        <p className="product-subtitle">
          {" "}
          <span className="cans">{selectedProduct.cans} CANS | </span>
          {selectedProduct.description}
        </p>
        <div className="five-star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <span className="review-box">{selectedProduct.reviews} Reviews</span>
        </div>
        <p className="product-description">{selectedProduct.details}</p>

        <div className="flavor-options">
          <h3 className="flavor-opt-txt">
            CHOOSE YOUR FLAVOR{" "}
            <span className="flavor_product_name">{selectedProduct.name}</span>{" "}
          </h3>
          <div className="flavor-buttons">
            {data.products.map((product) => (
              <button
                key={product.id}
                className={`flavor-btn ${
                  selectedProduct.id === product.id ? "active" : ""
                }`}
                onClick={() => handleProductSelect(product)}
              >
                <img
                  className="flavor-img"
                  src={product.image}
                  alt={product.name}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="purchase-options">
          <div
            className={`option ${isSubscription === false ? "subscribe" : ""}`}
          >
            <input
              type="radio"
              id="one-time"
              name="purchase"
              checked={!isSubscription}
              onChange={() => setIsSubscription(false)}
            />
            <label htmlFor="one-time">
              One-time purchase{" "}
              <span className="prd-opt">{selectedProduct.cans} Pack </span>{" "}
              <b>Rs.{3866.69}</b>
            </label>
          </div>
          <div
            className={`option ${isSubscription === true ? "subscribe" : ""}`}
          >
            <input
              type="radio"
              id="subscribe"
              name="purchase"
              checked={isSubscription}
              onChange={() => setIsSubscription(true)}
            />
            <label htmlFor="subscribe">
              Subscribe & Save{" "}
              <b>
                <s className="prd-opt">Rs. 3866.69</s> Rs. 3286.68
              </b>
              <span> (15% off)</span>
            </label>
          </div>
        </div>

        <div className="add-to-carts-btn">
          <div className="product-cart">
            <button
              className="cart-plus-minus"
              onClick={() => {
                if (cartProduct > 0) {
                  setCartProduct(cartProduct - 1);
                }
              }}
            >
              -
            </button>{" "}
            {cartProduct}{" "}
            <button
              className="cart-plus-minus"
              onClick={() => setCartProduct(cartProduct + 1)}
            >
              +
            </button>
          </div>
          <button className="cart-btn">Add to Cart</button>
        </div>
        <div className="free_shipping_bar ">
          <div>
            <img
              alt=""
              className="free_shipping_arrow"
              src="https://cdn.shopify.com/s/files/1/0264/8952/0171/files/Vector_Smart_Object_1.png?v=1698658748"
            />
          </div>
          <div className="free_shipping_text">
            Order 2+ for{" "}
            <span className="shipping_highlight">FREE SHIPPING!</span>
          </div>
        </div>
        <div className={productBenifit}>
          <div className="tabs">
            <div>
              <button
                className="tab-btn benifit"
                type="button"
                data-target="benefits"
                onClick={() => handleBenifits("benifit")}
              >
                Benefits
              </button>
            </div>
            <div>
              <button
                className="tab-btn ingredents"
                type="button"
                data-target="ingredients"
                onClick={() => handleBenifits("ingredents")}
              >
                Ingredients
              </button>
            </div>
            <div>
              <button
                className="tab-btn nutrition"
                type="button"
                data-target="nutritions"
                onClick={() => handleBenifits("nutrition")}
              >
                NUTRITION FACTS
              </button>
            </div>
          </div>
          {productBenifit === "benifit" ? (
            <>
              <div className="product-offers benifit">
                <div className="product-offer-items">
                  <img
                    className="tabs-img"
                    src="https://drinkwildwonder.com/cdn/shop/files/Group_65.png?v=1708449515"
                    alt=""
                  />
                  <span>CERTIFIED ORGANIC</span>
                </div>
                <div className="product-offer-items">
                  <img
                    className="tabs-img"
                    src="https://drinkwildwonder.com/cdn/shop/files/probiotics_40314dfe-7c55-4822-a254-6e4b5f3ee88b.png?v=1708967690"
                    alt=""
                  />
                  <span>1 BILLION PROBIOTICS</span>
                </div>
                <div className="product-offer-items">
                  <img
                    className="tabs-img"
                    src="//drinkwildwonder.com/cdn/shop/files/Fiber.png?v=1708967691"
                    alt=""
                  />
                  <span>5g DIETARY FIBER</span>
                </div>
                <div className="product-offer-items">
                  <img
                    className="tabs-img"
                    src="//drinkwildwonder.com/cdn/shop/files/Sugar_5e41475b-e41d-4002-857b-dcf3fd24a07d.png?v=1708967690"
                    alt=""
                  />
                  <span>6g SUGAR</span>
                </div>
                <div className="product-offer-items">
                  <img
                    className="tabs-img"
                    src="//drinkwildwonder.com/cdn/shop/files/gmo.png?v=1708967690"
                    alt=""
                  />
                  <span>GMO Free</span>
                </div>
                <div className="product-offer-items">
                  <img
                    className="tabs-img"
                    src="//drinkwildwonder.com/cdn/shop/files/vegan_f7f171f8-a325-41c8-9792-4864061ac27c.png?v=1708967690"
                    alt=""
                  />
                  <span>Vegan</span>
                </div>
              </div>
            </>
          ) : productBenifit === "ingredents" ? (
            <>
              <div className="product-tab ingredents">
                <p className="prod-ingredents-heading">Strawberry Passion</p>
                <div>
                  <p>
                    Fresh Brewed&nbsp;Hibiscus* (Filtered Water, Hibiscus
                    Flowers*), Strawberry Juice*, Passion Fruit Juice*, Agave
                    Nectar*, Jerusalem Artichoke*, Strawberry Flavor*, Chicory
                    Root Inulin, Monk Fruit Extract*, Live Probiotics (Bacillus
                    subtilis) (*organic)
                  </p>
                </div>
                <p className="prod-ingredents-heading">Guava Rose</p>
                <div>
                  <p>
                    Fresh Brewed Rose Petals* (Filtered Water, Rose Petals*),
                    Guava Puree*, Agave Nectar*, Lemon Juice*, Jerusalem
                    Artichoke*, Rose Flavor*, Chicory Root Inulin, Guava
                    Flavor*, Elderberry Juice Concentrate*, Monk Fruit Extract*,
                    Live Probiotics (Bacillus subtilis) (*organic)
                  </p>
                </div>
              </div>
            </>
          ) : (
            (productBenifit === 'nutrition') ? (<>    
                <div class="tab_pane__inner nutrition">
                  <table>
                    <tbody>
                      <tr>
                        <td>Serving Size</td>
                        <td>1 can</td>
                      </tr>
                      <tr>
                        <td>Calories</td>
                        <td>40</td>
                      </tr>
                      <tr>
                        <td>Total Fat</td>
                        <td>0g</td>
                      </tr>
                      <tr>
                        <td>Sodium</td>
                        <td>0mg</td>
                      </tr>
                      <tr>
                        <td>Total Carbohydrates</td>
                        <td>12g</td>
                      </tr>
                      <tr>
                        <td>Dietary Fiber</td>
                        <td>5g</td>
                      </tr>
                      <tr>
                        <td>Total Sugars</td>
                        <td>6g</td>
                      </tr>
                      <tr>
                        <td>Protein</td>
                        <td>0g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </>) : (<></>) 
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
