import React from 'react';
import ProductsCard from './ProductsCard';

const Topproducts = async () => {
     const res = await fetch("https://suncart-summer-essentials-store-wpf.vercel.app/data.json")
    const data = await res.json()
   
      const topproducts = data.products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-2xl font-bold my-5">Popular Products</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {topproducts.map((product) => (
         <ProductsCard
          key={product.id}
           product={product}
         ></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Topproducts;