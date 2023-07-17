import banner from "../../../public/misc/categorybanner.jpg";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AllProducts from "./AllProducts";
import useFetch from "../../hooks/useFetch";

function Products() {
  const categoryId = useParams().id;
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("");
  const [selectedSubCats, setSelectedSubCats] = useState<any[]>([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?filter[categories][id][$eq]=${categoryId}`
  );

  const handleChange = (e: any) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((data) => data !== value)
    );
  };
  // console.log(categoryId);
  // console.log(selectedSubCats);
  // console.log(data);

  return (
    <section className="grid grid-flow-col py-20 mx-16 gap-20">
      <div className="flex flex-col mr-5 sticky h-max top-20">
        <div className="mb-3">
          <h2 className="mb-3">Product Categories</h2>
          <div className="flex flex-col">
            {error
              ? "Something went wrong"
              : loading
              ? "loading"
              : data.map((data) => (
                  <div key={data.id} className="flex gap-2">
                    <input
                      type="checkbox"
                      id={data.id}
                      value={data.id}
                      onChange={handleChange}
                    />
                    <label htmlFor={data.id}>{data.attributes.title}</label>
                  </div>
                ))}
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <h2 className="mb-3">Filter by Price</h2>
          <div className="flex flex-col">
            <div className="flex gap-2 w-48">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={1000}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="mb-3">Sort By</h2>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={() => setSort("asc")}
              />
              <label htmlFor="asc">Price (Highest First)</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={() => setSort("desc")}
              />
              <label htmlFor="desc">Price (Lowest First)</label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col mb-8">
          <img
            className="h-60 w-screen object-cover"
            src={banner}
            alt="category banner"
          />
        </div>
        <div className="grid grid-cols-4 place-content-center gap-8">
          <AllProducts
            categoryId={categoryId}
            maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
          />
        </div>
      </div>
    </section>
  );
}

export default Products;
