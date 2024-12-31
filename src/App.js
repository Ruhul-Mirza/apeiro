import "./App.css";
import Navbar from "./components/Navbar";
import { BackgroundLinesDemo } from "./components/BackgroundLinesDemo";
import { WhatWeDoSection } from "./components/WhatWeDoSection";
import AboutUsSection from "./components/AboutUsSection";
import Testimonial from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";


function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <BackgroundLinesDemo />
      <WhatWeDoSection />
      <AboutUsSection />
      <WhyChooseUs/>
      <Testimonial/>
       
       
    </div>
  );
}

export default App;
