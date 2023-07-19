import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useSelector } from "react-redux";

function Cart() {

  const products = useSelector((state) => state.cart.products)

  return (
    <section className="flex flex-col absolute bg-white mt-3 pb-3 right-0 pl-5 pr-12 -z-10 w-1/3 shadow-2xl">
      <h1 className="my-5">Products in your Cart</h1>
      {products?.map((data:any) => (
        <div key={data.id}>
          <div className="flex place-content-center items-start justify-between mb-3">
            <img
              className="h-36 w-24 object-cover mr-5"
              src={data.img}
              alt={data.title}
            />
            <div className="flex flex-col mr-2">
              <h2 className="mb-5">{data.title}</h2>
              <p className="mb-2 text-gray-600">{data.desc.substring(0, 40)}</p>
              <p className="text-blue-500">1 x {data.currentPrice} USD</p>
            </div>
            <DeleteOutlineOutlinedIcon className="text-red-600" />
          </div>
        </div>
      ))}
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
