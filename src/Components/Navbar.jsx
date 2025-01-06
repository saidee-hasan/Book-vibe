import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const getNavLinkClass = ({ isActive }) =>
        isActive
            ? "border border-[#23BE0A] btn text-[#23BE0A] font-bold"
            : "hover:text-[#23BE0A] transition duration-300";

    return (
        <div className="sticky top-0 z-50 bg-white shadow">
            <div className="max-w-7xl mx-auto font-work-sans">
                <div className="navbar bg-base-100">
                    {/* Mobile Navbar Start */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                aria-label="Toggle navigation menu"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <NavLink to="/" className={getNavLinkClass}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/listed-books" className={getNavLinkClass}>
                                        Listed Books
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pages-to-read" className={getNavLinkClass}>
                                        Pages to Read
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about-us" className={getNavLinkClass}>
                                        About Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className={getNavLinkClass}>
                                        Contact Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="border border-green-300 bg-[#23BE0A] text-center text-white">
                                        Sign in
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="border mt-2 bg-[#59C6D2] text-white text-center">
                                        Sign up
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost text-xl font-bold">
                            Book Vibe
                        </Link>
                    </div>
                    {/* Desktop Navbar */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu flex gap-6 items-center menu-horizontal px-1">
                            <NavLink to="/" className={getNavLinkClass}>
                                Home
                            </NavLink>
                            <NavLink to="/listed-books" className={getNavLinkClass}>
                                Listed Books
                            </NavLink>
                            <NavLink to="/pages-to-read" className={getNavLinkClass}>
                                Pages to Read
                            </NavLink>
                            <NavLink to="/about-us" className={getNavLinkClass}>
                                About Us
                            </NavLink>
                            <NavLink to="/contact" className={getNavLinkClass}>
                                Contact Us
                            </NavLink>
                        </ul>
                    </div>
                    {/* Desktop Buttons */}
                    <div className="navbar-end">
                        <Link to="/sign-in">
                            <button className="btn hidden lg:block bg-[#23BE0A] text-white mr-4 rounded-lg hover:bg-[#1b8c06] transition duration-300">
                                Sign in
                            </button>
                        </Link>
                        <Link to="/sign-up">
                            <button className="btn hidden lg:block bg-[#59C6D2] text-white rounded-lg hover:bg-[#46a4b5] transition duration-300">
                                Sign up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
