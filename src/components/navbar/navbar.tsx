import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar sticky top-0 z-10 bg-white accent-primary navbar-nav px-4 px-lg-5 py-3 py-lg-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Product</a></li>
                        <li>
                            <a>Solutions</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Resources</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" href="/">JANJIAN.ID</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-5">
                    <li><a>About</a></li>
                    <li>
                        <details>
                            <summary>Solutions</summary>
                            <ul className="p-2">
                                <li><Link className="text-nowrap" href="/maintenance">Scheduling</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link href='/pricing'>Pricing</Link></li>
                    <li>
                        <details>
                            <summary>Resources</summary>
                            <ul className="p-2">
                                <li><Link className="text-nowrap" href="/maintenance">FAQs</Link></li>
                                <li><Link className="text-nowrap" href="/maintenance">Quick Start</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end px-1 space-x-4 lg:flex">
                <Link href="/login" className="py-2.5 px-5 h-9 ms-3 block bg-indigo-600 rounded-full shadow-sm text-xs text-white mx- transition-all duration-500 hover:bg-indigo-700 lg:mx-0">
                    Log in
                </Link>
                <Link href="#" className="py-2.5 px-5 h-9 ms-3 block bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0">
                    Sign up
                </Link>
                {/*<a className="btn rounded-full w-32 h-12 py-2 px-4 ms-3 d-none d-lg-block">Login</a>*/}
                {/*<a className="btn rounded-full w-32 h-12 py-2 px-4 ms-3 d-none d-lg-block">Get Started</a>*/}
            </div>
        </div>
    );
}