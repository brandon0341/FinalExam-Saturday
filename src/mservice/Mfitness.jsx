import { Dumbbell, Menu, X, MoveRight } from "lucide-react";
import React, { useState } from "react";
import SecondaryBtn from "../components/Button/SecondaryBtn";
import { Link } from "react-router-dom";

const Mfitness = () => {
    const [navbar, setMfitness] = useState(false);
    const navItems = [
        {
            name: "Home",
            link: "*",
        },
        {
            name: "About",
            link: "/mabout",
        },
        {
            name: "Services",
            link: "/mservices",
        },
        {
            name: "Plan",
            link: "/mplan",
        },
        {
            name: "Contact",
            link: "/mcontact",
        },
    ];

    return (
        <>
            <nav className="w-full h-auto absolute bg-[#1d1d1d] z-10 mt-[-4%] shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3">
                <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
                    {/* Navbar logo & toggle button section */}
                    <div>
                        <div className="flex items-center justify-between py-1 md:py-1 md:block">
                            {/* Logo section */}
                            <Link className="text-3xl text-indigo-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
                                G<span className="text-xl font-bold text-gray-300">Y</span>M
                                <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]" />
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                                    onClick={() => setMfitness(!navbar)}
                                >
                                    {navbar ? (
                                        <X className="text-gray-400 cursor-pointer" size={24} />
                                    ) : (
                                        <Menu className="text-gray-400 cursor-pointer" size={24} />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* NAvbar menu items section */}
                    <div
                        className={`flex justify-between items-center md:block ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.link}
                                        className="text-gray-500 text-lg font-medium hover:text-indigo-600 ease-out duration-700"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap reverse">
                <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
                    <img src="https://source.unsplash.com/random/?yoga" alt="Yoga image"
                        className="lg:w-[60vh] md:w-full sm:w-full w-[70vh] lg:h-[40vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover" />
                </div>
                <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
                    <h6 className="text-4xl font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
                        Yoga
                    </h6>
                    <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
                        "Yoga inspires us to discover our inner strength, find peace amidst chaos, and connect with the deeper essence of ourselves and the universe. It encourages us to embrace each moment with mindfulness, compassion, and gratitude, fostering a life filled with joy, authenticity, and purpose."
                    </p>
                    <Link to={''}>
                        <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center">
                            Join class
                        </SecondaryBtn>
                    </Link>
                </div>
                <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
                    <h6 className="text-4xl font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
                        Aerobic
                    </h6>
                    <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
                    "Embrace each day with a heart full of gratitude, a mind full of possibilities, and a spirit full of resilience. Your journey is unique, your potential limitless. Believe in yourself, take bold steps forward, and let your light shine brightly. You are capable of achieving greatness beyond your wildest dreams."
                    </p>
                    <Link to={''}>
                        <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center">
                            Join class
                        </SecondaryBtn>
                    </Link>
                </div>
                <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
                    <img src="https://source.unsplash.com/random/?aerobic" alt="Aerobic image"
                        className="lg:w-[60vh] md:w-full sm:w-full w-[70vh] lg:h-[40vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover" />
                </div>
            </div>
        </>
    )
}

export default Mfitness