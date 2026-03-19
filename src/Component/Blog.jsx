import React from "react";
import Subtitle from "./Subtitle.jsx";
import {
    IconArrowRight,
    IconArrowUpRight,
    IconUser,
    IconCalendar
} from "@tabler/icons-react";
import {assets} from "../assets/image/assets.js";
import {Link} from "react-router-dom";

function Blog() {

    const blog = [
        {
            img: assets.p_img44,
            title: 'Women Top Wear Jacket',
            description: 'A lightweight, usually knitted, pullover shirt...',
            date: "April 20, 2024",
            author: "Admin"
        },
        {
            img: assets.p_img45,
            title: 'Men Top Wear Jacket',
            description: 'A lightweight, usually knitted, pullover shirt...',
            date: "April 22, 2024",
            author: "Admin"
        }
    ]

    return (
        <section>
            <div className='sm:my-20 my-10 max-w-7xl mx-auto px-4'>

                <div className='flex items-center justify-between'>
                    <Subtitle text1={`Blog`}/>
                    <Link to='/Blog'>
                        <p className="flex items-center gap-2 text-sm sm:text-lg font-medium cursor-pointer dark:text-light">
                            View More <IconArrowRight className="w-4 sm:w-5"/></p>
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-10">

                    {blog.map(({img, title, description, date, author}, i) => (
                        <div key={i}
                             className="group bg-white dark:bg-darkMode rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer border dark:border-0">

                            <div className="relative overflow-hidden">
                                <img className="w-full h-96 object-cover group-hover:scale-110 transition duration-500"
                                     src={img} alt={title}/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h6 className="text-lg font-semibold">{title}</h6>
                                </div>
                            </div>

                            <div className='p-5'>
                                <div className='flex items-center gap-4 text-sm text-secondary dark:text-light'>
                                    <span className='flex items-center gap-1'><IconUser
                                        className='w-4 h-4 text-primary'/>{author}</span>

                                    <span className='flex items-center gap-1'><IconCalendar
                                        className='w-4 h-4 text-primary'/>{date}</span>
                                </div>

                                <p className='text-sm text-secondary mt-3 dark:text-light line-clamp-3'>{description}</p>
                                <div className='border border-primary mt-4 opacity-30'></div>

                                <div className='flex items-center justify-between mt-4'>
                                    <button
                                        className='px-5 py-2 bg-primary-gradient rounded-full text-white font-medium hover:scale-105 transition'>
                                        Read More
                                    </button>

                                    <Link to="#"
                                          className='rounded-full bg-secondary/30 w-9 h-9 flex items-center justify-center hover:bg-primary-gradient hover:text-white transition'>
                                        <IconArrowUpRight className='w-5 h-5'/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;
