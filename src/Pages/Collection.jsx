import React, {useState, useEffect} from "react";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Smallhero from "../Component/Smallhero.jsx";
import Footer from "../Component/Footer.jsx";
import {
    IconArrowLeft,
    IconArrowRight,
    IconArrowUpRight,
    IconLayoutGrid,
    IconLayoutGridAdd,
    IconList,
    IconMenu,
    IconSearch,
    IconStarFilled,
    IconX
} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import axios from "axios";

function Collection() {

    const [products, setProducts] = useState([]);

    const categories = ['All Categories', 'Men', 'Women', 'Kide', 'Fashion'];
    const subCategories = ['All', 'Topwear', 'Bottomwear', 'Jacket'];
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [selectedSubCategory, setSelectedSubCategory] = useState('All');
    const [sortBy, setSortBy] = useState('default');
    const [layout, setLayout] = useState('grid-3');

    const ITEMS_PER_PAGE = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [openFilter, setOpenFilter] = useState(false);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://backend-uaa2.onrender.com/api/product/list");

            if (response.data.success) {
                setProducts(response.data.products);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, selectedSubCategory, sortBy]);


    const filteredProducts = products
        .filter((item) => {
            const categoryMatch =
                selectedCategory === 'All Categories' ||
                item.category === selectedCategory;

            const subCategoryMatch =
                selectedSubCategory === 'All' ||
                item.subcategory === selectedSubCategory;

            return categoryMatch && subCategoryMatch;
        })
        .sort((a, b) => {
            if (sortBy === 'lowToHigh') return a.price - b.price;
            if (sortBy === 'highToLow') return b.price - a.price;
            return 0;
        });

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );


    return (
        <>
            <Scroll/>
            <Header/>

            <Smallhero
                text1="Collection"
                text2="Female clothing is frequently more expensive than comparable male items. For example, some retailers charge roughly more for women's jeans or sweaters."/>

            <section>
                <div className="flex justify-between gap-4 md:my-20 my-10 max-w-7xl mx-auto flex-col md:flex-row">
                    <div
                        className={`w-72 p-4 md:w-96 fixed md:static top-14 left-0 h-full md:h-auto shadow-lg md:shadow-none transition-all duration-300 z-40 border dark:border-secondary rounded-lg ${openFilter ? "bg-gray-100 dark:bg-darkMode" : "bg-white dark:bg-transparent"} ${openFilter ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>

                        <div>
                            <h6 className="text-lg font-normal font-lexend flex items-center justify-between dark:text-white">
                                Search
                                <IconX className="block md:hidden cursor-pointer" onClick={() => setOpenFilter(false)}/>
                            </h6>

                            <div className="relative mt-4">
                                <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
                                <input type="text" placeholder="Search here..."
                                       className="border rounded-lg ps-10 w-full h-10 focus:outline-none border-primary focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"/>
                            </div>
                        </div>


                        <div className="mt-5">
                            <h6 className="text-lg font-normal font-lexend dark:text-white">Categories</h6>
                            <ul className="mt-4">
                                {categories.map((cat) => (
                                    <li key={cat} className="mb-3">
                                        <label className="flex items-center gap-4 cursor-pointer">
                                            <input type="checkbox" checked={selectedCategory === cat}
                                                   onChange={() => setSelectedCategory(cat)}
                                                   className="w-4 h-4 accent-primary"/>
                                            <span className="text-sm text-secondary dark:text-light">{cat}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-5">
                            <h6 className="text-lg font-normal font-lexend dark:text-light">Sub Categories</h6>
                            <ul className="mt-4">
                                {subCategories.map((sub) => (
                                    <li key={sub} className="mb-3">
                                        <label className="flex items-center gap-4 cursor-pointer">
                                            <input type="checkbox" checked={selectedSubCategory === sub}
                                                   onChange={() => setSelectedSubCategory(sub)}
                                                   className="w-4 h-4 accent-primary"/>
                                            <span className="text-sm text-secondary dark:text-light">{sub}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-5">
                            <h6 className="text-lg font-normal font-lexend dark:text-white">Size</h6>
                            <ul className="mt-4">
                                {sizes.map((size) => (
                                    <li key={size} className="mb-3">
                                        <label className="flex items-center gap-4 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 accent-primary"/>
                                            <span className="text-sm text-secondary dark:text-light">{size}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="w-full p-4">
                        <div className="flex items-center justify-between">
                            <div className="block md:hidden">
                                <IconMenu className="w-5 h-5 cursor-pointer dark:text-white"
                                          onClick={() => setOpenFilter(!openFilter)}/>
                            </div>

                            <div className="hidden md:block">
                                <div className="flex items-center gap-5">
                                    <IconLayoutGridAdd onClick={() => setLayout('grid-3')}
                                                       className={`w-5 h-5 cursor-pointer  ${layout === 'grid-3' ? 'text-primary' : 'text-secondary'}`}/>
                                    <IconLayoutGrid onClick={() => setLayout('grid-2')}
                                                    className={`w-5 h-5 cursor-pointer ${layout === 'grid-2' ? 'text-primary' : 'text-secondary'}`}/>
                                    <IconList onClick={() => setLayout('list')}
                                              className={`w-5 h-5 cursor-pointer ${layout === 'list' ? 'text-primary' : 'text-secondary'}`}/>
                                </div>
                            </div>

                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                                    className="border px-2 py-1 rounded focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary">
                                <option value="default">Default</option>
                                <option value="highToLow">Price - High to Low</option>
                                <option value="lowToHigh">Price - Low to High</option>
                            </select>
                        </div>

                        <div
                            className={`grid gap-5 mt-5
                                ${layout === 'grid-3' && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}
                                ${layout === 'grid-2' && 'grid-cols-1 sm:grid-cols-2'}
                                ${layout === 'list' && 'grid-cols-1'}`}
                        >
                            {paginatedProducts.map((item) => (
                                <div key={item._id} className={`border dark:border-secondary rounded-2xl shadow-sm group overflow-hidden
                                        ${layout === 'list'
                                    ? 'flex flex-col sm:flex-row gap-4 p-4'
                                    : 'w-10/12 m-auto sm:w-full'}`}>
                                    <div className="relative">
                                        <img src={`https://backend-uaa2.onrender.com/images/${item.image}`} alt={item.name}
                                             className="w-full object-cover rounded-tl-2xl rounded-tr-2xl"/>
                                        <button
                                            className="absolute top-3 left-3 px-4 py-1 bg-primary-gradient text-white rounded-2xl">₹ {item.price}
                                        </button>
                                    </div>

                                    <div className="py-4 px-5">
                                        <h6 className="text-lg font-semibold font-lexend dark:text-white">{item.name}</h6>
                                        <p className="text-sm text-secondary line-clamp-4 mt-2 dark:text-light">{item.description}</p>

                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <IconStarFilled key={i} className="w-4 h-4 text-primary"/>
                                                ))}
                                            </div>
                                            <p className="text-sm text-secondary dark:text-light">(99+ review)</p>
                                        </div>

                                        <div className="border border-primary mt-4"></div>

                                        <div className="flex items-center justify-between mt-4">
                                            <button
                                                className="px-5 py-1 bg-primary-gradient rounded-2xl text-white font-medium text-lg">Shop
                                                Now
                                            </button>

                                            <Link to={`/product/${item._id}`}
                                                  className="rounded-full bg-secondary/50 w-8 h-8 flex items-center justify-center hover:bg-primary-gradient hover:text-white dark:bg-light"><IconArrowUpRight
                                                className="w-5 h-5"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex items-center justify-center">
                            <ul className="flex items-center gap-3">

                                <li onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer
                                        ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-primary-gradient text-white shadow-lg'}`}>
                                    <IconArrowLeft/>
                                </li>

                                {[...Array(totalPages)].map((_, index) => (
                                    <li key={index} onClick={() => setCurrentPage(index + 1)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer dark:bg-light
                                            ${currentPage === index + 1
                                            ? 'bg-primary-gradient text-white shadow-lg'
                                            : 'border'}`}>{index + 1}
                                    </li>
                                ))}

                                <li onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer
                                        ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-primary-gradient text-white shadow-lg'}`}>
                                    <IconArrowRight/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default Collection;
