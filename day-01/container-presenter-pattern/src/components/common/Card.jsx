import React from "react";

const Card = ({ children, ...props }) => {
  return (
    <div className="w-[inherit]" {...props}>
      {children}
    </div>
  );
};

export default Card;
