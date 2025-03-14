import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SearchForm = ({res}) => {
  const [searchValue , setSearchValue] = useState("");
  const [productData , setProductData] = useState(null);
  const { t, i18n } = useTranslation(); // To'g'ri ishlatish

  
 useEffect(() => {
   const getData = async () => {
     try {
       const response = await axios.get(
         "https://api.fruteacorp.uz/products"
       );
       setProductData(response?.data?.data);
       console.log(response?.data?.data);
     } catch (error) {
       console.error(
         "Xatolik yuz berdi:",
         error.response?.data || error.message
       );
     }
   };

   getData();
 }, []);
  
  const onSubmit = (e) => {
    e?.preventDefault();
  }

  const handleSearchValue = (e) => {
    setSearchValue(e?.target?.value);
    console.log(searchValue);
  }

const resultSearchData = productData?.filter((item) =>
  item?.title_uz?.toLowerCase().includes(searchValue.toLowerCase())
);

console.log(resultSearchData?.length);

  console.log(resultSearchData);
  return (
    <div className="relative">
      <form
        onSubmit={onSubmit}
        className={`flex z-[101] rounded-[4px] border w-full ${
          res === "responsive" ? "border-none" : "border-gray-300"
        }  overflow-hidden lg:flex`}
      >
        <input
          onChange={(e) => handleSearchValue(e)}
          type="text"
          value={searchValue}
          placeholder={t("Mahsulotlar izlash")}
          className={`z-[101] relative px-3 py-2 outline-none w-full h-10 text-green-700 font-bold ${
            res === "responsive"
              ? "bg-green-200 rounded-[10px] pl-[50px] text-green-900"
              : ""
          }`}
        />
        {res === "responsive" ? (
          ""
        ) : (
          <button
            type="submit"
            className="w-15 bg-green-200 flex justify-center items-center cursor-pointer text-[21px] text-green-700 hover:bg-green-300 transition"
          >
            <IoSearchSharp />
          </button>
        )}
        <IoSearchSharp
          className={`${
            res === "responsive"
              ? "absolute left-0 top-[11px] w-12 text-[21px] text-green-700 transition"
              : "hidden"
          }`}
        />
      </form>
      {searchValue ? 
      <div className="flex w-full p-[20px] scrollbar-hide  overflow-y-scroll max-h-[500px] flex-col absolute z-[10] bg-white shadow-2xl rounded-b-[10px] top-[42px]">
        {resultSearchData?.map((product) =>
          resultSearchData?.length > 1 ? (
            <Link
              to={`products/${product?.id}`}
              className="flex hover:bg-green-200 rounded-[8px] cursor-pointer gap-[20px] p-[10px]"
            >
              <img
                className="w-[70px] h-[70px] border-1 rounded-[5px] object-contain"
                src={`https://api.fruteacorp.uz/images/${product?.images?.[0]?.image?.name}`}
                alt={product?.name}
              />
              <div className="w-full flex flex-col items-left justify-between">
                <h3>{product?.title_uz}</h3>
                <span className="bg-yellow-200 rounded-[2px] flex items-center justify-center max-w-[130px]">
                  {product?.amount} so'm
                </span>
              </div>
            </Link>
          ) : (
            <h1 className="text-center">Mahsulot topilmadi!!!</h1>
          )
        )}
      </div> : ""  
    }
    </div>
  );
};

export default SearchForm;
