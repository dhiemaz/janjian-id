import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import MaintenanceSection from "@/sections/maintenance/section";

export default function MaintenancePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-1" data-theme="light">
            <Navbar/>
            <MaintenanceSection/>
            <Footer/>
        </main>
    );
}