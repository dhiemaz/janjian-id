import React from "react";

export default function PricingSection() {
    return (
        <>
            <section className="py-24 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">Choose your
                            plan </h2>
                        <p className="text-gray-500 text-center leading-6 mb-9"></p>

                    </div>

                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">

                        <div
                            className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-12 transition-all duration-500 hover:bg-gray-100">
                            <h3 className="font-manrope text-2xl font-bold mb-3">Free</h3>
                            <div className="flex items-center mb-6">
                                <span className="font-manrope mr-2 text-4xl font-semibold">Rp.0</span>
                                <span className="text-xl text-gray-500 ">/ month</span>
                            </div>

                            <ul className="mb-12 space-y-6 text-left text-lg text-gray-500">
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <span>2 auto tracking</span>
                                </li>
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <span>7 Day transaction clearing </span>
                                </li>
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <span>24/7 Customer support </span>
                                </li>
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <span>All widget access</span>
                                </li>
                            </ul>
                            <a href="javascript:"
                               className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-indigo-700">Purchase
                                Plan</a>

                        </div>

                        <div
                            className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-indigo-50 transition-all duration-500 hover:bg-indigo-100 ">
                            <div
                                className="uppercase bg-gradient-to-r from-indigo-600 to-violet-600 rounded-t-2xl p-3 text-center text-white">
                                MOST POPULAR
                            </div>
                            <div className="p-6 xl:py-9 xl:px-12">
                                <h3 className="font-manrope text-2xl font-bold mb-3">Advanced</h3>
                                <div className="flex items-center mb-6">
                                    <span
                                        className="font-manrope mr-2 text-4xl font-semibold text-indigo-600">Rp.20000</span>
                                    <span className="text-xl text-gray-500 ">/ month</span>
                                </div>

                                <ul className="mb-12 space-y-6 text-left text-lg ">
                                    <li className="flex items-center space-x-4">

                                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                        <span>AI Advisor</span>
                                    </li>
                                    <li className="flex items-center space-x-4">

                                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                        <span>Unlimited auto tracking</span>
                                    </li>
                                    <li className="flex items-center space-x-4">

                                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                        <span>1 Day transaction clearing </span>
                                    </li>
                                    <li className="flex items-center space-x-4">

                                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                        <span>Priority customer support</span>
                                    </li>
                                    <li className="flex items-center space-x-4">

                                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                        <span>All Widget Access</span>
                                    </li>
                                </ul>
                                <a href="javascript:"
                                   className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-fit block mx-auto hover:bg-indigo-700">Not
                                    Available</a>

                            </div>
                        </div>

                        <div
                            className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-12 transition-all duration-500 hover:bg-gray-100">
                            <h3 className="font-manrope text-2xl font-bold mb-3">Team</h3>
                            <div className="flex items-center mb-6">
                                <span className="font-manrope mr-2 text-4xl font-semibold">Rp.5000</span>
                                <span className="text-xl text-gray-500 ">/ month</span>
                            </div>

                            <ul className="mb-12 space-y-6 text-left text-lg text-gray-500">
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <span>AI Advisor</span>
                                </li>
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <span>Unlimited auto tracking </span>
                                </li>
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <span>1 Day transaction clearing </span>
                                </li>
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <span>Priority customer support</span>
                                </li>
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <span>All Widget Access</span>
                                </li>
                            </ul>
                            <a href="javascript:"
                               className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-indigo-700">Not
                                Available</a>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}