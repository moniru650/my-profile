import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Service from '../Service/Service'
import Design from '../Design/Design'
import Portfolio from '../Portfolio/Portfolio'
import Testimonial from '../Testimonial/Testimonial'
import Brand from '../Brand/Brand'
import Blog from '../Blog/Blog'
import Subscribe from '../Subscribe/Subscribe'
import MainDesing from '../MainDesign/MainDesing'
import Whatido from '../What i do/What i do'

export default function Home() {
  return (
    <>
     <Banner/>
     <Whatido/>
     {/* <Service/> */}
     {/* <About/>  */}
     <Testimonial/>
     <Brand/>
     <Subscribe/>
     <MainDesing/>
     {/* <Design/> */}
     {/* <Portfolio/> */}
     {/* <Blog/> */}
    </>
  )
}
