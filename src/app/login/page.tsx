import React from "react";
import Footer from "@/components/footer/footer";
import NavbarNoLogin from "@/components/navbar-no-login/navbar_no_login";
import Image from "next/image";
import NavbarNoGetStarted from "@/components/navbar-no-get-started/navbar_no_getstarted";

export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-1" data-theme="light">
            <NavbarNoLogin/>
            <div className="flex flex-wrap pb-24">
                <div className="w-full lg:w-1/2 p-8">
                    <div className="flex flex-col justify-center border border-gray-300 shadow-2xl rounded-lg py-24 max-w-md mx-auto h-full p-8">
                        <h1 className="text-3xl font-bold font-heading mb-4">Hi! Welcome back.</h1>
                        <p className="py-3">Log in to your account to get back to your hub for scheduling meetings.</p>
                        <form action="">
                            <label className="block text-sm font-medium mb-2" htmlFor="textInput1">Email</label>
                            <input
                                className="w-full rounded-xl p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-orange-200 transition duration-200 mb-4"
                                id="textInput1" type="text" placeholder="john@email.com"/>
                            <label className="block text-sm font-medium mb-2" htmlFor="textInput2">Password</label>
                            <div
                                className="flex items-center gap-1 w-full rounded-xl p-4 border border-gray-100 shadow mb-3">
                                <input className="outline-none flex-1 placeholder-gray-500 " id="textInput2"
                                       type="password" placeholder="Enter password"/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M21.25 9.15C18.94 5.52 15.56 3.43 12 3.43C10.22 3.43 8.49 3.95 6.91 4.92C5.33 5.9 3.91 7.33 2.75 9.15C1.75 10.72 1.75 13.27 2.75 14.84C5.06 18.48 8.44 20.56 12 20.56C13.78 20.56 15.51 20.04 17.09 19.07C18.67 18.09 20.09 16.66 21.25 14.84C22.25 13.28 22.25 10.72 21.25 9.15ZM12 16.04C9.76 16.04 7.96 14.23 7.96 12C7.96 9.77 9.76 7.96 12 7.96C14.24 7.96 16.04 9.77 16.04 12C16.04 14.23 14.24 16.04 12 16.04Z"
                                        fill="#A3A3A3"></path>
                                    <path
                                        d="M12.0004 9.14C10.4304 9.14 9.15039 10.42 9.15039 12C9.15039 13.57 10.4304 14.85 12.0004 14.85C13.5704 14.85 14.8604 13.57 14.8604 12C14.8604 10.43 13.5704 9.14 12.0004 9.14Z"
                                        fill="#A3A3A3"></path>
                                </svg>
                            </div>
                            <div className="mb-8 flex justify-end"><a
                                className="inline-block text-blue-600 hover:text-blue-700 transition duration-200 text-sm font-semibold"
                                href="#">Forgot Password?</a></div>
                            <button
                                className="h-14 inline-flex items-center justify-center py-4 px-6 text-white font-bold font-heading w-full text-center border border-blue-500 rounded-xl shadow  bg-blue-500 hover:bg-blue-600 focus:ring focus:ring-indigo-600 transition duration-200 mb-8"
                                type="submit">Login
                            </button>
                            <button
                                className="h-14 inline-flex items-center justify-center gap-2 py-4 px-6 border rounded-xl bg-white w-full text-center border-gray-100 shadow hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200"
                                type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
                                     fill="none">
                                    <path
                                        d="M10.5003 1.91667C12.5358 1.91667 14.3903 2.67493 15.8117 3.91839L13.8037 5.92643C12.9021 5.19326 11.7542 4.75001 10.5003 4.75001C7.601 4.75001 5.25033 7.10068 5.25033 10C5.25033 12.8993 7.601 15.25 10.5003 15.25C12.7863 15.25 14.7244 13.7867 15.4456 11.7501L15.5636 11.4167H15.2099H10.7503V8.58334H17.7503V8.61792H18.0003H18.4637C18.5415 9.06752 18.5837 9.52907 18.5837 10C18.5837 14.464 14.9643 18.0833 10.5003 18.0833C6.03631 18.0833 2.41699 14.464 2.41699 10C2.41699 5.53599 6.03631 1.91667 10.5003 1.91667Z"
                                        fill="#FFC107" stroke="#FFC107" strokeWidth="0.5"></path>
                                    <path
                                        d="M3.12793 6.12125L5.86585 8.12917C6.60668 6.29501 8.40085 5.00001 10.5004 5.00001C11.775 5.00001 12.9346 5.48084 13.8175 6.26625L16.1746 3.90917C14.6863 2.52209 12.6954 1.66667 10.5004 1.66667C7.2996 1.66667 4.52376 3.47375 3.12793 6.12125Z"
                                        fill="#FF3D00"></path>
                                    <path
                                        d="M10.4998 18.3333C12.6523 18.3333 14.6081 17.5096 16.0869 16.17L13.5077 13.9875C12.6429 14.6452 11.5862 15.0009 10.4998 15C8.3323 15 6.49189 13.6179 5.79855 11.6892L3.08105 13.7829C4.46022 16.4817 7.26105 18.3333 10.4998 18.3333Z"
                                        fill="#4CAF50"></path>
                                    <path
                                        d="M18.6713 8.36791H18V8.33333H10.5V11.6667H15.2096C14.8809 12.5902 14.2889 13.3972 13.5067 13.9879L13.5079 13.9871L16.0871 16.1696C15.9046 16.3354 18.8333 14.1667 18.8333 9.99999C18.8333 9.44124 18.7758 8.89583 18.6713 8.36791Z"
                                        fill="#1976D2"></path>
                                </svg>
                                <span className="font-bold font-heading">Login with Google</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-8">
                    <div className="flex flex-col justify-center items-center h-full">
                        <div className="flex mx-auto">
                            <div className="w-full lg:w-1/2 p-4">
                                <div className="bg-amber-200 rounded-3xl px-4 pt-14 relative w-28 sm:w-40 xl:w-60 h-28 sm:h-40 xl:h-60">
                                    <div className="absolute left-3 bottom-3 z-10">
                                        <div className="bg-white p-1 rounded-md flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none">
                                                <mask id="path-1-inside-1_620_437" fill="white">
                                                    <path
                                                        d="M12.0002 11.1667C11.8935 11.1667 11.7935 11.1333 11.7002 11.0667C11.4802 10.9 11.4335 10.5867 11.6002 10.3667C12.6468 8.97333 12.6468 7.02667 11.6002 5.63333C11.4335 5.41333 11.4802 5.1 11.7002 4.93333C11.9202 4.76667 12.2335 4.81333 12.4002 5.03333C13.7068 6.78 13.7068 9.22 12.4002 10.9667C12.3002 11.1 12.1535 11.1667 12.0002 11.1667Z"></path>
                                                </mask>
                                                <path
                                                    d="M12.0002 11.1667C11.8935 11.1667 11.7935 11.1333 11.7002 11.0667C11.4802 10.9 11.4335 10.5867 11.6002 10.3667C12.6468 8.97333 12.6468 7.02667 11.6002 5.63333C11.4335 5.41333 11.4802 5.1 11.7002 4.93333C11.9202 4.76667 12.2335 4.81333 12.4002 5.03333C13.7068 6.78 13.7068 9.22 12.4002 10.9667C12.3002 11.1 12.1535 11.1667 12.0002 11.1667Z"
                                                    fill="#FFC96D"></path>
                                                <path
                                                    d="M11.7002 11.0667L11.0963 11.8638L11.1075 11.8722L11.1189 11.8804L11.7002 11.0667ZM11.6002 10.3667L12.3973 10.9705L12.3997 10.9673L11.6002 10.3667ZM11.6002 5.63333L12.3997 5.03272L12.3973 5.02947L11.6002 5.63333ZM12.4002 5.03333L13.2009 4.4343L13.1973 4.42948L12.4002 5.03333ZM12.4002 10.9667L13.2002 11.5667L13.2009 11.5657L12.4002 10.9667ZM12.0002 10.1667C12.053 10.1667 12.1082 10.1753 12.1614 10.193C12.2139 10.2105 12.2541 10.2334 12.2814 10.2529L11.1189 11.8804C11.3684 12.0586 11.6691 12.1667 12.0002 12.1667V10.1667ZM12.304 10.2696C12.5142 10.4288 12.5717 10.7403 12.3973 10.9705L10.8031 9.76281C10.2954 10.433 10.4462 11.3712 11.0963 11.8638L12.304 10.2696ZM12.3997 10.9673C13.7137 9.21814 13.7137 6.78186 12.3997 5.03272L10.8006 6.23394C11.58 7.27147 11.58 8.72853 10.8006 9.76605L12.3997 10.9673ZM12.3973 5.02947C12.5717 5.25969 12.5142 5.57121 12.304 5.73042L11.0963 4.13624C10.4462 4.62879 10.2954 5.56697 10.8031 6.23719L12.3973 5.02947ZM12.304 5.73042C12.0738 5.90483 11.7623 5.84735 11.6031 5.63719L13.1973 4.42948C12.7047 3.77932 11.7665 3.6285 11.0963 4.13624L12.304 5.73042ZM11.5994 5.63235C12.6404 7.02386 12.6404 8.97614 11.5994 10.3676L13.2009 11.5657C14.7733 9.46387 14.7733 6.53613 13.2009 4.43431L11.5994 5.63235ZM11.6002 10.3667C11.6977 10.2366 11.8535 10.1667 12.0002 10.1667V12.1667C12.4535 12.1667 12.9026 11.9634 13.2002 11.5667L11.6002 10.3667Z"
                                                    fill="#FFC96D" mask="url(#path-1-inside-1_620_437)"></path>
                                                <path
                                                    d="M13.2199 12.8333C13.1132 12.8333 13.0132 12.8 12.9199 12.7333C12.6999 12.5667 12.6532 12.2533 12.8199 12.0333C14.5999 9.66 14.5999 6.34 12.8199 3.96667C12.6532 3.74667 12.6999 3.43333 12.9199 3.26667C13.1399 3.1 13.4532 3.14667 13.6199 3.36667C15.6666 6.09333 15.6666 9.90667 13.6199 12.6333C13.5266 12.7667 13.3732 12.8333 13.2199 12.8333Z"
                                                    fill="#FFC96D"></path>
                                                <path
                                                    d="M9.34683 2.52C8.60016 2.10667 7.64683 2.21333 6.6735 2.82L4.72683 4.04C4.5935 4.12 4.44016 4.16667 4.28683 4.16667H3.66683H3.3335C1.72016 4.16667 0.833496 5.05333 0.833496 6.66667V9.33333C0.833496 10.9467 1.72016 11.8333 3.3335 11.8333H3.66683H4.28683C4.44016 11.8333 4.5935 11.88 4.72683 11.96L6.6735 13.18C7.26016 13.5467 7.8335 13.7267 8.36683 13.7267C8.7135 13.7267 9.04683 13.6467 9.34683 13.48C10.0868 13.0667 10.5002 12.2067 10.5002 11.06V4.94C10.5002 3.79333 10.0868 2.93333 9.34683 2.52Z"
                                                    fill="#FFC96D"></path>
                                            </svg>
                                            <p className="text-sm font-semibold">Armand</p>
                                        </div>
                                    </div>
                                    <Image className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-3xl"
                                         src="/img/man-picture.png" width={500} height={500} alt=""/>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 p-4">
                                <div className="rounded-3xl w-28 sm:w-40 xl:w-60 h-28 sm:h-40 xl:h-60 bg-gradient-to-r from-indigo-200 to-indigo-400"></div>
                            </div>
                        </div>
                        <div className="flex mx-auto">
                            <div className="w-full lg:w-1/2 p-4">
                                <div className="rounded-3xl w-28 sm:w-40 xl:w-60 h-28 sm:h-40 xl:h-60 bg-gradient-to-r from-indigo-200 to-indigo-400"></div>
                            </div>
                            <div className="w-full lg:w-1/2 p-4">
                                <div className="w-28 sm:w-40 xl:w-60 h-28 sm:h-40 xl:h-60">
                                    <Image className="rounded-3xl object-cover w-full h-full"
                                         src="/img/woman-picture.png" width={500} height={500} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="font-[sans-serif]">*/}
            {/*    <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">*/}
            {/*        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">*/}
            {/*            <div*/}
            {/*                className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">*/}
            {/*                <form className="space-y-4">*/}
            {/*                    <div className="mb-8">*/}
            {/*                        <h3 className="text-gray-800 text-3xl font-extrabold">Hi, Welcome Back</h3>*/}
            {/*                        <p className="text-gray-500 text-sm mt-4 leading-relaxed">Sign in to your*/}
            {/*                            account</p>*/}
            {/*                    </div>*/}

            {/*                    <div>*/}
            {/*                        <label className="text-gray-800 text-sm mb-2 block">User name</label>*/}
            {/*                        <div className="relative flex items-center">*/}
            {/*                            <input name="username" type="text" required*/}
            {/*                                   className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"*/}
            {/*                                   placeholder="Enter user name"/>*/}
            {/*                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"*/}
            {/*                                 className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">*/}
            {/*                                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>*/}
            {/*                                <path*/}
            {/*                                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"*/}
            {/*                                    data-original="#000000"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div>*/}
            {/*                        <label className="text-gray-800 text-sm mb-2 block">Password</label>*/}
            {/*                        <div className="relative flex items-center">*/}
            {/*                            <input name="password" type="password" required*/}
            {/*                                   className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"*/}
            {/*                                   placeholder="Enter password"/>*/}
            {/*                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"*/}
            {/*                                 className="w-[18px] h-[18px] absolute right-4 cursor-pointer"*/}
            {/*                                 viewBox="0 0 128 128">*/}
            {/*                                <path*/}
            {/*                                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"*/}
            {/*                                    data-original="#000000"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}

            {/*                    <div className="flex flex-wrap items-center justify-between gap-4">*/}
            {/*                        <div className="flex items-center">*/}
            {/*                            <input id="remember-me" name="remember-me" type="checkbox"*/}
            {/*                                   className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>*/}
            {/*                            <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">*/}
            {/*                                Remember me*/}
            {/*                            </label>*/}
            {/*                        </div>*/}

            {/*                        <div className="text-sm">*/}
            {/*                            <a href="javascript:void(0);"*/}
            {/*                               className="text-blue-600 hover:underline font-semibold">*/}
            {/*                                Forgot your password?*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}

            {/*                    <div className="!mt-8">*/}
            {/*                        <button type="button"*/}
            {/*                                className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">*/}
            {/*                            Log in*/}
            {/*                        </button>*/}
            {/*                    </div>*/}

            {/*                    <p className="text-sm !mt-8 text-center text-gray-800">Don&apos;t have an account <a*/}
            {/*                        href="javascript:void(0);"*/}
            {/*                        className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register*/}
            {/*                        here</a></p>*/}
            {/*                </form>*/}
            {/*            </div>*/}
            {/*            <div className="lg:h-[400px] md:h-[300px] max-md:mt-8 invisible lg:visible">*/}
            {/*                <Image src="/img/login-image.webp"*/}
            {/*                       className="w-full h-full max-md:w-4/5 mx-auto block object-cover"*/}
            {/*                       height={500} width={500}*/}
            {/*                       alt=""/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Footer/>
        </main>
    );
}