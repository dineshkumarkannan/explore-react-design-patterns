import React from 'react'

const ProductReommendations = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Complete the Look</h2>
      <div className="flex gap-4">
        <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
        <div>
          <p className="font-medium text-gray-800">Matching Accessory</p>
          <p className="text-sm text-gray-500">$29.99</p>
        </div>
      </div>
    </div>
  )
}

export default ProductReommendations