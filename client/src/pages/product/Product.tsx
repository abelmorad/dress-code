import { useState } from "react";

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareOutlinedIcon from "@mui/icons-material/CompareOutlined";
import { Link, useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

function Product() {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState<string>("image");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <section className="grid gap-8 mx-10 py-20 product-section">
      {error ? (
        "Something went wrong"
      ) : loading ? (
        "loading"
      ) : (
        <>
          <div className="flex flex-col gap-6">
            <img
              className="h-48 w-48 object-cover cursor-pointer"
              src={
                "http://localhost:1337" +
                data?.attributes?.image?.data?.attributes?.url
              }
              alt={data?.attributes?.title}
              onClick={() => setSelectedImage("image")}
            />
            <img
              className="h-48 w-48 object-cover"
              src={
                "http://localhost:1337" +
                data?.attributes?.image2?.data?.attributes?.url
              }
              alt={data?.attributes?.title}
              onClick={() => setSelectedImage("image2")}
            />
          </div>
          <div>
            <img
              className="object-cover"
              style={{ width: "100%", height: "650px" }}
              src={
                "http://localhost:1337" +
                data?.attributes?.[selectedImage]?.data?.attributes?.url
              }
              alt={data?.attributes?.title}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="mb-3">{data?.attributes?.title}</h1>
            <p className="text-2xl text-blue-500 mb-3">{data?.attributes?.price * quantity} USD</p>
            <p className="mb-20">
              {data?.attributes?.description}
            </p>
            <div className="flex items-center text-xl mb-5">
              <button
                className="border border-black w-10 px-2"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              <p className="flex place-content-center w-10 border-t border-b border-black px-2">
                {quantity}
              </p>
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
              <Link to="/" className="border-gray-600 border-b py-3">
                DESCRIPTION
              </Link>
              <Link to="/" className="border-gray-600 border-b py-3">
                ADDITIONAL INFORMATION
              </Link>
              <Link to="/" className="py-3">
                FAQ
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Product;
