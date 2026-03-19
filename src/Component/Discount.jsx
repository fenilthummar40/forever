import React from "react";
import {assets} from "../assets/image/assets.js";

function Discount() {

    const sectionStyle = {
        backgroundImage: `
        linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url(${assets.discover_img})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return (
        <section className='sm:mt-20 mt-10'>
            <div style={sectionStyle} className="py-20">
                <div className='max-w-7xl mx-auto px-4'>
                    <div
                        className='bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl text-center max-w-2xl mx-auto'>
                        <h1 className='font-bold text-2xl sm:text-4xl text-white'>
                            Get <span className='text-primary'>20%</span> Off Discount Coupon
                        </h1>
                        <p className='mt-3 text-gray-200 text-lg'>Enter your email to get exclusive offers</p>
                        <div className='flex items-center mt-6 bg-white rounded-full overflow-hidden shadow-md'>
                            <input type="email" placeholder='Enter your email'
                                   className='flex-1 px-4 py-3 outline-none text-sm sm:text-base'/>
                            <button
                                className='bg-primary-gradient text-white px-6 py-3 font-medium hover:opacity-90 transition'>
                                Get Coupon
                            </button>
                        </div>

                        <p className='text-xs text-gray-300 mt-3'>No spam, unsubscribe anytime</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discount;
