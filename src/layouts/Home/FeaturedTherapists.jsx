import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TherapistCard from '../../components/TherapistCard';
import './swiperStyle.css';

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
      <div className="bg-white rounded-xl relative px-8 py-4 sm:px-12 sm:py-6 lg:px-24 lg:py-8">
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={25}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            865: {
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
    </div>
  );
};

export default FeaturedTherapists;
