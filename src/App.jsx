import React , {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Collection from "./Pages/Collection.jsx";
import Blog from "./Pages/Blog.jsx";
import Contact from "./Pages/Contact.jsx";
import Productdetail from "./Pages/Product-Detail.jsx";
import BlogDetail from "./Pages/Blog-Detail.jsx";
import Cart from "./Pages/Cart.jsx";
import {ToastContainer} from "react-toastify";
import Checkout from "./Pages/Checkout.jsx";
import OrderSucces from "./Pages/Order-succes.jsx";
import Profile from "./Pages/Profile.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import ForgotPassword from "./Pages/Forgot-password.jsx";
import Verify from "./Pages/Verify.jsx";
import Newpassword from "./Pages/New-Password.jsx";
import Landing from "./Pages/Landing.jsx";
import ErrorPage from "./Pages/Error-Page.jsx";
import Subscription from "./Pages/Subscription.jsx";
import axios from "axios";
import ProductDetail from "./Pages/Product-Detail.jsx";

function App() {

        useEffect(() => {
            axios.get("http://localhost:5000/api/test")
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Collection" element={<Collection/>}/>
                    <Route path="/Blog" element={<Blog/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/Product-Detail" element={<Productdetail/>}/>
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/Blog/:id" element={<BlogDetail/>}/>
                    <Route path="/Cart" element={<Cart/>}/>
                    <Route path="/Checkout" element={<Checkout/>}/>
                    <Route path="/Order-Success" element={<OrderSucces/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
                    <Route path="/Verify" element={<Verify/>}/>
                    <Route path="/Newpassword" element={<Newpassword/>}/>
                    <Route path="/Landing" element={<Landing/>}/>
                    <Route path="/Subscription" element={<Subscription/>}/>
                    <Route path="/Error-Page" element={<ErrorPage/>}/>

                    <Route path="*" element={<ErrorPage />} />
                </Routes>

                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar="false"
                    closeOnClick="true"
                    pauseOnHover="true"
                    draggable="true"
                    progress="true"
                />
            </BrowserRouter>
        </>
    )
}

export default App
