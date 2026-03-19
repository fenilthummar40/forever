import React from "react";
import {assets} from "../assets/image/assets.js";
import {Link} from "react-router-dom";
import {IconArrowRight} from "@tabler/icons-react";

function Smallhero({text1 ,text2}) {

    const sectionStyle = {
        backgroundImage: `
        linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url(${assets.hero_img})`,
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
                    <div className="mt-6">
                        <Link to="/collection">
                            <button className="px-6 py-2 border text-white rounded-full flex items-center gap-2 mx-auto hover:scale-105 hover:bg-white hover:text-dark transition">
                                Explore Collection
                                <IconArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Smallhero;
