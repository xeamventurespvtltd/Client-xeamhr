import React from "react";
import MainBanner from "./MainBanner";
import AboutUs from "./AboutUs";
import HrService from "./HrService";
import Features from "./Features";
import Review from "./Reviews";
import BigFooter from "../Footer/BigFooter";
import SmallFooter from "../Footer/SmallFooter";

const Home = () => {
  return (
    <>
      <MainBanner heading="INTELLIGENT HUMAN RESOURCES"
        subHeading="All HR SOLUTION at one place" />
      <AboutUs title="About Us"
      />
      <HrService />
      <Features />
      <Review />
      <BigFooter title="Logo" />
      <SmallFooter />
    </>
  )
}

export default Home