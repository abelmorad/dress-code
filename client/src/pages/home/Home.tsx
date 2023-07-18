import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import FeaturedSection from "../../components/Sections/FeaturedSection";
import CategorySection from "../../components/Sections/CategorySection";
import TrendingSection from "../../components/Sections/TrendingSection";

import useFetch from "../../hooks/useFetch";

function Home() {
  function HeroSlider() {
    const { data, loading, error } = useFetch(`/categories?populate=*&`);

    return (
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        autoplay
        pagination
        effect={"fade"}
      >
        {error
          ? "Something went wrong"
          : loading
          ? "loading"
          : data.map((data) => (
              <SwiperSlide className="flex place-content-center" key={data.id}>
                <img
                  className="w-screen h-screen object-cover"
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
      <section className="flex mb-20">
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
