import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TherapistCard from '../../components/TherapistCard';
import './swiperStyle.css';
import SliderForMobile from '../../components/SliderForMobile';

const FeaturedTherapists = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./therapists.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mt-8">
      <h3 className="text-[#152A16] mb-[18px] text-lg font-medium">Featured Therapist</h3>
      {/* slider for large screen */}
      <div className="bg-white hidden md:hidden lg:flex rounded-xl relative px-8 py-4 sm:px-12 sm:py-6 lg:px-24 lg:py-8">
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.map((therapist) => (
            <SwiperSlide key={therapist.id}>
              <TherapistCard therapist={therapist} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next custom-swiper-button"></div>
        <div className="swiper-button-prev custom-swiper-button"></div>
      </div>
      {/* slider for small screen */}
      <div className="bg-white visible md:hidden lg:hidden rounded-xl relative py-6 sm:px-12 sm:py-6 lg:px-24 lg:py-8">
        <SliderForMobile></SliderForMobile>
      </div>
    </div>
  );
};

export default FeaturedTherapists;
