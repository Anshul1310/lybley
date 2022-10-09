import "./App.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/single/Product";
import Orders from "./pages/orders/Orders";
import ViewOrder from "./pages/orders/ViewOrder";
import { useEffect, useState } from "react";
import Categories from "./pages/categories/Categories";
import Newscategory from "./pages/newsCategory/NewsCategory"
import Users from "./pages/users/Users";
import Order from "./pages/order/Order";
import Login from "./components/login/Login";
import PushNotification from "./pages/notification/PushNotification";
import Sellers from "./pages/sellers/Sellers";
import AddSeller from "./pages/addSeller/AddSeller";
import AddUser from "./pages/addUser/AddUser";
import Earnings from "./pages/earnings/Earnings";
import ViewSeller from "./pages/sellers/ViewSeller";
import ProtectedRoute from "./ProtectedRoute";
import ViewUser from "./pages/users/ViewUser";
import News from "./pages/news/News";
import Stores from "./pages/stores/Stores";
import Banner from "./pages/Banners/Banner"
import AddStore from "./pages/stores/AddStore";
import EditAdmin from "./pages/admins/EditAdmin";
import PushNews from './pages/news/PushNews';
import EditNews from './pages/news/EditNews';
import Admins from "./pages/admins/Admins";
import AddAdmin from "./pages/admins/AddAdmin";
import StaticProducts from "./pages/static/StaticProducts";
import AddStaticProduct from "./pages/static/AddStaticProduct";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(process.env);
    if (token !== null) {
      setIsAuth(true);
    }
    setIsLoaded(true);
  }, []);

  return isLoaded && (
    <div className="mainApp">
      <BrowserRouter >
        <Routes>
          <Route path="/home" element={<ProtectedRoute name="home" isAuth={isAuth} Component={Home} />} />
          <Route path="/" element={<ProtectedRoute name="home" isAuth={isAuth} Component={Home} />} />

          <Route path="orders">
            <Route index element={<ProtectedRoute name="orders" isAuth={isAuth} Component={Orders} />} />
            <Route path=":orderId" element={<ProtectedRoute name="orders" isAuth={isAuth} Component={Order} />} />
          </Route>
          <Route path="viewOrder" element={<ProtectedRoute name="orders" isAuth={isAuth} Component={ViewOrder} />} />
          <Route path="notification" element={<ProtectedRoute name="notifications" isAuth={isAuth} Component={PushNotification} />} />
          <Route path="notification/push" element={<ProtectedRoute name="notifications" isAuth={isAuth} Component={PushNotification} />} />
           <Route path="banner" element={<ProtectedRoute isAuth={isAuth} Component={Banner} />} />
          <Route path="categories" element={<ProtectedRoute name="categories" isAuth={isAuth} Component={Categories} />} />

          <Route path="newsCategory" element={<ProtectedRoute name="categories" isAuth={isAuth} Component={Newscategory} />} />

          <Route path="products">
            <Route index element={<ProtectedRoute name="products" isAuth={isAuth} Component={Products} />} />
            {<Route path=":productId" element={<ProtectedRoute name="products" isAuth={isAuth} Component={Product} />} />}
          </Route>
          <Route path='products/addProduct' element={<ProtectedRoute name="products" isAuth={isAuth} Component={Product} />} />
          <Route path="sellers" element={<ProtectedRoute name="sellers" isAuth={isAuth} Component={Sellers} />} />
          <Route path="categories" element={<ProtectedRoute name="categories" isAuth={isAuth} Component={Categories} />} />
          <Route path="sellers/addSeller" element={<ProtectedRoute name="sellers" isAuth={isAuth} Component={AddSeller} />} />
          <Route path="viewSeller" element={<ProtectedRoute name="sellers" isAuth={isAuth} Component={ViewSeller} />} />
          <Route path="users" element={<ProtectedRoute name="buyers" isAuth={isAuth} Component={Users} />} />
          <Route path="users/addUser" element={<ProtectedRoute name="buyers" isAuth={isAuth} Component={AddUser} />} />
          <Route path="stores" element={<ProtectedRoute name="stores" isAuth={isAuth} Component={Stores} />} />
          <Route path="viewUser" element={<ProtectedRoute name="buyers" isAuth={isAuth} Component={ViewUser} />} />
          <Route path="login" element={<Login />} />
          <Route path="earnings" element={<ProtectedRoute name="earnings" isAuth={isAuth} Component={Earnings} />} />
          <Route path="news" element={<ProtectedRoute name="news" isAuth={isAuth} Component={News} />} />
          <Route path="news/push" element={<ProtectedRoute name="news" isAuth={isAuth} Component={PushNews} />} />
           <Route path="news/edit" element={<ProtectedRoute name="news" isAuth={isAuth} Component={EditNews} />} />
          <Route path="admins" element={<ProtectedRoute name="admin" isAuth={isAuth} Component={Admins} />} />
          <Route path="admins/addAdmin" element={<ProtectedRoute name="admin" isAuth={isAuth} Component={AddAdmin} />} />
          <Route path="viewAdmin" element={<ProtectedRoute name="admin" isAuth={isAuth} Component={EditAdmin} />} />
          <Route path="staticProducts" element={<ProtectedRoute name="staticProducts" isAuth={isAuth} Component={StaticProducts} />} />
          <Route path="staticProducts/addProduct" element={<ProtectedRoute isAuth={isAuth} Component={AddStaticProduct} />} />
          <Route path="stores/addStore" element={<ProtectedRoute name="stores" isAuth={isAuth} Component={AddStore} />} />

        </Routes>

      </BrowserRouter>
    </div>
  );


}


export default App;
