import React from "react";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Smallhero from "../Component/Smallhero.jsx";
import Footer from "../Component/Footer.jsx";
import {
    IconCalendar,
    IconCurrencyDollar,
    IconHeadset,
    IconLogin,
    IconMessageCircle,
    IconRefresh,
    IconShieldCheck,
    IconTruck,
    IconWorld
} from "@tabler/icons-react";

function TermsConditions() {

    const TermsConditions = [
        {
            icon: <IconShieldCheck/>,
            title: "100% Buyer Protection",
            description: "Our program allows for easy returns only for products not as per description/photo on the website and products received in damaged/defective/broken condition."
        },

        {
            icon: <IconRefresh/>,
            title: "Original Condition",
            description: "All products must be returned in their original condition along with the bills and labels. Ensure the item is unused and preserving its original packaging."
        },

        {
            icon: <IconCalendar/>,
            title: "7-Day Return Policy",
            description: "Product return requests after 7 days of delivery cannot be accepted. Please inspect your order upon arrival to ensure satisfaction."
        },

        {
            icon: <IconMessageCircle/>,
            title: "Dispute Resolution",
            description: "You can raise a dispute within 7 days of delivery. We are here to help resolve any issues quickly and fairly through our dedicated support channels."
        },

        {
            icon: <IconHeadset/>,
            title: "Support Channels",
            description: "Send an email to support@demo.com with images of broken/defective/damaged products within 7 days. Please mention your order number."
        },

        {
            icon: <IconLogin/>,
            title: "Easy Account Access",
            description: "Sign into your account if you are a registered customer. This is the easiest method to track orders, manage returns, and contact support."
        },

        {
            icon: <IconTruck/>,
            title: "Reverse Pickup",
            description: "Reverse pickup orders will initiate a refund once the item is picked up by our courier partner. We strive to make the process hassle-free."
        },

        {
            icon: <IconCurrencyDollar/>,
            title: "Refund Process",
            description: "We will refund when your item is back from the warehouse. The refund amount will be credited within 3 to 5 working days in your account."
        },

        {
            icon: <IconWorld/>,
            title: "Customs & Taxes",
            description: "Customs duty & other international taxes, if applicable, will have to be borne by the customer according to the laws of the land."
        }
    ]


    return (
        <>
            <Scroll/>
            <Header/>
            <Smallhero text1={`Terms Conditions`}
                       text2={`Welcome to Hazy! These terms and conditions outline the rules and regulations for the use of our website.`}/>

            <section className='my-10 mx-2'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                        {TermsConditions.map((item, index) => (
                            <div key={index}
                                 className="max-w-xl bg-gray-50 border border-gray-200 rounded-xl p-5 cursor-pointer group">

                                <div
                                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-secondary group-hover:text-white">
                                    {item.icon}</div>

                                <div className='mt-2'>
                                    <h1 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h1>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
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

export default TermsConditions;
