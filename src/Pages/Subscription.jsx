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
            const response = await axios.get("http://localhost:5000/api/subscription/list");

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
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mx-5">

                        {subscription.map((item) => (
                            <div key={item._id}
                                 className="border rounded-lg shadow-sm bg-light/10 p-5 dark:border-secondary">
                                <span className="text-secondary text-sm dark:text-light">{item.status}</span>

                                <h1 className="mt-2 font-bold md:text-4xl text-xl dark:text-white">₹ {item.price}
                                    <span className="text-lg text-secondary font-medium dark:text-light">/month</span>
                                </h1>

                                <div className="mt-5">
                                    <p className="flex items-center gap-4 mt-2 dark:text-light">
                                        <IconCheck className="w-5 text-primary dark:text-secondary"/>{item.discount}
                                    </p>
                                    <p className="flex items-center gap-4 mt-2 dark:text-light">
                                        <IconCheck className="w-5 text-primary dark:text-secondary"/>{item.premium}
                                    </p>
                                    <p className="flex items-center gap-4 mt-2 dark:text-light">
                                        <IconCheck className="w-5 text-primary dark:text-secondary"/>{item.build}
                                    </p>
                                    <p className="flex items-center gap-4 mt-2 dark:text-light">
                                        <IconCheck className="w-5 text-primary dark:text-secondary"/>{item.processing}
                                    </p>
                                </div>

                                <button onClick={() => openModal(item)}
                                        className="w-full py-2 border mt-5 rounded-full hover:bg-primary-gradient hover:text-white dark:border-secondary dark:text-white">Submit
                                </button>
                                <p className="mt-2 text-secondary text-sm dark:text-light">Choose the best plan for
                                    you.</p>
                            </div>
                        ))}

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