import React, { useState } from "react";
import { Dumbbell } from "lucide-react";
import Label from "../components/Label/Label";
import Input from "../components/Form/Input";
import SecondaryBtn from "../components/Button/SecondaryBtn";
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import PrimaryBtn from "../components/Button/PrimaryBtn";

const Mhero = () => {
    //hero carousel
    const swiperData = [
        {
            id: 1,
            bgImg: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            slogan: "Keep your body",
            title: "Burning",
            desc: "Get ready to burn off some serious fat with best eqiupments and trainers.",
        },
        {
            id: 2,
            bgImg: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            slogan: "Just Believe In",
            title: "Yourself",
            desc: "We are here to help you achieve your goals.",
        },
        {
            id: 3,
            bgImg: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            slogan: "Grow Your Body",
            title: "Strength",
            desc: "Make your body stronger with our high quality products.",
        },
    ];
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBMI] = useState(null);

    //punktion
    const calculateBMI = () => {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        setBMI(bmi);
    };
    return (
        <>
            <div className="w-full h-auto">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper w-full h-auto"
                >
                    {/* loop carousel */}
                    {swiperData.map((data) => (
                        <SwiperSlide
                            key={data.id}
                            className="w-full h-[70vh] relative"
                            style={{
                                backgroundImage: `url(${data.bgImg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}
                        >
                            <div className="w-full h-full bg-black/80 absolute top-0 -z-10"></div>
                            <div className="w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4">
                                <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-indigo-400 font-semibold mb-2 uppercase">
                                    {data.slogan}
                                </h5>
                                <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-5xl font-bold text-white mb-4 uppercase">
                                    {data.title}
                                </h1>
                                <p className="lg:text-lg md:text-base sm:text-base text-base text-gray-500 font-medium mb-6 text-center">
                                    {data.desc}
                                </p>
                                <PrimaryBtn className="lg:w-[15%] md:w-[35%] sm:w-[75%] w-[80%] h-14 mt-5 text-xl font-semibold rounded-full">
                                    <Link to="/mplan">
                                        Get Started
                                    </Link>
                                </PrimaryBtn>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                {/* banner */}
                <div className="w-full h-auto flex items-center lg:justify-between md:justify-between sm:justify-center justify-center lg:gap-7 md:gap-7 sm:gap-5 gap-5 lg:px-24 md:px-16 sm:px-6 px-6 mt-6 flex-wrap">
                    <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
                        <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
                            1000+
                        </h5>
                        <p className="text-lg text-gray-600 font-medium">Memberes</p>
                    </div>
                    <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
                        <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
                            80
                        </h5>
                        <p className="text-lg text-gray-600 font-medium">Professional Trainers</p>
                    </div>
                    <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
                        <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
                            15+
                        </h5>
                        <p className="text-lg text-gray-600 font-medium">Years of Experience</p>
                    </div>
                    <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
                        <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
                            20
                        </h5>
                        <p className="text-lg text-gray-600 font-medium">GYM's</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <div className="w-full h-auto flex items-center justify-center flex-col">
                    <h6 className="lg:text-lg md:text-lg sm:text-base text-base font-medium text-gray-200 flex items-center gap-x-2 bg-black/20 rounded-t-md py-2 px-4">
                        <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
                        What's my BMI
                    </h6>
                    <div className="w-full h-auto flex items-end justify-center bg-black rounded-md lg:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap">
                        <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
                            <Label htmlfor="weight">Weight (kg)</Label>
                            <Input id="weight"
                                name="weight"
                                type="number"
                                placeholder="Enter your weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                        <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
                            <Label htmlfor="height">Height (cm)</Label>
                            <Input id="height"
                                name="height"
                                type="number"
                                placeholder="Enter your height"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                        <div className="lg:w-[20%] md:w-[35%] sm:w-[50%] w-full h-auto p-2">
                            <SecondaryBtn type="submit"
                                className="w-full h-11 justify-center"
                                onClick={calculateBMI}
                            >
                                Calculate BMI
                            </SecondaryBtn>
                        </div>
                    </div>
                    {/* display */}
                    {bmi !== null && (
                        <div className="bg-black/20 rounded-b-md px-6 py-2 5">
                            <p className="text-indigo-600">
                                Your BMI:- <span className="font-bold">{bmi}</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}


export default Mhero