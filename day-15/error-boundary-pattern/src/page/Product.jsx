import React, { useEffect } from 'react'
import getProduct from '../service/getProduct';
import ProductReviews from '../components/Product-Reviews';
import ProductReommendations from '../components/Product-Reommendations';
import ProductDetails from '../components/Product-Details';
import ErrorBoundary from '../components/ErrorBoundary';
import Error from '../components/Error';

const Product = () => {

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const data = await getProduct();
                console.log("Product Data:", data);
            } catch (error) {
                console.error("Failed to fetch product:", error);
            }
        };
        fetchProductData();
    }, []);

    return (
        <main className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">

                <div className="lg:w-3/5 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center min-h-[400px]">
                    <div className='text-gray-400'>[Product Image Gallery]</div>
                </div>

                {/* Details & Recommendation Section */}
                <div className="lg:w-2/5 flex flex-col gap-6">
                    <ErrorBoundary fallback={Error}>
                        <ProductDetails />
                    </ErrorBoundary>
                    <ErrorBoundary fallback={Error}>
                        <ProductReommendations />
                    </ErrorBoundary>

                </div>
            </div>
            <ErrorBoundary fallback={Error}>
                <ProductReviews />
            </ErrorBoundary>
        </main>
    );
};


export default Product