import React from "react";
import {assets} from "../assets/image/assets.js";

function Smallhero({text1 ,text2}) {

    const sectionStyle = {
        backgroundImage: `url(${assets.hero_img})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '400px',
    }

    return (
        <>
            <div style={sectionStyle}>
                <div className='h-full md:w-1/2  w-full m-auto flex flex-col justify-center items-center'>
                    <h1 className='font-lexend font-medium sm:text-5xl text-dark text-2xl ps-5'>{text1}</h1>
                    <p className='text-white mt-5 text-sm sm:text-lg line-clamp-6 text-center md:px-0 px-5'>{text2}</p>
                </div>
            </div>
        </>
    );
}

export default Smallhero;
