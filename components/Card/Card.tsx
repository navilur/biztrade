import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  brand: string;
  discountPercentage: string;
  sku: string;
};

type Props = {
  item: Product;
};

const Card = ({ item }: Props) => {
  return (
    <div className={styles.card}>
      <Link href={`/product/${item.id}`}>
        <Image
          src={item.thumbnail}
          alt={item.title}
          width={203}
          height={132}
          objectFit="cover"
          className={styles.cardImg}
        />
        <h4>{item.title}</h4>
        <h4>
          ${item.price}
          {item.discountPercentage > 0 && (
            <span style={{ color: "red", marginLeft: "8px", fontSize: "10px" }}>
              ({item.discountPercentage}% off)
            </span>
          )}
        </h4>
        <p>MOQ: {item.sku}</p>
        <div className={styles.flex}>
          <div className={styles.store}>
            <div className={styles.flex}>
              <Image src="/images/store.svg" width={18} height={18} alt="" />
              <p>{item.brand}</p>
            </div>
          </div>
          <button>
            <span>Send Enquiry</span>
            <Image src="/images/envelope.svg" width={10} height={10} alt="" />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
