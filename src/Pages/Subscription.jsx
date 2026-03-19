import React, {useState, useEffect} from "react";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Smallhero from "../Component/Smallhero.jsx";
import Footer from "../Component/Footer.jsx";
import Modal from "../Component/Modal.jsx";
import {IconCheck} from "@tabler/icons-react";
import axios from "axios";

function Subscription() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [subscription, setSubscription] = useState([]);
    const [selectedSubscription, setSelectedSubscription] = useState(null);

    const fetchSubscription = async () => {
        try {
            const response = await axios.get("https://backend-uaa2.onrender.com/api/subscription/list");

            if (response.data.success) {
                setSubscription(response.data.subscriptions || []);
            } else {
                setSubscription([]);
            }
        } catch (error) {
            console.log(error);
            setSubscription([]);
        }
    };

    useEffect(() => {
        fetchSubscription();
    }, []);

    const openModal = (item) => {
        setSelectedSubscription(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSubscription(null);
    };

    return (
        <>
            <Scroll/>
            <Header/>
            <Smallhero
                text1="Subscription"
                text2="Pricing to fit the needs of any company size."/>

            <section className="my-10 sm:my-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mx-5">
                        {subscription.map((item, index) => {
                            const isPopular = index === 1;
                            return (
                                <div key={item._id}
                                     className={`relative rounded-2xl p-8 border bg-white dark:bg-dark transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${isPopular ? "border-primary shadow-lg scale-105" : "border-gray-200 dark:border-secondary"}`}>

                                    {isPopular && (
                                        <span
                                            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-4 py-1 rounded-full shadow">Most Popular</span>
                                    )}
                                    <p className="text-gray-500 text-sm dark:text-light">{item.status}</p>
                                    <h1 className="mt-2 text-4xl font-bold dark:text-white">₹ {item.price}
                                        <span className="text-lg text-gray-400 font-medium">/month</span>
                                    </h1>
                                    <div className="my-6 border-t dark:border-secondary"></div>
                                    <div className="space-y-4">
                                        <p className="flex items-center gap-3 text-sm dark:text-light">
                                            <IconCheck className="w-4 text-primary"/>{item.discount}
                                        </p>
                                        <p className="flex items-center gap-3 text-sm dark:text-light">
                                            <IconCheck className="w-4 text-primary"/>{item.premium}
                                        </p>
                                        <p className="flex items-center gap-3 text-sm dark:text-light">
                                            <IconCheck className="w-4 text-primary"/>{item.build}
                                        </p>
                                        <p className="flex items-center gap-3 text-sm dark:text-light">
                                            <IconCheck className="w-4 text-primary"/>{item.processing}
                                        </p>
                                    </div>

                                    <button onClick={() => openModal(item)}
                                            className={`w-full mt-8 py-3 rounded-full font-medium transition-all duration-300 ${isPopular
                                                ? "bg-primary text-white hover:opacity-90"
                                                : "border border-gray-300 hover:bg-primary hover:text-white dark:text-white dark:border-secondary"
                                            }`}> Choose Plan
                                    </button>
                                    <p className="mt-3 text-xs text-gray-400 text-center">Choose the best plan for
                                        you.</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                subscription={selectedSubscription}
            />

            <Footer/>
        </>
    );
}

export default Subscription;
