import React from "react";
import styles from "./news.module.css";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="container">
      <div className={styles.news}>
        <div className={styles.row}>
          <div className={styles.newsImg}>
            <Image
              src="/images/3d-casual-life-woman-talking-with-chatbot.png"
              alt=""
              width={289}
              height={211}
            />
          </div>
          <div className={styles.newsContent}>
            <h3>Post Buy Requirement</h3>
            <p>Get the Best Deals and Exclusive Offers with Biztrade</p>
            <div></div>
            <h6>Tell us about your requirement*</h6>
            <div className={styles.search}>
              <Image src="/images/search.svg" alt="" width={20} height={20} />
              <input
                type="text"
                placeholder="Enter the product you are looking for"
              />
            </div>
            <button className={styles.newsBtn}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
