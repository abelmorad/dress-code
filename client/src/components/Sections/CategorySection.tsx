import { Link } from "react-router-dom";

import sale from "../../../public/category/sale.jpg"
import men from "../../../public/category/men.jpg"
import women from "../../../public/category/women.jpg"
import newseason from "../../../public/category/newseason.jpg"
import shoes from "../../../public/category/shoes.jpg"
import accessories from "../../../public/category/accessories.jpg"

function CategorySection() {
  return (
    <section className="category-section place-content-center">
      <Link to="/products/1" className="group area-sale flex">
        <img src={sale} alt="sale" />
        <p className="font-semibold text-white text-6xl absolute mt-60 ml-2 group-hover:scale-110">Sale</p>
      </Link>
      <Link to="/products/1" className="group flex area-newseason">
      <img style={{height: "640px", width:"310px", objectFit: "cover"}}  src={newseason} alt="newseason" />
        <p className="font-semibold text-white text-6xl absolute ml-24 mt-2 text-right group-hover:scale-110">New <br />Season</p>
      </Link>
      <Link to="/products/1" className="group flex area-men">
      <img src={men} alt="men" />
        <p className="font-semibold text-white text-6xl absolute mt-60 ml-2 group-hover:scale-110">Men</p>
      </Link>
      <Link to="/products/1" className="group flex area-accessories">
      <img src={accessories} alt="accessories" />
        <p className="font-semibold text-white text-5xl absolute mt-2 ml-2 group-hover:scale-110">Accessories</p>
      </Link>
      <Link to="/products/1" className="group flex area-women">
      <img src={women} alt="women" />
        <p className="font-semibold text-white text-6xl absolute mt-60 ml-24 group-hover:scale-110">Women</p>
      </Link>
      <Link to="/products/1" className="group flex area-shoes">
      <img style={{height: "310px", width:"640px", objectFit: "cover"}} src={shoes} alt="shoes" />
        <p className="font-semibold text-white text-6xl absolute mt-2 ml-2 group-hover:scale-110">Shoes</p>
      </Link>
    </section>
  );
}

export default CategorySection;
