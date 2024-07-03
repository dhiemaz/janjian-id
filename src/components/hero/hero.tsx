import React from 'react';
import Image from "next/image";
import Index from "@/components/button";


export default function Hero() {
    return (
        <>
            <div className="font-sans text-[#333] max-w-6xl max-md:max-w-md mx-auto">
                <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
                    <div className="max-md:order-1 max-md:text-center">
                        <p className="text-sm font-bold text-blue-600 mb-2"><span
                            className="rotate-90 inline-block mr-2"></span>ALL IN ONE MEETING SCHEDULER</p>
                        <h2 className="md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">Schedule meetings
                            effortlessly</h2>
                        <p className="mt-4 text-base text-gray-500 leading-relaxed">Schedule meetings effortlessly by
                            seamlessly coordinating times, sending out invitations, and managing appointments with a
                            user-friendly system.</p>
                        <div className="mt-10 space-x-4">
                            <button type='button'
                                    className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-bold text-sm rounded-full px-6 py-2.5">Get
                                started
                            </button>
                            <button type='button'
                                    className="bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 transition-all text-blue-600 font-bold text-sm rounded-full px-6 py-2.5">Learn
                                more
                            </button>
                        </div>
                        <hr className="mt-10"/>
                        <div className="mt-10">
                            <h4 className="font-bold text-base mb-2">Trusted by teams around the word</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                                <img src="https://readymadeui.com/google-logo.svg" className="w-28 mx-auto"
                                     alt="google-logo"/>
                                <img src="https://readymadeui.com/facebook-logo.svg" className="w-28 mx-auto"
                                     alt="facebook-logo"/>
                                <img src="https://readymadeui.com/linkedin-logo.svg" className="w-28 mx-auto"
                                     alt="linkedin-logo"/>
                                <img src="https://readymadeui.com/pinterest-logo.svg" className="w-28 mx-auto"
                                     alt="pinterest-logo"/>
                            </div>
                        </div>
                    </div>
                    <div
                        className="lg:h-[650px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-blue-600 before:h-full before:w-3/4 before:right-0 before:z-0">
                        <Image className="rounded-md lg:w-3/4 md:w-11/12 relative"
                               src="/img/hero.png"
                               width={700}
                               height={700}
                               alt=""/>
                        {/*<img src="https://readymadeui.com/photo.webp"*/}
                        {/*     className="rounded-md lg:w-3/4 md:w-11/12 z-50 relative" alt="Dining Experience"/>*/}
                    </div>
                </div>
            </div>
            {/*<div className="m-8 grid place-content-start grid-cols-2 grid-flow-col gap-4">*/}
            {/*    <div className="px-5">*/}
            {/*        <h1 className="text-4xl text-ellipsis text-blue-600 font-bold mb-4 animate-none">JANJIAN.ID</h1>*/}
            {/*        <h2 className="text-2xl text-ellipsis text-blue-600 font-bold mb-4 animate-none">easy*/}
            {/*            scheduling*/}
            {/*            and video*/}
            {/*            conference platform</h2>*/}
            {/*        <p className="text-black animate-none">Tempor rebum no at dolore lorem clita rebum*/}
            {/*            rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit*/}
            {/*            justo amet ipsum vero ipsum clita lorem</p>*/}
            {/*        <a href="" className="btn btn-secondary my-6 px-5 rounded-pill me-3">Learn More</a>*/}
            {/*    </div>*/}
            {/*    <div className="px-3">*/}
            {/*        <p className="text-sm text-black my-5 px-2">Sign up free with Google.</p>*/}
            {/*        <Index />*/}
            {/*    </div>*/}
            {/*    <div className="row-span-2">*/}
            {/*        <Image className="hidden lg:block"*/}
            {/*               src="/img/hero.png"*/}
            {/*               width={550}*/}
            {/*               height={550}*/}
            {/*               alt=""/>*/}

            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
}