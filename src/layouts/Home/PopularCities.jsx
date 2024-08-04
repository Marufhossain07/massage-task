import { useEffect } from "react";
import { useState } from "react";

const PopularCities = () => {
    const [cities, setCities] = useState([]);

    useEffect(()=>{
        fetch('./cities.json')
        .then(res=> res.json())
        .then(data=> setCities(data))
    },[])
    console.log(cities.length);
    
    return (
        <div className="w-[550px]">
            <h3 className="text-[#152A16] mt-[30px] mb-2 text-lg font-medium">Popular Cities</h3>
            <div className="bg-white rounded-xl w-full grid grid-cols-3 p-5">
            {
                cities.map((city,index)=>
                <>
                <a className="text-[#156BCA] text-sm underline" key={index} href="#">{city?.name}</a>
                {
                    (index+1) % 3 === 0 && index < cities.length - 1 && <hr className="bg-[#E7E7E7] col-span-full my-[25px]"/>
                }
                </>
            )
            }
            </div>
        </div>
    );
};

export default PopularCities;