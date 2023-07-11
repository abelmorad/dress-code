import { useParams } from "react-router-dom";
import banner from "../../../public/misc/categorybanner.jpg";
import FeaturedSection from "../../components/Sections/FeaturedSection";
import { useState } from "react";

function Products() {
  const categoryId = useParams().id;
  const [maxPrice, setMaxPrice] = useState(1000);

  console.log(categoryId)

  return (
    <section className="grid grid-flow-col py-20 mx-16 gap-36">
      <div className="flex flex-col">
        <div className="mb-3">
          <h2 className="mb-3">Product Categories</h2>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <input type="checkbox" name="hat" id="1" value={1} />
              <label htmlFor="1">Hat</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="tshirt" id="2" value={2} />
              <label htmlFor="2">Tee</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="shoes" id="3" value={3} />
              <label htmlFor="3">Shoes</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="skirt" id="4" value={4} />
              <label htmlFor="4">Skirt</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="jacket" id="5" value={5} />
              <label htmlFor="5">Jacket</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <h2 className="mb-3">Filter by Price</h2>
          <div className="flex flex-col">
            <div className="flex gap-2">
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
              <input type="radio" id="asc" value="asc" name="price" />
              <label htmlFor="asc">Price (Highest First)</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" id="dsc" value="dsc" name="price" />
              <label htmlFor="dsc">Price (Lowest First)</label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <img
          className="h-60 w-screen object-cover"
          src={banner}
          alt="category banner"
        />
      </div>
    </section>
  );
}

export default Products;
