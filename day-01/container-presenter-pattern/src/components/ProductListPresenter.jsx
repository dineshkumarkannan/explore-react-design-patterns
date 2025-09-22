import React from "react";
import Card from "./common/Card";
import Tag from "./common/Tag";

const ProductListPresenter = ({ products }) => {
  return (
    <div className="mb-[10%]">
      {products.length > 0 &&
        products.map((product) => {
          return (
            <Card
              key={product.id}
              className="bg-gray-200 mb-3 px-2 py-4 rounded-md flex flex-col md:flex-row lg:h-130"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-[100%] object-cover md:w-[50%] lg:w-[40%]"
              />
              <div className=" w-[100%] pl-4 flex flex-col gap-4 items-left md:w-[50%] lg:w-[60%]">
                <h4 className="text-2xl font-bold my-2">{product.name}</h4>
                <p className="text-gray-500">{product.description}</p>
                <div className="flex gap-3 text-2xl">
                  &#8377;
                  <span className="text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                  <span>{product.price}</span>
                </div>
                <span>
                  Ratings:{" "}
                  <span className="text-xl">{product.rating} / 5 </span>
                </span>
                {product?.tags.length > 0 && (
                  <div>
                    {product.tags.map((tag, idx) => (
                      <Tag key={idx} name={tag} />
                    ))}
                  </div>
                )}
                <div>
                  {product?.inStock === true ? (
                    <span className="text-green-700">
                      Available : {product?.stock}
                    </span>
                  ) : (
                    <span className="text-red-300">Out of stock</span>
                  )}
                </div>
                <div>
                  <h6 className="text-gray-800">Features : </h6>
                  <ul className="style-none text-gray-600 ml-2">
                    {product.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <button
                  disabled={product?.inStock === false}
                  className="text-white font-bold py-2 mx-2 rounded-4xl border-2 border-gray-700 bg-gray-600 tracking-wide disabled:bg-gray-400 disabled:border-none"
                >
                  Add to cart
                </button>
              </div>
            </Card>
          );
        })}
    </div>
  );
};

export default ProductListPresenter;
