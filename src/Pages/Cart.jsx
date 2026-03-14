import React from "react";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Smallhero from "../Component/Smallhero.jsx";
import Footer from "../Component/Footer.jsx";
import {Link} from "react-router-dom";
import {useCart} from "../Context/CartContext";
import {assets} from "../assets/image/assets.js";
import New from "../Component/New.jsx";
import {IconArrowLeft} from "@tabler/icons-react";

function Cart() {
    const SHIPPING = 50;
    const DISCOUNT_PERCENT = 10;

    const {cartItems, updateQty, removeFromCart} = useCart();

    const subTotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    const discountAmount = (subTotal * DISCOUNT_PERCENT) / 100;
    const total = subTotal + SHIPPING - discountAmount;

    return (
        <>
            <Scroll/>
            <Header/>

            <Smallhero
                text1="Cart"
                text2="Review your selected items and proceed to checkout."/>

            <section className="my-10 sm:my-20">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="flex md:flex-row gap-5 flex-col">

                        <div className="overflow-x-auto border dark:border-secondary rounded-xl w-full">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-secondary/10">
                                <tr>
                                    <th className="p-4 dark:text-white">Image</th>
                                    <th className="p-4 dark:text-white">Product</th>
                                    <th className="p-4 dark:text-white">Price</th>
                                    <th className="p-4 dark:text-white">Size</th>
                                    <th className="p-4 dark:text-white">Quantity</th>
                                    <th className="p-4 dark:text-white">Total</th>
                                    <th className="p-4 dark:text-white">Action</th>
                                </tr>
                                </thead>

                                <tbody>
                                {cartItems.map(item => (
                                    <tr key={`${item._id}-${item.size}`} className="border dark:border-secondary">
                                        <td className="p-4">
                                            <img src={`https://backend-uaa2.onrender.com/uploads/${item.image}`} alt={item.name}
                                                 className="w-24 rounded-lg"/>
                                        </td>
                                        <td className="p-4 font-medium text-xs sm:text-sm dark:text-light">{item.name}</td>
                                        <td className="p-4 dark:text-light">₹ {item.price}</td>
                                        <td className="p-4 text-secondary">
                                            <span
                                                className='w-7 h-7 flex items-center justify-center rounded-lg bg-secondary/10 cursor-pointer dark:text-light'>{item.size}</span>
                                        </td>

                                        <td className="p-4">
                                            <div
                                                className="flex items-center gap-3 border dark:border-secondary rounded-lg w-fit px-2 py-1">
                                                <button onClick={() => updateQty(item._id, item.size, "dec")}
                                                        className="w-7 h-7 flex items-center justify-center rounded-md bg-secondary/10 hover:bg-primary-gradient hover:text-white dark:text-light">−
                                                </button>

                                                <span
                                                    className="min-w-[20px] text-center font-medium dark:text-light">{item.qty}</span>

                                                <button onClick={() => updateQty(item._id, item.size, "inc")}
                                                        className="w-7 h-7 flex items-center justify-center rounded-md bg-secondary/10 hover:bg-primary-gradient hover:text-white dark:text-light">+
                                                </button>
                                            </div>
                                        </td>

                                        <td className="p-4 font-semibold dark:text-light">₹ {item.price * item.qty}</td>

                                        <td className='p-4 items-center'>
                                            <img onClick={() => removeFromCart(item._id, item.size)}
                                                 className="w-5 cursor-pointer" src={assets.bin_icon} alt="close"/>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="border dark:border-secondary rounded-xl w-full md:w-2/5 p-3 h-fit">
                            <h3 className="text-xl font-semibold mb-6 dark:text-white">Cart Details</h3>

                            <div className="flex justify-between mb-4">
                                <span className="text-secondary dark:text-white">Sub Total</span>
                                <span className='dark:text-light'>₹ {subTotal}</span>
                            </div>

                            <div className="flex justify-between mb-4">
                                <span className="text-secondary dark:text-white">Shipping</span>
                                <span className='dark:text-light'>₹ {SHIPPING}</span>
                            </div>

                            <div className="flex justify-between mb-4">
                                <span className="text-secondary dark:text-white">Discount</span>
                                <span className='dark:text-light'>− ₹ {discountAmount}</span>
                            </div>

                            <div className="border dark:border-secondary my-4"></div>

                            <div className="flex justify-between text-lg font-semibold">
                                <span className='dark:text-white'>Total</span>
                                <span className='dark:text-light'>₹ {total}</span>
                            </div>

                            <Link to="/checkout">
                                <button
                                    className="mt-6 w-full py-2 bg-primary-gradient text-white rounded-xl text-sm sm:text-lg">Checkout
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className='max-w-7xl mx-auto px-5'>
                    <Link to='/collection'>
                        <button
                            className="mt-6 px-5 py-2 bg-primary-gradient text-white rounded-xl text-sm sm:text-lg flex items-center gap-2">
                            <IconArrowLeft/> Back
                        </button>
                    </Link>
                </div>
            </section>

            <New/>
            <Footer/>
        </>
    );
}

export default Cart;
