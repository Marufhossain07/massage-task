import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useState } from "react";
import TherapistCard from "./TherapistCard";

const SliderForMobile = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('./therapists.json')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: { origin: "center", perView: 2, spacing: 10 },
        range: {
            min: -5,
            max: 5,
        },
    })
    return (
        <div ref={sliderRef} className="keen-slider h-full">
            {
                data.map((therapist) => <div key={therapist.id} className="keen-slider__slide"><TherapistCard therapist={therapist}></TherapistCard></div>)
            }

        </div>
    );
};

export default SliderForMobile;