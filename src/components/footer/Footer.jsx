import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./components/Modal";

const Footer = () => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <footer className="w-full h-[250px] flex justify-center ">
      <div className="container w-[1200px] border-b border-2-grey m-auto flex justify-between items-center flex-wrap ">
        <div className="flex gap-[20px]">
          <NavLink to={"about"}>Kompaniya haqida</NavLink>
          <NavLink onClick={open}>Biz bilan bog'lanish</NavLink>
          <NavLink to="/faq">Savol-Javob</NavLink>
        </div>

        <div className="flex gap-[15px]">
          <a href="">
            <img src="public/Footer/Без названия.svg" alt="" />
          </a>
          <a href="">
            <img src="public/Footer/Без названия (1).svg" alt="" />
          </a>
          <a href="">
            <img src="public/Footer/Без названия (2).svg" alt="" />
          </a>
        </div>
      </div>
      <Modal close={close} isOpen={isOpen} />
    </footer>
  );
};

export default Footer;
