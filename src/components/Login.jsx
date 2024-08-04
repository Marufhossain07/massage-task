
import { FaFacebookF } from "react-icons/fa";
import google from "../assets/google.png"
import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {signIn,googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        signIn(data?.email, data?.password)
            .then(res => {
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')
                }, 1000)
            })}

    const handleGoogle = ()=>{
        googleSignIn()
        .then(res=>{
            setTimeout(() => {
                navigate(location?.state ? location.state : '/')
            }, 2000)
        })
    }
    return (
        <div className="max-w-[1140px] mx-auto">
            <div className="flex pt-24 justify-between items-center w-full mx-auto overflow-hidden bg-white rounded-lg">
                <div className=" text-left">
                    <h3 className="logo  text-4xl">LOGO</h3>
                    <p className=" my-6 text-[30px] font-pop font-semibold text-[#152A16]">
                        Log In To Your Account
                    </p>
                    <p className="font-pop text-base text-[#5C635A]">Welcome Back! Select a method to log in:</p>
                    <div className="flex gap-12 justify-between mt-10">
                        <button onClick={handleGoogle} style={{ background: 'linear-gradient(91deg, #E4E4E4 0.64%, #FFFFFF 99.53%)', boxShadow: '0px 4px 7px 0px rgba(131, 131, 131, 0.23)' }} className="flex gap-3 justify-center border rounded-md items-center py-4 px-10 font-pop text-[#152A16]">
                            <img src={google} alt="" />Google</button>
                        <button style={{ background: 'linear-gradient(89deg, #298FFF 0.18%, #0778F5 99.28%)' }} className="flex gap-3 justify-center border rounded-xl items-center py-3 px-11 font-pop text-white">
                            <FaFacebookF className="text-2xl text-white" />Facebook</button>
                    </div>
                    <div className="flex items-center justify-between my-8">
                        <span className="w-1/4 border-b dark:border-gray-600 md:w-1/4"></span>

                        <a href="#" className="text-sm text-[#5C635A] hover:underline">Or Continue with Email</a>

                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>

                    {/* login form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-4">
                            <label className="block mb-4  text-black font-medium">Email Address</label>
                            <input placeholder="Enter your email" {...register("email")} className="block w-full p-4 text-[#5C635A] border border-[#E7E7E7] rounded-xl" type="email" />
                        </div>
                        <div className="mt-8">
                            <label className="block mb-4  text-black font-medium">Password</label>
                            <div className="relative">
                                <input placeholder="Enter your password" {...register("password")} className="relative w-full p-4 text-[#5C635A] border border-[#E7E7E7] rounded-xl" type={showPassword ? 'text' : 'password'} />
                                {showPassword ?
                                    <FiEyeOff onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-5  text-2xl text-[#5C635A]" />
                                    : <FiEye onClick={() => setShowPassword(!showPassword)}
                                        className="absolute top-4 right-5 text-2xl text-[#5C635A]" />
                                }
                            </div>
                            <div className="flex justify-between mt-3">
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox" name="remember" id="remember" aria-label="Remember me" className=" rounded-sm focus:dark:ring-default-600 focus:dark:border-default-600 focus:ring-2 dark:accent-default-600" />
                                    <label htmlFor="remember" className="text-sm text-[#5C635A]">Remember me</label>
                                </div>
                                <a className="text-sm text-[#156BCA] font-medium underline " href="/">Forgot password?</a>
                            </div>
                            <button className="flex mt-14 mx-auto gap-3 justify-center border rounded-xl items-center py-4 px-20 font-pop bg-[#156BCA] text-white font-semibold">
                                Sign in</button>
                        </div>
                    </form>
                    <p className="text-[15px] mt-4 text-center text-[#142D3A]">Don&apos;t have an account?<span> </span>
                    <Link to='/sign-up'><a href="#" className="underline font-medium text-[#156BCA]">Create Account</a></Link>
                    </p>

                </div>
                <div className="hidden login bg-cover rounded-2xl h-[802px] lg:block lg:w-1/2">
                    <Swiper autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                        <SwiperSlide>
                            <h3 className="bg-[#152A16] mt-[50%] w-1/2 mx-auto py-7 px-8 rounded-lg bg-opacity-[0.7] text-white text-xl">
                                <a className="text-[#156BCA] font-semibold " href="">Sign In</a> to view all the <br /> massage therapists
                            </h3>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3 className="bg-[#152A16] mt-[50%] w-1/2 mx-auto py-7 px-8 rounded-lg bg-opacity-[0.7] text-white text-xl">
                                <a className="text-[#156BCA] font-semibold " href="">Sign In</a> to view all the <br /> massage therapists
                            </h3>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3 className="bg-[#152A16] mt-[50%] w-1/2 mx-auto py-7 px-8 rounded-lg bg-opacity-[0.7] text-white text-xl">
                                <a className="text-[#156BCA] font-semibold " href="">Sign In</a> to view all the <br /> massage therapists
                            </h3>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Login;