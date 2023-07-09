import { Link } from "react-router-dom";
import logo from "../../public/icon/dresscode.ico";
import payment from "../../public/icon/payment.png";

function Footer() {
  return (
    <footer className="flex flex-col mx-40">
      <section className="flex mb-10">
        <div className="flex flex-col mr-40">
          <h2 className="mb-2">Categories</h2>
          <Link
            className="text-gray-500 text-sm

          "
            to="/"
          >
            Women
          </Link>
          <Link
            className="text-gray-500 text-sm
          "
            to="/"
          >
            Men
          </Link>
          <Link
            className="text-gray-500 text-sm
          "
            to="/"
          >
            Shoes
          </Link>
          <Link
            className="text-gray-500 text-sm
          "
            to="/"
          >
            Accessories
          </Link>
          <Link
            className="text-gray-500 text-sm
          "
            to="/"
          >
            New Arrivals
          </Link>
        </div>
        <div className="flex flex-col mr-40">
          <h2 className="mb-2">Links</h2>
          <Link
            className="text-gray-500 text-sm
          "
            to="/"
          >
            FAQ
          </Link>
          <Link
            className="text-gray-500 text-sm
          "
            to="/"
          >
            Pages
          </Link>
          <Link
            className="text-gray-500 text-sm
          "
            to="/"
          >
            Stores
          </Link>
          <Link
            className="text-gray-500 text-sm
          "
            to="/"
          >
            Compare
          </Link>
          <Link
            className="text-gray-500 text-sm
          "
            to="/"
          >
            Cookies
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col text-justify">
            <h2 className="mb-2">About</h2>
            <p
              className="text-gray-500 text-sm
            "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut
              eum saepe fugit quod voluptate itaque iste eaque beatae enim maiores
              rerum dolor cupiditate labore vitae, perspiciatis quasi. Ullam, at?
            </p>
          </div>
          <div className="flex flex-col text-justify">
            <h2 className="mb-2">Contact</h2>
            <p
              className="text-gray-500 text-sm
            "
            >
              Lorem, addipsum dolor sit amet consectetur adipisicing elit. Nisi,
              recusandae mollitia. Nobis porro eum quo aspernatur aut, pariatur
              molestiae illum.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-between py-5">
        <div className="flex items-center gap-4">
          <Link to="/">
            <div className="flex justify-center items-center gap-2 cursor-pointer">
              <h1>DRESS</h1>
              <img className="h-8" src={logo} alt="dress code logo" />
              <h1>CODE</h1>
            </div>
          </Link>
          <p className="text-xs text-gray-500 text-sm">
            &copy; Copyright 2023 All Rights Reserved
          </p>
        </div>
        <div className="items-center">
          <img className="h-10 w-auto" src={payment} alt="payment options" />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
