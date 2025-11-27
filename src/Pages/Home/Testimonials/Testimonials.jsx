import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-server-gold-rho.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle heading="What Our Clients Say" subHeading="Testimonials" />

      <Swiper
        navigation
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="bg-white shadow-lg rounded-xl p-8 m-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
              <Rating
                style={{ maxWidth: 150, marginBottom: 15 }}
                value={review.rating}
                readOnly
              />
              <p className="text-gray-600 mb-4">{review.details}</p>
              <h3 className="text-xl text-orange-500 font-semibold">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
