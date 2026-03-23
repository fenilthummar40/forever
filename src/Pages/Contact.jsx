import React, {useState} from "react";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Smallhero from "../Component/Smallhero.jsx";
import GoogleMapReact from 'google-map-react';
import {assets} from "../assets/image/assets.js";
import Discount from "../Component/Discount.jsx";
import Footer from "../Component/Footer.jsx";
import {toast} from "react-toastify";
import axios from "axios";
import {IconClock, IconMail, IconMapPin, IconPhone} from "@tabler/icons-react";


function Contact() {

    const AnyReactComponent = ({text}) => <div>{text}</div>;
    const defaultProps = {
        center: {
            lat: 21.1702,
            lng: 72.8311,
        },
        zoom: 12,
    };

    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
           const user = JSON.parse(localStorage.getItem("user"));
            const response = await axios.post(
                "https://backend-uaa2.onrender.com/api/contact/add",
                {userid: user.id, first_name, last_name, email, phone, message,}
            );

            if (response.data.success) {
                toast.success("contact Added Successfully!");

                setFirst_name("");
                setLast_name("");
                setEmail("");
                setPhone("");
                setMessage("");
            }

        } catch (error) {
            console.log(error.response?.data);
            toast.error("Error adding contact");
        }
    };


    const cards = [
        {
            icon: <IconMapPin size={28}/>,
            title: "Address",
            info: "Surat, Gujarat, India"
        },
        {
            icon: <IconPhone size={28}/>,
            title: "Phone",
            info: "+91 98765 43210"
        },
        {
            icon: <IconMail size={28}/>,
            title: "Email",
            info: "support@example.com"
        },
        {
            icon: <IconClock size={28}/>,
            title: "Working Hours",
            info: "Mon - Sat: 09:00 AM - 7:00 PM"
        }
    ];


    return (
        <>
            <div>
                <Scroll/>
                <Header/>
                <Smallhero text1={`Contact`}
                           text2={`Fashion contact text typically includes customer support email addresses, phone numbers, WhatsApp links, and social media handles for inquiries about orders, returns, or styling. Common examples feature Mon-Sat service hours (e.g., 10 AM - 6 PM), physical addresses for brands, and live chat options. `}/>


                <section>
                    <div className="max-w-7xl mx-auto px-5 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {cards.map((card, index) => (
                            <div key={index}
                                 className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 dark:bg-darkMode">
                                <div className="text-3xl text-primary mb-4">{card.icon}</div>

                                <h3 className="font-semibold text-lg mb-2 dark:text-white">{card.title}</h3>
                                <p className="text-gray-600 text-sm dark:text-light">{card.info}</p>
                            </div>
                        ))}
                    </div>
                </section>


                <section className='my-10 sm:my-20'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mx-5 items-center'>

                            <div className='relative'>
                                <img className="w-full h-full object-cover rounded-2xl shadow-lg"
                                     src={assets.contact_img} alt=""/>

                                <div
                                    className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
                                    <p className="text-white text-lg sm:text-2xl font-semibold text-center px-4">We’re
                                        here to help you 24/7</p>
                                </div>
                            </div>

                            <div className='flex items-start justify-center flex-col px-2 sm:px-5'>
                                <h2 className='font-bold sm:text-4xl text-2xl font-lexend dark:text-white'>We’d Love to
                                    Hear From You</h2>
                                <p className='text-secondary text-sm sm:text-lg mt-4 dark:text-light'>
                                    Have questions, feedback, or need assistance? Our team is always ready to help you.
                                    Reach out to us and we’ll get back to you as soon as possible.</p>

                                <button type='button'
                                        className='mt-6 border px-6 py-2 text-sm sm:text-lg border-primary rounded-full hover:bg-primary-gradient hover:text-white transition dark:text-white'>Contact
                                    Us
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='my-10 sm:my-20'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-5 bg-primary/10'>
                            <div className='p-5'>
                                <h1 className='font-bold text-2xl font-lexend dark:text-white'>Get in Touch</h1>

                                <form onSubmit={onSubmitHandler}>
                                    <div className='flex items-center justify-between gap-5 flex-col mt-5 md:flex-row'>
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""
                                                   className='text-secondary text-sm sm:text-lg dark:text-light'>First
                                                Name:</label>
                                            <input type="text" placeholder='Enter any Your First name'
                                                   className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary'
                                                   value={first_name} onChange={(e) => setFirst_name(e.target.value)}/>
                                        </div>
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""
                                                   className='text-secondary text-sm sm:text-lg dark:text-light'>Last
                                                Name:</label>
                                            <input type="text" placeholder='Enter any Your Last name'
                                                   className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary'
                                                   value={last_name} onChange={(e) => setLast_name(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className='mt-5'>
                                        <label htmlFor=""
                                               className='text-secondary text-sm sm:text-lg dark:text-light'>Email:</label>
                                        <input type="email" placeholder='Enter any Your Email'
                                               className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary'
                                               value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>

                                    <div className='mt-5'>
                                        <label htmlFor="" className='text-secondary text-sm sm:text-lg dark:text-light'>Phone
                                            Number:</label>
                                        <input type="tel" placeholder='Enter any Your Phone'
                                               className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary'
                                               value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                    </div>

                                    <div className='mt-5 flex flex-col'>
                                        <label htmlFor=""
                                               className='text-secondary text-sm sm:text-lg dark:text-light'>Message:</label>
                                        <textarea name="" id="" cols="30" rows="4"
                                                  className='mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary'
                                                  value={message}
                                                  onChange={(e) => setMessage(e.target.value)}></textarea>
                                    </div>

                                    <div>
                                        <button type='submit'
                                                className='mt-5 border px-5 py-2 text-sm sm:text-lg border-primary rounded-full hover:bg-primary-gradient hover:text-white dark:text-white'>Submit
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div>
                                <div style={{height: '100%', width: '100%'}}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{key: ""}}
                                        defaultCenter={defaultProps.center}
                                        defaultZoom={defaultProps.zoom}
                                    >
                                        <AnyReactComponent
                                            lat={21.1702}
                                            lng={72.8311}
                                            text="Surat, Gujarat"
                                        />
                                    </GoogleMapReact>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Discount/>
                <Footer/>
            </div>
        </>
    );
}

export default Contact;
