import React, { useEffect, useRef, useState } from "react";
import Tab from "./common/Tab";
import ProductCartContainer from "./ProductCartContainer";

const TAB_DETAILS = [
  {
    title: "Products",
    name: "products",
    active: true,
  },
  {
    title: "Cart",
    name: "cart",
    active: false,
  },
];

const MainContainer = () => {
  const [tabDetails, setTabDetails] = useState(TAB_DETAILS);
  const cartCountRef = useRef(0);
  const selectedTabRef = useRef(0);

  function handleTabClick(id) {
    selectedTabRef.current = id;
    const selectedTitle = tabDetails[id].name;
    setTabDetails((prev) =>
      prev.map((prev) => {
        if (prev.name === selectedTitle) {
          return { ...prev, active: true };
        }
        return { ...prev, active: false };
      })
    );
  }

  useEffect(() => {
    setTabDetails((prev) =>
      prev.map((prev) => {
        if (prev.name.toLowerCase() === "cart") {
          return { ...prev, title: `Cart (${cartCountRef.current})` };
        }
        return prev;
      })
    );
  }, []);

  const handleCartCount = (val) => {
    cartCountRef.current = val;
  };

  return (
    <div className="w-[100%] mt-[5%] mx-auto md:w-[80%]">
      <Tab tabs={tabDetails} onTabClick={(e) => handleTabClick(e)} />
      <ProductCartContainer
        className="mb-10"
        selected={selectedTabRef.current}
        onCartCount={handleCartCount}
      />
    </div>
  );
};

export default MainContainer;
