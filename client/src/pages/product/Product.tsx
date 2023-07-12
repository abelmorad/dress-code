import { useState } from "react";

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareOutlinedIcon from "@mui/icons-material/CompareOutlined";
import { Link } from "react-router-dom";

function Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const img = [
    "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <section className="grid gap-8 mx-10 py-20 product-section">
      <div className="flex flex-col gap-6">
        <img
          className="h-48 w-48 object-cover cursor-pointer"
          src={img[0]}
          alt=""
          onClick={() => setSelectedImage(0)}
        />
        <img
          className="h-48 w-48 object-cover"
          src={img[1]}
          alt=""
          onClick={() => setSelectedImage(1)}
        />
      </div>
      <div>
        <img
          className="object-cover"
          style={{ width: "100%", height: "650px" }}
          src={img[selectedImage]}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <h1 className="mb-3">Lorem ipsum dolor sit amet.</h1>
        <p className="text-2xl text-blue-500 mb-3">$10.9</p>
        <p className="mb-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          architecto quidem molestias dolore harum vero ducimus nulla libero
          recusandae! Delectus.
        </p>
        <div className="flex items-center text-xl mb-5">
          <button
            className="border border-black w-10 px-2"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <p className="flex place-content-center w-10 border-t border-b border-black px-2">{quantity}</p>
          <button
            className="border border-black w-10 px-2"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button className="flex gap-3 items-center place-content-center h-10 w-60 bg-blue-500 text-white font-medium mb-3">
          <AddShoppingCartOutlinedIcon />
          ADD TO CART
        </button>
        <div className="flex gap-4">
          <button className="flex gap-3 place-content-center text-blue-500">
            <FavoriteBorderOutlinedIcon />
            ADD TO WISHLIST
          </button>
          <button className="flex  gap-3 place-content-center text-blue-500">
            <CompareOutlinedIcon />
            ADD TO COMPARE
          </button>
        </div>
        <div className="text-gray-600 py-10 border-b border-gray-600">
          <p>Vendor: Polo</p>
          <p>Product Type: t-shirt</p>
          <p>Tag: t-shirt, men, top</p>
        </div>
        <div className="flex flex-col pt-10 text-gray-600 w-52">
          <Link to="/" className="border-gray-600 border-b py-3">DESCRIPTION</Link>
          <Link to="/" className="border-gray-600 border-b py-3">ADDITIONAL INFORMATION</Link>
          <Link to="/" className="py-3">FAQ</Link>
        </div>
      </div>
    </section>
  );
}

export default Product;
