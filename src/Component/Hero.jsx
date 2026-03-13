import React from "react";
import {assets} from "../assets/image/assets.js";
import Title from "./Title.jsx";
import {IconArrowRight} from "@tabler/icons-react";

function Hero() {

    const sectionStyle = {
        backgroundImage: `url(${assets.hero_img})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '500px',
    }

    return (
        <>
            <div style={sectionStyle} className="sm:!h-screen">
                <div className='h-full md:w-1/2  w-full m-auto flex flex-col justify-center items-center'>
                    <Title text1={`Fashion Forever`} text2={`Collection`}/>
                    <p className='text-white mt-5 text-sm sm:text-lg line-clamp-6 text-center md:px-0 px-5'>Fashion
                        Forever Collection brings timeless style and modern trends together in one versatile wardrobe.
                        Each piece is thoughtfully designed with premium fabrics, perfect fits, and attention to detail,
                        offering comfort, confidence, and elegance for every occasion. From everyday essentials to
                        statement outfits, Fashion Forever Collection is made for those who believe great fashion never
                        goes out of style.</p>
                    <div className='mt-5'>
                        <button
                            className='px-5 py-2 border-2 flex items-center gap-4 rounded-2xl text-sm sm:text-lg text-white'>See
                            More <IconArrowRight/></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
