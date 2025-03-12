import React from "react";

const Sweets = ({ data }) => {
  // Agar ma'lumot kelmagan bo'lsa, rasm chiqarish
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <img
          src="public/products/not-product-Bbj56LVh.png" // Rasm manzili (o'zgartirishingiz mumkin)
          alt="No data available"
          className="w-48 h-48"
        />
        <p className="mt-4 text-gray-600">Ma'lumot topilmadi</p>
      </div>
    );
  }

  // Agar ma'lumot kelgan bo'lsa, uni ko'rsatish
  return (
    <div>
      <h1 className="text-2xl font-bold">Shirinliklar</h1>
      <ul>
        {data.map((sweet) => (
          <li key={sweet.id} className="mt-2">
            <h2 className="font-bold">{sweet.name}</h2>
            <p>{sweet.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sweets;