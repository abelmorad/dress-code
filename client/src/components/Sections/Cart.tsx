import image from "../../../public/category/men.jpg";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function Cart() {
  return (
    <section className="flex flex-col absolute bg-white pt-8 pb-3  right-0 pl-5 pr-12 -z-10 w-1/3 shadow-2xl">
      <h1 className="mb-5">Products in your Cart</h1>
      <div className="flex place-content-center items-center">
        <img className="h-36 w-24 object-cover mr-5" src={image} alt="" />
        <div className="flex flex-col mr-2">
          <h2 className="mb-5">Long Sleeve</h2>
          <p className="mb-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Asperiores, dignissimos! Ab dolorem explicabo molestias omnis?
          </p>
          <p className="text-blue-500">1 x 56 USD</p>
        </div>
        <DeleteOutlineOutlinedIcon className="text-red-600" />
      </div>
      <div className="flex justify-between font-medium my-3">
        <p>SUBTOTAL</p>
        <p>19 USD</p>
      </div>
      <button className="flex place-content-center items-center uppercase bg-blue-500 text-white w-64 py-1 font-medium mb-3">
        proceed to checkout
      </button>
      <p className="text-red-600">Reset Cart</p>
    </section>
  );
}

export default Cart;
