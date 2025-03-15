import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./Pages/home/HomePage";
import About from "./Pages/KompaniyaXaqida/About";
import UserPage from "./Pages/Foydalanuchi/UserPage";
import Shirinliklar from "./Pages/Shirinliklar/Shirinliklar";
import Faq from "./Pages/Savol-javob/Faq";
import ShopPages from "./Pages/Savat/ShopPages";
import Shopcars from "./Pages/Hozir-sotip-olish/Shopcars";
import Like from "./Pages/Saralangan/Like";
import NotFount from "./Pages/NotFount/NotFount";
import Products from "./Pages/products/Products";
import Tea from "./components/producs/Tea";
import Sweets from "./components/producs/Sweets";
import "swiper/css";
import Card from "./components/card/Card";
import UserOrders from "./Pages/Foydalanuchi/UserOrders";
import UserSettings from "./Pages/Foydalanuchi/UserSettings";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="like" element={<Like />} />
            <Route path="about" element={<About />} />
            <Route path="user" element={<UserPage />}>
              <Route index element={<UserOrders />} />
              <Route path="settings" element={<UserSettings />} />
            </Route>
            <Route path="like" element={<Like />} />

            <Route path="products" element={<Products />}>
              <Route path="tea" element={<Tea />} />
              <Route path="sweets" element={<Sweets />} />
            </Route>

            <Route path="shopcars" element={<Shopcars />} />
            <Route path="shoppages" element={<ShopPages />} />
            {/* <Route path="orders" element={<Orders />} /> */}
            <Route path="faq" element={<Faq />} />
          </Route>
          <Route path="*" element={<NotFount />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
