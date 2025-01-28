import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Product {id} </h1>
    </div>
  );
}

export default ProductPage;
