import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Componend/Home/Home";
import About from "../Componend/About/About";
import Header from "../SheairModule/Header/Header";
import Footer from "../SheairModule/Footer/Footer";
import Banner from "../Componend/Banner/Banner";
import Design from "../Componend/Design/Design";
import Portfolio from "../Componend/Portfolio/Portfolio";
import Testimonial from "../Componend/Testimonial/Testimonial";
import Brand from "../Componend/Brand/Brand";
import Subscribe from "../Componend/Subscribe/Subscribe";
import MainDesing from "../Componend/MainDesign/MainDesing";
import Service from "../Componend/Service/Service";
import Contact from "../Componend/Contact/Contact";
import Whatido from "../Componend/What i do/What i do";


export default function Rout() {
  const PublicRoute = [
    {
      path: "/",
      Component: <Home />,
    },
    {
      path: "about",
      Component: <About />,
    },
    {
      path: "banner",
      Component: <Banner/>,
    },
    {
      path: "design",
      Component: <Design/>,
    },
    {
      path: "portfolio",
      Component: <Portfolio/>,
    },
    {
      path: "testimonial",
      Component: <Testimonial/>,
    },
    {
      path: "brand",
      Component: <Brand/>,
    },
    {
      path: "subscribe",
      Component: <Subscribe/>,
    },
    {
      path: "maindesign",
      Component: <MainDesing/>,
    },
    {
      path: "service",
      Component: <Service/>,
    },
    {
      path: "contact",
      Component: <Contact/>,
    },
    {
      path: "whati",
      Component: <Whatido/>,
    },
  ];

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          {PublicRoute.map((currentValue, value) => {
            return (
              <Route
                path={currentValue.path}
                element={currentValue.Component}
              />
            );
          })}
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
