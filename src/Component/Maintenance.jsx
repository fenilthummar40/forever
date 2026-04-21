import React, {useEffect, useState} from "react";
import bgImage from "../assets/image/welcom-bg-image.png";

function Maintenance() {
    const calculateTimeLeft = () => {
        const difference = +new Date("2026-12-31") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="h-screen  text-white relative overflow-hidden" style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>

            {/* Glow Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] rounded-full border border-cyan-400/20 blur-2xl"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">

                <h1 className="text-4xl md:text-6xl tracking-[0.5em] font-semibold mb-12 text-primary drop-shadow-[0_0_10px_#00f0ff]">
                    COMING SOON</h1>

                <div className="flex gap-6 mb-8">
                    {["days", "hours", "minutes", "seconds"].map((unit, i) => (
                        <div key={i} className="text-center">
                            <div className="flex gap-1">
                                {(timeLeft[unit] || 0)
                                    .toString()
                                    .padStart(2, "0")
                                    .split("")
                                    .map((num, index) => (
                                        <div key={index}
                                             className="bg-primary px-3 py-2 rounded-md text-xl font-bold">{num}
                                        </div>
                                    ))}
                            </div>
                            <p className="text-xs mt-2 text-gray-400 uppercase">{unit}</p>
                        </div>
                    ))}
                </div>

                <p className="text-gray-400 max-w-md text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore.</p>

                <button
                    className="bg-primary-gradient px-6 py-2 rounded-full text-sm tracking-wider shadow-lg">SUBSCRIBE
                </button>
            </div>
        </section>
    );
}

export default Maintenance;