import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function MaintenanceSection() {
    return (
        <>
            <section className="py-24">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full flex-col justify-center items-center lg:gap-14 gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-center gap-5 flex">
                            <div className="w-full flex-col justify-center items-center gap-6 flex">
                                <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                                    <h2 className="text-center text-gray-800 text-3xl font-bold font-manrope leading-normal">We&apos;ll
                                        Be Back Soon</h2>
                                    <p className="text-center text-gray-500 text-base font-normal leading-relaxed">Apologies
                                        for the inconvenience! Janjian
                                        is currently undergoing maintenance to enhance your experience. We anticipate
                                        being back
                                        in just a few minutes.</p>
                                </div>
                            </div>
                            <Image src="/img/1718004199.png" width={500} height={500} alt="under maintenance image"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}