import Banner from "./Banner";
import FeaturedTestimonials from "./FeaturedTestimonials";
import FeaturedTherapists from "./FeaturedTherapists";
import PopularCities from "./PopularCities";

const Home = () => {
    return (
        <div className="bg-[#EEF2F5] p-[30px] h-full">
           <Banner></Banner>
           <FeaturedTherapists></FeaturedTherapists>
           <div className="flex justify-between gap-[30px]">
            <FeaturedTestimonials></FeaturedTestimonials>
            <PopularCities></PopularCities>
           </div>
        </div>
    );
};

export default Home;