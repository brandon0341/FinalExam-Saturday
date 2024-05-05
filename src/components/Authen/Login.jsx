import React from "react";
import Label from "../Label/Label";
import { Link } from "react-router-dom";
import { Dumbbell } from "lucide-react";
import Input from "../Form/Input";
import PrimaryBtn from "../Button/PrimaryBtn";

const Tication = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <div className="w-full h-auto flex items-center justify-center flex-col">
                    <h6 className="lg:text-lg md:text-lg sm:text-base text-base font-medium text-gray-200 flex items-center gap-x-2 bg-black/20 rounded-t-md py-2 px-4">
                        <Dumbbell className="w-12 h-6 -rotate-45 text-indigo-600" />
                        Welcome Member
                    </h6>
                    <div className="w-[40%] h-auto grid justify-center bg-black rounded-md lg:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap">
                        <div className="lg:w-[150%] md:w-[40%] sm:w-[50%] w-full h-auto p-2 ml-[-22%]">
                            <Label>Email</Label>
                            <Input id="email"
                                name="email"
                                type="text"
                                placeholder="Enter your Username"
                            />
                        </div>
                        <div className="lg:w-[150%] md:w-[40%] sm:w-[50%] w-full h-auto p-2 ml-[-22%]">
                            <Label>Password</Label>
                            <Input id="pass"
                                name="pass"
                                type="text"
                                placeholder="Enter your Password"
                            />
                        </div>
                            <PrimaryBtn className="lg:w-[60%] md:w-[40%] sm:w-[50%] text-xl w-full h-auto relative ml-[-20%]">Cancel</PrimaryBtn>
                            <PrimaryBtn className="lg:w-[10%] md:w-[40%] sm:w-[50%] text-xl w-full h-auto absolute mt-[14.8%] ml-[19.3%]"><Link to={'*'}>Submit</Link></PrimaryBtn>
                            <p className="text-white text-center">Not a member?<Link to={'/tication'} className="underline text-indigo-600">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tication