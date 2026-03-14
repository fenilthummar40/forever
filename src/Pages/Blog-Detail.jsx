import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Smallhero from "../Component/Smallhero.jsx";
import {assets,} from "../assets/image/assets.js";
import {IconMessage, IconUser} from "@tabler/icons-react";
import Footer from "../Component/Footer.jsx";
import axios from "axios";
import {toast} from "react-toastify";

function BlogDetail() {
    const [products, setProducts] = useState([]);

    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");

    const {id} = useParams();
    useEffect(() => {
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

        fetchProducts();
    }, []);

    const product = products.find(
        (item) => String(item._id) === String(id)
    );

    if (!product) {
        return <p className="text-center mt-20">Product not found</p>;
    }

    const fashion = [
        {
            title: 'Boy Round Neck Pure Cotton T-shirt',
            description: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.'
        },
        {
            title: 'Fashion Finesse',
            description: 'Fashion Finesse centers on providing stylish, high-quality apparel, including jeans, tops, and curated collections that merge comfort with modern trends. The brand focuses on affordable elegance, offering versatile pieces ranging from casual wear to sophisticated, consciously crafted, and expertly designed attire.'
        },
        {
            title: 'Fashion Fanatic',
            description: 'Fanatic Fashion specializes in luxury, cruelty-free, and gender-neutral perfumes, attars, and personal care products. Based in Surat, India, the brand focuses on crafting affordable, long-lasting fragrances with options like "M2" and "Musk Veluro," offering an extensive online collection.'
        },
    ]

    const similar = [
        {
            img: assets.p_img19,
            title: 'Boy Round Neck Pure Cotton T-shirt',
            description: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.'
        },
        {
            img: assets.p_img20,
            title: 'Women Palazzo Pants with Waist Belt',
            description: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.'
        },
        {
            img: assets.p_img21,
            title: 'Women Zip-Front Relaxed Fit Jacket',
            description: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.'
        }
    ]

    const tags = ["Men", "Women", "Kide"];


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post("https://backend-uaa2.onrender.com/api/feedback/add",
                {first_name, last_name, email, feedback,});

            if (response.data.success) {
                toast.success("Feedback Added Successfully!");

                setFirst_name("");
                setLast_name("");
                setEmail("");
                setFeedback("");
            }

        } catch (error) {
            console.log(error.response?.data);
            toast.error("Error adding feedback");
        }
    }

    return (
        <>
            <Scroll/>
            <Header/>
            <Smallhero
                text1="Blog Detail"
                text2="Fashion blogging is rapidly becoming a highly profitable new media business, with a mixture of independent blogs and well-funded fashion blog networks competing to dominate the space."/>

            <section className="my-10 sm:my-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 mx-5">

                        <div className='w-full'>
                            <img className="w-full h-1/2 sm:h-[600px] object-cover"
                                 src={`https://backend-uaa2.onrender.com/images/${product.image}`} alt={product.name}/>

                            <div className='p-5'>
                                <div className='flex items-center gap-5'>
                                    <p className='flex items-center gap-2 text-secondary text-sm dark:text-light'>
                                        <IconUser className='w-4 h-4 text-primary'/> Admin</p>
                                    <p className='flex items-center gap-2 text-secondary text-sm dark:text-light'>
                                        <IconMessage className='w-4 h-4 text-primary'/> Comments</p>
                                </div>

                                {fashion.map(({title, description}, i) => (
                                    <div key={i} className='mt-5'>
                                        <h1 className='mt-4 font-bold text-xl sm:text-2xl font-lexend dark:text-white'>{title}</h1>
                                        <p className='mt-3 sm:text-lg text-sm text-secondary line-clamp-4 dark:text-light'>{description}</p>
                                    </div>
                                ))}

                                <div className='mt-5'>
                                    <form onSubmit={onSubmitHandler}>
                                        <div className='bg-primary/10 rounded-lg p-5'>
                                            <h1 className='font-bold text-lg sm:text-xl font-lexend dark:text-white'>Post
                                                Feedback</h1>

                                            <div className='flex items-center justify-between gap-5 mt-5'>
                                                <div className='flex flex-col w-full'>
                                                    <label htmlFor=""
                                                           className='text-secondary text-sm sm:text-lg dark:text-light'>First
                                                        Name</label>
                                                    <input type="text" placeholder='Enter any your first name'
                                                           className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary'
                                                           value={first_name}
                                                           onChange={(e) => setFirst_name(e.target.value)}/>
                                                </div>
                                                <div className='flex flex-col w-full'>
                                                    <label htmlFor=""
                                                           className='text-secondary text-sm sm:text-lg dark:text-light'>Last
                                                        Name</label>
                                                    <input type="text" placeholder='Enter any your first name'
                                                           className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary'
                                                           value={last_name}
                                                           onChange={(e) => setLast_name(e.target.value)}/>
                                                </div>
                                            </div>

                                            <div className='mt-5'>
                                                <label htmlFor=""
                                                       className='text-secondary text-sm sm:text-lg dark:text-light'>Email:</label>
                                                <input type="email" placeholder='Enter any Your Email'
                                                       className='w-full h-10 mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary'
                                                       value={email} onChange={(e) => setEmail(e.target.value)}/>
                                            </div>

                                            <div className='mt-5 flex flex-col'>
                                                <label htmlFor=""
                                                       className='text-secondary text-sm sm:text-lg dark:text-light'>Feedback:</label>
                                                <textarea name="" id="" cols="30" rows="4"
                                                          className='mt-2 ps-2 rounded bg-transparent border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary'
                                                          value={feedback}
                                                          onChange={(e) => setFeedback(e.target.value)}></textarea>
                                            </div>

                                            <div>
                                                <button type='submit'
                                                        className='mt-5 border px-5 py-2 text-sm sm:text-lg border-primary rounded-full hover:bg-primary-gradient hover:text-white dark:text-white'>Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 flex flex-col w-full md:w-2/5">
                            <div>
                                <h1 className='font-bold text-lg sm:text-xl font-lexend dark:text-white'>Similar
                                    Blog</h1>

                                {similar.map(({img, title, description}, i) => (
                                    <div key={i}
                                         className='flex items-center gap-4 mt-5 border dark:border-secondary rounded-lg'>
                                        <div>
                                            <img className="w-50 rounded-tl-lg" src={img} alt="menu"/>
                                        </div>
                                        <div className='pe-4'>
                                            <h1 className='text-sm font-bold font-lexend dark:text-white'>{title}</h1>
                                            <p className='text-xs text-secondary line-clamp-3 dark:text-light mt-2'>{description}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            <div className='mt-5'>
                                <h1 className='font-bold text-lg sm:text-xl font-lexend dark:text-white'>Tag</h1>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    {tags.map((tag) => (
                                        <span key={tag}
                                              className="px-5 py-1 bg-primary/10 rounded-full cursor-pointer hover:bg-primary-gradient hover:text-white sm:text-lg text-sm dark:text-light">{tag}</span>
                                    ))}
                                </div>


                            </div>

                            <div className="mt-10 relative group overflow-hidden">
                                <img className="w-full sm:h-[600px] object-cover cursor-pointer"
                                     src={`http://localhost:5000/images/${product.image}`} alt={product.name}/>

                                <div
                                    className="absolute inset-0 bg-black/50 p-5 hidden group-hover:flex flex-col justify-end transition-all duration-300">
                                    <h1 className="font-bold text-lg sm:text-xl font-lexend text-white">{product.name}</h1>
                                    <p className="text-sm text-gray-200 line-clamp-4 mt-1">{product.description}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default BlogDetail;
