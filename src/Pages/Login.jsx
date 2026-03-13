import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import {assets} from "../assets/image/assets.js";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/user/login",
                {email, password}
            );

            if (response.data.success) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user)
                );

                toast.success(response.data.message);
                navigate("/");
            }

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Server not responding");
            }
        }
    };

    return (
        <section className="h-screen flex items-center justify-center px-5 bg-primary-gradient">
            <div className="max-w-7xl mx-auto p-5 border w-full rounded-lg bg-white shadow-lg">
                <div className='grid grid-cols-1 sm:grid-cols-2 mx-5'>

                    <div className='flex justify-center items-center flex-col p-5'>
                        <img className="w-32" src={assets.logo} alt="logo"/>
                        <img src={assets.register_form} alt="image"/>
                    </div>

                    <div className='flex justify-center items-center flex-col p-5'>
                        <form onSubmit={handleLogin} className='w-full'>
                            <h1 className="text-lg sm:text-2xl font-bold text-center">Login</h1>

                            <div className="mt-5 flex flex-col">
                                <label>Email :</label>
                                <input type="email" placeholder="Email" required value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       className="w-full h-10 mt-2 ps-2 rounded-lg border border-primary focus:outline-none focus:ring-1 focus:ring-primary"/>
                            </div>

                            <div className="mt-5 flex flex-col">
                                <label>Password :</label>
                                <input type="password" placeholder="Password" required value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                       className="w-full h-10 mt-2 ps-2 rounded-lg border border-primary focus:outline-none focus:ring-1 focus:ring-primary"/>
                            </div>

                            <button type="submit"
                                    className="mt-6 py-2 w-full bg-primary-gradient text-white rounded-lg">Login
                            </button>

                            <div className='flex justify-between mt-5'>
                                <Link to='/register'>Register</Link>
                                <Link to='/forgotpassword'>Forgot password?</Link>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Login;