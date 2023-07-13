import image from "../../../public/category/men.jpg";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function Cart() {
  const cardData = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Women's Striped Shirt",
      isNew: true,
      oldPrice: "0",
      currentPrice: 15,
      desc: "loremdad adadad adazxczxczxczcxzczxczczcxdadsa adadada dadadsad asdasdasdasd asdad",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Women's Striped Pants",
      isNew: true,
      oldPrice: "0",
      currentPrice: 30,
      desc: "loremdad adadad adadadsa adadada dadadsad asdas57656gdgdgfdgdasdasd asdad",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/923711/pexels-photo-923711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Men's Black Leather Jacket",
      isNew: false,
      oldPrice: 275,
      currentPrice: 199,
      desc: "loremdad adadad adadadsa adadada dadadsad asdasdmbmvnnfasdasd asdad",
    },
  ];

  return (
    <section className="flex flex-col absolute bg-white mt-3 pb-3 right-0 pl-5 pr-12 -z-10 w-1/3 shadow-2xl overflow-scroll">
      <h1 className="mb-5">Products in your Cart</h1>
      {cardData?.map((data) => (
        <div key={data.id}>
          <div className="flex place-content-center items-center">
            <img
              className="h-36 w-24 object-cover mr-5"
              src={data.img}
              alt={data.title}
            />
            <div className="flex flex-col mr-2">
              <h2 className="mb-5">{data.title}</h2>
              <p className="mb-2 text-gray-600">{data.desc.substring(0, 60)}</p>
              <p className="text-blue-500">1 x {data.currentPrice} USD</p>
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
        </div>
      ))}
    </section>
  );
}

export default Cart;
