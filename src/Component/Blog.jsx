import React from "react";
import Subtitle from "./Subtitle.jsx";
import {IconArrowRight, IconArrowUpRight, IconMessage, IconStarFilled, IconUser} from "@tabler/icons-react";
import {assets} from "../assets/image/assets.js";
import {Link} from "react-router-dom";

function Blog() {

    const blog = [
        {
            img: assets.p_img44,
            title: 'Women Top wear Jacket',
            description: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.'
        },

        {
            img: assets.p_img45,
            title: 'Men Top wear Jacket',
            description: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.'
        }
    ]

    return (
        <>
            <section>
                <div className='sm:my-20 my-10 max-w-7xl mx-auto'>
                    <div className='flex items-center justify-between'>
                        <Subtitle text1={`Blog`}/>
                        <Link to='/Blog'>
                            <p className="pe-5 flex items-center gap-2 text-sm sm:text-lg font-medium cursor-pointer dark:text-light">
                                View More <IconArrowRight className="w-4 sm:w-5"/></p>
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mx-5 mt-10">
                        {blog.map(({img, title, description}, i) => (
                            <div key={i} className="border dark:border-secondary rounded-2xl shadow-lg group">
                                <div>
                                    <img className="w-full h-80 object-cover rounded-tl-2xl rounded-tr-2xl" src={img}
                                         alt=""/>
                                </div>

                                <div className='py-4 px-5'>
                                    <div className='flex items-center gap-5'>
                                        <p className='flex items-center gap-2 text-secondary text-sm dark:text-light'>
                                            <IconUser className='w-4 h-4 text-primary'/> Admin</p>
                                        <p className='flex items-center gap-2 text-secondary text-sm dark:text-light'>
                                            <IconMessage className='w-4 h-4 text-primary'/> Comments</p>
                                    </div>
                                    <h6 className='text-lg font-semibold font-lexend mt-2 dark:text-white'>{title}</h6>
                                    <p className='text-sm text-secondary line-clamp-4 mt-2 dark:text-light'> {description}</p>
                                    <div className="flex gap-1 mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <IconStarFilled key={i} className="w-4 h-4 text-primary"/>))}
                                    </div>
                                    <div className='border border-primary mt-4'></div>
                                    <div className='flex items-center justify-between mt-4'>
                                        <button type='sumbit'
                                                className='px-5 py-1 bg-primary-gradient rounded-2xl text-white font-medium text-lg '>View
                                            More
                                        </button>
                                        <a href='#'
                                           className='rounded-full bg-secondary/50 w-8 h-8 flex items-center justify-center hover:bg-primary-gradient hover:text-white dark:bg-light'>
                                            <IconArrowUpRight className='w-5 h-5'/></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;
