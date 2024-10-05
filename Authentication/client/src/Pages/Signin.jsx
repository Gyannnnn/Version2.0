import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);




  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
   <div className="h-screen w-full bg-zinc-800 text-white flex items-center justify-center">
    <div className="text-white bg-[#0c0c0c] h-[554px] w-[480px] rounded-md border  flex flex-col items-center justify-around max-sm:w-[400px] max-sm:h-[600px]  ">
      <h1 className="text-4xl">Sign In to Your Accout</h1>
      <div className="flex flex-col gap-10">
        
        <div className="flex gap-2 items-center">
          <input
            onChange={(e) => emailChange(e.target.value)}
            className={`bg-transparent outline ${
              emailError ? "outline-red-800" : "outline-blue-800"
            } rounded px-1 py-2 w-[300px]`}
            type="text"
            placeholder="Enter Your Email"
          />
          <MdOutlineMail className="text-white text-2xl hover:text-blue-600" />
        </div>
        <div className="flex gap-2 items-center">
          <div
            className={`flex w-[300px] items-center rounded-md border-2 ${
              passwordError ? "border-red-800" : "border-blue-600"
            }`}
          >
            <input
              
              className="bg-transparent outline-none px-1 py-2 w-[250px]"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
            />
            {showPassword ? (
              <FaEyeSlash
                onClick={togglePasswordVisibility}
                className="cursor-pointer text-white text-2xl"
              />
            ) : (
              <FaRegEye
                onClick={togglePasswordVisibility}
                className="cursor-pointer text-white text-2xl"
              />
            )}
          </div>
          <RiLockPasswordFill className="text-white text-2xl hover:text-blue-600" />
        </div>
        <a
          className="bg-blue-600 w-[300px] px-2 py-2 text-center rounded-md"
          href="/home"
        >
          Login
        </a>
      </div>
      <h2>
        Not A User?{" "}
        <a href="/" className="text-blue-600">
          Sign Up
        </a>
      </h2>
    </div>
   </div>
  );
};

export default Signin;
