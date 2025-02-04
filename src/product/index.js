import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
import { API_URL } from "../config/constants";
import dayjs from "dayjs";
import { Button } from "antd";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProduct = () => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((result) => {
        setProduct(result.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);

  if (product === null) {
    return <div>Loading...</div>;
  }

  const onClickBuy = () => {
    axios
      .post(`${API_URL}/purchase/${id}`)
      .then((result) => {
        console.log(result);
        getProduct();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div id="image-box">
        <img src={`${API_URL}/${product.imageUrl}`} />
      </div>
      <h1 id="product-name">{product.name}</h1>
      <div id="product-price">${product.price}</div>
      <div id="product-seller">
        <img className="product-avatar" src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="createdAt">{dayjs(product.createdAt).format("YYYY-MM-DD")}</div>
      <Button
        size="large"
        type="primary"
        onClick={onClickBuy}
        disabled={product.soldout === 1 ? true : false}
      >
        Buy
      </Button>
      <pre id="product-description">{product.description}</pre>
    </div>
  );
}

export default ProductPage;
