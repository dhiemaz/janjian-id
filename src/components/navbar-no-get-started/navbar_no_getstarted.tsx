import Link from "next/link";

export default function NavbarNoGetStarted() {
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
                        <li><a>About</a></li>
                        <li>
                            <details>
                                <summary>Solutions</summary>
                                <ul className="p-2">
                                    <li><Link className="text-nowrap" href="/maintenance">Scheduling</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Pricing</a></li>
                        <li>
                            <details>
                                <summary>Resources</summary>
                                <ul className="p-2">
                                    <li><Link className="text-nowrap" href="/maintenance">FAQs</Link></li>
                                    <li><Link className="text-nowrap" href="/maintenance">Quick Start</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link href="/login">Log In</Link></li>
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
                <Link href="/login"
                      className="text-black bg-white hover:bg-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-white dark:hover:bg-blue-600 dark:focus:ring-blue-500 invisible lg:visible">
                    Log In
                </Link>
                <Link href="/registration"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden">
                    Get Started
                </Link>
                <ul className="menu menu-horizontal space-x-2 md:space-x-0 rtl:space-x-reverse">
                    <li>
                        <details>
                            <summary>
                                <svg className="w-5 h-5 rounded-full me-3" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
                                    <path fill="#b22234" d="M0 0h7410v3900H0z"/>
                                    <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff"
                                          strokeWidth="300"/>
                                    <path fill="#3c3b6e" d="M0 0h2964v2100H0z"/>
                                    <g fill="#fff">
                                        <g id="d">
                                            <g id="c">
                                                <g id="e">
                                                    <g id="b">
                                                        <path id="a"
                                                              d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/>
                                                        <use xlinkHref="#a" y="420"/>
                                                        <use xlinkHref="#a" y="840"/>
                                                        <use xlinkHref="#a" y="1260"/>
                                                    </g>
                                                    <use xlinkHref="#a" y="1680"/>
                                                </g>
                                                <use xlinkHref="#b" x="247" y="210"/>
                                            </g>
                                            <use xlinkHref="#c" x="494"/>
                                        </g>
                                        <use xlinkHref="#d" x="988"/>
                                        <use xlinkHref="#c" x="1976"/>
                                        <use xlinkHref="#e" x="2470"/>
                                    </g>
                                </svg>
                                English (US)

                            </summary>
                            <ul className="p-2">
                                <li>
                                    <svg className="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <rect width="512" height="256" fill="#d10000"/>
                                        <rect y="256" width="512" height="256" fill="#fff"/>
                                    </svg>
                                    Indonesia (ID)
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}