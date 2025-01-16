import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/home/Home"
import AboutPage from "./pages/About/AboutUs";
import WhyUs from "./pages/WhyUs/WhyUs";
import CompanyOverView from "./pages/CompanyOverview/CompanyOverView";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import KpoServices from "./pages/services/KpoServices";
import RpoServices from "./pages/services/RpoServices"
import Contact from "./pages/Contact/Contact";
import ReadMore from "./pages/readmore/ReadMore";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="rpo-service" element={<RpoServices/>}/>
      <Route path="kpo-service" element={<KpoServices/>}/>
      <Route path="why-us" element={<WhyUs />}></Route>
      <Route path="company-overview" element={<CompanyOverView />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="read-more" element={<ReadMore />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
