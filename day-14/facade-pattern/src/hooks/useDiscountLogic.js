import { useMemo } from "react";

export const useDiscountLogic = (actualAmt, discountPer) => {
  const result = useMemo(() => {
    const amount = Number(actualAmt);
    const discount = Number(discountPer);

    const discountAmount = (amount * discount) / 100;
    const finalAmount = amount - discountAmount;

    return {
      discountAmount,
      finalAmount,
    };
  }, [actualAmt, discountPer]);

  return result;
};
