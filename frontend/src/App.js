import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
// components
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
// screens
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

const App = () => (
  <BrowserRouter>
    <div className="grid-container">
      <Header />
      <SideBar />
      <main className="main">
        <div className="content">
          <Route path="/products" component={ProductsScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" exact component={HomeScreen} />
        </div>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
