import React, {useEffect, useState} from "react";
import Subtitle from "./Subtitle.jsx";
import {IconArrowRight, IconArrowUpRight, IconStarFilled} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import axios from "axios";

function Bestseller() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://backend-uaa2.onrender.com/api/product/list");

            if (response.data.success) {
                const bestCollectionProducts = response.data.products
                    .filter((item) => item.bestseller === true)
                    .slice(0, 4);
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
        <section>
            <div className='sm:my-20 my-10 max-w-7xl mx-auto px-4'>

                <div className='flex items-center justify-between'>
                    <Subtitle text1={`Best Collection`}/>
                    <Link to='/Collection'>
                        <p className="flex items-center gap-2 text-sm sm:text-lg font-medium cursor-pointer dark:text-light">
                            View More <IconArrowRight className="w-4 sm:w-5"/>
                        </p>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {products.map((item) => (
                        <div key={item._id}
                             className="group bg-white dark:bg-darkMode rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer border dark:border-0">

                            <div className="relative overflow-hidden">
                                <img
                                    className="w-full object-cover transform group-hover:scale-110 transition duration-500"
                                    src={`https://backend-uaa2.onrender.com/images/${item.image}`} alt={item.name}/>

                                <span
                                    className="absolute top-3 left-3 px-3 py-1 bg-primary-gradient text-white text-sm rounded-full shadow">₹ {item.price}
                                </span>
                            </div>

                            <div className="p-5">
                                <h6 className="text-lg font-semibold dark:text-white">{item.name}</h6>
                                <p className="text-sm text-secondary mt-2 dark:text-light line-clamp-2">{item.description}</p>

                                <div className="flex items-center justify-between mt-3">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <IconStarFilled key={i} className="w-4 h-4 text-yellow-400 drop-shadow-sm"/>
                                        ))}
                                    </div>
                                    <p className="text-sm text-secondary dark:text-light">(99+)</p>
                                </div>

                                <div className="border border-primary mt-4 opacity-30"></div>

                                <div className="flex items-center justify-between mt-4">
                                    <button
                                        className="px-5 py-2 bg-primary-gradient rounded-full text-white font-medium hover:scale-105 transition">Shop
                                        Now
                                    </button>

                                    <Link to={`/product/${item._id}`}
                                          className="rounded-full bg-secondary/30 w-9 h-9 flex items-center justify-center hover:bg-primary-gradient hover:text-white transition">
                                        <IconArrowUpRight className="w-5 h-5"/>
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

export default Bestseller;
