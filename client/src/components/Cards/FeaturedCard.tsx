import { Link } from "react-router-dom";

function FeaturedCard() {
  const cardData = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Women's Striped Shirt",
      isNew: true,
      oldPrice: "0",
      currentPrice: 15,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Women's Striped Pants",
      isNew: true,
      oldPrice: "0",
      currentPrice: 30,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/923711/pexels-photo-923711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Men's Black Leather Jacket",
      isNew: false,
      oldPrice: 275,
      currentPrice: 199,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/952629/pexels-photo-952629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Women's Three Piece Suit Maroon",
      isNew: false,
      oldPrice: 525,
      currentPrice: 399,
    },
  ];

  return (
    <>
      {cardData.map((data) => (
        <Link to={`/product/${data.id}`}>
          <div
            key={data.id}
            className="flex flex-col outline-1 outline outline-gray-400 rounded-xl"
            style={{ height: "580px", width: "300px" }}
          >
            <img
              src={data.img}
              alt={data.title}
              className="rounded-t-xl"
              style={{ height: "444px", width: "auto" }}
            />
            <p
              className="absolute bg-white px-2 py-1 text-red-600 font-medium ml-1 mt-1 rounded-md"
              style={data.isNew ? { display: "flex" } : { display: "none" }}
            >
              New Season
            </p>
            <div className="flex flex-col p-3">
              <p className="font-semibold text-xl mt-2">{data.title}</p>
              <div className="flex flex-col">
                <p className="text-gray-500 line-through">
                  <span>USD</span> {data.oldPrice}
                </p>
                <p className="font-semibold">
                  <span>USD</span> {data.currentPrice}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default FeaturedCard;
