import { Dumbbell } from "lucide-react";
import React from "react";
import SecondaryBtn from "../components/Button/SecondaryBtn";
import { Link } from "react-router-dom";

const Boxing = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap reverse">
                <div className="lg:w-[38%] md:w-full sm:w-full w-full h-full relative overflow-hidden rounded-lg">
                <iframe
                        width="100%"
                        height="600px"
                        src="https://www.youtube.com/embed/gUmeQrjPozY"
                        title="YouTubevideo player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
                    <h6 className="text-4xl font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
                        Boxing class
                    </h6>
                    <h1 className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-400 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
                        "Stronger every day, one rep at a time."
                    </h1>
                    <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
                        We are a group of people who are passionate about fitness and want to help you achieve your goals. Going to the gym isn't just about building muscle or losing weight; it's about investing in your overall well-being. Each visit to the gym is an opportunity to boost your mood, increase your energy levels, and reduce stress. It's a chance to prioritize your health and take proactive steps towards a longer, happier life. Plus, the gym offers a supportive environment where you can connect with like-minded individuals, motivating each other to push past limits and achieve personal goals. So, why wait? Take the first step towards a healthier, happier you by hitting the gym today.
                    </p>
                    <Link to={'/sign'}>
                        <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center">
                           Take class
                        </SecondaryBtn>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Boxing