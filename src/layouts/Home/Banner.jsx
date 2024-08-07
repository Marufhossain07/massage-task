import massage from "../../assets/massage.png"
import vector from "../../assets/banner-bg.png"
const Banner = () => {

    return (
        <div className="bg-white mt-3 lg:mt-0 flex flex-col md:flex-row lg:flex-row justify-between rounded-xl py-5 px-7">
            <div>
                <h3 className="text-lg mb-0 lg:mb-6 lg:text-xl font-medium text-[#152A16]">I&apos;m Looking for Massage Therapist Near...</h3>
                <p className="hidden lg:inline text-[#0c0e0f] text-[15px]">In using this site, I agree to be bound by the <span className="text-[#156BCA] font-medium underline">Terms of Service</span> <br /> and <span className="text-[#156BCA] font-medium underline">Privacy Policy</span></p>
                <p className="text-[#0c0e0f] inline lg:hidden mt-4 mb-7 text-[14px]">In using this site, I agree to be bound by the <br /> <span className="text-[#156BCA] font-medium underline">Terms of Service</span> and <span className="text-[#156BCA] font-medium underline">Privacy Policy</span></p>
                <div className="hidden mt-0 lg:mt-6 lg:flex relative">
                    <input placeholder="ZIP code or city name" className="relative w-full p-4 text-[#5C635A] bg-[#EEF2F5] rounded-xl" type='text' />
                    <button className="bg-[#156BCA] absolute top-1 right-2 rounded-lg py-[11px] px-8 text-white font-semibold">GO</button>
                </div>
            </div>
            <div className="relative my-10 lg:py-0">
                <img className="absolute z-10 bottom-0 mx-auto lg:-left-32 h-full" src={vector} alt="" />
                <img className="relative mx-auto z-40" src={massage} alt="" />
            </div>
            <div className="flex lg:hidden relative">
                <input placeholder="ZIP code or city name" className="relative w-full p-4 text-[#5C635A] bg-[#EEF2F5] rounded-xl" type='text' />
                <button className="bg-[#156BCA] absolute top-1 right-2 rounded-lg py-[11px] px-8 text-white font-semibold">GO</button>
            </div>
        </div>
    );
};

export default Banner;