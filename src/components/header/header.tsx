import React from 'react';
import Image from "next/image";
import Index from "@/components/button";


export default function Header() {
    return (
        <>
            <div className="m-8 grid place-content-start grid-cols-2 grid-flow-col gap-4">
                <div className="px-5">
                    <h1 className="text-4xl text-ellipsis text-blue-600 font-bold mb-4 animate-none">JANJIAN.ID easy
                        scheduling
                        and video
                        conference platform</h1>
                    <p className="text-black animate-none">Tempor rebum no at dolore lorem clita rebum
                        rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit
                        justo amet ipsum vero ipsum clita lorem</p>
                    <a href="" className="btn btn-secondary my-6 px-5 rounded-pill me-3">Learn More</a>
                </div>
                <div className="px-3">
                    <p className="text-sm text-black my-5 px-2">Sign up free with Google.</p>
                    <Index />
                </div>
                <div className="row-span-2 ...">
                    <Image className="img-fluid animate-none"
                           src="/img/hero.png"
                           width={550}
                           height={550}
                           alt=""/>

                </div>
            </div>
        </>
    );
}