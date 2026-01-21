import React from "react";
import { useCartFacade } from "../hooks/facade/useCartFacade";

const Task2 = () => {
  const { cart_details_after_discount, total_price } = useCartFacade();

  return (
    <div>
      <h3 className="text-2xl underline">Shopping Cart Facade</h3>

      {cart_details_after_discount.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart_details_after_discount.map((detail, index) => (
          <div key={index} className="border-b py-2">
            <h5>Name: {detail.name}</h5>
            <p>Original Price: ₹{detail.actualPrice}</p>
            <p>Discount: ₹{detail.after_price.discountAmount}</p>
            <p>After Discount: ₹{detail.after_price.finalAmount}</p>
          </div>
        ))
      )}

      <h4 className="mt-4 font-bold">Total Payable: ₹{total_price}</h4>
    </div>
  );
};

export default Task2;
