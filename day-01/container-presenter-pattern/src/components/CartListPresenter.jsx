import React from "react";
import Card from "./common/Card";

const CartListPresenter = ({ cartDetails, onCartChange }) => {
  return (
    <div className="w-[inheit] md:w-[90%] lg:w-[80%]">
      {cartDetails.length > 0 &&
        cartDetails.map((cart) => {
          return (
            <Card
              key={cart.id}
              className="w-[100%] bg-gray-200 mb-2 p-4 flex justify-between"
            >
              <div className="text-2xl font-bold">{cart.productName}</div>
              <div className="flex gap-4 items-center justify-center">
                <button
                  onClick={() => onCartChange(cart.id, -1)}
                  className="bg-gray-400 px-3 py-1 text-white text-2xl font-bold"
                >
                  -
                </button>
                <span className="text-2xl font-bold">{cart.quantity}</span>
                <button
                  onClick={() => onCartChange(cart.id, +1)}
                  className="bg-gray-400 px-3 py-1 text-white text-2xl font-bold"
                >
                  +
                </button>
              </div>
            </Card>
          );
        })}
    </div>
  );
};

export default CartListPresenter;
