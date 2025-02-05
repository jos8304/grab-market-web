import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import MainPageComponent from "./main/index";
import { Routes, Route, Link } from "react-router-dom";
import ProductPage from "./product/index.js";
import Uploadpage from "./upload/index.js";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              window.location.href = "/upload";
            }}
            icon={<DownloadOutlined />}
          >
            upload product
          </Button>
        </div>
      </div>
      <div id="body">
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/upload" element={<Uploadpage />} />
        </Routes>
      </div>

      <div id="footer"></div>
    </div>
  );
}

export default App;
