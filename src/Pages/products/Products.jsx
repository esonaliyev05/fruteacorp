import React from "react";
import { NavLink } from "react-router-dom";
import Tea from "../../components/producs/Tea";

const Products = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">

    <div className="container w-[1200px] min-h-[80vh] mx-auto flex justify-center items-center">
      <div className="w-full flex justify-center items-start gap-8">
        {/* Chap tomondagi menyu */}
        <div className="w-[15%] flex gap-4 flex-col">
          <div className="w-full flex gap-2"> 
            <NavLink to="/" className="font-bold">Boshsahifa</NavLink> /
            <p>Turkumlar</p>
          </div>
          <div className="flex flex-col mt-[25px]">
            <p className="font-[600] text-[20px]">Turkumlar</p>
            <NavLink to={"Tea"}>Choy</NavLink>
            <NavLink to={"sweets"}>Shirinliklar</NavLink>
          </div>
        </div>

        {/* Asosiy kontent */}
        <div className="w-[80%]">
          <Tea />
        </div>
      </div>
    </div>
    </div>

  );
};

export default Products;
