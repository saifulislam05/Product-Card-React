import React from 'react'

const ProductItem = ({ data, updateQuantity, removeProduct }) => {
  const { id, name, src, price_string, quantity } = data;

  const handleIncrease = () => {
    updateQuantity(id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      updateQuantity(id, quantity - 1);
    }
  };

  const handleRemove = () => {
    removeProduct(id);
  };
  return (
    <div className="w-full flex shadow-2xl  rounded-lg">
      <div className="w-1/2 flex gap-4">
        <img src={src} alt={name} className="w-20" />
        <div className="text-left">
          <h5>{name}</h5>
          <span className="item-price">{price_string}</span>
          <button onClick={handleRemove} className="text-red-600">
            remove
          </button>
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-end">
        <div className="flex flex-col items-center justify-between">
          <button onClick={handleIncrease} className="amount-btn">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="amount-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
            </svg>
          </button>
          <span className="amount">{quantity}</span>
          <button onClick={handleDecrease} className="amount-btn">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="amount-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem