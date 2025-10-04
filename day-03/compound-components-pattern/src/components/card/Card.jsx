import React from "react";
import "./index.css";

const Card = ({ children }) => {
  return <div className="card-container">{children}</div>;
};

const Header = ({ className, children }) => {
  return <div className={`card-header ${className}`}>{children}</div>;
};

const Body = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

const Footer = ({ className, children }) => {
  return <div className={`card-footer ${className}`}>{children}</div>;
};

const Image = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Image = Image;

export default Card;
