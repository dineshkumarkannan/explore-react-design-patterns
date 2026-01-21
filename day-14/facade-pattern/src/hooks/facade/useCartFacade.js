import { useMemo } from "react";
import { useCartDetails } from "../useCartDetails";
import { useDiscountLogic } from "../useDiscountLogic";

export const useCartFacade = () => {
  const cart_details = useCartDetails();

  const cart_details_after_discount = useMemo(() => {
    return cart_details.map((product) => {
      const after_price = useDiscountLogic(product.price, product.discountPer);

      return {
        name: product.name,
        weight: product.weight,
        actualPrice: product.price,
        after_price,
      };
    });
  }, [cart_details]);

  const total_price = useMemo(() => {
    return cart_details_after_discount.reduce((total, item) => {
      return total + item.after_price.finalAmount;
    }, 0);
  }, [cart_details_after_discount]);

  return {
    cart_details_after_discount,
    total_price,
  };
};
