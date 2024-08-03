import massage from "../../assets/massage.png"
import vector from "../../assets/banner-bg.png"
const Banner = () => {
    return (
        <div className="bg-white flex justify-between rounded-xl py-5 px-7">
            <div>
                <h3 className="text-xl font-medium text-[#152A16]">I&apos;m Looking for Massage Therapist Near...</h3>
                <p className="text-[#2E3439] mt-4 mb-7 text-[15px]">In using this site, I agree to be bound by the <span className="text-[#156BCA] font-medium underline">Terms of Service</span> <br /> and <span className="text-[#156BCA] font-medium underline">Privacy Policy</span></p>
                <div className="relative">
                    <input placeholder="ZIP code or city name" className="relative w-full p-4 text-[#5C635A] bg-[#EEF2F5] rounded-xl" type='text'/>
                        <button className="bg-[#156BCA] absolute top-1 right-2 rounded-lg py-[11px] px-8 text-white font-semibold">GO</button>
                </div>
            </div>
            <div className="relative">
                <img className="absolute z-10 bottom-0 -left-32 h-full" src={vector} alt="" />
                <img className="relative z-40" src={massage} alt="" />
            </div>
        </div>
    );
};

export default Banner;