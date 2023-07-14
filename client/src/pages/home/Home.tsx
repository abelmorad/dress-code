import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import FeaturedSection from "../../components/Sections/FeaturedSection";
import CategorySection from "../../components/Sections/CategorySection";
import TrendingSection from "../../components/Sections/TrendingSection";

function Home() {

  function HeroSlider() {
    const data = [
      "https://burst.shopifycdn.com/photos/man-puts-his-hand-inside-his-jacket.jpg?width=1024&format=pjpg&exif=1&iptc=1",
      "https://burst.shopifycdn.com/photos/casual-man-sits-on-rock.jpg?width=1024&format=pjpg&exif=1&iptc=1",
      "https://burst.shopifycdn.com/photos/smiling-man-in-formalwear.jpg?width=1024&format=pjpg&exif=1&iptc=1",
      "https://burst.shopifycdn.com/photos/autumn-fashion-on-man-with-glasses.jpg?width=1024&format=pjpg&exif=1&iptc=1",
      "https://burst.shopifycdn.com/photos/skateboarder-rides-past.jpg?width=1024&format=pjpg&exif=1&iptc=1",
    ];

    return (
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        autoplay
        pagination
        effect={"fade"}
      >
        {data.map((data) => (
          <SwiperSlide className="flex place-content-center">
            <img
              className="w-screen h-screen object-cover"
              src={data}
              alt="mens"
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
        <FeaturedSection/>
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
