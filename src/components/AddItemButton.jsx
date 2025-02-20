import React from "react";

const AddItemButton = ({save}) => {
  return (
    <div className="flex justify-end mr-16">
      <button onClick={save} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
        Agregar al carrito
      </button>
    </div>
  );
};

export default AddItemButton;
