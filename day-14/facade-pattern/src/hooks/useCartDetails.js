const CART_DETAILS = [
  {
    name: "Mango",
    weight: 1,
    price: 100,
    discountPer: 2,
  },
  {
    name: "Apple",
    weight: 2,
    price: 300,
    discountPer: 5,
  },
  {
    name: "Grapes",
    weight: 1,
    price: 200,
    discountPer: 2,
  },
];

export const useCartDetails = () => {
  return CART_DETAILS;
};
