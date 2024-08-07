/* eslint-disable react/prop-types */ 
const TestimonialCard = ({therapist}) => {
    const firstName = therapist?.name.split(' ')[0];
    console.log(firstName);
    
    return (
        <div className="flex p-[10px] w-[490px] gap-[10px] rounded-xl overflow-hidden border border-[#E7E7E7] ">
                <div className="w-full lg:w-auto">
                <img className="w-[130px] h-[140px] object-cover rounded-lg" src={therapist?.photo} alt="" /></div>

                <div>
                <p className="flex gap-1 items-center text-[#5C635A] text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M6.99617 1.16663C9.71606 1.16663 11.9583 3.3354 11.9583 6.01865C11.9583 7.37078 11.4666 8.62608 10.6572 9.69005C9.76429 10.8637 8.66375 11.8862 7.42497 12.6889C7.14146 12.8744 6.88558 12.8884 6.57442 12.6889C5.32859 11.8862 4.22804 10.8637 3.34278 9.69005C2.53281 8.62608 2.04166 7.37078 2.04166 6.01865C2.04166 3.3354 4.28392 1.16663 6.99617 1.16663ZM6.99617 4.53644C6.09679 4.53644 5.36329 5.27784 5.36329 6.16973C5.36329 7.06862 6.09679 7.7756 6.99617 7.7756C7.89613 7.7756 8.63669 7.06862 8.63669 6.16973C8.63669 5.27784 7.89613 4.53644 6.99617 4.53644Z" fill="#5C635A" />
                </svg>{therapist?.address}</p>

                    <h3 className="text-sm text-[#232F3C] pt-[15px] font-medium">Healing Bodywork <span className="text-[#156BCA] italic font-semibold">by {firstName}</span></h3>
                    <p className="text-[#5C635A] w-[20%] hidden lg:inline py-3 text-[12px]">{therapist?.name}&apos;s healing bodywork massage was <br /> absolutely transformative. Their intuitive touch <br /> and deep understanding of<span className="text-[#156BCA] font-medium">...Read More</span></p>
                    <p className="text-[#5C635A] visible mt-3 lg:hidden text-[12px]">{firstName}&apos;s healing bodywork massage was  absolutely transformative.Their intuitive touch  and deep understanding of<span className="text-[#156BCA] font-medium">...Read More</span></p>
                </div>
            </div>
    );
};

export default TestimonialCard;