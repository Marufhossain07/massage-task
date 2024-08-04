import car from "../assets/car.png"
const TherapistCard = ({therapist}) => {
    const {name, photo, address, services} = therapist
    
    return (
        <div className="rounded-[10px] border border-[#E7E7E7] bg-white">
            <div className="p-[11px]">
                <img src={photo} alt="" className=" object-cover h-[146px] w-full rounded-lg  dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <h2 className="text-sm font-medium text-[#152A16]">{name}</h2>
                </div>
                <p className="flex gap-1 items-center mt-[15px] mb-3 text-[#5C635A] text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M6.99617 1.16663C9.71606 1.16663 11.9583 3.3354 11.9583 6.01865C11.9583 7.37078 11.4666 8.62608 10.6572 9.69005C9.76429 10.8637 8.66375 11.8862 7.42497 12.6889C7.14146 12.8744 6.88558 12.8884 6.57442 12.6889C5.32859 11.8862 4.22804 10.8637 3.34278 9.69005C2.53281 8.62608 2.04166 7.37078 2.04166 6.01865C2.04166 3.3354 4.28392 1.16663 6.99617 1.16663ZM6.99617 4.53644C6.09679 4.53644 5.36329 5.27784 5.36329 6.16973C5.36329 7.06862 6.09679 7.7756 6.99617 7.7756C7.89613 7.7756 8.63669 7.06862 8.63669 6.16973C8.63669 5.27784 7.89613 4.53644 6.99617 4.53644Z" fill="#5C635A" />
                </svg>{address}</p>
                <p className="flex items-center mb-2 text-sm gap-2 text-[#5C635A]"><img src={car} alt="" />Mobile & In-Studio</p>
            </div>
            <button className="bg-[#D4E9FF] py-4 underline text-sm rounded-b-lg text-[#152A16] font-medium  w-full hover:bg-[#156BCA] hover:text-white">See Details</button>
        </div>
    );
};

export default TherapistCard;