import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    alert("Agregado " + count + " al carrito");
  };

  return (
    <div className="flex flex-col items-center p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center mb-4">
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="mx-4 text-2xl text-white font-bold">{count}</span>
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <button 
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;