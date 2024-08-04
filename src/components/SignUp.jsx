
import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit } = useForm();
    const [accept, setAccept] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    const navigate = useNavigate()
    console.log(accept);

    const { createUser } = useContext(AuthContext);

    const onSubmit = async (data) => {
        if (accept && data?.password === data?.confirm) {
            await createUser(data?.email, data?.password)
                .then(res => {
                    updateProfile(res?.user, {
                        displayName: data.name
                    })
                    setTimeout(() => {
                        navigate('/')
                    }, 1000)
                })
        }
        else{
            alert('Check your password and accept Accept Terms of Service')
        }



    }
    return (
        <div className="max-w-[1140px] mx-auto">
            <div className="flex pt-10 justify-between items-center w-full mx-auto overflow-hidden bg-white rounded-lg">
                <div className=" text-left">
                    <h3 className="logo  text-4xl">LOGO</h3>
                    <p className=" mt-8 mb-6 text-[30px] font-pop font-semibold text-[#152A16]">
                        Sign In To Your Account
                    </p>
                    <p className="font-pop text-base text-[#5C635A]">Welcome Back! By click the sign up button, you&apos;re agree <br /> to
                        Zenitood Terms and Service and acknlowledge the <br />
                        <span className="text-[#4285F3] underline">Privacy and Policy</span></p>

                    {/* login form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-8">
                            <label className="block mb-4  text-black font-medium">Name</label>
                            <input placeholder="@username"  {...register("name")} className="block w-full p-4 text-[#5C635A] border border-[#E7E7E7] rounded-xl" type="text" />
                        </div>
                        <div className="mt-6">
                            <label className="block mb-4  text-black font-medium">Email Address</label>
                            <input placeholder="Enter your email"  {...register("email")} className="block w-full p-4 text-[#5C635A] border border-[#E7E7E7] rounded-xl" type="email" />
                        </div>
                        <div className="mt-6">
                            <label className="block mb-4  text-black font-medium">Password</label>
                            <div className="relative">
                                <input placeholder="Enter your password"  {...register("password")} className="relative w-full p-4 text-[#5C635A] border border-[#E7E7E7] rounded-xl" type={showPassword ? 'text' : 'password'} />
                                {showPassword ?
                                    <FiEyeOff onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-5  text-2xl text-[#5C635A]" />
                                    : <FiEye onClick={() => setShowPassword(!showPassword)}
                                        className="absolute top-4 right-5 text-2xl text-[#5C635A]" />
                                }
                            </div>
                            <label className="block mt-6 mb-4  text-black font-medium">Confirm Password</label>
                            <div className="relative">
                                <input placeholder="Re-type password" {...register("confirm")} className="relative w-full p-4 text-[#5C635A] border border-[#E7E7E7] rounded-xl" type={showPassword2 ? 'text' : 'password'} />
                                {showPassword2 ?
                                    <FiEyeOff onClick={() => setShowPassword2(!showPassword2)} className="absolute top-4 right-5  text-2xl text-[#5C635A]" />
                                    : <FiEye onClick={() => setShowPassword2(!showPassword2)}
                                        className="absolute top-4 right-5 text-2xl text-[#5C635A]" />
                                }
                            </div>
                            <div className=" mt-4 mb-10">
                                <div className="flex gap-[10px] items-center">
                                    <input onClick={() => setAccept(!accept)} type="checkbox" name="remember" id="remember" aria-label="Remember me" className=" rounded-sm focus:dark:ring-default-600 focus:dark:border-default-600 focus:ring-2 dark:accent-default-600" />
                                    <label htmlFor="remember" className="text-sm text-[#4285F3]">Accept Terms of Service</label>
                                </div>
                            </div>
                            <button className="flex mx-auto gap-3 justify-center border rounded-xl items-center py-4 px-20 font-pop bg-[#156BCA] text-white font-semibold">
                                Sign up</button>
                        </div>
                    </form>
                    <p className="text-[15px] mt-4 text-center text-[#142D3A]">Already Have an Account?<span> </span>
                        <Link to='/login'><a href="#" className="underline font-medium text-[#156BCA]">Log in</a></Link>
                    </p>

                </div>
                <div className="hidden login bg-cover rounded-2xl h-[803px] lg:block lg:w-1/2">
                    <Swiper autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                        <SwiperSlide>
                            <h3 className="bg-[#152A16] mt-[50%] w-1/2 mx-auto py-7 px-8 rounded-lg bg-opacity-[0.7] text-white text-center text-xl">
                                <a className="text-[#156BCA] font-semibold " href="">Create Account</a> <br /> Fill in Your Information
                            </h3>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3 className="bg-[#152A16] mt-[50%] text-center w-1/2 mx-auto py-7 px-8 rounded-lg bg-opacity-[0.7] text-white text-xl">
                                <a className="text-[#156BCA] font-semibold " href="">Create Account</a> <br /> Fill in Your Information
                            </h3>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3 className="bg-[#152A16] mt-[50%] text-center w-1/2 mx-auto py-7 px-8 rounded-lg bg-opacity-[0.7] text-white text-xl">
                                <a className="text-[#156BCA] font-semibold " href="">Create Account</a> <br /> Fill in Your Information
                            </h3>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Login;