"use client";

import { useState } from "react";
import { SearchField } from "@heroui/react";

import ProductsCard from "./ProductsCard";

const SearchByTitle = ({ products }) => {
  const [search, setSearch] = useState("");

  const filteredProducts =
    search.trim() === ""
      ? products
      : products.filter((product) =>
          product.name?.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div>
      {/* SEARCH */}
      <SearchField className="w-[280px] mt-3">
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchField.ClearButton onClick={() => setSearch("")} />
        </SearchField.Group>
      </SearchField>

      {/* CARDS */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        {filteredProducts.map((product) => (
        //   <TopProductCard key={product.id} product={product} />
        <ProductsCard key={product.id} product={product} ></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default SearchByTitle;