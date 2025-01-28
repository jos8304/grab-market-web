import "./index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function MainPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://af794327-4b48-47d4-b1d7-184f9c26aa68.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>Products</h1>
        <div id="product-list">
          {products.map((product, index) => {
            return (
              <div className="product-card">
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">${product.price}</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
