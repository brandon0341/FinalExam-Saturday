import React, { useState } from "react";
import { Dumbbell, Menu, X, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import TertiaryLink from "../components/LinkBtn/TertiaryLink";
import SecondaryLink from "../components/LinkBtn/SecondaryLink";

const Mservices = () => {
  const [navbar, setMabout] = useState(false);
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
  const services = [
    {
      id: 1,
      serviceImg: "https://source.unsplash.com/random/?dumbbell",
      icon: Dumbbell,
      title: "Fitness",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/mfit",
    },
    {
      id: 2,
      serviceImg: "https://source.unsplash.com/random/?gym",
      icon: Dumbbell,
      title: "Gym",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/mgym",
    },
    {
      id: 3,
      serviceImg: "https://source.unsplash.com/random/?nutrition",
      icon: Dumbbell,
      title: "Nutrition",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/mnutrient",
    },
    {
      id: 4,
      serviceImg: "https://source.unsplash.com/random/?locker-room-showers",
      icon: Dumbbell,
      title: "Locker room/shower",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/mlocsho",
    },
    {
      id: 5,
      serviceImg: "https://source.unsplash.com/random/?boxing",
      icon: Dumbbell,
      title: "Boxing",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/mboxing",
    },
    {
      id: 6,
      serviceImg: "https://source.unsplash.com/random/?coach",
      icon: Dumbbell,
      title: "Personal Trainer",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/mtrain",
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
                  onClick={() => setMabout(!navbar)}
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
          Our Services
        </h6>
        <div className="w-full h-auto flex items-center justify-start gap-x-4 gap-y-5 flex-wrap mb-10">
          {/* loop display */}
          {services.map((data) => (
            <div
              key={data.id}
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53%] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500"
              style={{
                backgroundImage: `url(${data.serviceImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
              <div className="w-full h-full flex items-center justify-center flex-col text-white p-4 z-50">
                <div className="w-14 h-14 rounded-full bg-indigo-600 border-4 border-indigo-600/80 flex items-center justify-center mb-5">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl text-gray-100 font-semibold text-center mb-4">
                  {data.title}
                </h1>
                <p className="text-base text-gray-400 font-normal text-center mb-4">
                  {data.desc}
                </p>
                <TertiaryLink link={data.link}>Read More
                  <MoveRight className="w-4 h-4" />
                </TertiaryLink>
              </div>
            </div>

          ))}
        </div>
        <SecondaryLink link="/mtrain" className="lg:w-[15%] md:w-[50%] sm:w-[75%] w-[85%] justify-center">
          View Our Trainers
          <MoveRight className="w-4 h-4" />
        </SecondaryLink>
      </div>
    </>
  )
}

export default Mservices