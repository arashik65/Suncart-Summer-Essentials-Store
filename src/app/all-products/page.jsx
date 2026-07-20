import ProductsCard from "@/components/ProductsCard";
import React from "react";

const AllProductPage = async () => {
  const res = await fetch(
    "https://suncart-summer-essentials-store-wpf.vercel.app/data.json",
  );
  const data = await res.json();
//   console.log(data);

  return (
    <div>
      <h1 className="text-3xl font-bold my-5">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.products.map((product) => (
          <ProductsCard key={product.id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default AllProductPage;
