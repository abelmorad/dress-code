import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { features } from "process";

function FeaturedCard() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/products?populate=*&[filters][type][$eq]=featured", {
          headers: {
            Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
          },
        });
        setData(res.data.data);
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
        <Link to={`/product/${data.id}`} key={data.id} type={data.attributes.type}>
          <div className="flex flex-col h-full outline-1 outline outline-gray-400">
            <img className="h-96 w-screen object-cover" src={"http://localhost:1337" + data.attributes.image.data.attributes.url} />
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
                <p className="font-semibold">{data.attributes.price} USD</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default FeaturedCard;
