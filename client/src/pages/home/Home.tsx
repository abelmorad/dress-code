import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import FeaturedSection from "../../components/Sections/FeaturedSection";
import CategorySection from "../../components/Sections/CategorySection";
import TrendingSection from "../../components/Sections/TrendingSection";

import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

function Home() {
  function HeroSlider() {
    const { data, loading, error } = useFetch(`/categories?populate=*&`);

    return (
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={true}
      >
        {error
          ? "Something went wrong"
          : loading
          ? "loading"
          : data.map((data) => (
              <SwiperSlide key={data.id}>
                <img
                  style={{ height: "600px", width: "600px" }}
                  className="object-cover rounded-2xl"
                  src={
                    "http://localhost:1337" +
                    data.attributes.image.data.attributes.url
                  }
                  alt={data.attributes.title}
                />
              </SwiperSlide>
            ))}
      </Swiper>
    );
  }
  return (
    <section className="flex flex-col">
      <section className="grid grid-flow-col my-24 grid-cols-2 overflow-hidden gap-12">
        <div className="flex flex-col place-content-center pl-28">
          <h1 className="text-7xl font-extrabold leading-snug mb-3">
            Look Good, Feel Good, Dress Good,{" "}
            <span className="rainbow-text">Dress Code</span>
          </h1>
          <Link
            className="w-fit border-black border-2 rounded-md py-2 px-8 font-medium"
            to="/products/1"
          >
            Start Shopping
          </Link>
        </div>
        <HeroSlider />
      </section>
      <section className="flex flex-col mb-20 mx-36">
        <FeaturedSection />
      </section>
      <section className="flex flex-col mb-20">
        <CategorySection />
      </section>
      <section className="flex flex-col mb-20 mx-36">
        <TrendingSection />
      </section>
    </section>
  );
}

export default Home;
