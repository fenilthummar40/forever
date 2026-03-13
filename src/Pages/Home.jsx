import React, { useState, useEffect } from 'react';
import Header from "../Component/Header.jsx";
import Hero from "../Component/Hero.jsx";
import Support from "../Component/Support.jsx";
import Bestseller from "../Component/Bestseller.jsx";
import New from "../Component/New.jsx";
import Blog from "../Component/Blog.jsx";
import Footer from "../Component/Footer.jsx";
import Discount from "../Component/Discount.jsx";
import Scroll from "../Component/Scroll.jsx";
import Modal from '../Component/Model.jsx';
import {assets} from "../assets/image/assets.js";
import {IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp} from "@tabler/icons-react";
import {useNavigate} from "react-router-dom";


function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/product/69932303597f9e74bb789ae1");
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <img className='w-full rounded-full' src={assets.p_img31} alt=""/>
                <h2 className='text-center font-semibold mt-2 text-lg dark:text-light'>Subscribe To Our Newletter!</h2>
                <p className='text-center text-2xl font-bold mt-2 dark:text-white'>Receive 20% OFF your next <br/> order, exclusive offers & more!</p>
                
                <div className='mt-5'>
                    <input className='border w-full py-2 rounded-lg' type="text" placeholder=' Enter any your email'/>
                    <button onClick={handleClick} className='w-full py-2 rounded-lg mt-5 font-semibold bg-primary-gradient text-white'>Subscribe</button>
                </div>

                <div className='mt-5 flex items-center justify-evenly'>
                    <IconBrandFacebook className='w-5 cursor-pointer dark:text-white'/>
                    <IconBrandInstagram className='w-5 cursor-pointer dark:text-white'/>
                    <IconBrandWhatsapp className='w-5 cursor-pointer dark:text-white'/>
                </div>

            </Modal>

            <Scroll/>
            <Header/>
            <Hero/>
            <Support/>
            <Bestseller/>
            <Blog/>
            <New/>
            <Discount/>
            <Footer/>
        </>
    );
}

export default Home;
