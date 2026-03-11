import React from 'react'

const ProductReviews = () => {

  if (Math.random() > 0.5) {
    throw new Error("Review's api error. Please try again!")
  }

  return (
    <div className="max-w-7xl mx-auto mt-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
      <div className="text-gray-600">Product reviews content...</div>
    </div>
  )
}

export default ProductReviews