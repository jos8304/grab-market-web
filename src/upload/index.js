import {
  Form,
  Divider,
  Input,
  InputNumber,
  Button,
  Upload,
  message,
} from "antd";
import "./index.css";
import { useState } from "react";
import { API_URL } from "../config/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Uploadpage() {
  const [imageUrl, setImgUrl] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    axios
      .post(`${API_URL}/products`, {
        name: values.name,
        price: parseInt(values.price),
        description: values.description,
        seller: values.seller,
        imageUrl: imageUrl,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        message.error(`에러발생$. ${error.message}`);
      });
  };

  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImgUrl(imageUrl);
    }
  };
  return (
    <div id="upload-container">
      <Form name="Upload Product" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">Product Image</div>}
        >
          <Upload
            name="image"
            action={`${API_URL}/image`}
            listType="picture"
            showUploadList={false}
            onChange={onChangeImage}
          >
            {imageUrl ? (
              <img id="upload-img" src={`${API_URL}/${imageUrl}`} />
            ) : (
              <div id="upload-img-placeholder">
                <img src="/images/icons/camera.png" />
                <span>Please upload product image</span>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">Seller Name</div>}
          name="seller"
          rules={[{ required: true, message: "Please input seller name" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder=" Please input seller name"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">Product Name</div>}
          rules={[{ required: true, message: "Please input product name" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="Please input product name"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label"> Price($)</div>}
          rules={[{ required: true, message: "Please input product price" }]}
        >
          <InputNumber defaultValue={0} className="upload-price" size="large" />
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload-label">Description</div>}
          rules={[
            { required: true, message: "Please input product description" },
          ]}
        >
          <Input.TextArea
            size="large"
            id="product-description"
            showCount
            maxLength={300}
            placeholder="Please input product description"
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Uploadpage;
