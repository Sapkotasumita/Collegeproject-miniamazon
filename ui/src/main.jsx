import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import EditProduct from "./pages/EditProduct";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Test from "./pages/Test";
import About from "./pages/About";
import AuthLayout from "../layout/AuthLayout";
import GuestLayout from "../layout/GuestLayout";
import AddProduct from "./pages/AddProduct";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* protected routes-logged in user route */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/test" element={<Test />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* public routes */}
      <Route element={<GuestLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
