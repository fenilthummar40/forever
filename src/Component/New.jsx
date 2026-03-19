import React, {useEffect, useState} from "react";
import Subtitle from "./Subtitle.jsx";
import {IconArrowRight, IconArrowUpRight, IconStarFilled} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import axios from "axios";

function New() {

    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("All");

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://backend-uaa2.onrender.com/api/product/list");
            if (response.data.success) {
                setProducts(response.data.products.slice(0, 8));
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const filteredProducts = products.filter((item) => {
        if (filter === "All") return true;
        return item.category?.toLowerCase() === filter.toLowerCase();
    });

    return (
        <div className='sm:my-20 my-10 max-w-7xl mx-auto px-4'>

            <div className='flex items-center justify-between'>
                <Subtitle text1={`New Arrival`}/>
                <Link to='/Collection'>
                    <p className="flex items-center gap-2 text-sm sm:text-lg font-medium cursor-pointer dark:text-light">
                        View More <IconArrowRight className="w-4 sm:w-5"/></p>
                </Link>
            </div>

            <div className="flex gap-3 mt-6 overflow-x-auto no-scrollbar">
                {["All", "Men", "Women", "Kide"].map((tab) => (
                    <button key={tab} onClick={() => setFilter(tab)} className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition
                       ${filter === tab
                        ? "bg-primary-gradient text-white"
                        : "bg-gray-100 dark:bg-darkMode text-secondary dark:text-light"}`}>{tab}
                    </button>
                ))}
            </div>

            <div className="flex gap-5 mt-10 overflow-x-auto no-scrollbar lg:grid lg:grid-cols-4">
                {filteredProducts.map((item) => (
                    <div key={item._id}
                         className="min-w-[250px] lg:min-w-0 group bg-white dark:bg-darkMode rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden cursor-pointer border dark:border-0">

                        <div className="relative overflow-hidden">
                            <img className="w-full object-cover group-hover:scale-110 transition duration-500"
                                 src={`https://backend-uaa2.onrender.com/images/${item.image}`} alt={item.name}/>
                            <span
                                className="absolute top-3 left-3 px-3 py-1 bg-primary-gradient text-white text-xs rounded-full">₹ {item.price}
                            </span>
                        </div>

                        <div className="p-4">
                            <h6 className="text-base font-semibold dark:text-white">{item.name}</h6>
                            <p className="text-sm text-secondary mt-1 line-clamp-2 dark:text-light">{item.description}</p>

                            <div className="flex items-center justify-between mt-2">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <IconStarFilled key={i} className="w-4 h-4 text-yellow-400"/>
                                    ))}
                                </div>
                                <p className="text-xs text-secondary dark:text-light">(99+)</p>
                            </div>

                            <div className="border mt-3 opacity-30"></div>

                            <div className="flex items-center justify-between mt-3">
                                <button
                                    className="px-4 py-1.5 bg-primary-gradient text-white rounded-full text-sm hover:scale-105 transition">
                                    Shop Now
                                </button>

                                <Link to={`/product/${item._id}`}
                                      className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/30 hover:bg-primary-gradient hover:text-white transition">
                                    <IconArrowUpRight className="w-4 h-4"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default New;
