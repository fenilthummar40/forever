import React, {useState} from "react";
import {assets} from "../assets/image/assets.js";
import axios from "axios";
import {toast} from "react-toastify";

const Modal = ({isOpen, onClose, subscription}) => {

    if (!isOpen || !subscription) return null;

    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [phone, setPhone] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const user = JSON.parse(localStorage.getItem("user"));
            const response = await axios.post(
                "https://backend-uaa2.onrender.com/api/subscriptionpayment/add",
                {
                    userid: user.id,
                    price: subscription.price,

                    first_name,
                    last_name,
                    phone,
                }
            );

            if (response.data.success) {
                toast.success("subscriptionpayment Added Successfully!");

                setFirst_name("");
                setLast_name("");
                setPhone("");
            }

        } catch (error) {
            console.log(error.response?.data);
            toast.error("Error adding subscriptionpayment");
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Subscription Form</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
                </div>

                <h1 className="text-xl font-semibold">₹ {subscription.price}/month</h1>

                <div className="mt-5">
                    <form action="" onSubmit={onSubmitHandler}>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="" className='text-secondary text-sm sm:text-lg dark:text-light'>First
                                Name:</label>
                            <input type="text" placeholder='Enter any Your First name'
                                   className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary'
                                   value={first_name} onChange={e => setFirst_name(e.target.value)}/>
                        </div>

                        <div className='flex flex-col w-full mt-5'>
                            <label htmlFor="" className='text-secondary text-sm sm:text-lg dark:text-light'>Last
                                Name:</label>
                            <input type="text" placeholder='Enter any Your Last name'
                                   className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary'
                                   value={last_name} onChange={e => setLast_name(e.target.value)}/>
                        </div>

                        <div className='flex flex-col w-full mt-5'>
                            <label htmlFor="" className='text-secondary text-sm sm:text-lg dark:text-light'>Phone Number
                                :</label>
                            <input type="number" placeholder='Enter any Your Phone Number'
                                   className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary'
                                   value={phone} onChange={e => setPhone(e.target.value)}/>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
                            <label className="flex items-center gap-4 border rounded-xl p-5 cursor-pointer">
                                <input type="radio" name="payment"/>
                                <img src={assets.stripe_logo} alt="Stripe" className="h-8"/>
                            </label>

                            <label className="flex items-center gap-4 border rounded-xl p-5 cursor-pointer">
                                <input type="radio" name="payment"/>
                                <img src={assets.razorpay_logo} alt="Razorpay" className="h-8"/>
                            </label>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button className="bg-primary-gradient text-white font-bold py-2 px-6 rounded-full">
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
