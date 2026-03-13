import React from "react";
import Scroll from "../Component/Scroll.jsx";
import {assets} from "../assets/image/assets.js";
import {IconArrowLeft, IconArrowUpRight} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

function landing() {

    const sectionStyle = {
        backgroundImage: `url(${assets.hero_img})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const pages = [
        {img: assets.home_page, title: "Home Page", link: "/"},
        {img: assets.about_page, title: "About Page", link: "/about"},
        {img: assets.collection_page, title: "Collection Page", link: "/collection"},
        {img: assets.blog_page, title: "Blog Page", link: "/blog"},
        {img: assets.contact_page, title: "Contact Page", link: "/contact"},
        {img: assets.product_detail_page, title: "Product Detail Page", link: "/Product-Detail"},
        {img: assets.blog_detail_page, title: "Blog Detail Page", link: "/blog-Detail"},
        {img: assets.cart_page, title: "Cart Page", link: "/cart"},
        {img: assets.checkout_page, title: "Check Out Page", link: "/checkout"},
        {img: assets.order_successfull, title: "Order Success Page", link: "/Order-Success"},
        {img: assets.profile_page, title: "Profile Page", link: "/profile"},
        {img: assets.register_page, title: "Register Page", link: "/register"},
        {img: assets.login_page, title: "Login Page", link: "/login"},
        {img: assets.forgot_password_page, title: "Forgot Password Page", link: "/forgotpassword"},
        {img: assets.verify_page, title: "Verify Page", link: "/verify"},
        {img: assets.new_password_page, title: "New Password Page", link: "/NewPassword"},
    ];

    const feature = [
        {img: assets.react, title: "React js"},
        {img: assets.tailwind, title: "tailwind css"},
        {img: assets.npm, title: "nmp"},
        {img: assets.map, title: "map"},
        {img: assets.tabler, title: "tabler"},
        {img: assets.js, title: "js"},
    ]

    const powerfull = [
        {
            img: assets.responsive,
            title: "Responsive Ready",
            detail: "Instead of using fixed pixel widths, responsive design uses relative units like percentages, allowing elements to resize proportionally to the screen size."
        },
        {
            img: assets.seo,
            title: "SEO Optimization",
            detail: "Identifying terms and phrases your audience searches for, then incorporating them naturally into your content audience searches for."
        },
        {
            img: assets.smoth,
            title: "Smooth Animation",
            detail: "To make complex, multi-part animations look smooth, stagger the timing of different elements so they do not start and stop at the exact same time."
        },
    ]

    return (
        <>
            <div>

                <Scroll/>

                <section>
                    <div className='flex items-center justify-between px-8 py-2'>
                        <div>
                            <img className="w-32" src={assets.logo} alt="logo"/>
                        </div>
                        <div>
                            <button type='submit'
                                    className='px-5 py-2 border rounded-full bg-primary-gradient text-white sm:text-lg text-sm'>Buy
                                Now
                            </button>
                        </div>
                    </div>
                </section>

                <section className='h-1/2 md:h-screen border'>
                    <div style={sectionStyle} className='h-1/2 md:h-screen'>
                        <div
                            className='flex items-center justify-center flex-col sm:w-1/2 w-full m-auto h-1/2 md:h-screen py-5 px-2'>
                            <h1 className='text-xl md:text-4xl font-bold font-lexend text-center'>Fastion
                                Forever <br/> React + Tailwind CSS</h1>
                            <p className='text-center mt-5 md:text-lg text-sm line-clamp-5'>A React application built
                                with Tailwind CSS enables high-performance, responsive, and maintainable fashion-focused
                                websites using utility-first styling. Tailwind provides fast build times, pre-designed
                                UI components, and the ability to rapidly style components directly in React, supporting
                                complex, customized layouts</p>
                            <div className='flex items-center gap-4 mt-5'>
                                <Link to='/'>
                                    <button type='submit' className='px-5 py-2 border rounded-full'>View More</button>
                                </Link>

                                <button type='submit' className='px-5 py-2 border rounded-full'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='my-10 sm:my-20'>
                    <h1 className='text-center font-bold font-lexend sm:text-3xl text-2xl'>Stunning pages</h1>

                    <div className='max-w-7xl mx-auto mt-5'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
                            {pages.map(({img, title, link}, i) => (
                                <div key={i} className="shadow-lg rounded-lg">
                                    <img src={img} alt={title}/>
                                    <div className="p-5 flex items-center justify-between">
                                        <Link to={link}>
                                            <h6 className="font-lexend font-bold">{title}</h6>
                                        </Link>
                                        <Link to={link}>
                                            <span
                                                className="w-10 h-10 border rounded-full bg-primary-gradient text-white flex items-center justify-center hover:opacity-80">
                                              <IconArrowUpRight/>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='my-10 sm:my-20 bg-primary-gradient p-5'>
                    <div className='max-w-7xl mx-auto px-5'>
                        <h1 className='mt-5 font-bold font-lexend text-center text-white sm:text-3xl text-2xl'>Core
                            Feature</h1>
                        <p className='mt-5 text-center text-white'>Based on the search results, "Fashion Forever"
                            appears in several contexts, most prominently
                            as a local Indian retail brand for readymade garments, and in literature exploring the
                            evolution of style.
                        </p>

                        <div className='mt-5'>
                            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
                                {feature.map(({img, title}, i) => (
                                    <div key={i} className="flex items-center justify-center flex-col">
                                        <img src={img} alt={title}/>
                                        <div className="p-5 flex items-center justify-between">
                                            <h6 className="font-lexend font-bold sm:text-lg text-sm">{title}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className='my-10 sm:my-20'>
                    <div className='max-w-7xl mx-auto px-5'>
                        <h1 className='text-center sm:text-3xl text-2xl font-bold font-lexend'>Powerful Features Built
                            for You</h1>

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>

                            {powerfull.map(({img, title, detail}, i) => (
                                <div key={i}
                                     className="border rounded-lg p-5 flex items-center justify-center flex-col">
                                    <img className='w-20' src={img} alt={title}/>
                                    <h1 className='sm:text-xl text-lg font-lexend font-medium mt-5'>{title}</h1>
                                    <p className='text-secondary text-sm text-center mt-2 line-clamp-4'>{detail}</p>
                                    <div className='border w-full mt-5'></div>
                                    <div className='flex items-center justify-between w-full mt-5'>
                                        <button type='submit'
                                                className='px-5 py-2 border bg-primary-gradient rounded-full text-white'>Read
                                            More
                                        </button>
                                        <span
                                            className='w-10 h-10 border rounded-full flex items-center justify-center bg-primary-gradient text-white hover:opacity-80 cursor-pointer'><IconArrowUpRight/></span>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                <section className='my-10 sm:my-20 bg-secondary/10 py-5'>
                    <div className='max-w-7xl mx-auto px-5'>
                        <Swiper>
                            <SwiperSlide>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <div className='flex items-start flex-col p-5'>
                                        <span className='text-secondary'>Fashtion Forever Collection</span>
                                        <h1 className='mt-10 font-bold font-lexend text-lg sm:text-xl md:text-3xl'>Fully
                                            optimized &
                                            customizable shop samples, visually bold design & beautiful effects </h1>
                                        <p className='mt-5 font-normal text-sm sm:text-lg'>Get your readers familiar
                                            with your
                                            business’ featured projects and achievements. </p>

                                        <p className='mt-5 font-normal text-sm text-secondary'>List major features you
                                            want to describe, along with a few comments that relate to the garment and
                                            how it will be worn. Create an appealing mental picture with descriptive
                                            words. 3. Study mail order fashion catalogs, magazines, the pattern
                                            envelope, and advertisements to see how they describe similar features.</p>

                                        <div className='mt-5'>
                                            <Link to='/Collection'
                                                  className='px-5 py-2 border bg-primary-gradient text-white rounded-full flex items-center gap-2 text-[10px] sm:text-lg'>
                                                <IconArrowLeft className="w-5 h-5"/> Back
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='h-[600px] relative hidden lg:block'>
                                        <img className='' src={assets.product_full_page} alt="logo"/>
                                        <img className="absolute z-1 bottom-0 end-0 w-3/4 shadow-lg"
                                             src={assets.product_detail_section} alt="logo"/>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <div className='flex items-start flex-col p-5'>
                                        <span className='text-secondary'>Fashtion Forever Blog</span>
                                        <h1 className='mt-10 font-bold font-lexend text-lg sm:text-xl md:text-3xl'>Fully
                                            optimized &
                                            customizable shop samples, visually bold design & beautiful effects </h1>
                                        <p className='mt-5 font-normal text-sm sm:text-lg'>Get your readers familiar
                                            with your
                                            business’ featured projects and achievements. </p>

                                        <p className='mt-5 font-normal text-sm text-secondary'>List major features you
                                            want to describe, along with a few comments that relate to the garment and
                                            how it will be worn. Create an appealing mental picture with descriptive
                                            words. 3. Study mail order fashion catalogs, magazines, the pattern
                                            envelope, and advertisements to see how they describe similar features.</p>

                                        <div className='mt-5'>
                                            <Link to='/blog'
                                                  className='px-5 py-2 border bg-primary-gradient text-white rounded-full flex items-center gap-2 text-[10px] sm:text-lg'>
                                                <IconArrowLeft className="w-5 h-5"/> Back
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='h-[600px] relative hidden lg:block'>
                                        <img className='' src={assets.blog_full_page} alt="logo"/>
                                        <img className="absolute z-1 bottom-0 end-0 w-3/4 shadow-lg"
                                             src={assets.blog_detail_Section} alt="logo"/>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <div className='flex items-start flex-col p-5'>
                                        <span className='text-secondary'>Fashtion Forever About</span>
                                        <h1 className='mt-10 font-bold font-lexend text-lg sm:text-xl md:text-3xl'>Fully
                                            optimized &
                                            customizable shop samples, visually bold design & beautiful effects </h1>
                                        <p className='mt-5 font-normal text-sm sm:text-lg'>Get your readers familiar
                                            with your
                                            business’ featured projects and achievements. </p>

                                        <p className='mt-5 font-normal text-sm text-secondary'>List major features you
                                            want to describe, along with a few comments that relate to the garment and
                                            how it will be worn. Create an appealing mental picture with descriptive
                                            words. 3. Study mail order fashion catalogs, magazines, the pattern
                                            envelope, and advertisements to see how they describe similar features.</p>

                                        <div className='mt-5'>
                                            <Link to='/About'
                                                  className='px-5 py-2 border bg-primary-gradient text-white rounded-full flex items-center gap-2 text-[10px] sm:text-lg'>
                                                <IconArrowLeft className="w-5 h-5"/> Back
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='h-[600px] hidden lg:block'>
                                        <img className='' src={assets.about_full_page} alt="logo"/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                <footer className='mt-10 sm:mt-20 bg-primary-gradient py-20'>
                    <div className='max-w-7xl mx-auto px-5'>
                        <h1 className='text-center text-lg sm:text-3xl font-bold font-lexend'>Feeling in love? Purchase
                            Forever !</h1>
                        <p className='text-center text-sm sm:text-lg mt-5 sm:mt-10'>Impressive design, powerful
                            features, and easy customization</p>
                        <div className='flex items-center justify-center mt-5 sm:mt-10'>
                            <button className='px-5 py-2 border rounded-full'>Buy Now</button>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    );
}

export default landing;
