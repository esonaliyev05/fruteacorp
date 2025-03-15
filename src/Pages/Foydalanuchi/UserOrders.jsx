import React from "react";
import { Link } from "react-router-dom";

const UserOrders = () => {
  return (
    <div>
      <div className="ss:flex-row gap-y-2 text-gray-800 gap-x-3 mb-5">
        <button className="bg-green-600 text-white px-4 py-[10px] rounded-full transition text-[14px] sm:text-[16px] font-inter">
          Barcha Buyurtmalar
        </button>
      </div>
      <div className="">
        <div className="flex items-center justify-center">
          <div className="py-10 max-w-[431px] text-center flex flex-col items-center justify-center">
            <h2 className="text-[36px] text-gray-800 font-bold mb-4">
              Hech narsa yo'q
            </h2>
            <p className="text-gray-800 text-[16px] font-medium mb-4 text-center">
              Sizda buyurtmalar yo'q! Barcha kerakli narsalarni topish uchun
              qidirishdan foydalaning!
            </p>
            <Link
              className="flex w-[50%] justify-center items-center transition bg-green-600 hover:opacity-85 text-white text-[16px] font-medium min-h-[48px] py-[10px] px-[18px] rounded-lg mb-2"
              to="/products"
            >
              Xaridlarni boshlash
            </Link>
            <Link
              className="flex w-[50%] justify-center items-center transition bg-transparent hover:bg-green-200 hover:text-gray-800 text-gray-600 text-[16px] font-medium min-h-[48px] py-[10px] px-[18px] rounded-lg"
              to="/"
            >
              Bosh sahifaga qaytish
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
