const SAMPLE_DATA = {
    status: "success",
    message: "Product retrieved successfully",
    timestamp: new Date().toISOString(),
    data: {
        product_id: "PENCIL-99X",
        name: "Zenith Graphite HB #2 Pencil",
        image_url: "https://api.example.com/images/products/zenith-hb-pencil.jpg",
        details: [
            "Core Material: Premium-grade graphite mixed with high-density clay for a smooth, skip-free writing experience.",
            "Casing: Sustainably sourced Incense-cedar wood that allows for effortless sharpening and prevents splintering.",
            "Shape: Ergonomic hexagonal barrel design to provide a firm grip and prevent rolling.",
            "Durability: Special SV bonding process glues the lead to the wood to prevent internal breakage.",
            "Finish: Coated with a non-toxic, phthalate-free lacquer for comfort and safety."
        ],
        reviews: [
            {
                user_id: "u_8821",
                user: "ArtLover88",
                rating: 5,
                comment: "Smooth & Reliable: I've been using these for my daily journaling, and the pigmentation is excellent."
            },
            {
                user_id: "u_4402",
                user: "SchoolMom_21",
                rating: 4,
                comment: "Great for Students: Finally, a pencil that doesn't snap every time my son sharpens it!"
            }
        ],
        recommendations: [
            "The Artist's Choice: Ideal for initial sketching and layout before moving to softer 'B' grades for shading.",
            "Office Essential: Pair with a long-point sharpener to maintain a fine tip for detailed note-taking."
        ]
    }
};


export const getProduct = (shouldFail = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject({
                    status: "error",
                    message: "Failed to fetch product data. Please try again later.",
                    code: 500
                });
            } else {
                resolve(SAMPLE_DATA);
            }
        }, 800);
    });
};

export default getProduct;