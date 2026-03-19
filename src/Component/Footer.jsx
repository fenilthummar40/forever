import React from "react";
import {assets} from "../assets/image/assets.js";
import {
    IconBrandInstagram,
    IconBrandWhatsapp,
    IconBrandYoutube,
    IconBrandFacebook,
    IconMail,
    IconPhone,
    IconMapPin
} from "@tabler/icons-react";
import {NavLink} from "react-router-dom";

function Footer() {

    return (
        <footer className='bg-secondary/10 pt-16 pb-6'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div>
                        <img className="w-32 dark:hidden" src={assets.logo} alt="logo"/>
                        <img className="w-32 dark:block hidden" src={assets.dark_logo} alt="logo"/>
                        <p className='text-sm text-secondary mt-4 dark:text-light'>
                            Fashion Forever brings modern style with comfort and elegance. Discover your perfect outfit
                            today.</p>

                        <div className='flex gap-3 mt-5'>
                            {[IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconBrandYoutube].map((Icon, i) => (
                                <span key={i}
                                      className='w-10 h-10 flex items-center justify-center rounded-full bg-primary-gradient text-white cursor-pointer transform hover:scale-110 hover:shadow-lg transition'><Icon
                                    className='w-5 h-5'/>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className='font-semibold text-lg dark:text-white'>Quick Links</h5>
                        <ul className='mt-4 space-y-2'>
                            {[
                                {name: "Home", path: "/"},
                                {name: "About", path: "/About"},
                                {name: "Collection", path: "/Collection"},
                                {name: "Blog", path: "/Blog"},
                                {name: "Contact", path: "/Contact"},
                            ].map((link, i) => (
                                <li key={i}>
                                    <NavLink to={link.path}
                                             className={({isActive}) =>
                                                 `text-sm hover:text-primary transition ${isActive ? "text-primary" : "text-secondary dark:text-light"}`}>{link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className='font-semibold text-lg dark:text-white'>Contact Us</h5>
                        <ul className='mt-4 space-y-3 text-sm text-secondary dark:text-light'>
                            <li className='flex items-center gap-2'><IconMapPin className='w-4 h-4 text-primary'/>Surat,
                                Gujarat, India
                            </li>
                            <li className='flex items-center gap-2'><IconPhone className='w-4 h-4 text-primary'/>+91
                                98765 43210
                            </li>
                            <li className='flex items-center gap-2'><IconMail className='w-4 h-4 text-primary'/>support@fashionforever.com
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className='font-semibold text-lg dark:text-white'>Newsletter</h5>
                        <p className='mt-3 text-sm text-secondary dark:text-light'>Subscribe to get latest offers &
                            updates.</p>
                        <div className='flex mt-4 bg-white rounded-full overflow-hidden shadow-sm'>
                            <input type="email" placeholder='Enter your email'
                                   className='flex-1 px-4 py-2 outline-none text-sm'/>
                            <button className='bg-primary-gradient text-white px-4 py-2 text-sm'>Subscribe</button>
                        </div>

                        <p className='text-xs text-gray-500 mt-2'>No spam, unsubscribe anytime</p>
                    </div>

                </div>

                <div className='border-t mt-10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <p className='text-sm text-secondary dark:text-light'>© 2026 Fashion Forever. All rights
                        reserved.</p>
                    <div className='flex gap-3 mt-5'>
                        {[IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconBrandYoutube].map((Icon, i) => (
                            <span key={i}
                                  className='w-10 h-10 flex items-center justify-center rounded-full bg-primary-gradient text-white cursor-pointer transform hover:scale-110 hover:shadow-lg transition'><Icon
                                className='w-5 h-5'/>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
