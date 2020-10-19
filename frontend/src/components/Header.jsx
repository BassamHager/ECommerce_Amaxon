import React from "react";
import { Link } from "react-router-dom";
// redux
import { useSelector } from "react-redux";

const Header = () => {
  // redux
  const { userInfo } = useSelector((state) => state.userSignin);

  const openSideBar = () =>
    document.querySelector(".sidebar").classList.add("open");

  return (
    <header className="header">
      <div className="brand">
        <button onClick={openSideBar}>&#9776;</button>
        <Link to="/">Amaxon</Link>
      </div>
      <div className="header-links">
        <Link to="/cart">Cart</Link>
        {userInfo ? (
          <Link to="/profile">{userInfo.name}</Link>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
