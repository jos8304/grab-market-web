import { Form, Divider, Input, InputNumber, Button } from "antd";
import "./index.css";
import { ForkOutlined } from "@ant-design/icons";

function Uploadpage() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div id="upload-container">
      <Form name="Upload Product" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">Product Image</div>}
        >
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" />
            <span>Please upload product image</span>
          </div>
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
