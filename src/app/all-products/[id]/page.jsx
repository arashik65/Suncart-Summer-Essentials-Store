import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://suncart-summer-essentials-store-wpf.vercel.app/data.json",
  );
  const data = await res.json();
  const product = data.products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <p className="text-center mt-10 text-xl font-semibold">
        Product Not Found
      </p>
    );
  }
  return (
    <div className="flex justify-center my-8">
      <Card className="w-[400px] h-[400px] border border-gray-200 rounded-xl shadow-lg p-5 overflow-hidden rounded-md hover:xl transition-all duration-300">
        <div>
          <Image
            className="h-64 w-full object-contain"
            src={product.image}
            height={256}
            width={256}
            alt="product.name"
          ></Image>
        </div>
        <div>
          <h1 className="text-2xl font-bold ">{product.name}</h1>
          <div className="flex items-center justify-between ">
            <div>
              <h4 className=" font-medium">{product.brand}</h4>
              <h4 className=" font-medium">{product.category}</h4>
            </div>
            <div>
              <h4 className="font-bold text-2xl ">${product.price}</h4>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetailsPage;
