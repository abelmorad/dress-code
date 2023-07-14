import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function FeaturedCard() {
  const [data, setData] = useState<any[]>([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1337/api/products", {
  //       headers: {
  //         Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
  //       },
  //     })
  //     .then((res) => {
  //       setData(res.data.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/products", {
          headers: {
            Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
          },
        });
        setData(res.data.data.slice(0, 4));
        console.log(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {data.map((data) => (
        <Link to={`/product/${data.id}`} key={data.id}>
          <div className="flex flex-col h-full outline-1 outline outline-gray-400">
            <img className="w-screen object-cover" />
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
            <div className="flex flex-col p-3">
              <p className="font-semibold text-xl mt-2">
                {data.attributes.title}
              </p>
              <div className="flex flex-col">
                <p className="text-gray-500 line-through">
                  {data.attributes.oldPrice} <span>USD</span>
                </p>
                <p className="font-semibold">
                  {data.attributes.price} <span>USD</span>
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

{
  /* <Link to={`/product/${data.data.id}`}>
          <div
            key={}
            className="flex flex-col h-full outline-1 outline outline-gray-400"
          >
            <img className="w-screen object-cover" src={} alt={} />
            <p
              className="absolute px-2 py-2 text-4xl text-black font-semibold italic"
              style={
                data.id.attributes.isNew
                  ? { display: "flex", textShadow: "white 5px 5px" }
                  : { display: "none" }
              }
            >
              New Season
            </p>
            <div className="flex flex-col p-3">
              <p className="font-semibold text-xl mt-2">
                {data.id.attributes.title}
              </p>
              <div className="flex flex-col">
                <p className="text-gray-500 line-through">
                  {data.oldPrice} <span>USD</span>
                </p>
                <p className="font-semibold">
                  {data.id.attributes.price} <span>USD</span>
                </p>
              </div>
            </div>
          </div>
        </Link>; */
}
