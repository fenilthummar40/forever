import React, {useEffect} from "react";
import Scroll from "../Component/Scroll.jsx";
import Header from "../Component/Header.jsx";
import Smallhero from "../Component/Smallhero.jsx";
import Footer from "../Component/Footer.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {assets} from "../assets/image/assets.js";
import {
    IconBell,
    IconBrandBilibili,
    IconEdit,
    IconHeart,
    IconMenuOrder,
    IconShieldLock,
    IconStarFilled,
    IconUser
} from "@tabler/icons-react";
import axios from "axios";
import {toast} from "react-toastify";
import {useCart} from "../Context/CartContext";


function Profile() {

    const [isEdit, setIsEdit] = useState(false);
    const [activeTab, setActiveTab] = useState("profile");
    const {clearCart} = useCart();


    const notification = [
        {
            img: assets.p_img1,
            title: 'Women Round Neck Cotton Top',
            description: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.'
        },
        {
            img: assets.p_img2_1,
            title: 'Men Round Neck Pure Cotton T-shirt',
            description: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.'
        },
        {
            img: assets.p_img3,
            title: 'Girls Round Neck Cotton Top',
            description: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.'
        },
        {
            img: assets.p_img4,
            title: 'Men Round Neck Pure Cotton T-shirt',
            description: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.'
        }
    ]

    const orderr = [
        {
            img: assets.p_img1,
            title: 'Women Round Neck Cotton Top',
            description: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
            price: "₹ 590",
            size: "M",
            quantity: "1"
        },
        {
            img: assets.p_img2_1,
            title: 'Men Round Neck Pure Cotton T-shirt',
            description: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
            price: "₹ 900",
            size: "XL",
            quantity: "1"
        },
    ]


    const navigate = useNavigate();

    const handleDeleteAccount = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                toast.error("You are not logged in");
                return;
            }

            const response = await axios.delete(
                "https://backend-uaa2.onrender.com/api/user/delete",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.data.success) {
                toast.success(response.data.message);

                localStorage.removeItem("token");
                localStorage.removeItem("user");
                clearCart();

                setTimeout(() => {
                    navigate("/register");
                }, 1000);
            }

        } catch (error) {
            toast.error(error.response?.data?.message || "Delete failed");
        }
    };


    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [DOB, setDOB] = useState("");
    const [address, setAddress] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
             const user = JSON.parse(localStorage.getItem("user"));
            const response = await axios.post("https://backend-uaa2.onrender.com/api/profile/add",
                {userid: user.id, first_name, last_name, email, phone, city, pin_code: pinCode, DOB, address}
            );

            if (response.data.success) {
                toast.success("Profile Added Successfully!");

                setFirst_name("");
                setLast_name("");
                setEmail("");
                setPhone("");
                setCity("");
                setPinCode("");
                setDOB("");
                setAddress("");
            }

        } catch (error) {
            console.log(error.response?.data);
            toast.error("Error adding profile");
        }
    };


    const [profile, setProfile] = useState([]);

    const fetchProfile = async () => {
        try {
            const response = await axios.get("https://backend-uaa2.onrender.com/api/profile/list");

            if (response.data.success) {
                setProfile(response.data.profiles);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;

    const userProfile = profile.filter((item) => item.userid === userId);


    const [order, setOrder] = useState([]);

    const fetchOrder = async () => {
        try {
            const response = await axios.get("https://backend-uaa2.onrender.com/api/order/list");

            if (response.data.success) {
                setOrder(response.data.Orders);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchOrder();
    }, []);

    const userOrder = order.filter((item) => item.userid === userId);


    const handleDeleteOrder = async (id) => {
        console.log(id);
        try {
            const response = await axios.delete(`https://backend-uaa2.onrender.com/api/order/delete/${id}`);

            if (response.data.success) {
                toast.success("Order Deleted");
                fetchOrder();
            }

        } catch (error) {
            toast.error("Delete Failed");
        }
    };


    return (
        <>
            <div>
                <Scroll/>
                <Header/>
                <Smallhero text1={`My Profile`}
                           text2={`A profile details page typically acts as a centralized dashboard containing a user's personal information (name, photo), contact data, and security settings.`}/>

                <section className='my-10 sm:my-20'>
                    <div className='max-w-7xl mx-auto bg-secondary/10 p-5 rounded-lg'>
                        <div className='flex justify-between gap-4'>
                            <div
                                className='border w-1/5 p-4 bg-white dark:bg-darkMode/20 dark:border-secondary rounded-lg hidden md:block'>
                                <ul>
                                    <li>
                                        <button onClick={() => setActiveTab("profile")}
                                                className={`font-medium text-lg flex items-center gap-2 dark:border-secondary dark:text-white ${
                                                    activeTab === "profile" ? "text-white bg-primary/80 px-5 py-2 rounded-full w-full" : "border w-full px-5 py-2 rounded-full"}`}>
                                            <IconUser className='w-5'/> My Profile
                                        </button>
                                    </li>

                                    <li className='mt-5'>
                                        <button onClick={() => setActiveTab("security")}
                                                className={`font-medium text-lg flex items-center gap-2 dark:border-secondary dark:text-white ${
                                                    activeTab === "security" ? "text-white bg-primary/80 px-5 py-2 rounded-full w-full" : "border w-full px-5 py-2 rounded-full"}`}>
                                            <IconShieldLock className='w-5'/> Security
                                        </button>
                                    </li>

                                    <li className='mt-5'>
                                        <button onClick={() => setActiveTab("notification")}
                                                className={`font-medium text-lg flex items-center gap-2 dark:border-secondary dark:text-white ${
                                                    activeTab === "notification" ? "text-white bg-primary/80 px-5 py-2 rounded-full w-full" : "border w-full px-5 py-2 rounded-full"}`}>
                                            <IconBell className='w-5'/> Notification
                                        </button>
                                    </li>

                                    <li className='mt-5'>
                                        <button onClick={() => setActiveTab("order")}
                                                className={`font-medium text-lg flex items-center gap-2 dark:border-secondary dark:text-white ${
                                                    activeTab === "order" ? "text-white bg-primary/80 px-5 py-2 rounded-full w-full" : "border w-full px-5 py-2 rounded-full"}`}>
                                            <IconMenuOrder className='w-5'/> My Order
                                        </button>
                                    </li>

                                    <li className='mt-5'>
                                        <button onClick={() => setActiveTab("wishlists")}
                                                className={`font-medium text-lg flex items-center gap-2 dark:border-secondary dark:text-white ${
                                                    activeTab === "wishlists" ? "text-white bg-primary/80 px-5 py-2 rounded-full w-full" : "border w-full px-5 py-2 rounded-full"}`}>
                                            <IconHeart className='w-5'/> Wishlists
                                        </button>
                                    </li>

                                    <li className='mt-5'>
                                        <button onClick={() => setActiveTab("billing")}
                                                className={`font-medium text-lg flex items-center gap-2 dark:border-secondary dark:text-white ${
                                                    activeTab === "billing" ? "text-white bg-primary/80 px-5 py-2 rounded-full w-full" : "border w-full px-5 py-2 rounded-full"}`}>
                                            <IconBrandBilibili className='w-5'/> Billing
                                        </button>
                                    </li>

                                </ul>

                            </div>
                            <div
                                className='border w-full p-4 bg-white dark:bg-darkMode/20 dark:border-secondary rounded-lg'>
                                <h1 className='font-bold font-lexend text-lg dark:text-white'>Profile</h1>

                                <div
                                    className='border rounded-lg p-4 mt-5 flex items-center justify-between dark:border-secondary'>
                                    <div className='flex items-center gap-2'>
                                        <div className='hidden sm:block'>
                                            <div
                                                className='border w-16 h-16 flex items-center justify-center rounded-full bg-primary/50 dark:border-secondary'>
                                                <IconUser className='w-10'/>
                                            </div>
                                        </div>

                                        {userProfile.map((item) => (
                                            <div key={item._id}>
                                                <h6 className='font-bold text-lg dark:text-white'>{item.first_name}</h6>
                                                <p className='text-secondary text-sm dark:text-light'>{item.email}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className='flex '>
                                        <Link to="">
                                            <button
                                                className="py-1 px-5 bg-secondary/10 rounded-xl text-sm flex items-center gap-1 dark:bg-light">
                                                <IconEdit className='w-4'/> Edit
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                {activeTab === "profile" && (
                                    <>
                                        <div className='border rounded-lg p-4 mt-5 dark:border-secondary'>
                                            <div className='flex items-center justify-between'>
                                                <h6 className='font-bold font-lexend text-sm sm:text-lg dark:text-white'>Personal
                                                    information</h6>

                                                <button onClick={() => setIsEdit(!isEdit)}
                                                        className="py-1 px-5 bg-secondary/10 rounded-xl text-sm flex items-center gap-1 dark:bg-light">
                                                    <IconEdit className="w-4"/> {isEdit ? "Add" : "Edit"}
                                                </button>
                                            </div>

                                            {!isEdit ? (
                                                <div className="mt-5">
                                                    {userProfile.map((item) => (
                                                        <div key={item._id} className="flex gap-2 sm:gap-24 sm:flex-row flex-col">

                                                            <div>
                                                                <div>
                                                                    <span className="text-secondary dark:text-light">First Name:</span>
                                                                    <h6 className="font-semibold dark:text-white">{item.first_name}</h6>
                                                                </div>

                                                                <div className='mt-2'>
                                                                    <span className="text-secondary dark:text-light">Email:</span>
                                                                    <h6 className="font-semibold dark:text-white">{item.email}</h6>
                                                                </div>

                                                                <div className='mt-2'>
                                                                    <span className="text-secondary dark:text-light">City:</span>
                                                                    <h6 className="font-semibold dark:text-white">{item.city}</h6>
                                                                </div>

                                                                <div className='mt-2'>
                                                                    <span className="text-secondary dark:text-light">DOB:</span>
                                                                    <h6 className="font-semibold dark:text-white">{item.DOB}</h6>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div>
                                                                    <span className="text-secondary dark:text-light">Last Name:</span>
                                                                    <h6 className="font-semibold dark:text-white">{item.last_name}</h6>
                                                                </div>

                                                                <div className='mt-2'>
                                                                    <span className="text-secondary dark:text-light">Phone Number:</span>
                                                                    <h6 className="font-semibold dark:text-white">{item.phone}</h6>
                                                                </div>

                                                                <div className='mt-2'>
                                                                    <span className="text-secondary dark:text-light">Pin Code:</span>
                                                                    <h6 className="font-semibold dark:text-white">{item.pin_code}</h6>
                                                                </div>

                                                                <div className='mt-2'>
                                                                    <span className="text-secondary dark:text-light">Address:</span>
                                                                    <h6 className="font-semibold dark:text-white">{item.address}</h6>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    ))}

                                                    <div className='mt-5'>
                                                        <h6 className='font-bold font-lexend text-lg dark:text-light'>Bio</h6>
                                                        <p className='text-sm font-normal text-secondary line-clamp-5 dark:text-white'>Lorem
                                                            ipsum dolor sit amet consectetur, adipisicing elit. Vero
                                                            nihil sapiente cumque quis quidem excepturi assumenda
                                                            consequatur non hic, iusto eum magnam qui sint debitis quos
                                                            perspiciatis, cum deleniti. Sapiente.Lorem ipsum dolor sit
                                                            amet consectetur, adipisicing elit. Vero nihil sapiente
                                                            cumque quis quidem excepturi assumenda consequatur non hic,
                                                            iusto eum magnam qui sint debitis quos perspiciatis, cum
                                                            deleniti. Sapiente.</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <form onSubmit={onSubmitHandler}
                                                      className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className='flex flex-col gap-2'>
                                                        <label
                                                            className='text-sm text-secondary font-normal dark:text-white'
                                                            htmlFor="">First Name:</label>
                                                        <input type="text" placeholder="First Name"
                                                               className="border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary rounded-lg p-2 dark:bg-darkMode/20 dark:text-white"
                                                               value={first_name}
                                                               onChange={(e) => setFirst_name(e.target.value)}
                                                               required/>
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <label
                                                            className='text-sm text-secondary font-normal dark:text-white'
                                                            htmlFor="">Last Name:</label>
                                                        <input type="text" placeholder="Last Name"
                                                               className="border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary rounded-lg p-2 dark:bg-darkMode/20 dark:text-white"
                                                               value={last_name}
                                                               onChange={(e) => setLast_name(e.target.value)}/>
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <label
                                                            className='text-sm text-secondary font-normal dark:text-white'
                                                            htmlFor="">Email:</label>
                                                        <input type="email" placeholder="Email"
                                                               className="border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary rounded-lg p-2 dark:bg-darkMode/20 dark:text-white"
                                                               value={email}
                                                               onChange={(e) => setEmail(e.target.value)}/>
                                                    </div>


                                                    <div className='flex flex-col gap-2'>
                                                        <label
                                                            className='text-sm text-secondary font-normal dark:text-white'
                                                            htmlFor="">Phone Number:</label>
                                                        <input type="number" placeholder="Phone Number"
                                                               className="border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary rounded-lg p-2 dark:bg-darkMode/20 dark:text-white"
                                                               value={phone}
                                                               onChange={(e) => setPhone(e.target.value)}/>
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <label
                                                            className='text-sm text-secondary font-normal dark:text-white'
                                                            htmlFor="">City:</label>
                                                        <input type="text" placeholder="City"
                                                               className="border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary rounded-lg p-2 dark:bg-darkMode/20 dark:text-white"
                                                               value={city} onChange={(e) => setCity(e.target.value)}/>
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <label
                                                            className='text-sm text-secondary font-normal dark:text-white'
                                                            htmlFor="">Pin Code:</label>
                                                        <input type="number" placeholder="Pin Code"
                                                               className="border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary rounded-lg p-2 dark:bg-darkMode/20 dark:text-white"
                                                               value={pinCode}
                                                               onChange={(e) => setPinCode(e.target.value)}/>
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <label
                                                            className='text-sm text-secondary font-normal dark:text-white'
                                                            htmlFor="">DOB:</label>
                                                        <input type="date" placeholder=""
                                                               className="border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary rounded-lg p-2 dark:bg-darkMode/20 dark:text-white"
                                                               value={DOB} onChange={(e) => setDOB(e.target.value)}/>
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <label
                                                            className='text-sm text-secondary font-normal dark:text-white'
                                                            htmlFor="">Address:</label>
                                                        <input type="text" placeholder="Address"
                                                               className="border border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary rounded-lg p-2 dark:bg-darkMode/20 dark:text-white"
                                                               value={address}
                                                               onChange={(e) => setAddress(e.target.value)}/>
                                                    </div>

                                                    <div className="col-span-full flex gap-3 mt-3">
                                                        <button type='submit'
                                                                className="bg-primary-gradient text-white px-5 py-2 rounded-full">
                                                            {isEdit ? "Update" : "Save"}
                                                        </button>
                                                        <button type="button" onClick={() => setIsEdit(false)}
                                                                className="border px-5 py-2 rounded-full dark:border-secondary dark:text-white">Cancel
                                                        </button>
                                                    </div>
                                                </form>
                                            )}
                                        </div>
                                    </>
                                )}

                                {activeTab === "security" && (
                                    <div className="mt-5">
                                        <h2 className="font-bold dark:text-white">Security Settings</h2>

                                        <div
                                            className='border-b p-5 flex items-center justify-between dark:border-secondary'>
                                            <div>
                                                <h6 className='font-semibold text-lg dark:text-white'>Email Address</h6>
                                                <p className='text-secondary text-sm dark:text-light'>The email address
                                                    associated with your account.</p>
                                            </div>
                                            <div className='flex items-center justify-between gap-10'>

                                                {userProfile.map((item) => (
                                                    <div key={item._id}>
                                                        <h6 className='font-semibold text-lg dark:text-white'>{item.email}</h6>
                                                    </div>
                                                ))}
                                                <div>
                                                    <button
                                                        className="py-1 px-5 bg-secondary/10 rounded-xl text-sm flex items-center gap-1 dark:bg-light">
                                                        <IconEdit className='w-4'/> Edit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className='border-b p-5  flex items-center justify-between dark:border-secondary'>
                                            <div>
                                                <h6 className='font-semibold text-lg dark:text-white'>Password</h6>
                                                <p className='text-secondary text-sm dark:text-light'>Set a unique
                                                    password to protect your account.</p>
                                            </div>

                                            <div>
                                                <Link to='/forgotPassword'>
                                                    <button
                                                        className="py-2 px-5 bg-secondary/10 rounded-xl text-sm flex items-center gap-1 dark:bg-light">Change
                                                        Password
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                        <div
                                            className='border-b p-5  flex items-center justify-between dark:border-secondary'>
                                            <div>
                                                <h6 className='font-semibold text-lg dark:text-white'>2 Step
                                                    Verification</h6>
                                                <p className='text-secondary text-sm dark:text-light'>Make your account
                                                    extra secure.
                                                    Along with your password, you'll need to enter a code.</p>
                                            </div>

                                            <div>
                                                <button
                                                    className="py-2 px-5 bg-secondary/10 rounded-xl text-sm flex items-center gap-1 dark:bg-light">
                                                    Change
                                                </button>
                                            </div>
                                        </div>

                                        <div
                                            className='border-b p-5  flex items-center justify-between dark:border-secondary'>
                                            <div>
                                                <h6 className='font-semibold text-lg dark:text-white'>Delete
                                                    Account</h6>
                                                <p className='text-secondary text-sm dark:text-light'>This will delete
                                                    your account.
                                                    Your account will be permanently deleted from prodeel.</p>
                                            </div>

                                            <div>
                                                <button onClick={handleDeleteAccount}
                                                        className="py-2 px-5 bg-secondary/10 rounded-xl text-sm flex items-center gap-1 dark:bg-light">Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "notification" && (
                                    <div className="mt-5">
                                        <h2 className="font-bold dark:text-white">Notification Settings</h2>

                                        {notification.map(({img, title, description}, i) => (
                                            <div key={i}
                                                 className='p-5 border-b flex items-center gap-5 sm:gap-10 sm:flex-row flex-col dark:border-secondary'>
                                                <div>
                                                    <img className="w-full sm:w-24 rounded-lg" src={img} alt={title}/>
                                                </div>
                                                <div>
                                                    <h1 className='font-semibold text-sm sm:text-lg dark:text-white'>{title}</h1>
                                                    <p className='mt-1 text-sm line-clamp-4 text-secondary dark:text-light'>{description}</p>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                )}

                                {activeTab === "order" && (
                                    <div className="mt-5">
                                        <h2 className="font-bold dark:text-white">My order</h2>
                                        <p className='text-secondary text-sm dark:text-light'>Check the status of recent
                                            orders, manage
                                            returns, and discover similar products.</p>

                                        <div className='mt-5 border rounded-lg dark:border-secondary'>
                                            <div
                                                className='border bg-secondary/10 p-2 sm:p-5 rounded-tl-lg rounded-tr-lg flex items-center justify-between dark:border-secondary'>
                                                <div>
                                                    <h1 className='font-semibold text-sm sm:text-lg dark:text-white'>#1234567890</h1>
                                                    <p className='mt-1 text-secondary text-sm dark:text-light'>Delivered
                                                        on 6 Feb 2026</p>
                                                </div>
                                                <div className='flex items-center justify-end gap-5 flex-wrap'>
                                                    <Link to='/Collection'
                                                          className='px-5 py-2 bg-primary-gradient text-white rounded-full flex items-center gap-2 text-[10px] sm:text-lg'>Buy
                                                        again
                                                    </Link>
                                                    <button
                                                        onClick={() => setIsEdit(true)}
                                                        className='px-5 py-2 rounded-full bg-primary-gradient text-white sm:text-lg text-sm hover:opacity-80'>
                                                        View Order
                                                    </button>
                                                </div>
                                            </div>


                                            {isEdit ? (
                                                <div className='mx-5'>
                                                    {userOrder.map((orderItem) =>
                                                            orderItem.item.map((product) => (
                                                                <div key={product._id}
                                                                     className='mt-5 border rounded-xl p-5 sm:p-8 shadow-sm dark:border-secondary'>

                                                                    <div className="flex items-center justify-end">
                                                                        <img
                                                                            className="w-5 cursor-pointer"
                                                                            src={assets.bin_icon}
                                                                            alt=""
                                                                            onClick={() => handleDeleteOrder(orderItem._id)}
                                                                        />
                                                                    </div>

                                                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5'>

                                                                        <div className='flex flex-col sm:flex-row gap-6'>
                                                                            <img
                                                                                className='w-full sm:w-40 rounded-lg object-cover'
                                                                                src={`https://backend-uaa2.onrender.com/uploads/${product.image}`}
                                                                                alt=""
                                                                            />

                                                                            <div>
                                                                                <h1 className='font-semibold text-lg dark:text-white'>
                                                                                    {product.name}
                                                                                </h1>

                                                                                <p className='text-secondary text-sm mt-2 leading-relaxed dark:text-light'>
                                                                                    {product.description}
                                                                                </p>

                                                                                <div className='mt-1 text-sm'>
                                                                                    <p className='mb-2 dark:text-light'>
                                                                                        <span className='font-medium'>Size : </span> {product.size}
                                                                                    </p>

                                                                                    <p className='mb-2 dark:text-light'>
                                                                                        <span className='font-medium'>Quantity : </span> {product.qty}
                                                                                    </p>

                                                                                    <p className='mb-2 dark:text-light'>
                                                                                        <span className='font-medium'>Price: </span> ₹{product.price}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

                                                                            <div>
                                                                                <h2 className='font-semibold mb-2 dark:text-white'>
                                                                                    Delivery Address
                                                                                </h2>
                                                                                <p className='text-sm text-secondary leading-relaxed dark:text-light'>
                                                                                    {orderItem.address}
                                                                                </p>
                                                                            </div>

                                                                            <div>
                                                                                <h2 className='font-semibold mb-2 dark:text-white'>
                                                                                    Shipping Updates
                                                                                </h2>
                                                                                <p className='text-sm text-secondary dark:text-light'>
                                                                                    {orderItem.email}
                                                                                </p>
                                                                                <p className='text-sm text-secondary dark:text-light'>
                                                                                    {orderItem.phone}
                                                                                </p>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div className='border my-8 dark:border-secondary'></div>

                                                                    <div className="flex items-center justify-between">
                                                                        <p className='text-sm text-secondary dark:text-white'>
                                                                            Preparing to ship on :
                                                                            <span className='font-medium text-dark dark:text-light'>
                        {new Date().toLocaleDateString()}
                    </span>
                                                                        </p>

                                                                        <p>{orderItem.status}</p>
                                                                    </div>

                                                                    <div className='mt-10 border p-5 rounded-lg bg-secondary/10 mb-5 dark:border-secondary'>
                                                                        <div className='flex items-center justify-between gap-5 sm:flex-row flex-col'>

                                                                            <div>
                                                                                <h1 className='text-lg font-semibold mb-2 dark:text-white'>
                                                                                    Billing address
                                                                                </h1>
                                                                                <p className='text-secondary text-sm dark:text-light'>
                                                                                    {orderItem.address}
                                                                                </p>
                                                                            </div>

                                                                            <div className='sm:w-1/4 w-full'>

                                                                                <div className='flex items-center justify-between mb-2'>
                                                                                    <h6 className='text-lg font-normal text-secondary dark:text-white'>
                                                                                        Payment Method
                                                                                    </h6>

                                                                                    <span className="text-light">
                                {orderItem.PaymentMethod}
                            </span>
                                                                                </div>

                                                                                <div className='border my-2 dark:border-secondary'></div>

                                                                                <div className='flex items-center justify-between'>
                                                                                    <h6 className='text-lg font-semibold dark:text-white'>
                                                                                        Total
                                                                                    </h6>

                                                                                    <span className="dark:text-light">
                                ₹ {orderItem.amount}
                            </span>
                                                                                </div>

                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            ))
                                                    )}
                                                </div>
                                            ) : (

                                                <div>
                                                    {userOrder.map((orderItem) =>
                                                        orderItem.item.map((product) => (
                                                            <div
                                                                key={product._id}
                                                                className='border-b p-5 flex items-center justify-between gap-5 sm:gap-10 flex-col sm:flex-row'
                                                            >

                                                                <div className='flex items-center gap-5 sm:gap-10 flex-col sm:flex-row'>

                                                                    <div>
                                                                        <img
                                                                            className="w-full sm:w-28 rounded-lg"
                                                                            src={`https://backend-uaa2.onrender.com/uploads/${product.image}`}
                                                                            alt={product.name}
                                                                        />
                                                                    </div>

                                                                    <div>
                                                                        <h1 className='font-medium text-sm sm:text-lg dark:text-white'>
                                                                            {product.name}
                                                                        </h1>

                                                                        <p className='font-normal text-sm mt-1 text-secondary dark:text-light'>
                                                                            {product.description}
                                                                        </p>

                                                                        <p className='mt-1 dark:text-light'>
                                                                            Size : {product.size}
                                                                        </p>

                                                                        <p className='mt-1 dark:text-light'>
                                                                            Quantity : {product.qty}
                                                                        </p>
                                                                    </div>

                                                                </div>

                                                                <div className='flex items-end justify-end flex-col sm:w-40 w-full'>

                                                                    <h6 className='font-semibold sm:text-lg text-sm dark:text-white'>
                                                                        ₹ {product.price}
                                                                    </h6>

                                                                    <p className='text-secondary mt-2 text-sm cursor-pointer dark:text-light'>
                                                                        Leave review
                                                                    </p>

                                                                </div>

                                                            </div>
                                                        ))
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}


                                {activeTab === "wishlists" && (
                                    <div className="mt-5">
                                        <h2 className="font-bold dark:text-white">wishlists</h2>
                                        <p className='text-secondary text-sm dark:text-light'>Check out your wishlists.
                                            You can add or
                                            remove items from your wishlists.</p>

                                        <div className='border rounded-lg mt-5 sm:p-5 p-2 dark:border-secondary'>
                                            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>

                                                {orderr.map(({img, title, description, price}, i) => (
                                                    <div key={i}
                                                         className='border  rounded-2xl shadow-sm group overflow-hidden dark:border-secondary'>

                                                        <div className="relative">
                                                            <img src={img} alt={title}
                                                                 className="w-full object-cover rounded-tl-2xl rounded-tr-2xl"/>

                                                            <button
                                                                className="absolute top-3 left-3 px-4 py-1 bg-primary-gradient text-white rounded-2xl">{price}
                                                            </button>


                                                        </div>

                                                        <div className="py-4 px-5">
                                                            <h6 className="text-lg font-semibold font-lexend dark:text-white line-clamp-2">{title}</h6>
                                                            <p className="text-sm text-secondary line-clamp-4 mt-2 dark:text-light">{description}</p>

                                                            <div className="flex items-center justify-between mt-2">
                                                                <div className="flex gap-1">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <IconStarFilled key={i}
                                                                                        className="w-4 h-4 text-primary"/>))}
                                                                </div>
                                                                <p className="text-sm text-secondary dark:text-light">(99+
                                                                    review)</p>
                                                            </div>

                                                            <div className="border border-primary mt-4"></div>

                                                            <div className="flex items-center justify-between mt-4">
                                                                <button
                                                                    className="px-5 py-1 bg-primary-gradient rounded-2xl text-white font-medium text-lg">Shop
                                                                    Now
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                )}

                                {activeTab === "billing" && (
                                    <div className="mt-5">
                                        <h2 className="font-bold dark:text-white">Payments & payouts</h2>
                                        <p className='text-secondary text-sm dark:text-light'>Manage your payment
                                            methods and view your payout history.</p>

                                        <div className='mt-10 px-5'>
                                            <p className='text-secondary text-sm sm:text-lg dark:text-light'>When you
                                                receive a payment
                                                for a order, we call that payment to you a "payout." Our secure payment
                                                system supports several payout methods, which can be set up below. Go to
                                                FAQ.</p>

                                            <p className='mt-5 text-secondary text-sm sm:text-lg dark:text-light'>To get
                                                paid, you need
                                                to set up a payout method releases payouts about 24 hours after a
                                                guest’s scheduled time. The time it takes for the funds to appear in
                                                your account depends on your payout method.</p>

                                            <button
                                                className='mt-5 px-5 py-2 rounded-full bg-primary-gradient text-white text-sm sm:text-lg'>Add
                                                Payment Method
                                            </button>
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <Footer/>
            </div>
        </>
    );
}

export default Profile;
