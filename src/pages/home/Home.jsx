import React from 'react'
import {BackgroundLinesDemo} from "../../components/BackgroundLinesDemo"
import {WhatWeDoSection} from "../../components/WhatWeDoSection"
import AboutUsSection from "../../components/AboutUsSection"
import WhyChooseUs from "../../components/WhyChooseUs"
import Stats from '../../components/ui/stats'
import IndustryFocused from '../../components/IndustryFocused'
// import Testimonial from "../../components/Testimonials"
const Home = () => {
  return (
    <>
    <BackgroundLinesDemo/>
    <WhatWeDoSection/>
    <AboutUsSection/>
    <IndustryFocused/>
    <WhyChooseUs/>
    <Stats/>
    {/* <Testimonial/> */}
    </>
  )
}

export default Home;