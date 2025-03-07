import React from 'react'

const NotFount = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-6xl font-bold text-gray-800">404</h1>
    <p className="text-2xl text-gray-600 mt-4">Sahifa topilmadi</p>
    <a
      href="/"
      className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
    >
      Bosh sahifaga qaytish
    </a>
  </div>
  )
}

export default NotFount