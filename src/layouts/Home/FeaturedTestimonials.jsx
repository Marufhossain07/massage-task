import { useEffect, useState } from "react";
import TestimonialCard from "../../components/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './testimonialSwiperStyles.css';

const FeaturedTestimonials = () => {
    const [therapists, setTherapists] = useState([]);

    useEffect(() => {
        fetch('./therapists.json')
            .then(res => res.json())
            .then(data => setTherapists(data))
    }, []);

    return (
        <div>
            <h3 className="text-[#152A16] mt-[30px] mb-2 text-lg font-medium">Featured Testimonial</h3>
            <div className="bg-white w-[590px] p-8 flex flex-col gap-5 rounded-xl">
                <Swiper
                    slidesPerView={1}
                    grid={{
                        rows: 2,
                        fill: "row"
                    }}
                    spaceBetween={20}
                    pagination={true}
                    modules={[Grid, Pagination]}
                    className="mySwiper"
                >
                    {
                        therapists.map(therapist => (
                            <SwiperSlide key={therapist.id}>
                                <TestimonialCard therapist={therapist} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default FeaturedTestimonials;
