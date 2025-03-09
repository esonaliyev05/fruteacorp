import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../Api/Beckend';
import { FaStar, FaShoppingCart } from 'react-icons/fa'; // React Icons dan ikonkalar

const Tea = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/products`)
      .then(response => {
        setProducts(response.data.data);
      })
      .catch(error => {
        console.error('Xato yuz berdi:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="p-5 text-center">
      <h1 className="text-2xl font-bold mb-6">Mahsulotlar</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product, index) => (
          <div key={index} className="border border-gray-200 rounded-lg shadow-lg p-4 w-64 text-center">
            {product.images && product.images.length > 0 && (
              <img 
                src={`${BACKEND_URL}/${product.images[0].image.name}`} 
                alt={product.title_uz} 
                className="w-24 h-24 mx-auto rounded-lg mb-4"
              />
            )}
            <h2 className="text-lg font-semibold mb-2">{product.title_uz}</h2>
            <div className="flex items-center justify-center gap-2 mb-3">
              <FaStar className="text-yellow-400" />
              <span>5 (0 sharhlar)</span>
            </div>
            <p className="text-xl font-bold mb-4">{product.amount} so'm</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full hover:bg-green-700 transition-colors">
              <FaShoppingCart />
              Savatga qo'shish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tea;