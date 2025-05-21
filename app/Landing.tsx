import Accessories from "@/components/Home/Accessories/Accessories";
import BusinessAdvisory from "@/components/Home/Business/BusinessAdvisory";
import Electronics from "@/components/Home/Electronics/Electronics";
import FeaturedSeller from "@/components/Home/FeaturedSeller/FeaturedSeller";
import Gadgets from "@/components/Home/Gadgets/Gadgets";
import HeroSection from "@/components/Home/Hero/Hero";
import NewsLetter from "@/components/Home/NewsLetter/NewsLetter";
import Quotation from "@/components/Home/Quotation/Quotation";
import React from "react";

const Landing = () => {
  return (
    <div className="landingPage">
      <HeroSection />
      <FeaturedSeller />
      <Electronics />
      <Gadgets />
      <Accessories />
      <BusinessAdvisory />
      <Quotation />
      <NewsLetter />
    </div>
  );
};

export default Landing;
