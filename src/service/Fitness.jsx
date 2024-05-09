import { Dumbbell } from "lucide-react";
import React from "react";
import SecondaryBtn from "../components/Button/SecondaryBtn";
import { Link } from "react-router-dom";

const Fitness = () => {
    return (
        <>
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
                    <Link to={'/sign'}>
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
                    <Link to={'/sign'}>
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

export default Fitness