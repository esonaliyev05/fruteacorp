import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BACKEND_URL } from "../../Api/Beckend";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("token");

  const location = useLocation();
  const lastFourChars = location.pathname.slice(-4);

  useEffect(() => {
    const getMe = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/auth/getme`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response?.data?.data);
      } catch (error) {
        console.error(error);
      }
    };
    getMe();
  }, []);

  return (
    <section className="py-[25px] lg:py-0">
      <div className="w-full max-w-[1200px] px-[25px] mx-auto">
        <h2 className="text-[24px] font-semibold text-gray-800 font-inter mb-10">
          {userData?.firstName} {userData?.lastName}
        </h2>
        <div className="flex items-start flex-wrap lg:flex-nowrap gap-[25px]">
          <ul className="w-full max-w-[332px] flex lg:flex-col gap-1">
            <li>
              <Link
                className={`${
                  lastFourChars === "user" ? "bg-green-200" : ""
                } hover:bg-green-200 hover:bg-opacity-65 py-3 text-[14px] sm:text-[18px] px-[10px] w-full flex rounded-[8px] font-inter font-normal transition text-gray-800`}
                to=""
              >
                Buyurtmalarim
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  lastFourChars === "ings" ? "bg-green-200" : ""
                } hover:bg-green-200 hover:bg-opacity-65 py-3 text-[14px] sm:text-[18px] px-[10px] w-full flex rounded-[8px] font-inter font-normal transition text-gray-800`}
                to="settings"
              >
                Ma'lumotlarim
              </Link>
            </li>
          </ul>
          <div className="w-full max-w-[820px] mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default UserPage;
