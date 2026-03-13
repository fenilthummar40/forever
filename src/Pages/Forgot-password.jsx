import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {assets} from "../assets/image/assets.js";
import {toast} from "react-toastify";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter your email");
            return;
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        localStorage.setItem("otp", otp);
        console.log("Stored OTP:", otp);

        toast.success("OTP generated successfully!");
        navigate("/Verify");
    };

    return (
        <section className="h-screen flex items-center justify-center px-5 bg-primary-gradient">
            <div className="max-w-7xl mx-auto p-5 border w-full rounded-lg bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 mx-5">

                    <div className="flex justify-center items-center flex-col p-5">
                        <img className="w-32" src={assets.logo} alt="logo"/>
                        <img src={assets.register_form} alt="image"/>
                    </div>

                    <div className="flex justify-center items-center flex-col p-5">
                        <form className="w-full" onSubmit={handleSubmit}>
                            <h1 className="text-lg sm:text-2xl font-bold text-center">Forgot Password</h1>
                            <p className="text-center mt-5 text-lg font-medium">Enter your email to generate OTP</p>

                            <div className="mt-5 flex flex-col">
                                <label>Email :</label>
                                <input type="email" placeholder="Enter your email" value={email}
                                       onChange={(e) => setEmail(e.target.value)} required
                                       className="w-full h-10 mt-2 ps-2 rounded-lg bg-transparent border border-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"/>
                            </div>

                            <button type="submit"
                                    className="mt-5 py-2 w-full bg-primary-gradient text-white rounded-full">Send OTP
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ForgotPassword;
