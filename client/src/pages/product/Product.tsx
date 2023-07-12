import { useState } from "react";

function Product() {
  const [selectedImage, setSelectedImage] = useState(0);

  const img = [
    "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <section className="flex gap-8 mx-10 py-20">
      <div className="flex flex-col gap-6">
        <img
          className="h-48 w-48 object-cover cursor-pointer"
          src={img[0]}
          alt=""
          onClick={() => setSelectedImage(0)}
        />
        <img
          className="h-48 w-48 object-cover"
          src={img[1]}
          alt=""
          onClick={() => setSelectedImage(1)}
        />
      </div>
      <div>
        <img
          className="object-cover"
          style={{ width: "100%", height: "650px" }}
          src={img[selectedImage]}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p className="text-blue-500">$10.9</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          architecto quidem molestias dolore harum vero ducimus nulla libero
          recusandae! Delectus.
        </p>
        
      </div>
    </section>
  );
}

export default Product;
