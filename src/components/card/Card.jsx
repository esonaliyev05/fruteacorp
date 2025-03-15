import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="relative rounded-[20px] overflow-hidden pb-4 border border-custom-green-400 hover:shadow-custom">
      <span className="absolute top-4 right-4 cursor-pointer active:scale-110 text-[20px] z-20">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Heart">
            <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043Z"></path>
          </g>
        </svg>
      </span>
      <Link className="select-none bg-[#efefef]" to="/product_info/34d62b36-e937-40c2-812b-07dc9bbc2fc6">
        <div className="mb-2 bg-[#efefef]">
          <img
            src="https://api.fruteacorp.uz/images/1733914034760-Ð¾Ð±Ð»ÐµÐ¿Ð¸ÑÐ° 50Ð³.png-.png"
            alt="SEA BUCKTHORN with orange, pineapple and apple"
            className="w-full object-contain aspect-[4/5.25] max-h-[350px] block"
          />
        </div>
      </Link>
      <Link to="/product_info/34d62b36-e937-40c2-812b-07dc9bbc2fc6">
        <div className="px-2 text-custom-gray-800 font-inter flex flex-col justify-between h-[100px] ss:h-[120px]">
          <div>
            <h4 className="text-[12.8px] max-h-[43px] overflow-hidden mb-1">
              <div className="overflow-hidden text-ellipsis leading-4" style={{ WebkitLineClamp: 2, display: "-webkit-box", WebkitBoxOrient: "vertical" }}>
                SEA BUCKTHORN with orange, pineapple and apple
              </div>
            </h4>
            <p className="text-[11.2px] flex items-center gap-x-1 text-custom-gray-500">
              <span className="text-[#ffb54c]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"></path>
                </svg>
              </span>
              5 (0 reviews)
            </p>
          </div>
          <div className="flex justify-between items-end gap-x-5">
            <div>
              <p className="text-[12px] ms:text-[14px] ss:text-[16px]">30000 UZS</p>
            </div>
          </div>
        </div>
      </Link>
      <span className="absolute bottom-4 right-2 cursor-pointer text-[20px] w-[32px] h-[32px] flex items-center justify-center border border-custom-green-400 rounded-full hover:bg-[#e5e7eb]">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708"></path>
          <path d="M16 19h6"></path>
          <path d="M19 16v6"></path>
          <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
        </svg>
      </span>
    </div>
  );
};

export default Card;
