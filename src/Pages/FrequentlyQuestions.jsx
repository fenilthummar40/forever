import React, {useState} from "react";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import Smallhero from "../Component/Smallhero.jsx";

function FrequentlyQuestions() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Mauris congue euismod purus at semper. Morbi et vulputate massa?",
            answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunceget arcu vulputate, euporttitor tellus commodo.",
        },

        {
            question: "Donec mattis finibus elit ut tristique?",
            answer: "Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis.",
        },

        {
            question: "Aenean elit orci, efficitur quis nisl at, accumsan?",
            answer: "Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem.",
        },

        {
            question: "Pellentesque habitant morbi tristique senectus et netus?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
    ];

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <Scroll/>
            <Header/>
            <Smallhero text1={`Below are frequently asked questions, you may find the answer for yourself`}
                       text2={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus mattis.`}/>

            <section className="my-10">
                <div className="max-w-4xl mx-auto space-y-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                            <button onClick={() => toggle(index)}
                                    className="w-full flex justify-between items-center p-4 bg-secondary/30 hover:bg-secondary/20">
                                <span className="text-left dark:text-white">{faq.question}</span>
                                <span className="text-xl dark:text-light">{activeIndex === index ? "−" : "+"}</span>
                            </button>
                            {activeIndex === index && (
                                <div className="p-4 bg-white text-gray-600">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default FrequentlyQuestions;