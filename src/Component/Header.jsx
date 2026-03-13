import React, {useEffect, useState} from "react";
import {assets} from "../assets/image/assets.js";
import {Link, NavLink} from "react-router-dom";
import {IconMoon, IconShoppingCartPlus, IconSun, IconTextDirectionRtl, IconUser, IconWorld,} from "@tabler/icons-react";
import {useCart} from "../Context/CartContext";

function Navbar() {
    const {clearCart} = useCart();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [rtl, setRtl] = useState(false);

    // Load saved direction on refresh
    useEffect(() => {
        const savedRTL = localStorage.getItem("rtl");

        if (savedRTL === "true") {
            setRtl(true);
            document.documentElement.setAttribute("dir", "rtl");
        } else {
            setRtl(false);
            document.documentElement.setAttribute("dir", "ltr");
        }
    }, []);

    const toggleRTL = () => {
        const newValue = !rtl;
        setRtl(newValue);

        if (newValue) {
            document.documentElement.setAttribute("dir", "rtl");
        } else {
            document.documentElement.setAttribute("dir", "ltr");
        }
        localStorage.setItem("rtl", newValue);
    };


    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }

        setDarkMode(!darkMode);
    };


    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem("user");
        clearCart();
    };

    return (
        <>

            <nav className={`w-full z-50 transition-all duration-300  ${isSticky
                ? "fixed top-0 bg-white  shadow-md dark:bg-darkMode"
                : "relative bg-transparent "}`}>
                <div className="mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">

                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)}
                                    className="inline-flex items-center justify-center rounded-md p-2  hover:bg-black/10">
                                {!menuOpen ? (
                                    <img className="w-5" src={assets.menu_icon} alt="menu"/>
                                ) : (
                                    <img className="w-5" src={assets.cross_icon} alt="close"/>
                                )}
                            </button>
                        </div>

                        <div className="flex flex-1 items-center justify-center sm:justify-start">
                            <img className="w-32 dark:hidden" src={assets.logo} alt="logo"/>
                            <img className="w-32 dark:block hidden" src={assets.dark_logo} alt="logo"/>

                            <div className="hidden sm:block w-full">
                                <div className="flex justify-center space-x-4">
                                    {[
                                        {name: "Home", path: "/"},
                                        {name: "About", path: "/about"},
                                        {name: "Collection", path: "/collection"},
                                        {name: "Blog", path: "/blog"},
                                        {name: "Contact", path: "/contact"},
                                    ].map((item) => (
                                        <NavLink key={item.name} to={item.path} className={({isActive}) =>
                                            `px-3 py-2 font-medium lg:text-lg ${
                                                isActive
                                                    ? "text-primary"
                                                    : "text-dark dark:text-white hover:text-primary"}`}>{item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-5">

                            <div>
                                <IconWorld className="w-5 h-5 cursor-pointer dark:text-white"/>
                            </div>

                            <div className="relative group">
                                <IconUser className="w-5 h-5 cursor-pointer dark:text-white"/>
                                <div
                                    className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                                    <Link to="/profile"
                                          className="block px-4 py-2 text-sm hover:bg-secondary/10 rounded-t-xl">Profile
                                    </Link>

                                    <Link to="/Subscription"
                                          className="block px-4 py-2 text-sm hover:bg-secondary/10 rounded-t-xl">Subscription
                                    </Link>

                                    <Link to="/register"
                                          className="block px-4 py-2 text-sm hover:bg-secondary/10 rounded-b-xl">Register
                                    </Link>

                                    <Link to="/login"
                                          className="block px-4 py-2 text-sm hover:bg-secondary/10">Login
                                    </Link>

                                    <Link onClick={handleLogout} to="/login"
                                          className="block px-4 py-2 text-sm hover:bg-secondary/10 rounded-b-xl">Logout
                                    </Link>
                                </div>
                            </div>

                            <button onClick={toggleTheme} className="cursor-pointer">
                                {darkMode ? (
                                    <IconSun className="w-5 h-5 dark:text-white"/>
                                ) : (
                                    <IconMoon className="w-5 h-5 dark:text-white"/>
                                )}
                            </button>

                            <Link to="">
                                <IconTextDirectionRtl className="w-5 h-5 cursor-pointer dark:text-white"
                                                      onClick={toggleRTL}/>
                            </Link>

                            <Link to="/cart">
                                <IconShoppingCartPlus className="w-5 h-5 cursor-pointer dark:text-white"/>
                            </Link>
                        </div>
                    </div>
                </div>

                {menuOpen && (
                    <div className="sm:hidden px-4 pb-4 flex flex-col gap-2 bg-white shadow-md dark:bg-darkMode">
                        {[
                            {name: "Home", path: "/"},
                            {name: "About", path: "/about"},
                            {name: "Collection", path: "/collection"},
                            {name: "Blog", path: "/blog"},
                            {name: "Contact", path: "/contact"},
                        ].map((item) => (
                            <NavLink key={item.name} to={item.path} onClick={() => setMenuOpen(false)}
                                     className={({isActive}) => `py-2 font-medium ${isActive
                                         ? "text-primary"
                                         : "text-dark hover:text-primary dark:text-white"}`}>{item.name}
                            </NavLink>
                        ))}

                        <div className="flex gap-4 pt-2">

                            <div>
                                <IconWorld className="w-5 h-5 cursor-pointer dark:text-white"/>
                            </div>

                            <div className="relative group">
                                <IconUser className="w-5 h-5 cursor-pointer dark:text-white"/>
                                <div
                                    className="absolute left-3 mt-2 w-40 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 dark:text-white dark:bg-darkMode">

                                    <Link to="/profile"
                                          className="block px-4 py-2 text-sm hover:bg-secondary/10 rounded-t-xl">Profile
                                    </Link>

                                    <Link to="/Subscription"
                                          className="block px-4 py-2 text-sm hover:bg-secondary/10 rounded-t-xl">Subscription
                                    </Link>

                                    <Link to="/register"
                                          className="block px-4 py-2 text-sm hover:bg-secondary/10 rounded-b-xl">Register
                                    </Link>

                                    <Link to="/login"
                                          className="block px-4 py-2 text-sm hover:bg-secondary/10">Login
                                    </Link>

                                    <Link onClick={handleLogout} to="/login"
                                          className="block px-4 py-2 text-sm hover:bg-secondary/10 rounded-b-xl">Logout
                                    </Link>
                                </div>
                            </div>

                            <button onClick={toggleTheme} className="cursor-pointer">
                                {darkMode ? (
                                    <IconSun className="w-5 h-5 dark:text-white"/>
                                ) : (
                                    <IconMoon className="w-5 h-5 dark:text-white"/>
                                )}
                            </button>

                            <Link to="">
                                <IconTextDirectionRtl className="w-5 h-5 cursor-pointer dark:text-white"
                                                      onClick={toggleRTL}/>
                            </Link>

                            <Link to="/cart">
                                <IconShoppingCartPlus className="w-5 h-5 cursor-pointer dark:text-white"/>
                            </Link>

                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
