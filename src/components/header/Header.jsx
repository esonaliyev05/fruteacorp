import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from "react-icons/hi2";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GiGrapes } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full">
      {/* Yuqori navbar */}
      <nav className="bg-green-200 w-full h-[38px] flex justify-center items-center hidden lg:flex">
        <div className="container flex justify-center items-center px-4 gap-[15px]">
          <ul className="flex gap-4 text-[16px] font-semibold">
            <Link to="products" className="hover:text-green-700">
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
      <div className="bg-white py-3 flex justify-center">
        <div className="container w-full max-w-[1200px] h-[80px] flex items-center justify-between px-4 sm:px-6 h-[40px] lg:px-8">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src="public/navbar/logo-1-Dw9Tt7XS.png"
                alt="Logo"
                className="h-10 sm:h-8 lg:h-10"
              />
            </Link>
          </div>

          {/* Katalog tugmasi */}
          <div className="relative hidden lg:block" ref={menuRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 bg-green-200 w-[120px] h-[35px] justify-center text-green-700 rounded-md font-semibold hover:bg-green-300 transition"
            >
              {open ? <HiMiniBarsArrowUp /> : <HiMiniBarsArrowDown />} Katalog
            </button>

            {open && (
              <div className="absolute left-0 top-12 bg-white border border-green-500 rounded-md shadow-lg w-55 min-h-15">
                <Link to="products?category=tea" className="block px-4 py-2 hover:bg-gray-100">
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
          <div className="flex border border-gray-400 overflow-hidden hidden lg:flex">
            <input
              type="text"
              placeholder="Mahsulotlar izlash"
              className="px-3 py-2 outline-none w-104 h-10 text-green-700 font-bold"
            />
            <button className="w-15 bg-green-200 flex justify-center items-center text-[21px] text-green-700 hover:bg-green-300 transition">
              <IoSearchSharp />
            </button>
          </div>

          {/* Foydalanuvchi va savat */}
          <div className="hidden lg:flex items-center gap-4">
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

          {/* Mobil versiya uchun tillar */}
          <div className="flex items-center gap-2 lg:hidden">
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
      </div>

      {/* Mobil versiya uchun qidiruv paneli */}
      <div className="w-[80%] flex justify-center lg:hidden">
        <div className="flex border border-gray-400 overflow-hidden m-auto lg:hidden">
          <input
            type="text"
            placeholder="Mahsulotlar izlash"
            className="px-3 py-2 outline-none w-100 h-10 text-green-700 font-bold"
          />
          <button className="w-15 bg-green-200 flex justify-center items-center text-[21px] text-green-700 hover:bg-green-300 transition">
            <IoSearchSharp />
          </button>
        </div>
      </div>

      {/* Mobil versiya uchun pastki menyu */}
      <div className="fixed w-full h-[60px] px-6 py-3 border-t bg-white flex justify-center bottom-0 lg:hidden">
        <div className="container h-full flex justify-between items-center">
          <NavLink
            to="/"
            className="flex flex-col items-center text-gray-500 transition-all duration-200 active:text-green-600"
          >
            <GiGrapes className="text-2xl" />
            <p className="text-sm font-medium">Bosh sahifa</p>
          </NavLink>

          <NavLink
            to="/katalog"
            className="flex flex-col items-center text-gray-500 transition-all duration-200 active:text-green-600"
          >
            <BiSearch className="text-2xl" />
            <p className="text-sm font-medium">Katalog</p>
          </NavLink>

          <NavLink
            to="/savat"
            className="flex flex-col items-center relative text-gray-500 transition-all duration-200 active:text-green-600"
          >
            <FiShoppingBag className="text-2xl" />
            <p className="text-sm font-medium">Savat</p>
            <span className="absolute -top-1 -right-2 bg-green-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              1
            </span>
          </NavLink>

          <NavLink
            to="/saralangan"
            className="flex flex-col items-center text-gray-500 transition-all duration-200 active:text-green-600"
          >
            <AiOutlineHeart className="text-2xl" />
            <p className="text-sm font-medium">Saralangan</p>
          </NavLink>

          <NavLink
            to="/kabinet"
            className="flex flex-col items-center text-gray-500 transition-all duration-200 active:text-green-600"
          >
            <HiOutlineUser className="text-2xl" />
            <p className="text-sm font-medium">Kabinet</p>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;