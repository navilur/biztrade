import React from "react";
import styles from "./business.module.css";
import { businessData } from "@/constants/constants";
import Image from "next/image";

const BusinessAdvisory = () => {
  return (
    <div className="container">
      <div className={styles.business}>
        <h3>Business Advisory</h3>
        <div className={styles.row}>
          {businessData.map((item) => (
            <div className={styles.card} key={item.id}>
              <Image src={item.img} width={49} height={48} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <div className={styles.tag}>{item.tag}</div>
              <div
                className={styles.metaTag}
                style={{
                  background:
                    item.metaTag === "Web Development" ? "#FFB5D1" : "#3159fb",
                  color: item.metaTag === "Web Development" ? "#000" : "#fff",
                }}
              >
                {item.metaTag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessAdvisory;
