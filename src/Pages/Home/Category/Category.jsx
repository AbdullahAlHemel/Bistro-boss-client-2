// Import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import assets and components
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const slides = [
  { img: slide1, title: 'Salads' },
  { img: slide2, title: 'Pizza' },
  { img: slide3, title: 'Soups' },
  { img: slide4, title: 'Desserts' },
  { img: slide5, title: 'Salad' },
];

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading="From 11:00 to 10:00 pm"
        subHeading="Order Online"
      />
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        onSwiper={(swiper) => console.log('Swiper initialized:', swiper)}
        onSlideChange={() => console.log('Slide changed')}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-72 md:mb-5">
              <img className="w-full rounded-xl" src={slide.img} alt={slide.title} />
              <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl uppercase text-white font-semibold bg-black bg-opacity-50 px-3 py-1 rounded">
                {slide.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Category;
