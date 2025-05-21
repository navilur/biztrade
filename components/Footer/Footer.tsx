import React from "react";
import footer from "./footer.module.css";
import Image from "next/image";
import { about, sell, services, source } from "@/constants/constants";

const Footer = () => {
  return (
    <div className={footer.footer}>
      {/* Services */}
      <div className={footer.services}>
        <div className={footer.service_box}>
          <img src="/images/doller.svg" alt="Great Value" />
          <p className={footer.service_title}>Great Value</p>
          <p className={footer.service_text}>
            We offer competitive prices on over 100 million items
          </p>
        </div>
        <div className={footer.service_box}>
          <img src="/images/shippingvan.svg" alt="Worldwide shopping" />
          <p className={footer.service_title}>Worldwide shopping</p>
          <p className={footer.service_text}>
            We ship to over 200 countries and regions, and our site comes in 12
            languages
          </p>
        </div>
        <div className={footer.service_box}>
          <img src="/images/creditcard.svg" alt="Safe payment" />
          <p className={footer.service_title}>Safe payment</p>
          <p className={footer.service_text}>
            Pay with the world’s most popular and secure payment methods.
          </p>
        </div>
        <div className={footer.service_box}>
          <img src="/images/security.svg" alt="Shop with confidence" />
          <p className={footer.service_title}>Shop with confidence</p>
          <p className={footer.service_text}>
            Our Buyer Protection policy covers your entire purchase journey
          </p>
        </div>
        <div className={footer.service_box}>
          <img src="/images/users.svg" alt="Help center" />
          <p className={footer.service_title}>Help center</p>
          <p className={footer.service_text}>
            Round-the-clock assistance for a smooth shopping experience.
          </p>
        </div>
      </div>
      {/* Footer */}
      <div className={footer.footer_container}>
        <div className={footer.footer_columns}>
          <div className={(footer.footer_column, footer.footer_column1)}>
            <h4 className={footer.footer_title}>Stay Connected</h4>
            <div className={footer.stay_connected}>
              <a href="#" target="_blank">
                <Image
                  src="/images/facebook.svg"
                  width={36}
                  height={36}
                  alt="Facebook"
                />
              </a>
              <a href="#" target="_blank">
                <Image
                  src="/images/whatsapp.svg"
                  width={36}
                  height={36}
                  alt="Whatsapp"
                />
              </a>
              <a href="#" target="_blank">
                <Image
                  src="/images/instagram.svg"
                  width={36}
                  height={36}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
          <div className={footer.footer_column}>
            <h4 className={footer.footer_title}>About Us</h4>
            <ul className={footer.footer_links}>
              {about.map((item) => (
                <li key={item.id}>
                  <a href={item.url}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={footer.footer_column}>
            <h4 className={footer.footer_title}>Source on Biztrade</h4>
            <ul className={footer.footer_links}>
              {source.map((item) => (
                <li key={item.id}>
                  <a href={item.url}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={footer.footer_column}>
            <h4 className={footer.footer_title}>Sell on Biztrade</h4>
            <ul className={footer.footer_links}>
              {sell.map((item) => (
                <li key={item.id}>
                  <a href={item.url}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={footer.footer_column}>
            <h4 className={footer.footer_title}>Services</h4>
            <ul className={footer.footer_links}>
              {services.map((item) => (
                <li key={item.id}>
                  <a href={item.url}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={footer.copyright}>
        <p>One Stop Solution For All Business Needs</p>
        <p>© 2023 Biztrade.com. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
