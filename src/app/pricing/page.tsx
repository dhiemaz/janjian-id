import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import PricingSection from "@/sections/pricing/section";

export default function PricingPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-1" data-theme="light">
            <Navbar/>
            <PricingSection/>
            <Footer/>
        </main>
    );
}