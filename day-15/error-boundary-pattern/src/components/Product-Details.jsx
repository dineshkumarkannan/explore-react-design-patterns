import React from 'react'

const ProductDetails = () => {

  if (Math.random() > 0.5) {
    throw new Error('Product details error')
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-grow">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Premium Product Name</h1>
      <p className="text-2xl font-semibold text-blue-600 mb-4">$149.99</p>
      <p className="text-gray-600 mb-6">
        This is a brief, engaging description of the product highlights.
        Focus on benefits rather than just features.
      </p>
      <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-700 transition">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDetails