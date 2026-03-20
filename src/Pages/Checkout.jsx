import React, {useState} from "react";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Smallhero from "../Component/Smallhero.jsx";
import Footer from "../Component/Footer.jsx";
import {useCart} from "../Context/CartContext";
import {assets} from "../assets/image/assets.js";
import axios from "axios";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

function Checkout() {
    const SHIPPING = 50;
    const DISCOUNT_PERCENT = 10;
    const {cartItems, clearCart} = useCart();

    const subTotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );
    const discountAmount = (subTotal * DISCOUNT_PERCENT) / 100;
    const total = subTotal + SHIPPING - discountAmount;

    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setphone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("COD");

    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (cartItems.length === 0) {
            toast.error("Cart is empty");
            return;
        }

        try {
            const user = JSON.parse(localStorage.getItem("user"));
            const response = await axios.post(
                "https://backend-uaa2.onrender.com/api/order/add",
                {

                    userid: user.id,
                    item: cartItems,
                    amount: total,
                    payment: false,
                    PaymentMethod: paymentMethod,

                    first_name,
                    last_name,
                    email,
                    phone,
                    address,
                    city,
                    pin_code: pinCode,
                }
            );

            if (response.data.success) {
                toast.success("Order successfully added!");

                clearCart();
                localStorage.removeItem("cartData");

                setFirst_name("");
                setLast_name("");
                setEmail("");
                setphone("");
                setAddress("");
                setCity("");
                setPinCode("");
                setPaymentMethod("COD")

                navigate("/Order-success");
            }

        } catch (error) {
            console.log(error.response?.data);
            toast.error("Error adding order");
        }
    };

    return (
        <>
            <Scroll/>
            <Header/>

            <Smallhero
                text1="Checkout"
                text2="fashion, people express their identity, communicate values, and confront social issues"/>

            <section className="my-10 sm:my-20">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div className="p-4 border dark:border-secondary rounded-xl">
                            <form action="" onSubmit={onSubmitHandler}>
                                <h6 className="text-xl font-bold font-lexend dark:text-white">Form Detail</h6>
                                <div className='flex flex-col sm:flex-row items-center justify-between gap-5 mt-5'>
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor="" className='text-secondary text-sm sm:text-lg dark:text-light'>First
                                            Name:</label>
                                        <input type="text" placeholder='Enter any your first name' value={first_name}
                                               onChange={(e) => setFirst_name(e.target.value)}
                                               className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary required'/>
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor="" className='text-secondary text-sm sm:text-lg dark:text-light'>Last
                                            Name:</label>
                                        <input type="text" placeholder='Enter any your first name' value={last_name}
                                               onChange={(e) => setLast_name(e.target.value)}
                                               className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary required'/>
                                    </div>

                                </div>
                                <div className='mt-5'>
                                    <label htmlFor=""
                                           className='text-secondary text-sm sm:text-lg dark:text-light'>Email:</label>
                                    <input type="email" placeholder='Enter any your email' value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                           className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary required'/>
                                </div>
                                <div className='mt-5'>
                                    <label htmlFor="" className='text-secondary text-sm sm:text-lg dark:text-light'>Phone
                                        Number:</label>
                                    <input type="number" placeholder='Enter any your phone number' value={phone}
                                           onChange={(e) => setphone(e.target.value)}
                                           className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary required'/>
                                </div>
                                <div className='mt-5 flex flex-col'>
                                    <label htmlFor=""
                                           className='text-secondary text-sm sm:text-lg dark:text-light'>Address:</label>
                                    <textarea name="" id="" cols="30" rows="4" placeholder='Enter any your Address'
                                              value={address} onChange={(e) => setAddress(e.target.value)}
                                              className='mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary required'></textarea>
                                </div>
                                <div className='flex flex-col sm:flex-row items-center justify-between gap-5 mt-5'>
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor=""
                                               className='text-secondary text-sm sm:text-lg dark:text-light'>City:</label>
                                        <input type="text" placeholder='Enter any your city name' value={city}
                                               onChange={(e) => setCity(e.target.value)}
                                               className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary required'/>
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor="" className='text-secondary text-sm sm:text-lg dark:text-light'>Pin
                                            Code:</label>
                                        <input type="number" placeholder='Enter any your pin code' value={pinCode}
                                               onChange={(e) => setPinCode(e.target.value)}
                                               className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary required'/>
                                    </div>

                                </div>
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-5">
                                    <label
                                        className="border w-full p-4 rounded-xl flex items-center gap-3 cursor-pointer border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary transition">
                                        <input type="radio" name="payment" className="accent-primary" value="COD"
                                               checked={paymentMethod === "COD"}
                                               onChange={(e) => setPaymentMethod(e.target.value)}/>
                                        <span className="text-sm font-medium dark:text-light">Cash on Delivery</span>
                                    </label>

                                    <label
                                        className="border w-full p-4 rounded-xl flex items-center gap-3 cursor-pointer border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary transition"><input
                                        type="radio" name="payment" value="stripe" className="accent-primary"/><img
                                        className="w-10 object-contain" src={assets.stripe_logo} alt="Stripe"/>
                                    </label>

                                    <label
                                        className="border w-full p-4 rounded-xl flex items-center gap-3 cursor-pointer border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary transition">
                                        <input type="radio" name="payment" value="razorpay" className="accent-primary"/><img
                                        className="w-24 object-contain" src={assets.razorpay_logo} alt="Razorpay"/>
                                    </label>

                                </div>
                                <div>
                                    <button type='submit'
                                            className="mt-6 w-full py-2 bg-primary-gradient text-white rounded-xl text-sm sm:text-lg">Order
                                        Succesfull
                                    </button>
                                </div>
                            </form>
                        </div>


                        <div className="p-4 border rounded-xl dark:border-secondary">
                            <h6 className="text-xl font-bold font-lexend mb-5 dark:text-white">Order Summary</h6>

                            {cartItems.length === 0 ? (
                                <p className="text-secondary dark:text-light">Your cart is empty</p>
                            ) : (
                                cartItems.map(item => (
                                    <div key={`${item._id}-${item.size}`}
                                         className="flex justify-between gap-4 border dark:border-secondary p-3 rounded-lg mb-4">
                                        <img src={`https://backend-uaa2.onrender.com/uploads/${item.image}`} alt={item.name}
                                             className="w-24 rounded-lg"/>

                                        <div className="flex-1">
                                            <h6 className="text-sm font-medium line-clamp-2 dark:text-white">{item.name}</h6>
                                            <p className="text-xs text-secondary mt-1 dark:text-light">Category
                                                : {item.category}</p>
                                            <p className="text-xs text-secondary mt-1 dark:text-light">Size: {item.size}</p>
                                            <p className="text-xs text-secondary mt-1 dark:text-light">Qty: {item.qty}</p>
                                        </div>

                                        <div className="font-semibold dark:text-light">₹ {item.price * item.qty}</div>
                                    </div>
                                ))
                            )}

                            <div
                                className='border dark:border-secondary mt-5 p-2 rounded-lg flex items-center justify-between'>
                                <div className='flex items-center gap-5'>
                                    <div>
                                        <img className="w-20 cursor-pointer" src={assets.card_coupon} alt="close"/>
                                    </div>
                                    <div>
                                        <h6 className='font-bold text-sm dark:text-white'>Discount Coupon</h6>
                                        <p className='font-normal text-xs text-secondary dark:text-light'>Save 20 % With
                                            Coupon</p>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className='px-5 py-2 rounded-full bg-primary-gradient text-white'> Coupon
                                    </button>
                                </div>
                            </div>

                            <div className="border dark:border-secondary rounded-lg p-4 mt-5">
                                <div className="flex justify-between mb-3">
                                    <span className="text-secondary dark:text-white">Sub Total</span>
                                    <span className='dark:text-light'>₹ {subTotal}</span>
                                </div>

                                <div className="flex justify-between mb-3">
                                    <span className="text-secondary dark:text-white">Shipping</span>
                                    <span className='dark:text-light'>₹ {SHIPPING}</span>
                                </div>

                                <div className="flex justify-between mb-3">
                                    <span className="text-secondary dark:text-white">Discount</span>
                                    <span className='dark:text-light'>− ₹ {discountAmount}</span>
                                </div>

                                <div className="border dark:border-secondary my-3"></div>

                                <div className="flex justify-between font-semibold text-lg">
                                    <span className='dark:text-white'>Total</span>
                                    <span className='dark:text-light'>₹ {total}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default Checkout;
