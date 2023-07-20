import { Link } from "react-router-dom";
import logo from "../../../public/icon/dresscode.ico";
import usEng from "../../../public/icon/united-states-of-america.png";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";

import Cart from "./Cart";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Navbar() {
  const items = useSelector((state:any) => state.cart.products);
  const [openCart, setOpenCart] = useState(false);
  
  return (
    <nav className="grid grid-cols-3 px-10 py-3 items-center fixed w-screen bg-white z-10">
      <section className="flex gap-4">
        <div className="flex items-center cursor-pointer">
          <img className="h-5" src={usEng} alt="us-en" />
          <KeyboardArrowDownIcon />
        </div>
        <div className="flex items-center cursor-pointer">
          <span>USD</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className="flex items-center">
          <Link to="/product/1">Women</Link>
        </div>
        <div className="flex items-center">
          <Link to="/product/2">Men</Link>
        </div>
        <div className="flex items-center">
          <Link to="/product/3">Children</Link>
        </div>
      </section>
      <Link to="/">
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <h1>DRESS</h1>
          <img className="h-8" src={logo} alt="dress code logo" />
          <h1>CODE</h1>
        </div>
      </Link>
      <section className="flex justify-end gap-4">
        <div className="flex items-center">
          <Link to="/">Home</Link>
        </div>
        <div className="flex items-center">
          <Link to="/">About</Link>
        </div>
        <div className="flex items-center">
          <Link to="/">Contact</Link>
        </div>
        <div className="flex items-center">
          <Link to="/">Stores</Link>
        </div>
        <div className="flex gap-2 cursor-pointer">
          <SearchOutlinedIcon />
          <PersonOutlineOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <div className="flex" onClick={() => setOpenCart(!openCart)}>
            <ShoppingCartOutlinedIcon />
            <span className="flex text-sm bg-blue-500 h-5 w-5 items-center place-content-center rounded-full absolute ml-3.5 top-0 mt-2 text-white font-semibold">
              {items.length}
            </span>
          </div>
        </div>
      </section>
      {openCart && (
        <section>
          <Cart />
        </section>
      )}
    </nav>
  );
}

export default Navbar;
