import React from "react";
import {assets} from "../assets/image/assets.js";
import {IconBrandInstagram, IconBrandWhatsapp, IconBrandYoutube} from "@tabler/icons-react";
import {NavLink} from "react-router-dom";

function Footer() {

    return (
        <>
            <div className='bg-secondary/10 py-2'>
                <div className='sm:mt-20 mt-10 mb-5 max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 mt-10'>
                        <div>
                            <img className="w-32 dark:hidden" src={assets.logo} alt="logo"/>
                            <img className="w-32 dark:block hidden" src={assets.dark_logo} alt="logo"/>
                            <p className='text-sm text-secondary line-clamp-4 mt-4 dark:text-light'>Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit. Soluta atque illum quod dolor ab culpa assumenda
                                omnis.</p>
                            <div className='flex items-center gap-3 mt-5'>
                                <span
                                    className='w-10 h-10 rounded-full bg-primary-gradient text-white flex items-center justify-center'> <IconBrandInstagram
                                    className='w-5 h-5'/></span>
                                <span
                                    className='w-10 h-10 rounded-full bg-primary-gradient text-white flex items-center justify-center'><IconBrandWhatsapp
                                    className='w-5 h-5'/></span>
                                <span
                                    className='w-10 h-10 rounded-full bg-primary-gradient text-white flex items-center justify-center'><IconBrandYoutube
                                    className='w-5 h-5'/></span>
                            </div>
                        </div>
                        <div>
                            <h5 className='font-semibold font-lexend text-lg dark:text-white'>Feature</h5>

                            <ul className='mt-3'>
                                <li className='mt-2'>
                                    <NavLink to="/"
                                             className={({isActive}) => `rounded-md px-1 text-sm font-medium hover:text-primary  ${isActive ? "text-primary " : "text-secondary dark:text-light "}`}>Home
                                    </NavLink>
                                </li>

                                <li className='mt-2'>
                                    <NavLink to="/About"
                                             className={({isActive}) => `rounded-md px-1 text-sm font-medium hover:text-primary ${isActive ? "text-primary" : "text-secondary dark:text-light"}`}>About
                                    </NavLink>
                                </li>

                                <li className='mt-2'>
                                    <NavLink to="/Blog"
                                             className={({isActive}) => `rounded-md px-1 text-sm font-medium hover:text-primary ${isActive ? "text-primary" : "text-secondary dark:text-light"}`}>Blog
                                    </NavLink>
                                </li>
                                <li className='mt-2'>
                                    <NavLink to="/Contact"
                                             className={({isActive}) => `rounded-md px-1 text-sm font-medium hover:text-primary ${isActive ? "text-primary" : "text-secondary dark:text-light"}`}>Contact
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h5 className='font-semibold font-lexend text-lg dark:text-white'>Follow us</h5>
                            <ul className='mt-3'>
                                <li className='mt-2'><a className='text-sm font-medium text-secondary dark:text-light'
                                                        href="#">Facebook</a></li>
                                <li className='mt-2'><a className='text-sm font-medium text-secondary dark:text-light'
                                                        href="#">Twitter</a></li>
                                <li className='mt-2'><a className='text-sm font-medium text-secondary dark:text-light'
                                                        href="#">Instagram</a></li>
                                <li className='mt-2'><a className='text-sm font-medium text-secondary dark:text-light'
                                                        href="#">Youtube</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='font-semibold font-lexend text-lg dark:text-white'>Subscribe</h6>
                            <p className='mt-3 text-sm text-secondary line-clamp-2 dark:text-light'>Get E-mail updates
                                about our latest shop and special offers.</p>
                            <button className='mt-5  px-4 py-1 rounded-full bg-primary-gradient text-white'>Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
