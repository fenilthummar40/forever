import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {assets} from "../assets/image/assets.js";
import {toast} from "react-toastify";

function Newpassword() {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!password || !confirmPassword) {
            toast.error("Please fill all fields");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const storedData = JSON.parse(localStorage.getItem("registrationData"));
        if (!storedData) {
            toast.error("No registered user found");
            return;
        }

        const updatedData = {
            ...storedData,
            password: password
        };

        localStorage.setItem("registrationData", JSON.stringify(updatedData));
        localStorage.removeItem("otp");
        toast.success("Password updated successfully!");

        navigate("/login");
    };

    return (
        <section className="h-screen flex items-center justify-center px-5 bg-primary-gradient">
            <div className="max-w-7xl mx-auto p-5 border w-full rounded-lg bg-white">
                <div className='grid grid-cols-1 sm:grid-cols-2 mx-5'>

                    <div className='flex justify-center items-center flex-col p-5'>
                        <img className="w-32" src={assets.logo} alt="logo"/>
                        <img src={assets.register_form} alt="image"/>
                    </div>

                    <div className='flex justify-center items-center flex-col p-5'>
                        <form className='w-full' onSubmit={handleSubmit}>
                            <h1 className="text-lg sm:text-2xl font-bold text-center">New Password</h1>
                            <p className='text-center mt-5'>Please set your new password</p>

                            <div className="mt-5 flex flex-col">
                                <label>Password :</label>
                                <input type="password" placeholder="Enter your password" value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                       className="w-full h-10 mt-2 ps-2 rounded-lg bg-transparent border border-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"/>
                            </div>

                            <div className="mt-5 flex flex-col">
                                <label>Confirm Password :</label>
                                <input type="password" placeholder="Confirm your password" value={confirmPassword}
                                       onChange={(e) => setConfirmPassword(e.target.value)}
                                       className="w-full h-10 mt-2 ps-2 rounded-lg bg-transparent border border-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"/>
                            </div>

                            <button type="submit"
                                    className="mt-6 py-2 w-full bg-primary-gradient text-white rounded-lg text-sm sm:text-lg">Confirm
                                Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newpassword;
