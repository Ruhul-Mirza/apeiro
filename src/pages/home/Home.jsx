import React from 'react'
import {BackgroundLinesDemo} from "../../components/BackgroundLinesDemo"
import {WhatWeDoSection} from "../../components/WhatWeDoSection"
import AboutUsSection from "../../components/AboutUsSection"
import WhyChooseUs from "../../components/WhyChooseUs"
import Testimonial from "../../components/Testimonials"
import Stats from '../../components/ui/stats'
const Home = () => {
  return (
    <>
    <BackgroundLinesDemo/>
    <WhatWeDoSection/>
    <AboutUsSection/>
    <WhyChooseUs/>
    <Stats/>
    <Testimonial/>
    </>
  )
}

export default Home;