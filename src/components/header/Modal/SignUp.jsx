import React from "react";
import { BACKEND_URL } from "../../../Api/Beckend";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = ({ setCheck }) => {
  const handleSignUp = async (evt) => {
    evt.preventDefault();

    const firstname = evt.target.firstName.value;
    const lastname = evt.target.lastName.value;
    const phone = evt.target.phone.value;
    const password = evt.target.password.value;

    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/signup`,
        {
          firstName: firstname,
          lastName: lastname,
          phone: `+998${phone}`,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Muvaffaqiyatli ro'yhatdan o'tildi");
    } catch (error) {
      toast.error("Hatolik yuz berdi, keyinroq urinib ko'ring");
      console.error(
        "Register error:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setCheck("SignIn");
    }
  };
  return (
    <div>
      <form className="text-gray-800 font-inter" onSubmit={handleSignUp}>
        <div className="mb-4 md:mb-6 relative">
          <label
            htmlFor="firstName"
            className="block text-[14px] md:text-[16px] text-gray-800 mb-1"
          >
            Ismingizni kiriting:{" "}
          </label>
          <div className="border border-gray-200 bg-gray-200 rounded-[8px] pl-4 flex items-center text-[12px] md:text-[16px]">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="bg-transparent w-full outline-0 border-0 pr-4 pl-2 py-2 font-normal focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-4 md:mb-6 relative">
          <label
            htmlFor="lastName"
            className="block text-[14px] md:text-[16px] text-gray-800 mb-1"
          >
            Familiyangizni kiriting:{" "}
          </label>
          <div className="border border-gray-200 bg-gray-200 rounded-[8px] pl-4 flex items-center text-[12px] md:text-[16px]">
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="bg-transparent w-full outline-0 border-0 pr-4 pl-2 py-2 font-normal focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-4 md:mb-6 relative">
          <label
            htmlFor="phone"
            className="block text-[14px] md:text-[16px] text-gray-800 mb-1"
          >
            Tel:{" "}
          </label>
          <div className="border border-gray-200 bg-gray-200 rounded-[8px] pl-4 flex items-center text-[12px] md:text-[16px]">
            <span>+998</span>
            <input
              type="number"
              id="phone"
              name="phone"
              className="bg-transparent w-full outline-0 border-0 pr-4 pl-2 py-2 font-normal focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-4 md:mb-6 relative">
          <label
            htmlFor="password"
            className="block text-[14px] md:text-[16px] text-gray-800 mb-1"
          >
            Parolni kiriting:{" "}
          </label>
          <div className="border border-gray-200 flex items-center bg-gray-200 rounded-[8px] text-[12px] md:text-[16px]">
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-gray-200 outline-0 rounded-[8px] px-4 py-2 font-normal focus:outline-none"
            />
            <span
              aria-label="Toggle password visibility"
              className="pr-4 cursor-pointer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448zm-176.34-64c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58 2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1 204.8 204.8 0 0 1-51.16 6.47zm235.18-145.4c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83 2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1 192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16 310.72 310.72 0 0 1-64.12 72.73 2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13 343.49 343.49 0 0 0 68.64-78.48 32.2 32.2 0 0 0-.1-34.78z"></path>
                <path d="M256 160a95.88 95.88 0 0 0-21.37 2.4 2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160zm-90.22 73.66a2 2 0 0 0-3.38 1 96 96 0 0 0 115 115 2 2 0 0 0 1-3.38z"></path>
              </svg>
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full mb-6 md:mb-8 text-white text-[14px] md:text-[16px] font-medium tracking-[0.004em] rounded-[8px] py-2 transition hover:opacity-85 bg-green-600"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default SignUp;
