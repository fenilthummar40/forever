import React from "react";
import {assets} from "../assets/image/assets.js";

function Support() {

    const support = [
        {img: assets.free_shipping, title: 'Free Shipping', description: 'Free shipping on all order'},
        {img: assets.free_return, title: 'Free Return', description: 'Get Return within 7 days'},
        {img: assets.best_quality, title: 'Best Quality', description: 'Original Product Guaranteed'},
        {img: assets.order_discount, title: 'Order Discount', description: 'Discount on all products'},
    ]

    return (
        <div className='sm:my-20 my-12 max-w-7xl mx-auto px-4'>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {support.map(({img, title, description}, i) => (
                    <div key={i} className='flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-darkMode
                                   shadow-sm hover:shadow-xl transition duration-300 cursor-pointer group border dark:border-0'>
                        <div
                            className='w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-info p-2 group-hover:scale-110 transition'>
                            <img className='w-10' src={img} alt={title}/>
                        </div>

                        <div>
                            <h5 className='text-base sm:text-lg font-semibold text-dark dark:text-white'>{title}</h5>
                            <p className='text-sm text-secondary mt-1 dark:text-light'>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Support;
