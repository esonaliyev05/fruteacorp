import React from 'react'

const NotFount = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-8xl font-bold text-red-600">404</h1>
    <p className="text-2xl text-gray-600 mt-4">Sahifa topilmadi!</p>
    <p className="text-lg text-gray-600 mt-2">Siz qidirayotgan sahifa mavjud emas yoki olib tashlangan.</p>
    <a href="/" className="mt-6 text-lg p-[8px] bg-green-600 text-white rounded-[5px]">Bosh sahifaga qaytish</a>
  </div>
  )
}

export default NotFount