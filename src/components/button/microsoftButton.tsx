import {JSX, SVGProps} from "react";

export default function MicrosoftButton() {
    return (
        <button
            aria-label="Sign Up with Microsoft"
            className="flex items-center bg-blue-950 border border-button-border-light rounded-btn p-0.5 pr-4">
            <div className="flex items-center justify-center mx-1 my-1 bg-white rounded-btn w-7 h-7">
                <MicrosoftLogo/>
            </div>
            <span className="text-sm text-white tracking-wider mx-4">Sign Up with Microsoft</span>
        </button>
    );
}

const MicrosoftLogo = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64">
        <path d="M0 0h15.206v15.206H0z" fill="#f25022"/>
        <path d="M16.794 0H32v15.206H16.794z" fill="#7fba00"/>
        <path d="M0 16.794h15.206V32H0z" fill="#00a4ef"/>
        <path d="M16.794 16.794H32V32H16.794z" fill="#ffb900"/>
    </svg>
)