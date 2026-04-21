import React from "react";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Smallhero from "../Component/Smallhero.jsx";
import Footer from "../Component/Footer.jsx";
import {
    IconArrowsExchange,
    IconClock,
    IconCurrencyDollar,
    IconFileText,
    IconGift,
    IconPackage,
    IconReceipt,
    IconTruck,
    IconWorld
} from "@tabler/icons-react";

function ReturnPolicy() {

    const ReturnPolicy = [
        {
            number: 1,
            icon: <IconClock/>,
            title: "7-Day Return Window",
            description: "You have 7 days from the date of delivery to initiate a return. We recommend checking your order immediately upon arrival."
        },

        {
            number: 2,
            icon: <IconFileText/>,
            title: "Easy Initiation",
            description: "Simply log in to your account, go to \"My Orders\", and request a return. Or email us at support@hazy.com with photos."
        },

        {
            number: 3,
            icon: <IconPackage/>,
            title: "Condition Matters\n",
            description: "Items must be unused, unwashed, and in original packaging with all tags intact. We cannot accept customized items."
        },

        {
            number: 4,
            icon: <IconCurrencyDollar/>,
            title: "Fast Refunds",
            description: "Refunds are processed within 3-5 business days after the item passes our quality check at the warehouse."
        },

        {
            number: 5,
            icon: <IconTruck/>,
            title: "Reverse Pickup",
            description: "We offer free reverse pickup for defective items. A nominal fee applies for size/preference exchanges where applicable."
        },

        {
            number: 6,
            icon: <IconWorld/>,
            title: "International Returns",
            description: "For international orders, return shipping costs and customs duties are the responsibility of the customer."
        },

        {
            number: 7,
            icon: <IconArrowsExchange/>,
            title: "Exchange Policy",
            description: "Need a different size or color? We facilitate easy exchanges depending on stock availability to ensure you get the perfect fit."
        },

        {
            number: 8,
            icon: <IconGift/>,
            title: "Holiday Returns",
            description: "Shopping for gifts? We offer extended return windows during the holiday season so your loved ones have plenty of time to decide."
        },

        {
            number: 9,
            icon: <IconReceipt/>,
            title: "Non-Returnable Items",
            description: "Please note that gift cards, personalized items, and intimate apparel cannot be returned for hygiene and security reasons."
        }
    ]

    return (
        <>
            <Scroll/>
            <Header/>
            <Smallhero text1={`Return Policy`}
                       text2={`Simple, transparent, and hassle-free returns. Here is everything you need to know.`}/>

            <section className='my-10 mx-2'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {ReturnPolicy.map((item) => (
                            <div key={item.number}
                                 className="relative bg-gray-100 rounded-2xl p-6 cursor-pointer group">
                                <span
                                    className="absolute top-4 right-6 text-5xl font-semibold text-gray-300 opacity-50">
                                    {String(item.number).padStart(2, "0")}</span>

                                <div
                                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-200 group-hover:bg-secondary group-hover:text-white">
                                    {item.icon}
                                </div>

                                <div className='mt-2'>
                                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                    <p className="mt-1 text-sm text-gray-600 max-w-md whitespace-pre-line">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default ReturnPolicy;
