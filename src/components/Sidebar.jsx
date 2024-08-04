import { BsGrid } from "react-icons/bs";

const Sidebar = () => {
    return (
        <div className="w-60 max-h-full space-y-2 border border-[#E7E7E7]  text-[#5C635A]">
            <div className="">
                <h3 className="logo mt-6 text-center text-[40px]">LOGO</h3>
            </div>
            <div className="pt-5">
                <ul className=" space-y-2 text-sm">
                    <li className="dark:bg-gray-100 dark:text-gray-900">
                        <a rel="noopener noreferrer" href="#" className="flex gap-3 items-center py-3 px-6">
                            <BsGrid className="text-lg" />
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="bg-[#D4E9FF]">
                        <a rel="noopener noreferrer" href="#" className="flex gap-3 items-center py-3 px-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.19363 11.405C9.96038 11.405 12.3251 11.8243 12.3251 13.499C12.3251 15.1738 9.97613 15.605 7.19363 15.605C4.42613 15.605 2.06213 15.1895 2.06213 13.514C2.06213 11.8385 4.41038 11.405 7.19363 11.405Z" stroke="#5C635A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.19361 9.01476C5.37711 9.01476 3.90411 7.54251 3.90411 5.72601C3.90411 3.90951 5.37711 2.43726 7.19361 2.43726C9.00936 2.43726 10.4824 3.90951 10.4824 5.72601C10.4891 7.53576 9.02661 9.00801 7.21686 9.01476H7.19361Z" stroke="#5C635A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.3623 8.16121C13.5631 7.99246 14.4878 6.96195 14.4901 5.7147C14.4901 4.48545 13.5938 3.46546 12.4186 3.27271" stroke="#5C635A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.9465 11.0491C15.1098 11.2223 15.922 11.6303 15.922 12.4703C15.922 13.0486 15.5395 13.4236 14.9215 13.6583" stroke="#5C635A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>New Listing</span>
                        </a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#" className="flex gap-3 items-center py-3 px-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.80425 1.5C12.8317 1.5 16.1078 4.776 16.1078 8.8035C16.1078 10.7037 15.3785 12.4367 14.1852 13.7374L16.5333 16.0805C16.7531 16.3003 16.7538 16.6558 16.534 16.8755C16.4246 16.9865 16.2798 17.0413 16.1358 17.0413C15.9925 17.0413 15.8485 16.9865 15.7383 16.877L13.3619 14.5073C12.1118 15.5084 10.5268 16.1077 8.80425 16.1077C4.77675 16.1077 1.5 12.831 1.5 8.8035C1.5 4.776 4.77675 1.5 8.80425 1.5ZM8.80425 2.625C5.397 2.625 2.625 5.39625 2.625 8.8035C2.625 12.2108 5.397 14.9827 8.80425 14.9827C12.2108 14.9827 14.9828 12.2108 14.9828 8.8035C14.9828 5.39625 12.2108 2.625 8.80425 2.625Z" fill="#5C635A" />
                            </svg>
                            <span>Search</span>
                        </a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#" className="flex gap-3 items-center py-3 px-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.0533 2.07131H6.06357C4.50357 2.06533 3.22482 3.30883 3.18807 4.86808V12.9028C3.15357 14.4876 4.40982 15.8008 5.99457 15.8361C6.01782 15.8361 6.04032 15.8368 6.06357 15.8361H12.0553C13.6258 15.7723 14.8633 14.4748 14.8521 12.9028V6.02833L11.0533 2.07131Z" stroke="#5C635A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.8563 2.0625V4.24425C10.8563 5.30925 11.7173 6.1725 12.7823 6.1755H14.8486" stroke="#5C635A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.7161 11.5189H6.66608" stroke="#5C635A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.18234 8.70447H6.66534" stroke="#5C635A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#" className="flex gap-3 items-center py-3 px-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M15.63 3.45753C15.247 3.07428 14.7921 2.77026 14.2915 2.56284C13.7909 2.35542 13.2544 2.24866 12.7125 2.24866C12.1707 2.24866 11.6341 2.35542 11.1335 2.56284C10.6329 2.77026 10.1781 3.07428 9.79503 3.45753L9.00003 4.25253L8.20503 3.45753C7.43126 2.68376 6.3818 2.24906 5.28753 2.24906C4.19325 2.24906 3.1438 2.68376 2.37003 3.45753C1.59626 4.2313 1.16156 5.28075 1.16156 6.37503C1.16156 7.4693 1.59626 8.51876 2.37003 9.29253L3.16503 10.0875L9.00003 15.9225L14.835 10.0875L15.63 9.29253C16.0133 8.90946 16.3173 8.45464 16.5247 7.95404C16.7321 7.45345 16.8389 6.91689 16.8389 6.37503C16.8389 5.83316 16.7321 5.2966 16.5247 4.79601C16.3173 4.29542 16.0133 3.84059 15.63 3.45753V3.45753Z" stroke="#5C635A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Favorites</span>
                        </a>
                    </li>
                </ul>
                <hr className="w-5/6 my-5 mx-auto" />
                <ul className=" space-y-2 text-sm">
                    <li>
                        <a rel="noopener noreferrer" href="#" className="flex gap-3 items-center py-3 px-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2506 2.06262H5.74881C3.48306 2.06262 2.06256 3.66687 2.06256 5.93712V12.0631C2.06256 14.3334 3.47631 15.9376 5.74881 15.9376H12.2498C14.5231 15.9376 15.9376 14.3334 15.9376 12.0631V5.93712C15.9376 3.66687 14.5231 2.06262 12.2506 2.06262Z" stroke="#5C635A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.99603 12.0001V9.00012" stroke="#5C635A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.99243 6.15332H8.99993" stroke="#5C635A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Help Center</span>
                        </a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#" className="flex gap-3 items-center py-3 px-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.605 5.71765L15.1382 4.90758C14.7432 4.22214 13.868 3.98568 13.1817 4.37898C12.8549 4.57145 12.4651 4.62605 12.098 4.53075C11.731 4.43545 11.4169 4.19808 11.2251 3.87097C11.1017 3.66305 11.0354 3.42623 11.0329 3.18447C11.044 2.79686 10.8978 2.42124 10.6275 2.14319C10.3572 1.86514 9.9859 1.70834 9.59813 1.7085H8.65762C8.27772 1.7085 7.91348 1.85987 7.6455 2.12915C7.37752 2.39842 7.22788 2.76338 7.22971 3.14328C7.21845 3.92763 6.57936 4.55755 5.79492 4.55747C5.55316 4.55496 5.31634 4.48865 5.10843 4.36525C4.42205 3.97195 3.54683 4.20841 3.1519 4.89385L2.65076 5.71765C2.25631 6.40223 2.48955 7.27689 3.1725 7.67417C3.61643 7.93047 3.8899 8.40413 3.8899 8.91673C3.8899 9.42934 3.61643 9.903 3.1725 10.1593C2.49042 10.5539 2.25692 11.4264 2.65076 12.109L3.12444 12.9259C3.30948 13.2598 3.61995 13.5062 3.98714 13.6105C4.35434 13.7149 4.74798 13.6686 5.08097 13.482C5.40831 13.2909 5.79839 13.2386 6.1645 13.3366C6.53062 13.4346 6.84243 13.6747 7.03062 14.0037C7.15402 14.2116 7.22033 14.4484 7.22284 14.6902C7.22284 15.4826 7.86522 16.125 8.65762 16.125H9.59813C10.3879 16.125 11.0291 15.4868 11.0329 14.6971C11.0311 14.316 11.1816 13.95 11.4511 13.6805C11.7206 13.411 12.0866 13.2604 12.4677 13.2623C12.7089 13.2687 12.9447 13.3348 13.1542 13.4545C13.8388 13.8489 14.7134 13.6157 15.1107 12.9328L15.605 12.109C15.7963 11.7806 15.8488 11.3894 15.7509 11.0222C15.653 10.655 15.4127 10.342 15.0833 10.1524C14.7538 9.96291 14.5135 9.64987 14.4156 9.28265C14.3177 8.91542 14.3702 8.5243 14.5615 8.19591C14.6859 7.97869 14.866 7.79859 15.0833 7.67417C15.7621 7.27711 15.9948 6.40756 15.605 5.72451V5.71765Z" stroke="#5C635A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.13129 10.8938C10.2232 10.8938 11.1084 10.0086 11.1084 8.91669C11.1084 7.82476 10.2232 6.93958 9.13129 6.93958C8.03936 6.93958 7.15417 7.82476 7.15417 8.91669C7.15417 10.0086 8.03936 10.8938 9.13129 10.8938Z" stroke="#5C635A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;