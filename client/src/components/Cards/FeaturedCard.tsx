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
            className="flex flex-col outline-1 outline outline-gray-400"
            style={{ height: "580px", width: "300px" }}
          >
            <img
              src={data.img}
              alt={data.title}
              style={{ height: "444px", width: "auto" }}
            />
            <p
              className="absolute px-2 py-2 text-4xl text-black font-semibold italic"
              style={data.isNew ? { display: "flex", textShadow: "white 5px 5px" } : { display: "none" }}
            >
              New Season
            </p>
            <div className="flex flex-col p-3">
              <p className="font-semibold text-xl mt-2">{data.title}</p>
              <div className="flex flex-col">
                <p className="text-gray-500 line-through">
                  {data.oldPrice} <span>USD</span>
                </p>
                <p className="font-semibold">
                  {data.currentPrice} <span>USD</span>
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
