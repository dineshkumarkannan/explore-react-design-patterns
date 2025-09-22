import React, { useEffect, useState } from "react";
import ProductListPresenter from "./ProductListPresenter";
import CartListPresenter from "./CartListPresenter";
import Error from "./common/Error";

const SAMPLE_CART_DETAILS = [
  {
    id: "1",
    productId: "1",
    productName: "Wireless Bluetooth Headphones",
    userId: "1",
    quantity: 2,
    addedAt: "2024-01-15T14:30:00Z",
  },
  {
    id: "2",
    productId: "6",
    productName: "JavaScript: The Complete Guide",
    userId: "1",
    quantity: 1,
    addedAt: "2024-01-15T15:45:00Z",
  },
];

const ProductCartContainer = ({ selected, onCartCount }) => {
  const [products, setProduct] = useState([]);
  const [cartDetails, setCartDetails] = useState(SAMPLE_CART_DETAILS);
  const [error, setError] = useState(false);

  const fetchProducts = async () => {
    try {
      const respose = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/products`
      );
      if (respose.status === 404 || respose.status === 401) {
        throw Error("Not Found");
      }
      const data = await respose.json();
      setProduct(data);
    } catch (err) {
      setError(true);
    } finally {
    }
  };

  const fetchCartDetails = async () => {
    try {
      const respose = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/cart`
      );
      const data = await respose.json();
      // setCartDetails(data);
    } catch (err) {
      console.error(err);
    } finally {
    }
  };

  useEffect(() => {
    onCartCount(cartDetails.length);
  }, [cartDetails]);

  useEffect(() => {
    fetchProducts();
    fetchCartDetails();
  }, []);

  const handleCartChange = (details) => {
    const cartId = details[0];
    const value = details[1];

    setCartDetails((prev) =>
      prev.map((cart) => {
        if (cart.id === cartId) {
          return { ...cart, quantity: cart.quantity + value };
        }
        return cart;
      })
    );
  };

  if (error === true) {
    return (
      <Error
        title={"Api Error"}
        message={"Error!, Products not fetched!"}
        onRetry={() => {}}
      />
    );
  }

  return (
    <div className="w-[100%] bg-gray-500 p-6 h-screen overflow-y-auto">
      {selected === 0 && <ProductListPresenter products={products} />}
      {selected === 1 && (
        <CartListPresenter
          cartDetails={cartDetails}
          onCartChange={(...details) => handleCartChange(details)}
        />
      )}
    </div>
  );
};

export default ProductCartContainer;
