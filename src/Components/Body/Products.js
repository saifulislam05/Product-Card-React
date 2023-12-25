import React, { useState } from "react";
import ProductItem from "./ProductItem";
import ProductList from "../../Data/ProductList.json";

const Products = () => {
  const [cart, setCart] = useState(ProductList);

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const removeProduct = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price_number * product.quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="w-full p-3 flex flex-col">
      {cart.length === 0 ? (
        <p className="text-md font-semibold text-center text-green-500">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="flex flex-col gap-8">
            {cart.map((data) => (
              <ProductItem
                key={data.id}
                data={data}
                updateQuantity={updateQuantity}
                removeProduct={removeProduct}
              />
            ))}
          </div>

          <div className="flex justify-between items-center w-full mt-6 py-3 border-t-2 border-gray-500">
            <p className="text-xl font-bold text-zinc-700">Total</p>
            <p className="text-xl font-bold text-primary">
              ${calculateTotal()}
            </p>
          </div>
          <button
            className="btn btn-danger btn-sm w-fit mx-auto"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Products;
