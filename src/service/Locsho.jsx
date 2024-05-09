import { Dumbbell } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Locsho = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap reverse">
                <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
                    <img src="https://cdn.vox-cdn.com/thumbor/JhaVuyl2NaICKtSxf3Xt3lEqo50=/83x0:1416x1000/1200x800/filters:focal(83x0:1416x1000)/cdn.vox-cdn.com/uploads/chorus_image/image/45234992/locker-room-nudity_1_2015.0.jpg" alt="Yoga image"
                        className="lg:w-[60vh] md:w-full sm:w-full w-[70vh] lg:h-[40vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover" />
                </div>
                <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
                    <h6 className="text-4xl font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
                        Locker room
                    </h6>
                    <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
                    "Step into relaxation and convenience in our locker rooms. Immaculately clean and fully equipped, our locker rooms offer a sanctuary for your post-workout refreshment. With spacious facilities and amenities at your fingertips, your journey to wellness continues even after your workout."
                    </p>
                </div>
                <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
                    <h6 className="text-4xl font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
                        Showers
                    </h6>
                    <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
                    "Refresh and rejuvenate in our pristine shower area. Step into cleanliness and comfort after your workout, with spacious stalls and premium amenities to enhance your post-exercise experience. Leave feeling invigorated and ready to tackle the day ahead."
                    </p>
                </div>
                <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
                    <img src="https://gnomadhome.com/wp-content/uploads/2022/12/finding-public-showers-near-me-when-you-live-in-a-van_2000x1250.jpg" alt="Aerobic image"
                        className="lg:w-[60vh] md:w-full sm:w-full w-[70vh] lg:h-[40vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover" />
                </div>
            </div>
        </>
    )
}

export default Locsho