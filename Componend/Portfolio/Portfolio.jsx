import React from 'react'

export default function Portfolio() {
  return (
    <>
        <section className="tf__portfolio mt_120 xs_mt_80" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-9 mb_30">
            <div className="tf__section_heading">
              <h1 className="has-animation">
              My Recent Portfolio
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 col-md-6">
          <a href="images/portfolio/port2.png" className="tf__portfolio_item image_popup" data-cursor="View <br> Image">
              <img src="images/portfolio/port2.png" alt="portfolio" className="img-fluid w-100"/>
              <div className="text">
                <h4>E-Commers Websider</h4>
                <h5>Click now</h5>
              </div>
            </a>
          </div>
          <div className="col-xl-4 col-md-6">
          <a href="images/portfolio/4.jpg" className="tf__portfolio_item image_popup" data-cursor="View <br> Image">
              <img src="images/portfolio/4.jpg" alt="portfolio" className="img-fluid w-100"/>
              <div className="text">
                <h4>Billing Webside</h4>
                <h5>Click now</h5>
              </div>
            </a>
          </div>
          <div className="col-xl-6 col-md-6">
          <a href="images/portfolio/4.jpg" className="tf__portfolio_item image_popup" data-cursor="View <br> Image">
              <img src="images/portfolio/4.jpg" alt="portfolio" className="img-fluid w-100"/>
              <div className="text">
                <h4>Education Webside</h4>
                <h5>Click now</h5>
              </div>
            </a>
          </div>
          <div className="col-xl-6 col-md-6">
            <a href="images/portfolio/4.jpg" className="tf__portfolio_item image_popup" data-cursor="View <br> Image">
              <img src="images/portfolio/4.jpg" alt="portfolio" className="img-fluid w-100"/>
              <div className="text">
                <h4>Portfolio Webside</h4>
                <h5>Click now</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
