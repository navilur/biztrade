import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";
import { sidebar } from "@/constants/constants";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className="container">
        <div className={styles.row}>
          {/* Left Section: Top Categories */}
          <div className={styles.topCategoriesSection}>
            <h2 className={styles.topCategoriesTitle}>Top Categories</h2>
            <ul className={styles.topCategoriesList}>
              {sidebar.map((item) => (
                <li key={item.id} className={styles.categoryItem}>
                  <Link href={item.url}>
                    <Image
                      src={item.img}
                      alt={item.label}
                      width={22}
                      height={22}
                    />
                    <p>{item.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="" className={styles.viewAllCategoriesButton}>
              View all categories
            </Link>
          </div>
          <div className={styles.heroMiddle}>
            <div className={styles.row}>
              {/* Middle Section: Hero Banner */}
              <div className={styles.heroBannerSection}>
                <Image
                  src="/images/heroImg1.png"
                  alt="Sell on Biztrade"
                  layout="fill"
                  className={styles.heroBannerImage}
                />
              </div>

              {/* Right Section: Source Products & Searching for Product */}
              <div className={styles.rightSection}>
                <div className={styles.sourceProductsBox}>
                  <p className={styles.sourceProductsText}>
                    Source products <br /> from trusted suppliers
                  </p>
                  <Link href="" className={styles.exploreSellerListButton}>
                    Explore <strong>Seller List</strong>
                  </Link>
                </div>
                <div className={styles.searchingProductBox}>
                  <p className={styles.searchingProductText}>
                    Searching for a <br /> product?
                  </p>
                  <Link href="" className={styles.exploreSellerListButton}>
                    Post Buy <strong>Requirement</strong>
                  </Link>
                </div>
              </div>
            </div>
            {/* More Services Section */}
            <div className={styles.moreServicesSection}>
              <h2 className={styles.moreServicesTitle}>More Services</h2>
              <div className={styles.moreServicesGrid}>
                <div className={styles.serviceBox}>
                  <Image
                    src="/images/handshake.svg"
                    alt="Buyer Matchmaking"
                    width={69}
                    height={84}
                    className={styles.serviceImageWrapper}
                  />
                  <div className={styles.serviceBoxContent}>
                    <h3 className={styles.serviceTitle}>Buyer Matchmaking</h3>
                    <Link href="" className={styles.serviceLink}>
                      <p>Learn more</p>
                      <Image
                        src="/images/arrow right.svg"
                        alt="Membership Plans"
                        width={22}
                        height={22}
                      />
                    </Link>
                  </div>
                </div>
                <div className={styles.serviceBox}>
                  <Image
                    src="/images/international-business.svg"
                    alt="Become a Seller"
                    width={66}
                    height={86}
                    className={styles.serviceImageWrapper}
                  />
                  <div className={styles.serviceBoxContent}>
                    <h3 className={styles.serviceTitle}>Become a Seller</h3>
                    <Link href="" className={styles.serviceLink}>
                      <p>Learn more</p>
                      <Image
                        src="/images/arrow right.svg"
                        alt="Membership Plans"
                        width={22}
                        height={22}
                      />
                    </Link>
                  </div>
                </div>
                <div className={styles.serviceBox}>
                  <Image
                    src="/images/wallet.svg"
                    alt="Legal Service"
                    width={63}
                    height={83}
                    className={styles.serviceImageWrapper}
                  />
                  <div className={styles.serviceBoxContent}>
                    <h3 className={styles.serviceTitle}>Legal Service</h3>
                    <Link href="" className={styles.serviceLink}>
                      <p>Learn more</p>
                      <Image
                        src="/images/arrow right.svg"
                        alt="Membership Plans"
                        width={22}
                        height={22}
                      />
                    </Link>
                  </div>
                </div>
                <div className={styles.serviceBox}>
                  <Image
                    src="/images/server.svg"
                    alt="Membership Plans"
                    width={61}
                    height={78}
                    className={styles.serviceImageWrapper}
                  />
                  <div className={styles.serviceBoxContent}>
                    <h3 className={styles.serviceTitle}>Membership Plans</h3>
                    <Link href="" className={styles.serviceLink}>
                      <p>Learn more</p>
                      <Image
                        src="/images/arrow right.svg"
                        alt="Membership Plans"
                        width={22}
                        height={22}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
