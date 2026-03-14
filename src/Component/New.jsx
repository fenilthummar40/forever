import React, {useEffect, useState} from "react";
import Subtitle from "./Subtitle.jsx";
import {IconArrowRight, IconArrowUpRight, IconStarFilled} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import axios from "axios";

function New() {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://backend-uaa2.onrender.com/api/product/list");

            if (response.data.success) {
                const newadd = response.data.products
                    .slice(0, 4);
                setProducts(newadd);
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
            <div className='sm:my-20 my-10 max-w-7xl mx-auto'>
                <div className='flex items-center justify-between'>
                    <Subtitle text1={`New Add`}/>
                    <Link to='/Collection'>
                        <p className="pe-5 flex items-center gap-2 text-sm sm:text-lg font-medium cursor-pointer dark:text-light">
                            View More <IconArrowRight className="w-4 sm:w-5"/>
                        </p>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 mt-10">
                    {products.map((item) => (
                        <div key={item._id}
                             className="border dark:border-secondary rounded-2xl w-10/12 m-auto sm:w-full shadow-sm group">
                            <div className="relative">
                                <img className="w-full object-cover rounded-tl-2xl rounded-tr-2xl"
                                     src={`https://backend-uaa2.onrender.com/images/${item.image}`} alt={item.name}/>

                                <button
                                    className="absolute top-3 left-3 px-4 py-1 bg-primary-gradient text-white rounded-2xl">₹ {item.price}
                                </button>

                            </div>

                            <div className="py-4 px-5">
                                <h6 className="text-lg font-semibold font-lexend dark:text-white">{item.name}</h6>
                                <p className="text-sm text-secondary line-clamp-3 mt-2 dark:text-light">{item.description}</p>

                                <div className="flex items-center justify-between gap-4 mt-2">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <IconStarFilled key={i} className="w-4 h-4 text-primary"/>))}
                                    </div>
                                    <p className="text-sm text-secondary dark:text-light">(99+ review)</p>
                                </div>

                                <div className="border border-primary mt-4"></div>

                                <div className="flex items-center justify-between mt-4">
                                    <button
                                        className="px-5 py-1 bg-primary-gradient rounded-2xl text-white font-medium text-lg">
                                        Shop Now
                                    </button>

                                    <Link to={`/product/${item._id}`}
                                          className="rounded-full bg-secondary/50 w-8 h-8 flex items-center justify-center hover:bg-primary-gradient hover:text-white dark:bg-light">
                                        <IconArrowUpRight className="w-5 h-5"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default New;
