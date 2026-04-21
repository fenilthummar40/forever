import React from "react";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Smallhero from "../Component/Smallhero.jsx";
import {IconArrowRight} from "@tabler/icons-react";
import Footer from "../Component/Footer.jsx";

function PrivacyPolicy() {

    const PrivacyData = [{
        title: "1. Personal Statement",
        description1: "We are committed to creating a secure and user-friendly experience for every customer. To achieve this, we aim to be as clear as possible in our transparent Terms and Conditions.",
        description2: "When you visit our site, hazy.com, some of your personal information supplied during your order or through our cookies policy may be collected."
    },

        {
            title: "2. What are 'cookies'?",
            description1: "Cookies are little text files that are stored within your browser's cache. First and foremost, cookies are used to make websites work properly. They can also be used to enhance the user experience by remembering preferences and settings. Lastly, cookies can be used to gather analytical data, which can help website owners understand how their site is being used and how to improve it.",
            description2: "Both first-party and third-party cookies are used on this site for functionality, statistics, and advertising."
        },

        {
            title: "3. Why do we use cookies?",
            description1: "There are specific cookies necessary for a website to function properly. Cookies is what keep track of settings, thus allowing your shopping experience to be tailored to you (remembering your preference or settings).",
            description2: "Cookies also gathers data, for example, like the time of a session, viewed pages, or just general demographic information like age and gender. The information that is gathered can then be used for analytical pursuits, allowing us to generate customized shopping experiences for our users. We do not use cookies that will track or identify you."
        },

        {
            title: "4. What information do we gather specifically?",
            description1: "The information we gather is what you supply us with when signing up for a newsletter or making a purchase. This is usually demographic information like name, address, or general contact information. Cookies will also gather session information like the pages viewed, the amount of time spent in the session, transactions, and any other general demographic information (origin, gender, age)."
        },

        {
            title: "5. What third-parties do we share your information with?",
            description1: "Any information we gather is only shared with our affiliate partners for analytical reasons. We will not share your personal information past our brand and trusted brand partners."
        },

        {
            title: "6. Website Media",
            description1: "We hazy.com own all media that is on this website, unless stated otherwise. All photography work is done by Hazy Studio."
        },

        {
            title: "7. Disclosure of Your Information",
            description1: "You have the right to request your data. If something is incorrect, you can have it altered or removed.",
            description2: "You can also disable cookies on your device by changing your browser's settings. You have the option to use opt-out programs like 'NAI's Consumer opt-out' or 'Google Analytics opt-out browser add-on'. These prevent cookies from being used in your browser. Know that if you do this, our site may not function properly."
        },

        {
            title: "8. Updates",
            description1: "Our privacy policies are subject to change. All updates will appear on this page."
        }]

    return (
        <>
            <Scroll/>
            <Header/>
            <Smallhero
                text1="Privacy Policy"
                text2="When you visit our site, hazy.com, some of your personal information supplied during your order or by means of our cookies policy may be gathered."
            />

            <section className='my-10 mx-2'>
                <div className='max-w-7xl mx-auto border-gray-200'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        {PrivacyData.map((item, index) => (
                            <div key={index}>
                                <h1 className='text-xl font-bold mb-4 dark:text-white'>{item.title}</h1>
                                <div className='space-y-3'>
                                    {item.description1 && (
                                        <p className='text-base md:text-lg text-secondary flex items-start gap-3 dark:text-light'>
                                            <IconArrowRight className='w-5 h-5 mt-1 shrink-0'/>
                                            <span>{item.description1}</span>
                                        </p>
                                    )}

                                    {item.description2 && (
                                        <p className='text-base md:text-lg text-secondary flex items-start gap-3 dark:text-light'>
                                            <IconArrowRight className='w-5 h-5 mt-1 shrink-0'/>
                                            <span>{item.description2}</span>
                                        </p>
                                    )}

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

export default PrivacyPolicy;