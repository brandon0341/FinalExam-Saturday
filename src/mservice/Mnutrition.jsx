import React, { useState } from "react";
import { Dumbbell, Menu, X, MoveRight } from "lucide-react";
import SecondaryBtn from "../components/Button/SecondaryBtn";
import { Link } from "react-router-dom";

const Mnutrition = () => {
    const [navbar, setMnutrition] = useState(false);
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

    const trainerData = [
        {
            id: 1,
            trainerImg: "https://source.unsplash.com/random/?fruits",
            name: "Fruits",
        },
        {
            id: 2,
            trainerImg: "https://source.unsplash.com/random/?vegetables",
            name: "Vegetable",
        },
        {
            id: 3,
            trainerImg: "https://source.unsplash.com/random/?protiens",
            name: "Lean protiens",
        },
        {
            id: 4,
            trainerImg: "https://source.unsplash.com/random/?whole-grain",
            name: "Whole Grains",
        },
    ];
    const gainMuscle = [
        {
            id: 1,
            trainerImg: "https://source.unsplash.com/random/?protien",
            name: "Rich in Protiens",
        },
        {
            id: 2,
            trainerImg: "https://source.unsplash.com/random/?carbohydrates",
            name: "Carbs",
        },
        {
            id: 3,
            trainerImg: "https://source.unsplash.com/random/?healthy-fats",
            name: "Healthy Fats",
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
                                    onClick={() => setMnutrition(!navbar)}
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
                    <img src="https://plus.unsplash.com/premium_photo-1661893975221-f71420e14311?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmF0JTIwbWFufGVufDB8fDB8fHww" alt="About image"
                        className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover" />
                </div>
                <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
                    <h6 className="text-4xl font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
                        Loss Body Fat
                    </h6>
                    <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
                        For effective fat loss, prioritize nutrient-rich foods like fruits, vegetables, lean proteins, and whole grains while avoiding processed foods and sugary snacks. Watch portion sizes, stay hydrated with water, and incorporate regular exercise. Consistency is key for sustainable results.
                    </p>
                    <h6 className="text-lg font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
                        Nutrition :
                    </h6>
                    <div className="w-full h-auto flex items-end justify-start lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10">
                        {/* loop display */}
                        {trainerData.map((data) => (
                            <div
                                key={data.id}
                                className="lg:w-[20%] md:w-[48%] sm:w-[48%] w-full lg:h-[15vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl  relative">
                                <img
                                    src={data.trainerImg}
                                    alt="trainers image"
                                    className="w-full h-full object-cover"
                                />
                                <div className="w-full h-auto absolute bottom-[-80%] left-0 py-4 px-2 flex items-center justify-center flex-col">
                                    <h1 className="text-xl text-white font-semibold">
                                        <span className="text-blue-800">{data.name}</span>
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div><br />
                    <Link to={''}>
                        <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium absolute bottom-[0] uppercase justify-center">
                            Add Guide
                        </SecondaryBtn>
                    </Link>
                </div>
            </div>
            <div className="w-full h-auto relative flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap reverse">
                <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
                    <img src="https://images.unsplash.com/photo-1567476631420-182aa1a033d1?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About image"
                        className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover" />
                </div>
                <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
                    <h6 className="text-4xl font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
                        Gain Muscle
                    </h6>
                    <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
                        To gain muscle, prioritize a diet rich in lean proteins, complex carbs, and healthy fats. Include foods like chicken, fish, tofu, quinoa, nuts, and avocados. Eat regular meals, stay hydrated, and focus on balanced nutrition. Combine this with strength training for optimal muscle growth.
                    </p>
                    <h6 className="text-lg font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
                        Nutrition :
                    </h6>
                    <div className="w-full h-auto flex items-end justify-start lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10">
                        {/* loop display */}
                        {gainMuscle.map((data) => (
                            <div
                                key={data.id}
                                className="lg:w-[20%] md:w-[48%] sm:w-[48%] w-full lg:h-[15vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl  relative">
                                <img
                                    src={data.trainerImg}
                                    alt="trainers image"
                                    className="w-full h-full object-cover"
                                />
                                <div className="w-full h-auto absolute bottom-[-80%] left-0 py-4 px-2 flex items-center justify-center flex-col">
                                    <h1 className="text-xl text-white font-semibold">
                                        <span className="text-blue-800">{data.name}</span>
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div><br />
                    <Link to={''}>
                        <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium absolute bottom-[0] uppercase justify-center">
                            Add Guide
                        </SecondaryBtn>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Mnutrition