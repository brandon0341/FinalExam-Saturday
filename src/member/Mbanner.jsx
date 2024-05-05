import React from "react";

const Mbanner = () => {
    return (
        <>
            <div
                className="w-full h=[55vh] flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 relative z-10"
                style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
                <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-gray-200 uppercase mb-4 text-center">
                    No <span className="text-indigo-600">Pain</span>, No{" "}
                    <span className="text-indigo-600">Gain</span>
                </h1>
                <p className="text-lg text-gray-300 font-medium mb-8 text-center">
                    Ignite Your Fitness Journey with Premium Solutions.
                </p>
            </div>
        </>
    )
}

export default Mbanner