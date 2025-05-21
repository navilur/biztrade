import React from "react";
import styles from "./quotation.module.css";
import Image from "next/image";
import { statistics } from "@/constants/constants";
import Review from "./Review";

const Quotation = () => {
  return (
    <div className="container">
      <div className={styles.quotation}>
        <h3>What is RFQ</h3>
        <div className={styles.row}>
          <div>
            <div className={styles.flex}>
              <div className={styles.playBtn}>
                <Image
                  src="/images/play.svg"
                  alt=""
                  width={30}
                  height={36.56}
                />
              </div>
              <p className={styles.quotationText}>
                Request for Quotation is a free and easy solution for buyers who
                are seeking quality quotes. By sending out a simple request, you
                will receive multiple quotes from qualified suppliers
              </p>
            </div>
            <div className={styles.statistics}>
              {statistics.map((item) => (
                <div key={item.id}>
                  <h4>{item.text}</h4>
                  <h6>{item.label}</h6>
                </div>
              ))}
            </div>
          </div>
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Quotation;
