"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import styles from "./productPage.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
  description: string;
  brand: string;
  category: string;
  stock: string;
}

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"description" | "details">(
    "description"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.images[0]);
      })
      .catch((err) => console.error("Error loading product:", err));
  }, [id]);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) setQuantity(value);
  };

  const addToCart = () => {
    if (product) {
      alert(`Added ${quantity} of ${product.title} to cart!`);
    }
  };

  const imageRef = useRef<HTMLDivElement>(null);
  const [zoomStyle, setZoomStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      imageRef.current!.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transform: "scale(1)",
      transformOrigin: "center center",
    });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.productPage}>
      <div className={styles.container}>
        <div className={styles.productGrid}>
          <div className={styles.imageGallery}>
            <div
              className={styles.mainImage}
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={mainImage}
                alt={product.title}
                layout="fill"
                objectFit="contain"
                style={{
                  transition: "transform 0.2s ease",
                  ...zoomStyle,
                }}
              />
            </div>

            <div className={styles.thumbnailContainer}>
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`${styles.thumbnail} ${
                    mainImage === img ? styles.activeThumbnail : ""
                  }`}
                  onClick={() => setMainImage(img)}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.productDetails}>
            <h1>{product.title}</h1>
            <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
            <p className={styles.stock}>Stock: {product.stock}</p>
            <div className={styles.quantitySelector}>
              <button
                className={styles.quantityButton}
                onClick={decrementQuantity}
              >
                -
              </button>
              <input
                className={styles.quantityInput}
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <button
                className={styles.quantityButton}
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>

            <button onClick={addToCart} className={styles.addToCartButton}>
              Add to Cart
            </button>

            <div className={styles.tabs}>
              <button
                onClick={() => setActiveTab("description")}
                className={
                  activeTab === "description"
                    ? styles.activeTab
                    : styles.tabButton
                }
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={
                  activeTab === "details" ? styles.activeTab : styles.tabButton
                }
              >
                Details
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === "description" && <p>{product.description}</p>}
              {activeTab === "details" && (
                <ul>
                  <li style={{ display: product.brand ? "" : "none" }}>
                    <strong>Brand:</strong> {product.brand}
                  </li>
                  <li>
                    <strong>Category:</strong> {product.category}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
