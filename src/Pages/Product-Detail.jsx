import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Smallhero from "../Component/Smallhero.jsx";
import {assets} from "../assets/image/assets.js";
import {IconArrowLeft, IconShoppingCartPlus, IconStarFilled} from "@tabler/icons-react";
import {ChevronDown, ChevronUp} from "lucide-react";
import Related from "../Component/Related.jsx";
import Footer from "../Component/Footer.jsx";
import {useCart} from "../Context/CartContext";
import {toast} from "react-toastify";
import axios from "axios";

function ProductDetail() {
    const [products, setProducts] = useState([]);
    const [selectedSize, setSelectedSize] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("depiction");

    const {id} = useParams();
    const {addToCart} = useCart();

    const notify = () => {
        toast("Product Added Successfully");
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast("Please select a size");
            return;
        }

        addToCart(product, selectedSize);
        notify();
    };


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
        return <div className="text-center mt-20">Product not found</div>;
    }

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };


    const Consider = [
        {
            img: assets.quality_icon,
            title: "Consider Brand Identity",
            description:
                "When naming your currency exchange business, you'll want to think about your brand identity.",
        },
        {
            img: assets.quality_icon,
            title: "Compass Mortgage",
            description:
                "When naming your currency exchange business, you'll want to think about your brand identity.",
        },
    ];

    return (
        <>
            <Scroll/>
            <Header/>

            <Smallhero
                text1="Product Details"
                text2="A short clothing business description highlights your niche, unique selling proposition, target customer, and brand feel."/>

            <section className="my-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-5">
                    <div>
                        <img className="w-full rounded-2xl" src={`https://backend-uaa2.onrender.com/images/${product.image}`}
                             alt={product.name}/>
                    </div>

                    <div className="flex items-start justify-center flex-col">
                        <h1 className="text-3xl font-bold dark:text-white">{product.name}</h1>
                        <p className="mt-4 text-secondary dark:text-light">{product.description}</p>

                        <div className="flex gap-1 mt-4">
                            {[...Array(5)].map((_, i) => (
                                <IconStarFilled key={i} className="w-4 h-4 text-primary"/>))}
                        </div>

                        <div className="flex gap-3 mt-6">
                            {product.size?.map((size) => (
                                <button key={size} onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 border rounded-lg dark:text-light dark:border-secondary ${selectedSize === size
                                            ? "bg-primary-gradient text-white"
                                            : "hover:bg-primary-gradient hover:text-white"}`}>{size}
                                </button>
                            ))}
                        </div>

                        <div className="mt-5 lg:mt-10">
                            <button
                                className="flex justify-between items-center w-full p-4 bg-primary/10 rounded-t-lg"
                                onClick={toggleAccordion}
                            ><span className="font-medium text-sm sm:text-lg dark:text-white">{product.name}</span>
                                {isOpen ? (
                                    <ChevronUp className="w-5 h-5 dark:text-light"/>
                                ) : (
                                    <ChevronDown className="w-5 h-5 dark:text-light"/>
                                )}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                    isOpen
                                        ? "max-h-screen opacity-100"
                                        : "max-h-0 opacity-0"
                                }`}>
                                <div className="p-4 bg-secondary/10 rounded-b-lg">
                                    <p className="text-secondary text-sm sm:text-lg dark:text-light">
                                        We craft timeless essentials from premium organic cotton,
                                        designed for comfort and effortless everyday style.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                            {Consider.map((item, i) => (
                                <div key={i}
                                     className="border flex gap-3 p-3 rounded-lg dark:border-secondary">
                                    <div>
                                        <img className="object-cover w-20" src={item.img} alt={item.title}/>
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <h1 className="text-lg font-bold dark:text-white">{item.title}</h1>
                                        <p className="text-sm text-secondary dark:text-light mt-1">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="flex items-center gap-5 mt-10">
                            <Link to="/Collection"
                                  className="px-5 py-2 bg-primary-gradient text-white rounded-full flex items-center gap-2">
                                <IconArrowLeft className="w-5 h-5"/>Back
                            </Link>

                            <button onClick={handleAddToCart}
                                    className="px-5 py-2 bg-primary-gradient text-white rounded-full flex items-center gap-2">
                                <IconShoppingCartPlus className="w-5 h-5"/>Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-20 sm:my-10">
                <div className="max-w-7xl mx-auto">
                    <div className="rounded-2xl mx-5 overflow-hidden">
                        <div className="bg-primary/10 p-4 flex items-center gap-6 rounded-t-2xl">
                            <button onClick={() => setActiveTab("depiction")}
                                    className={`px-5 py-2 text-sm sm:text-lg rounded-full border transition-all duration-300 ${activeTab === "depiction"
                                        ? "bg-primary-gradient text-white border-transparent shadow-md scale-105"
                                        : "border-primary text-primary hover:bg-primary-gradient hover:text-white"}`}>Depiction
                            </button>

                            <button onClick={() => setActiveTab("review")}
                                    className={`px-5 py-2 text-sm sm:text-lg rounded-full border transition-all duration-300 ${activeTab === "review"
                                        ? "bg-primary-gradient text-white border-transparent shadow-md scale-105"
                                        : "border-primary text-primary hover:bg-primary-gradient hover:text-white"}`}>Review
                            </button>
                        </div>

                        <div className="p-5 bg-secondary/10 rounded-b-2xl transition-all duration-300">
                            {activeTab === "depiction" ? (
                                <p className="text-sm text-secondary dark:text-light">
                                    This premium organic cotton essential is crafted for everyday
                                    comfort and effortless style. Designed with durability and
                                    sustainability in mind, it elevates your wardrobe while keeping
                                    things minimal and timeless.
                                    This premium organic cotton essential is crafted for everyday
                                    comfort and effortless style. Designed with durability and
                                    sustainability in mind, it elevates your wardrobe while keeping
                                    things minimal and timeless.
                                </p>

                            ) : (
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-bold dark:text-white">John Doe</h3>
                                        <p className="text-sm text-secondary dark:text-light">
                                            Amazing quality! The fabric feels premium and fits perfectly.
                                            Highly recommended.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold dark:text-white">Sarah Smith</h3>
                                        <p className="text-sm text-secondary dark:text-light">
                                            Very comfortable and stylish. Delivery was quick too!
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>


            <Related
                currentId={product._id}
                category={product.category}
                subCategory={product.subCategory}
            />

            <Footer/>
        </>
    );
}

export default ProductDetail;
