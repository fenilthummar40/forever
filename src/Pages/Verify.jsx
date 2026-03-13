import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {assets} from "../assets/image/assets.js";
import {toast} from "react-toastify";

const Verify = () => {

    const navigate = useNavigate();
    const [otpInput, setOtpInput] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);

    const storedOtp = localStorage.getItem("otp");

    useEffect(() => {
        if (!storedOtp) {
            toast.error("No OTP found. Please request again.");
            navigate("/ForgotPassword");
        }
    }, [storedOtp, navigate]);

    const handleChange = (value, index) => {

        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otpInput];
        newOtp[index] = value;
        setOtpInput(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const enteredOtp = otpInput.join("");

        if (enteredOtp.length !== 6) {
            toast.error("Please enter complete OTP");
            return;
        }

        if (enteredOtp === storedOtp) {

            toast.success("OTP Verified Successfully!");

            // remove otp after verification
            localStorage.removeItem("otp");

            navigate("/NewPassword");

        } else {
            toast.error("Invalid OTP");
        }
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
                            <h1 className="text-lg sm:text-2xl font-bold text-center">Verify Your OTP</h1>
                            <p className="text-center mt-5 text-lg font-medium">Enter the 6-digit code</p>
                            <div className="mt-5 flex items-center justify-center gap-4">
                                {otpInput.map((digit, index) => (
                                    <input key={index} type="text" maxLength="1" value={digit}
                                           ref={(el) => (inputRefs.current[index] = el)}
                                           onChange={(e) =>
                                               handleChange(e.target.value, index)}
                                           className="w-10 h-10 text-center rounded-lg bg-transparent border border-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"/>

                                ))}
                            </div>
                            <button type="submit"
                                    className="mt-5 py-2 w-full bg-primary-gradient text-white rounded-full">Confirm
                                Code
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Verify;