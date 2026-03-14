import React, {useEffect, useState} from "react";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Smallhero from "../Component/Smallhero.jsx";
import Footer from "../Component/Footer.jsx";
import {IconStarFilled, IconArrowUpRight, IconUser, IconMessage} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import axios from "axios";

function Blog() {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://backend-uaa2.onrender.com/api/product/list");

            if (response.data.success) {
                const bestCollectionProducts = response.data.products
                    .slice(41, 47);

                setProducts(bestCollectionProducts);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <>
            <Scroll/>
            <Header/>

            <Smallhero
                text1="Blog"
                text2="Fashion blogs, just like any blog, are web-based publishing platforms that post content on a specific niche or idea. A fashion blog can cover many topics, from deep dives into particular items of clothing to beauty tips, trends, and celebrity fashion choices."
            />

            <section className="my-10 sm:my-20">
                <div className='max-w-7xl mx-auto'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">
                        {products.map((item) => (
                            <div key={item._id}
                                 className="border dark:border-secondary rounded-2xl shadow-lg group overflow-hidden">
                                <img className="w-full object-cover rounded-tl-2xl rounded-tr-2xl"
                                     src={`https://backend-uaa2.onrender.com/images/${item.image}`} alt={item.name}/>

                                <div className="py-4 px-5">
                                    <div className='flex items-center gap-5'>
                                        <p className='flex items-center gap-2 text-secondary text-sm dark:text-light'>
                                            <IconUser className='w-4 h-4 text-primary'/> Admin</p>
                                        <p className='flex items-center gap-2 text-secondary text-sm dark:text-light'>
                                            <IconMessage className='w-4 h-4 text-primary'/> Comments</p>
                                    </div>

                                    <h6 className="text-lg font-semibold font-lexend mt-2 dark:text-white">{item.name}</h6>
                                    <p className="text-sm text-secondary line-clamp-4 mt-2 dark:text-light">{item.description}</p>

                                    <div className="flex gap-1 mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <IconStarFilled key={i} className="w-4 h-4 text-primary"/>
                                        ))}
                                    </div>

                                    <div className="border border-primary mt-4"></div>

                                    <div className="flex items-center justify-between mt-4">
                                        <button
                                            className="px-5 py-1 bg-primary-gradient rounded-2xl text-white font-medium">
                                            View More
                                        </button>

                                        <Link to={`/blog/${item._id}`}
                                              className="rounded-full bg-secondary/50 w-8 h-8 flex items-center justify-center hover:bg-primary-gradient hover:text-white dark:bg-light">
                                            <IconArrowUpRight className="w-5 h-5"/>
                                        </Link>
                                    </div>
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

export default Blog;
