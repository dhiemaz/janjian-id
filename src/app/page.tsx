import React from "react";
import Header from "@/components/header/header";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Features from "@/components/features/features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1" data-theme="light">
      <Navbar/>
      <Header/>
        <Features/>
      <Footer/>
    </main>
  );
}
