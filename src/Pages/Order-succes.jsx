import React from "react";
import {IconCheck} from "@tabler/icons-react";
import {Link} from "react-router-dom";

function OrderSuccess() {
    return (
        <>
            <section>
                <div className='h-screen flex items-center justify-center'>
                    <div
                        className='border dark:border-secondary p-5 w-full md:w-1/2 flex flex-col items-center justify-center rounded-lg'>
                        <span
                            className='w-20 h-20 rounded-full bg-primary-gradient text-white flex items-center justify-center'><IconCheck
                            className='w-10 h-10'/></span>
                        <span className='text-secondary text-sm mt-2 dark:text-light'>Amazing</span>
                        <h1 className='text-lg font-lexend font-bold dark:text-white'>Payment Successfully!</h1>
                        <p className='sm:text-lg text-sm text-center text-secondary dark:text-light'>Payment has been
                            received successfully. Thank You
                            for you payment.</p>

                        <div className='border dark:border-secondary w-full mt-5'></div>

                        <h6 className='mt-5 text-lg dark:text-white'>Order Id : <span
                            className='text-sm text-secondary dark:text-light'>#1234567890</span></h6>

                        <div className='w-full flex items-center justify-between mt-5'>
                            <h6 className='text-lg font-normal dark:text-white'>Transaction Id</h6>
                            <span className='text-secondary text-sm dark:text-light'>#0987654321</span>
                        </div>

                        <div className='w-full flex items-center justify-between mt-2'>
                            <h6 className='text-lg font-normal dark:text-white'>Transaction Time</h6>
                            <span className='text-secondary text-sm dark:text-light'>6 Feb 2026</span>
                        </div>

                        <div className='w-full flex items-center justify-between mt-2'>
                            <h6 className='text-lg font-normal dark:text-white'>Payment</h6>
                            <span className='text-secondary text-sm dark:text-light'>Cash Of Delivery</span>
                        </div>

                        <div className='w-full flex items-center justify-between mt-2'>
                            <h6 className='text-lg font-normal dark:text-white'>Total Amount</h6>
                            <span className='text-secondary text-sm dark:text-light'>₹ 2200</span>
                        </div>

                        <div className='border dark:border-secondary w-full mt-5'></div>

                        <div className='w-full mt-5 flex items-center justify-between gap-5'>
                            <Link to='/'
                                  className='border w-full py-2 rounded-full border-primary hover:bg-primary-gradient hover:text-white text-center dark:text-white'>Home
                            </Link>

                            <Link to='#'
                                  className='border w-full py-2 rounded-full border-primary hover:bg-primary-gradient hover:text-white text-center dark:text-white'>Download
                                receipts
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default OrderSuccess;
