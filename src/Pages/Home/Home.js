import React from "react";
import Header from "../../components/Header";
import AboutUs from "./AboutUs";
import HrService from "./HrService";
import Features from "./Features";
import Review from "./Reviews";
import BigFooter from "../Footer/BigFooter";
import SmallFooter from "../Footer/SmallFooter";

const Home = () => {
    //console.log("RELOAD");
    return (
        <>  
            {/* <MainBanner heading="INTELLIGENT HUMAN RESOURCES"
                subHeading="All HR SOLUTION at one place" /> */}
            <Header className={null} heading="INTELLIGENT HUMAN RESOURCES" subHeading="All HR Solutions at one place" />
            <AboutUs title="About Us" />
            <HrService />
            <Features />
            <Review />
            <BigFooter title="Logo" />
            <SmallFooter />
        </>
    )
}

export default Home