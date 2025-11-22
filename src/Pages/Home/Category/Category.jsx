// import Swiper core and required modules
import { Navigation, Pagination,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"From 11:00 to 10.00 pm"}
        subHeading={'Order Online'}
        ></SectionTitle>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='w-72 md:mb-5' >
      <img className='w-full'  src={slide1} alt="" />
      <h3 className=' text-4xl uppercase text-center text-white font-semibold -mt-12'>Salads</h3></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-72' >
      <img className='w-full'  src={slide2} alt="" />
      <h3 className='  text-4xl uppercase text-center text-white font-semibold -mt-12'>Pizza</h3></div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='w-72' >
      <img className='w-full'  src={slide3} alt="" />
      <h3 className=' text-4xl uppercase text-center text-white font-semibold -mt-12'>Soups</h3></div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='w-72' >
      <img className='w-full' src={slide4} alt="" />
      <h3 className=' text-4xl uppercase text-center text-white font-semibold -mt-12'>Deserts</h3></div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='w-72' >
      <img className='w-full' src={slide5} alt="" />
      <h3 className=' text-4xl uppercase text-center text-white font-semibold -mt-12'>Salad</h3></div>
      </SwiperSlide>
      ...
    </Swiper>
    </section>
    );
};

export default Category;