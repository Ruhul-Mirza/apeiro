import { Helmet } from "react-helmet";
import React from "react";
import { BackgroundLinesDemo } from "../../components/BackgroundLinesDemo";
import { WhatWeDoSection } from "../../components/WhatWeDoSection";
import AboutUsSection from "../../components/AboutUsSection";
import WhyChooseUs from "../../components/WhyChooseUs";
import Stats from "../../components/ui/stats";
import IndustryFocused from "../../components/IndustryFocused";
// import Testimonial from "../../components/Testimonials"
const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Apeiro Research | Innovative Data Analytics and Research Solutions
        </title>
        <meta
          name="description"
          content="Apeiro Research provides innovative data analytics and research solutions to empower businesses. Learn more about our services and expertise."
        />
        <link rel="canonical" href="https://www.apeiroresearch.com/" />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "url": "https://www.apeiroresearch.com/",
        "name": "Home - Apeiro Research",
        "description": "Home page of Apeiro Research, providing innovative data analytics and research solutions."
      }
    `}
        </script>
      </Helmet>
      <BackgroundLinesDemo />
      <WhatWeDoSection />
      <AboutUsSection />
      <IndustryFocused />
      <WhyChooseUs />
      <Stats />
      {/* <Testimonial/> */}
    </>
  );
};

export default Home;
