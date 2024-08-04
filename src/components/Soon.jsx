import { Link } from "react-router-dom";


const Soon = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <h3 className='text-9xl font-bold'>Coming Soon....</h3>
            <Link to='/'><button className="bg-[#156BCA] absolute  rounded-lg py-5 px-8 text-white font-semibold">Go to Home</button></Link>
        </div>
    );
};

export default Soon;