import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((result) => {
        setProduct(result.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (product === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <h1 id="product-name">{product.name}</h1>
      <div id="product-price">${product.price}</div>
      <div id="product-seller">
        <img className="product-avatar" src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="createdAt">Created at {product.createdAt}</div>
      <div id="product-description">{product.description}</div>
    </div>
  );
}

export default ProductPage;
