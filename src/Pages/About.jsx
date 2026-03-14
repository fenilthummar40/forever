import React, {useState, useEffect} from "react";
import {assets} from "../assets/image/assets.js";
import {IconArrowRight, IconPointFilled, IconStarFilled} from "@tabler/icons-react";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Smallhero from "../Component/Smallhero.jsx";
import Subtitle from "../Component/Subtitle.jsx";
import Discount from "../Component/Discount.jsx";
import Footer from "../Component/Footer.jsx";
import axios from "axios";

function About() {

    const [feedback, setFeedback] = useState([]);

    const fetchFeedback = async () => {
        try {
            const response = await axios.get("https://backend-uaa2.onrender.com/api/feedback/list");

            if (response.data.success) {
                setFeedback(response.data.Feedbacks);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFeedback();
    }, []);


    return (
        <>
            <Scroll/>
            <Header/>
            <Smallhero text1={`About Us`}
                       text2={`Fashion Forever Collection brings timeless style and modern trends together in one versatile wardrobe. Each piece is thoughtfully designed with premium fabrics, perfect fits, and attention to detail, offering comfort, confidence, and elegance for every occasion. From everyday essentials to statement outfits,  Fashion Forever Collection is made for those who believe great fashion never goes out of style.`}/>

            <section>
                <div className='sm:my-20 my-10 max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-5'>
                        <div>
                            <img className="cursor-pointer" src={assets.about_img} alt=""/>
                        </div>
                        <div className='flex flex-col justify-center py-5'>
                            <Subtitle text1={`About Fashion Forever`}/>
                            <p className='text-sm md:text-lg text-secondary p-5 font-normal line-clamp-5 dark:text-light'>Men's
                                top wear
                                spans a wide range of styles essential for a versatile wardrobe, including T-shirts,
                                shirts,
                                polos, jackets, and sweaters, with brands like Peter England, DaMENSCH, and luxury
                                labels
                                offering options for casual, formal, and smart-casual looks. Key choices include fitted
                                shirts, comfortable tees, and stylish jackets. </p>

                            <ul className='p-5'>
                                <li className='flex gap-2'><IconPointFilled className='text-secondary dark:text-light'/>
                                    <p
                                        className='text-secondary text-sm line-clamp-2 dark:text-light'>Versatile,
                                        everyday options ranging
                                        from
                                        cotton tees to tailored polos.</p></li>
                                <li className='flex gap-2'><IconPointFilled className='text-secondary dark:text-light'/>
                                    <p
                                        className='text-secondary text-sm line-clamp-2 dark:text-light'>Options include
                                        denim, chambray, and
                                        patterned shirts (e.g., Roadster, Nautica).</p></li>
                                <li className='flex gap-2'><IconPointFilled className='text-secondary dark:text-light'/>
                                    <p
                                        className='text-secondary text-sm line-clamp-2 dark:text-light'>Structured
                                        shirts for office or
                                        events,
                                        often in materials like crisp cotton.</p></li>
                                <li className='flex gap-2'><IconPointFilled className='text-secondary dark:text-light'/>
                                    <p
                                        className='text-secondary text-sm line-clamp-2 dark:text-light'>Use a 3-colour
                                        rule (dominant,
                                        secondary, accent) to create balanced, stylish outfits.</p></li>
                                <li className='flex gap-2'><IconPointFilled className='text-secondary dark:text-light'/>
                                    <p
                                        className='text-secondary text-sm line-clamp-2 dark:text-light'>Ensure shirts do
                                        not droop over
                                        shoulders, and sleeves end just above the base of the thumb.</p></li>
                            </ul>

                            <div>
                                <button type='Submit'
                                        className='ms-5 mt-5 bg-primary-gradient rounded-full px-5 py-2 text-white flex items-center gap-2'>More <IconArrowRight/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='sm:my-20 my-10 max-w-7xl mx-auto'>
                    <Subtitle text1={`Customers Feedback`}/>

                    <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-5'>
                        {Array.isArray(feedback) && feedback.length > 0 ? (
                            feedback.map(({_id, feedback, rating}) => (
                                <div key={_id}
                                     className="border dark:border-secondary rounded-lg bg-secondary/10 p-5 cursor-pointer hover:shadow-md transition duration-300">
                                    <p className="text-secondary text-center text-sm line-clamp-4 dark:text-light">{feedback}</p>

                                    <div className="flex items-center justify-between">
                                        <img className="mt-5" src={assets.quality_icon} alt=""/>

                                        <div className="flex items-center gap-1 mt-5">
                                            {[...Array(rating || 5)].map((_, index) => (
                                                <IconStarFilled key={index} className="text-primary w-4 h-4"/>))}
                                            <span className="text-secondary dark:text-light">({rating || 5})</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center col-span-full text-gray-500">No Feedback Found</p>
                        )}
                    </div>
                </div>
            </section>

            <Discount/>
            <Footer/>
        </>
    );
}

export default About;
