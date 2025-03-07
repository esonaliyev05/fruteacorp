import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from "react-icons/hi2";
import { FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Yuqori navbar */}
      <nav className="bg-green-200 w-full h-[38px] flex justify-center items-center md:bg-none">
        <div className="container flex justify-center items-center px-4 gap-[15px]">
          <ul className="flex gap-4 text-[16px] font-semibold">
            <Link to="shoppages" className="hover:text-green-700">
              Hozir sotib olish
            </Link>
            <Link to="faq" className="hover:text-green-700">
              Savol-Javob
            </Link>
            <Link to="/orders" className="hover:text-green-700">
              Buyurtmalarim
            </Link>
          </ul>

          <div className="flex items-center gap-2">
            <img
              src="public/navbar/uz-DrneayDM.png"
              alt="Uz"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="public/navbar/en-BAm130Vq.png"
              alt="Ru"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="public/navbar/ru-CMQfAJug.png"
              alt="En"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
      </nav>

      {/* Asosiy navbar */}
      <div className="w-full bg-white border-b border-gray-300 py-3 flex justify-center">
        <div className="container max-w-[1200px] h-[80px] flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link to={"/"}>
            <img
              src="public/navbar/logo-1-Dw9Tt7XS.png"
              alt="Logo"
              className="h-10"
              />
              </Link>
          </div>

          {/* Katalog tugmasi */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 bg-green-200 w-[120px] h-[35px] justify-center text-[green] rounded-md font-semibold hover:bg-green-300 transition"
            >
              {open ? <HiMiniBarsArrowUp /> : <HiMiniBarsArrowDown />} Katalog
            </button>

            {open && (
              <div className="absolute left-0 mt-2 bg-white border border-green-500 rounded-md shadow-lg w-48 py-2">
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Choy
                </Link>
                <Link
                  to="shirinliklar"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Shirinliklar
                </Link>
              </div>
            )}
          </div>

          {/* Qidiruv paneli */}
          <div className="flex border border-gray-400 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Mahsulotlar izlash"
              className="px-3 py-2 outline-none w-100 h-10 text-[green] font-bold"
            />
            <button className="w-15 bg-green-200 flex justify-center items-center text-[21px] text-[green] hover:bg-green-300 transition">
              <IoSearchSharp />
            </button>
          </div>

          {/* Foydalanuvchi va savat */}
          <div className="flex items-center gap-4">
            <Link
              to="user"
              className="flex items-center gap-1 text-gray-700 hover:text-green-700"
            >
              <FaRegUser /> Kirish
            </Link>
            <Link
              to="like"
              className="flex items-center gap-1 text-gray-700 hover:text-green-700"
            >
              <FaRegHeart /> Saralangan
            </Link>
            <Link
              to="shopcars"
              className="flex items-center gap-1 text-gray-700 hover:text-green-700 relative"
            >
              <LiaShoppingBagSolid /> Savat
              <span className="absolute -top-2 -right-3 bg-green-500 w-[15px] flex justify-center text-white text-xs px-2 py-0.5 rounded-full">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
