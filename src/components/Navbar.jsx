import img from "../assets/exit.png"
const Navbar = () => {
    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center gap-3 mt-4 lg:mt-0">
                        <div className="w-10 h-10 overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-[#152A16]">Sagor Soni</h3>
                            <h3 className="text-sm text-[#5C635A]">sagar@gmail.com</h3>
                        </div>
                    </div>

                    {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                    <div className="flex gap-5 justify-center items-center">
                        <button className="border p-3 rounded-full border-[#E7E7E7]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.9998 16.1597C15.9756 16.1597 18.2775 15.5214 18.4998 12.9593C18.4998 10.399 16.895 10.5636 16.895 7.4222C16.895 4.9684 14.5692 2.17651 10.9998 2.17651C7.43053 2.17651 5.10471 4.9684 5.10471 7.4222C5.10471 10.5636 3.49985 10.399 3.49985 12.9593C3.72304 15.5311 6.02494 16.1597 10.9998 16.1597Z" stroke="#152A16" strokeWidth="1.41176" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.1077 18.8152C11.904 20.1517 10.0264 20.1675 8.81119 18.8152" stroke="#152A16" strokeWidth="1.41176" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="38" viewBox="0 0 2 38" fill="none">
                            <path d="M1 1L0.999998 37" stroke="#E7E7E7" strokeLinecap="round" />
                        </svg>
                        <button className="flex text-[#F15E4A] font-medium items-center gap-[10px]">Log Out <img src={img} alt="" /></button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;