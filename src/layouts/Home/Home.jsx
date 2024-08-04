import Banner from "./Banner";
import FeaturedTherapists from "./FeaturedTherapists";

const Home = () => {
    return (
        <div className="bg-[#EEF2F5] p-[30px] h-full">
           <Banner></Banner>
           <FeaturedTherapists></FeaturedTherapists>
        </div>
    );
};

export default Home;