import React, { useRef } from "react";
import { Routes } from "react-router-dom";
import AboutUs from "./components/about-us";
import BannerSection from "./components/banner-section";
import ContactUs from "./components/contact-us";
import FindJobs from "./components/find-jobs";
import FindTalent from "./components/find-talent";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import OurExpertise from "./components/our-expertise";
import WhatWeOffer from "./components/what-we-offer";

const App = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Routes>{/* <Route path='/' element={<Home />} /> */}</Routes>

      <Navbar scrollToContact={scrollToContact} />
      <BannerSection scrollToContact={scrollToContact} />
      <AboutUs scrollToContact={scrollToContact} />
      <WhatWeOffer scrollToContact={scrollToContact} />
      <OurExpertise scrollToContact={scrollToContact} />
      <FindTalent scrollToContact={scrollToContact} />
      {/* <FindJobs scrollToContact={scrollToContact} /> */}
      <ContactUs contactRef={contactRef} />
      <Footer />
    </>
  );
};

export default App;
