import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function AllProducts({
  subCats,
  maxPrice,
  sort,
  categoryId,
}: {
  subCats: any[];
  maxPrice: number;
  sort: string;
  categoryId: any;
}) {
  const { data, loading, error } = useFetch(
    `/products?populate=*${subCats.map(
      (item) => `&filters[sub_categories][id][$in]=${item}&`
    )}&[filters][price][$lte]=${maxPrice}`
  );
  return (
    <>
      {error
        ? "Something went wrong"
        : loading
        ? "loading"
        : data.map((data) => (
            <Link key={data.id} to={`/product/${data.id}`}>
              <div className="flex flex-col h-full outline-1 outline outline-gray-400">
                <img
                  className="h-96 object-cover"
                  src={
                    "http://localhost:1337" +
                    data.attributes.image.data.attributes.url
                  }
                  alt={data.attributes.title}
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

export default AllProducts;
