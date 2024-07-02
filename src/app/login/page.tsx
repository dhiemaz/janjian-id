import React from "react";
import Footer from "@/components/footer/footer";
import LoginSection from "@/sections/login/section";
import NavbarNoLogin from "@/components/navbar-no-login/navbar_no_login";

export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-1" data-theme="light">
            <NavbarNoLogin/>
            <LoginSection/>
            <Footer/>
        </main>
    );
}