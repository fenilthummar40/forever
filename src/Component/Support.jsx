import React from "react";
import {assets} from "../assets/image/assets.js";

function Support() {

    const support = [
        {img: assets.free_shipping, title: 'Free Shipping', description: 'Free shipping on all order'},
        {img: assets.free_return, title: 'Free Return', description: 'Get Return within 7 days'},
        {img: assets.best_quality, title: 'Best Quality', description: 'Original Product Guarenteed'},
        {img: assets.order_discount, title: 'Order Discount', description: 'Discount order all product'},
    ]

    return (
        <>
            <div className='sm:my-20 my-10 max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-5'>
                    {support.map(({img, title, description}, i) => (
                        <div key={i}
                             className='border dark:border-secondary w-10/12 m-auto sm:w-full flex justify-evenly items-center gap-4 p-4 rounded-2xl hover:shadow-md cursor-pointer'>
                            <div>
                                <img className='w-20 rounded-lg' src={img} alt={title}/>
                            </div>
                            <div>
                                <h5 className='text-sm sm:text-lg font-semibold font-lexend text-primary'>{title}</h5>
                                <p className='text-xs sm:text-sm text-secondary font-medium pt-1 dark:text-light'>{description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Support;
