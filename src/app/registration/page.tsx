'use client';

import NavbarNoLogin from "@/components/navbar-no-login/navbar_no_login";
import Footer from "@/components/footer/footer";
import React from "react";
import MicrosoftButton from "@/components/button/microsoftButton";
import GoogleButton from "@/components/button/googleButton";

export default function RegistrationPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-1" data-theme="light">
            <NavbarNoLogin/>
            <div className="relative bg-white overflow-hidden z-0">
                {/*<div className="absolute left-0 bottom-0 bg-blue-500"></div>*/}
                <div className="relative z-10 flex flex-wrap -m-8">
                    <div className="w-full md:w-1/2 p-8">
                        <div className="container px-4 mx-auto">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="md:max-w-lg mx-auto pt-16 md:pb-32">
                                        <h2 className="mb-32 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">Create
                                            an account & get started.</h2>
                                        <h3 className="mb-9 text-xl font-bold font-heading leading-normal">Why
                                            should
                                            you join us?</h3>
                                        <ul className="md:max-w-xs">
                                            <li className="mb-5 flex flex-wrap">
                                                <svg className="mr-2" width="25" height="26" viewBox="0 0 25 26"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M12.5 23C18.0228 23 22.5 18.5228 22.5 13C22.5 7.47715 18.0228 3 12.5 3C6.97715 3 2.5 7.47715 2.5 13C2.5 18.5228 6.97715 23 12.5 23ZM17.1339 11.3839C17.622 10.8957 17.622 10.1043 17.1339 9.61612C16.6457 9.12796 15.8543 9.12796 15.3661 9.61612L11.25 13.7322L9.63388 12.1161C9.14573 11.628 8.35427 11.628 7.86612 12.1161C7.37796 12.6043 7.37796 13.3957 7.86612 13.8839L10.3661 16.3839C10.8543 16.872 11.6457 16.872 12.1339 16.3839L17.1339 11.3839Z"
                                                          fill="#4F46E5"></path>
                                                </svg>
                                                <span className="flex-1 font-medium leading-relaxed">The best you can do in no time at all, amazing feature goes here</span>
                                            </li>
                                            <li className="mb-5 flex flex-wrap">
                                                <svg className="mr-2" width="25" height="26" viewBox="0 0 25 26"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M12.5 23C18.0228 23 22.5 18.5228 22.5 13C22.5 7.47715 18.0228 3 12.5 3C6.97715 3 2.5 7.47715 2.5 13C2.5 18.5228 6.97715 23 12.5 23ZM17.1339 11.3839C17.622 10.8957 17.622 10.1043 17.1339 9.61612C16.6457 9.12796 15.8543 9.12796 15.3661 9.61612L11.25 13.7322L9.63388 12.1161C9.14573 11.628 8.35427 11.628 7.86612 12.1161C7.37796 12.6043 7.37796 13.3957 7.86612 13.8839L10.3661 16.3839C10.8543 16.872 11.6457 16.872 12.1339 16.3839L17.1339 11.3839Z"
                                                          fill="#4F46E5"></path>
                                                </svg>
                                                <span className="flex-1 font-medium leading-relaxed">24/7 Support of our dedicated, highly professional team</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <div className="w-full p-4 py-10 flex flex-col justify-center bg-blueGray-100 h-full border-solid border-2 border-gray-900 shadow-2xl rounded-lg">
                            <p className="py-4 text-3xl font-bold leading-relaxed text-center">
                                Sign up for your account
                            </p>
                            <p className="mb-9 text-gray-600 font-medium leading-relaxed text-center">Yeay! it&apos;s free forever.</p>
                            <form className="md:max-w-lg mx-auto ">
                                <label className="block mb-4">
                                    <p className="mb-2 text-gray-900 font-semibold leading-normal">Full Name *</p>
                                    <input
                                        className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                                        id="signUpInput1-1" type="text" placeholder="First & last name"/>
                                </label>
                                <label className="block mb-4">
                                    <p className="mb-2 text-gray-900 font-semibold leading-normal">Email Address
                                        *</p>
                                    <input
                                        className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                                        id="signUpInput1-2" type="text" placeholder="Enter email address"/>
                                </label>
                                <label className="block mb-5">
                                    <p className="mb-2 text-gray-900 font-semibold leading-normal">Password *</p>
                                    <input
                                        className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                                        id="signUpInput1-3" type="password" placeholder="********"/>
                                </label>
                                <div className="flex flex-wrap justify-between mb-4">
                                    <div className="w-full">
                                        <div className="flex items-center">
                                            <input className="w-4 h-4" id="default-checkbox" type="checkbox"
                                                   value=""/>
                                            <label className="ml-2 text-sm text-gray-900 font-medium"
                                                   htmlFor="default-checkbox">
                                                <span>By signing up, I agree to the </span>
                                                <a className="text-indigo-600 hover:text-indigo-700" href="#">Terms
                                                    & Conditions</a>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                                    type="button">Sign Up
                                </button>
                                <p className="mb-5 text-sm text-gray-500 font-medium text-center">Or continue
                                    with</p>
                                <div className="flex flex-wrap justify-center -m-2">
                                    <div className="w-auto p-2">
                                        {/*<button*/}
                                        {/*    className="flex items-center p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">*/}
                                        {/*    <img className="mr-3" src="flaro-assets/logos/brands/google.svg"*/}
                                        {/*         alt=""/>*/}
                                        {/*    <span*/}
                                        {/*        className="font-semibold leading-normal">Sign in with Google</span>*/}
                                        {/*</button>*/}
                                        <GoogleButton/>
                                    </div>
                                    <div className="w-auto p-2">
                                        {/*<button*/}
                                        {/*    className="flex items-center p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">*/}
                                        {/*    <img className="mr-3" src="flaro-assets/logos/brands/fb.svg" alt=""/>*/}
                                        {/*    <span*/}
                                        {/*        className="font-semibold leading-normal">Sign in with Microsoft</span>*/}
                                        {/*</button>*/}
                                        <MicrosoftButton/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
};
