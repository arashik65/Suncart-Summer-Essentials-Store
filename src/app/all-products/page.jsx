import SearchByTitle from "@/components/Category";
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

       <SearchByTitle products={data.products} />

    
    </div>
  );
};

export default AllProductPage;




















