import React, { useState } from "react";
import { Dumbbell, Menu, X, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Mtrainers = () => {
  const [navbar, setNavbar] = useState(false);
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
      trainerImg: "https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.15752-9/438299791_868256641777799_8479229479504036623_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEcRAkG6cDF0TmmquwOfksu8op5zIOeAU3yinnMg54BTTBU4p3kLEmd-0DCW95M8C6tGQrLcLZteyDEc4rkIxvG&_nc_ohc=Hj_EBboJClsQ7kNvgEKfe5B&_nc_ht=scontent.fmnl13-2.fna&oh=03_Q7cD1QEkriirEiTIQDEIYdQJK_oaRGGjC4NOlxQgiV6CJMCwRw&oe=665EAFBF",
      name: "Balcorza, Jemar",
      role: "Body Building Coach",
    },
    {
      id: 2,
      trainerImg: "https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.15752-9/438293681_789536449813858_3542633443966954771_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHEbyGlKnMwbIzlEncpl0LR8PY9xI72omfw9j3EjvaiZ5pgFmjBQr6mUOl2gSqnTB1UknqFb9Huycst6PFN6jOE&_nc_ohc=jbWtv8wcRH4Q7kNvgHiV_HQ&_nc_ht=scontent.fmnl13-2.fna&oh=03_Q7cD1QHQXrp81PHxSdZWbI-v-oK4Xk2ybsD8AK0HCZzs4oQC3w&oe=665EC605",
      name: "Bactong, Brandon",
      role: "Gym Trainer",
    },
    {
      id: 3,
      trainerImg: "https://source.unsplash.com/random/?fitness",
      name: "Mrs. Lilly Doe",
      role: "Prof. fitness coach",
    },
    {
      id: 4,
      trainerImg: "https://source.unsplash.com/random/?wrestler",
      name: "Roman Reigns",
      role: "Prof. wrestling coach",
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
                  onClick={() => setNavbar(!navbar)}
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
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
          Our Expert Trainers
        </h6>
        <div className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10">
          {/* loop display */}
          {trainerData.map((data) => (
            <div
              key={data.id}
              className="lg:w-[23%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl overflow-hidden relative">
              <img
                src={data.trainerImg}
                alt="trainers image"
                className="w-full h-full object-cover"
              />
              <div className="w-full h-auto bg-gray-900/70 absolute bottom-0 left-0 py-4 px-2 flex items-center justify-center flex-col">
                <h1 className="text-xl text-white font-semibold">
                  <span className="text-indigo-600">{data.name}</span>
                </h1>
                <p className="text-sm text-gray-300">{data.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Mtrainers