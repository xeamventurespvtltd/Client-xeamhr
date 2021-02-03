import React from "react"
import MainBanner from "./MainBanner"
import AboutUs from "./AboutUs"
import HrService from "./HrService"
import Features from "./Features"
import BigFooter from "../footer/BigFooter"
import SmallFooter from "../footer/SmallFooter"
const Home = () => {
  return (
    <>
      <MainBanner heading="INTELLIGENT HUMAN RESOURCES"
        subHeading="All HR SOLUTION at one place" />
      <AboutUs title="About Us" content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        content2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <HrService />
      <Features />
      <BigFooter title="Logo" />
      <SmallFooter />
    </>
  )
}

export default Home