// Navbar.js
import React from "react";
import Cart from "./Cart";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="navbar w-11/12 mx-auto text-primary-content">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-none gap-4">
        <ThemeSwitcher />
        <Cart/>
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
