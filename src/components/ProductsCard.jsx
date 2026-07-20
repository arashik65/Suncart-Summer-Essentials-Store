import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar, FaTag } from "react-icons/fa";

const ProductsCard = ({ product }) => {
  console.log(product);
  return (
    <Card className="border rounded-xl overflow-hidden">
      <div className="relative  w-full aspect-square group">
        <Image
          src={product.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={product.name}
          className=" object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
        />
        <Chip
          size="small"
          className="absolute right-2 top-2  bg-blue-100 text-blue-700"
        >
          {product.category}
        </Chip>
      </div>
      <div>
        <p className="font-medium min-h-20">{product.description}</p>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <p>
           <FaTag></FaTag>
          </p>
          <p> {product.brand}</p>
        </div>

        <Separator orientation="vertical" />

        <div className="flex items-center gap-2">
          <p>
            <FaStar />
          </p>
          <p> {product.rating}</p>
        </div>
      </div>

      <Link href={`/all-products/${product.id}`}>
        <Button variant="outline" className={"w-full"}>
          {" "}
          View Details{" "}
        </Button>
      </Link>
    </Card>
  );
};

export default ProductsCard;
