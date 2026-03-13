import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import {
    IconBrandFacebook,
    IconBrandGoogle,
    IconBrandTwitter,
} from "@tabler/icons-react";
import {assets} from "../assets/image/assets.js";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5000/api/user/register",
                {name, email, password,}
            );

            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/login");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Server error. Please try again.");
            console.log(error);
        }
    };

    return (
        <section className="h-auto sm:h-screen flex items-center justify-center bg-primary-gradient p-5">
            <div className="max-w-7xl mx-auto w-full rounded-lg bg-white shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 mx-5">

                    <div className="flex justify-center items-center flex-col p-5">
                        <img className="w-32" src={assets.logo} alt="logo"/>
                        <img src={assets.register_form} alt="register"/>
                    </div>

                    <div className="flex justify-center items-center flex-col p-5">
                        <form onSubmit={handleSubmit} className="w-full">
                            <h1 className="text-lg sm:text-2xl font-bold text-center">Register</h1>

                            <div className="mt-5 flex flex-col">
                                <label>User Name :</label>
                                <input type="text" placeholder="Enter your user name" value={name}
                                       onChange={(e) => setName(e.target.value)} required
                                       className="w-full h-10 mt-2 ps-2 rounded-lg border border-primary focus:outline-none focus:ring-1 focus:ring-primary"/>
                            </div>

                            <div className="mt-5 flex flex-col">
                                <label>Email :</label>
                                <input type="email" placeholder="Enter your email" value={email}
                                       onChange={(e) => setEmail(e.target.value)} required
                                       className="w-full h-10 mt-2 ps-2 rounded-lg border border-primary focus:outline-none focus:ring-1 focus:ring-primary"/>
                            </div>

                            <div className="mt-5 flex flex-col">
                                <label>Password :</label>
                                <input type="password" placeholder="Enter your password" value={password}
                                       onChange={(e) => setPassword(e.target.value)} required
                                       className="w-full h-10 mt-2 ps-2 rounded-lg border border-primary focus:outline-none focus:ring-1 focus:ring-primary"/>
                            </div>

                            <button type="submit"
                                    className="mt-6 py-2 w-full bg-primary-gradient text-white rounded-lg text-sm sm:text-lg">Register
                            </button>

                            <p className="text-center mt-5 text-sm">
                                Already have an account?{" "}
                                <Link to="/login" className="text-primary font-bold">
                                    Login
                                </Link>
                            </p>

                            <div className="border mt-5"></div>

                            <div className="flex items-center justify-center mt-5 gap-4">
                                    <span
                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-gradient cursor-pointer">
                                        <IconBrandFacebook className="w-5 text-white"/>
                                    </span>

                                <span
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-gradient cursor-pointer">
                                        <IconBrandTwitter className="w-5 text-white"/>
                                    </span>

                                <span
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-gradient cursor-pointer">
                                    <IconBrandGoogle className="w-5 text-white"/>
                                </span>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
