import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../../../Api/Beckend";
import { toast } from "react-toastify";

const Forgot = ({ setCheck }) => {
  const [successSms, setSuccessSms] = useState(false);

  const sendSms = async (evt) => {
    evt.preventDefault();

    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/send-sms`,
        {
          phone: `+998${evt.target.phone.value}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("SMS muvaffaqiyatli jo'natildi");
      setSuccessSms(true);
    } catch (error) {
      toast.error("Hatolik yuz berdi, keyinroq urinib ko'ring");
      console.error(error);
      setSuccessSms(false);
    }
  };

  const changePassword = async (evt) => {
    evt.preventDefault();

    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/change-password`,
        {
          phone: `+998${evt.target.phone.value}`,
          password: evt.target.password.value,
          code: evt.target.code.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Parol muvaffaqiyatli o'zgartirildi");
      setCheck("SignIn");
    } catch (error) {
      toast.error("Hatolik yuz berdi, keyinroq urinib ko'ring");
      console.error(error);
      setSuccessSms(false);
    }
  };
  return (
    <div>
      <form
        className="text-gray-800 font-inter"
        onSubmit={() => (successSms ? changePassword : sendSms())}
      >
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
        {successSms && (
          <>
            <div className="mb-4 md:mb-6 relative">
              <label
                htmlFor="code"
                className="block text-[14px] md:text-[16px] text-gray-800 mb-1"
              >
                Code:{" "}
              </label>
              <div className="border border-gray-200 bg-gray-200 rounded-[8px] pl-4 flex items-center text-[12px] md:text-[16px]">
                <input
                  type="number"
                  id="code"
                  name="code"
                  className="bg-transparent w-full outline-0 border-0 pr-4 pl-2 py-2 font-normal focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-6 relative">
              <label
                htmlFor="newPassword"
                className="block text-[14px] md:text-[16px] text-gray-800 mb-1"
              >
                Yangi Parol:{" "}
              </label>
              <div className="border border-gray-200 bg-gray-200 rounded-[8px] pl-4 flex items-center text-[12px] md:text-[16px]">
                <input
                  type="text"
                  id="newPassword"
                  name="newPassword"
                  className="bg-transparent w-full outline-0 border-0 pr-4 pl-2 py-2 font-normal focus:outline-none"
                />
              </div>
            </div>
          </>
        )}
        <button
          type="submit"
          className="w-full mb-6 md:mb-8 text-white text-[14px] md:text-[16px] font-medium tracking-[0.004em] rounded-[8px] py-2 transition hover:opacity-85 bg-green-600"
        >
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Forgot;
