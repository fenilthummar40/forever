import React from "react";
import {assets} from "../assets/image/assets.js";

function Discount() {
    const sectionStyle = {
        backgroundImage: `url(${assets.discover_img})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '500px',
    }
    return (
        <>
            <section>
                <div className='sm:mt-20 mt-10'>
                    <div style={sectionStyle}>
                        <div className='grid sm:grid-cols-2 gap-4 mx-auto max-w-7xl h-full' dir='ltr'>
                            <div className='flex items-center justify-center flex-col w-full px-2'>
                                <h1 className='font-bold font-lexend text-2xl sm:text-4xl text-center'>Get <span
                                    className='text-primary'>20%</span> Off Discount Coupon</h1>
                                <p className='mt-2 text-secondary text-lg'>by Subscribe our Newsletter</p>

                                <div className='flex flex-col md:flex-row mt-4 gap-5'>
                                    <input type="email" placeholder=' Email' className='w-60 h-10 rounded-xl ps-2'/>
                                    <button type='submit'
                                            className='bg-primary-gradient text-white rounded-xl px-4 font-medium h-10'>Lucky
                                        Coupon
                                    </button>
                                </div>
                            </div>
                            <div className='hidden md:block'></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Discount;
