import React, {useState, useEffect} from "react";
import {assets} from "../assets/image/assets.js";
import {
    IconArrowRight, IconBrandInstagram, IconBrandLinkedin,
    IconBrandStorybook, IconBrandTwitter,
    IconCheck, IconEye,
    IconPointFilled,
    IconStarFilled,
    IconTargetArrow
} from "@tabler/icons-react";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Smallhero from "../Component/Smallhero.jsx";
import Subtitle from "../Component/Subtitle.jsx";
import Discount from "../Component/Discount.jsx";
import Footer from "../Component/Footer.jsx";
import axios from "axios";

function About() {

    const [feedback, setFeedback] = useState([]);

    const fetchFeedback = async () => {
        try {
            const response = await axios.get("https://backend-uaa2.onrender.com/api/feedback/list");

            if (response.data.success) {
                setFeedback(response.data.Feedbacks);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFeedback();
    }, []);


    const data = [
        {
            icon: <IconBrandStorybook className="w-8 h-8 text-primary"/>,
            title: "Our Story",
            desc: "Fashion Forever started with a vision to bring timeless fashion and modern trends together. We believe in creating styles that reflect confidence, comfort, and individuality."
        },
        {
            icon: <IconTargetArrow className="w-8 h-8 text-primary"/>,
            title: "Our Mission",
            desc: "Our mission is to deliver high-quality fashion at affordable prices while ensuring a seamless shopping experience for every customer across all platforms."
        },
        {
            icon: <IconEye className="w-8 h-8 text-primary"/>,
            title: "Our Vision",
            desc: "We aim to become a globally trusted fashion brand known for innovation, sustainability, and customer satisfaction."
        }
    ];

    const team = [
        {
            img: assets.user1,
            name: "Rahul Patel",
            role: "Founder & CEO"
        },
        {
            img: assets.user2,
            name: "Priya Sharma",
            role: "Creative Director"
        },
        {
            img: assets.user3,
            name: "Amit Shah",
            role: "Marketing Head"
        }
    ];

    return (
        <>
            <Scroll/>
            <Header/>
            <Smallhero text1={`About Us`}
                       text2={`Fashion Forever Collection brings timeless style and modern trends together in one versatile wardrobe. Each piece is thoughtfully designed with premium fabrics, perfect fits, and attention to detail, offering comfort, confidence, and elegance for every occasion. From everyday essentials to statement outfits,  Fashion Forever Collection is made for those who believe great fashion never goes out of style.`}/>

            <section>
                <div className="sm:my-20 my-10 max-w-7xl mx-auto px-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">

                        <div className="overflow-hidden rounded-2xl shadow-lg group">
                            <img
                                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 cursor-pointer"
                                src={assets.about_img}
                                alt="about"
                            />
                        </div>

                        <div className="flex flex-col justify-center">

                            <Subtitle text1={`About Fashion Forever`}/>

                            <p className="text-sm sm:text-base text-secondary mt-4 leading-relaxed dark:text-light">
                                Discover a versatile range of men’s fashion including T-shirts,
                                shirts, polos, jackets, and more. Designed for comfort and style,
                                our collection fits every occasion from casual to formal.
                            </p>

                            <ul className="mt-6 space-y-3">
                                {[
                                    "Everyday essentials with premium comfort",
                                    "Trendy denim, patterns & stylish designs",
                                    "Perfect outfits for office & occasions",
                                    "Balanced styling with modern color rules",
                                    "Perfect fit ensures clean & sharp look"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <IconCheck className="text-primary w-5 h-5 mt-1"/>
                                        <p className="text-secondary text-sm dark:text-light">
                                            {text}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <button
                                    className="bg-primary-gradient text-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition shadow-md">
                                    Read More About Us
                                    <IconArrowRight className="w-4 h-4"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sm:my-20 my-10 max-w-7xl mx-auto px-5">

                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-4xl font-bold dark:text-white">
                        Our Brand Story
                    </h2>
                    <p className="text-secondary mt-3 dark:text-light">
                        Discover what drives us and shapes our fashion journey
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {data.map((item, i) => (
                        <div key={i}
                             className="bg-white dark:bg-darkMode/30 border dark:border-secondary rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 cursor-pointer group">
                            <div
                                className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 dark:text-white">{item.title}</h3>
                            <p className="text-sm text-secondary leading-relaxed dark:text-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section className="sm:my-20 my-10 max-w-7xl mx-auto px-5">

                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-4xl font-bold dark:text-white">
                        Meet Our Team
                    </h2>
                    <p className="text-secondary mt-3 dark:text-light">
                        The people behind Fashion Forever
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {team.map((member, i) => (
                        <div key={i}
                             className="bg-white dark:bg-darkMode/30 border dark:border-secondary rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group">

                            <div className="relative overflow-hidden">
                                <img src={member.img} alt={member.name}
                                     className="w-full object-cover group-hover:scale-110 transition duration-500"/>

                                <div
                                    className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                                    <IconBrandInstagram
                                        className="text-white w-6 h-6 cursor-pointer hover:text-primary"/>
                                    <IconBrandLinkedin
                                        className="text-white w-6 h-6 cursor-pointer hover:text-primary"/>
                                    <IconBrandTwitter className="text-white w-6 h-6 cursor-pointer hover:text-primary"/>
                                </div>
                            </div>

                            <div className="text-center py-5">
                                <h3 className="text-lg font-semibold dark:text-white">
                                    {member.name}
                                </h3>
                                <p className="text-secondary text-sm mt-1 dark:text-light">
                                    {member.role}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            </section>

            <section>
                <div className="sm:my-20 my-10 max-w-7xl mx-auto px-5">

                    <Subtitle text1={`Customers Feedback`}/>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {Array.isArray(feedback) && feedback.length > 0 ? (
                            feedback.map((item) => (
                                <div key={item._id}
                                     className="bg-white dark:bg-darkMode/30 border dark:border-secondary rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 cursor-pointer">

                                    <div className="flex items-center gap-4">
                                        <img src={assets.quality_icon} alt="user"
                                             className="w-14 h-14 rounded-full object-cover"/>
                                        <div>
                                            <h4 className="font-semibold text-base dark:text-white">John Doe</h4>
                                            <p className="text-sm text-secondary dark:text-light">India</p>
                                        </div>
                                    </div>

                                    <p className="text-secondary text-sm mt-5 leading-relaxed dark:text-light">{item.feedback}</p>

                                    <div className="flex items-center justify-between mt-5">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, index) => (
                                                <IconStarFilled key={index} className={`w-4 h-4 ${
                                                    index < (item.rating || 5)
                                                        ? "text-yellow-400"
                                                        : "text-secondary"
                                                }`}/>
                                            ))}
                                        </div>
                                        <span
                                            className="text-sm font-medium text-secondary dark:text-light">{item.rating || 5}.0</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center col-span-full text-gray-500">
                                No Feedback Found
                            </p>
                        )}
                    </div>
                </div>
            </section>

            <Discount/>
            <Footer/>
        </>
    );
}

export default About;
