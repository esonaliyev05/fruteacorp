import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation(); // URL ni kuzatish uchun

  return (
    <div className="flex justify-center min-h-screen">
      <div className="container max-w-[1200px] w-full min-h-[80vh] mx-auto flex">
        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-[25%] flex gap-4 flex-col sticky top-0">
            <div className="w-full flex gap-1">
              <span className="font-bold">Bosh sahifa</span> /
              <span className="font-bold">Turkumlar</span>
              {location.pathname.includes("tea") && (
                <>
                  {" / "}
                  <span className="font-bold">Choy</span>
                </>
              )}
              {location.pathname.includes("sweets") && (
                <>
                  {" / "}
                  <span className="font-bold">Shirinliklar</span>
                </>
              )}
            </div>
            <div className="flex flex-col mt-[25px]">
              <p className="font-[600] text-[20px]">Turkumlar</p>
              <Link
                to="tea" // URL ni o'zgartiradi
                className={`text-left ${
                  location.pathname.includes("tea")
                    ? "text-blue-500 font-bold"
                    : "text-gray-500"
                } hover:text-blue-500`}
              >
                Choy
              </Link>
              <Link
                to="sweets" // URL ni o'zgartiradi
                className={`text-left ${
                  location.pathname.includes("sweets")
                    ? "text-blue-500 font-bold"
                    : "text-gray-500"
                } hover:text-blue-500`}
              >
                Shirinliklar
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-[80%] overflow-y-auto">
            <Outlet /> {/* Tea yoki Sweets komponentlari shu yerda ko'rinadi */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;