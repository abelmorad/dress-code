import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/reducer/cartReducer";

function Cart() {
  const products = useSelector((state:any) => state.cart.products);

  function Total() {
    let total = 0;
    products.forEach((data:any) => (total += data.quantity * data.price));

    return total.toFixed(2);
  };

  const dispatch = useDispatch();

  return (
    <section className="flex flex-col absolute bg-white mt-10 pb-3 right-0 pl-5 pr-12 -z-10 w-1/3 shadow-2xl">
      <h1 className="my-5">Products in your Cart</h1>
      {products.map((data: any) => (
        <>
          <div
            key={data.id}
            className="grid grid-flow-col place-content-center items-start justify-between mb-3"
          >
            <img
              className="h-36 w-24 object-cover mr-5"
              src={"http://localhost:1337" + data.image}
              alt={data.title}
            />
            <div className="flex flex-col mr-2">
              <h2 className="mb-5">{data.title}</h2>
              <p className="mb-2 text-gray-600">
                {data.description.substring(0, 80)}...
              </p>
              <div className="flex justify-between">
                <p className="text-blue-500">
                  {data.quantity} x {data.price}
                </p>
                <p className="text-blue-500">{data.quantity * data.price} USD</p>
                <DeleteOutlineOutlinedIcon className="text-red-600 cursor-pointer" onClick={() => dispatch(removeItem(data.id))} />
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="flex justify-between font-medium my-3">
        <p>TOTAL</p>
        <p>{Total()} USD</p>
      </div>
      <button className="flex place-content-center items-center uppercase bg-blue-500 text-white w-64 py-1 font-medium mb-3">
        proceed to checkout
      </button>
      <p className="text-red-600 cursor-pointer" onClick={() => dispatch(resetCart())}>Reset Cart</p>{" "}
    </section>
  );
}

export default Cart;
