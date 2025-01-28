import "./App.css";
import MainPageComponent from "./main/index";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./product/index.js";
import Uploadpage from "./upload/index.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPageComponent />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/upload" element={<Uploadpage />} />
      </Routes>
    </div>
  );
}

export default App;
