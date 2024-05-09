import { Dumbbell } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Gym = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap reverse">
                <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
                    <img src="https://source.unsplash.com/random/?gym" alt="Yoga image"
                        className="lg:w-[60vh] md:w-full sm:w-full w-[70vh] lg:h-[40vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover" />
                </div>
                <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
                    <h6 className="text-4xl font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
                        Well Maintained Facility
                    </h6>
                    <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
                    "We take pride in providing a clean, safe, and inviting environment for your fitness journey. From spotless equipment to meticulously cleaned spaces, we're dedicated to ensuring your comfort and enjoyment every step of the way. Come experience the difference of a facility that prioritizes your wellness and satisfaction."                    </p>
                </div>
                <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
                    <h6 className="text-4xl font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
                        Quality Equipments
                    </h6>
                    <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
                    "Experience excellence with our top-quality equipment! From state-of-the-art machines to premium gear, we're committed to providing you with the tools you need to reach your fitness goals effectively and safely. Elevate your workout experience with our unparalleled selection of high-performance equipment."
                    </p>
                </div>
                <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
                    <img src="https://source.unsplash.com/random/?gym-equipment" alt="Aerobic image"
                        className="lg:w-[60vh] md:w-full sm:w-full w-[70vh] lg:h-[40vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover" />
                </div>
            </div>
        </>
    )
}

export default Gym