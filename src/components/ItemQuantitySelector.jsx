import React, { useState } from 'react';

const ItemQuantitySelector = ({stock, count, setCount}) => {
  const handleIncrement = () => {
    if (count<stock) {
      setCount(count + 1);
      
    }
    return
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
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
    </div>
  );
};

export default ItemQuantitySelector;