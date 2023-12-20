import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg main_menu">
        <div className="container main_menu_bg">
          <a className="navbar-brand" href="index.html">
            <img src="images/LOGOPNG.jpg" alt="ZYAN" className="img-fluid w-100" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-sharp fa-regular fa-bars bar_icon"></i>
            <i className="fa-regular fa-xmark close_icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text_hover_animaiton active"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text_hover_animaiton">
                  about me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link text_hover_animaiton" href="#service">
                  services
                </Link>
              </li>
              <li className="nav-item">
               <Link to="/portfolio" className="nav-link text_hover_animaiton">Portfolio</Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link text_hover_animaiton"
                  
                >
                  blog 
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/contact"
                  className="nav-link text_hover_animaiton"
                  href="contact.html"
                >
                  contact
                </Link>
              </li>
            </ul>
            <span
              className="toggle_icon c-pointer"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i class="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
      </nav>

      {/* manu bar */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
      >
        <div className="offcanvas-header">
          <a className="offcanvas-logo" href="index_2.html">
            {/* <img
              src="images/logo2.png"
              alt="ZAYAN"
              className="img-fluid w-100"
            /> */}
          </a>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
           <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="tf__design_form offcanvas_form">
            <div className="offcanvas-content-box">
              <h3 className="offcanvas_title pt-4">Md Moniruzzaman</h3>
              <h4 className="offcanvas_title">Web Devoloper</h4>
              <p>
              MONI, seasoned web developer with years of expertise. Known for client satisfaction, your dedication and responsibility shine through in every project, ensuring timely and exceptional completion.
              </p>
            </div>
            <div className="offcanvas_contact_form">
              <h4 className="offcanvas_title">Get In Touch</h4>
              <form action="#">
                <input
                  type="text"
                  placeholder="Your Name"
                  aria-autocomplete="list"
                />
                <input type="email" placeholder="Your Email" />
                <textarea rows="4" placeholder="Message"></textarea>
                <button type="submit" className="common_btn1">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
