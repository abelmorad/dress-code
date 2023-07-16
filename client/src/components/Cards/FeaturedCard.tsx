import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function FeaturedCard() {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=featured`
  );

  return (
    <>
      {error
        ? "Something went wrong!"
        : loading
        ? "loading"
        : data.map((data) => (
            <Link
              to={`/product/${data.id}`}
              key={data.id}
              type={data.attributes.type}
            >
              <div className="flex flex-col justify-between h-full outline-1 outline outline-gray-400">
                <img
                  className="h-96 w-screen object-cover"
                  src={
                    "http://localhost:1337" +
                    data.attributes.image.data.attributes.url
                  }
                />
                <p
                  className="absolute px-2 py-2 text-4xl text-black font-semibold italic"
                  style={
                    data.attributes.isNew
                      ? { display: "flex", textShadow: "white 5px 5px" }
                      : { display: "none" }
                  }
                >
                  New Season
                </p>
                <div className="flex flex-col px-3">
                  <p className="font-semibold text-xl pt-3">
                    {data.attributes.title}
                  </p>
                  <div className="flex flex-col">
                    <p
                      className="text-gray-500 line-through"
                      style={
                        data.attributes.oldPrice === null
                          ? { display: "none" }
                          : { display: "block" }
                      }
                    >
                      {data.attributes.oldPrice} USD
                    </p>
                  </div>
                </div>
                <p className="font-semibold px-3 pb-3">
                  {data.attributes.price} USD
                </p>
              </div>
            </Link>
          ))}
    </>
  );
}

export default FeaturedCard;
