"use client";

import ProductCarousel from "@/components/Card/ProductCarousel";
import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  brand: string;
  category: string;
};

const Electronics = () => {
  const [fetchedProducts, setFetchedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.products.filter(
          (item: Product) => item.category.toLowerCase() === "furniture"
        );
        setFetchedProducts(filtered);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="container">
      <div className="product_grid">
        <h3>Furniture</h3>
        <ProductCarousel products={fetchedProducts} />
      </div>
    </div>
  );
};

export default Electronics;
