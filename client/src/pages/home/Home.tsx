import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import FeaturedSection from "../../components/Sections/FeaturedSection";

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
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoplay
        pagination
      >
        {data.map((data) => (
          <SwiperSlide className="flex place-content-center">
            <img src={data} alt="mens" />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return (
    <section className="flex flex-col">
      <section className="flex pt-16 mx-10 mb-20">
        <HeroSlider />
      </section>
      <section className="flex flex-col mb-20">
        <FeaturedSection />
      </section>
    </section>
  );
}

export default Home;
