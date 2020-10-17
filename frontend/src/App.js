import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
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
// redux
import { useSelector } from "react-redux";

const App = () => {
  // redux
  const { userInfo } = useSelector((state) => state.userSignin);

  //
  const [isOpenedSide, setIsOpenedSide] = useState(false);
  const toggleSideBar = () => {
    const sideBar = document.querySelector(".sidebar");
    !isOpenedSide
      ? sideBar.classList.add("open")
      : sideBar.classList.remove("open");
    setIsOpenedSide(!isOpenedSide);
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={toggleSideBar}>&#9776;</button>
            <Link to="/">Amaxon</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={toggleSideBar}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>

            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>

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

        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
