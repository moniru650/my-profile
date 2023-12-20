import React from "react";
import "./Service.css";

export default function Service() {
  return (
    <>
      <section className="tf__service pt_130 xs_pt_80 mt-5" id="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto">
              <div className="tf__section_heading mb_40">
                <h5 className="has-animation">MY serivce</h5>
                <h2 className="has-animation">
                  Crafting Digital Excellence Your Vision, Our Expert Web Development Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="tf__single_service fade_left"
                data-trigerid="service"
              >
                <span className="icon1">
                  <i class="fa-solid fa-laptop-code"></i>
                </span>
                <h3>Website Design</h3>
                <p>
                Revolutionize your online presence with our expert website design services. Sleek, user-friendly, and tailored to elevate your brand's digital identity."
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="tf__single_service fade_left"
                data-trigerid="service"
              >
                <span className="icon1">
                  <i class="fa-regular fa-handshake"></i>
                </span>
                <h3>Business/Billing</h3>
                <p>
                Streamline your business finances with our efficient billing solutions. Optimize operations, enhance accuracy, and ensure seamless financial transactions for success
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="tf__single_service fade_left"
                data-trigerid="service"
              >
                <span className="icon1">
                  <i class="fa-solid fa-cart-shopping"></i>
                </span>
                <h3>E-Commers</h3>
                <p>
                Empower your online store with our e-commerce solutions. Seamless transactions, user-friendly interfaces, and advanced features for unparalleled digital retail experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="tf__service pt_130 xs_pt_80" id="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="tf__single_service fade_left"
                data-trigerid="service"
              >
                <span className="icon1">
                <i class="fa-solid fa-utensils"></i>
                </span>
                <h3>RESTURENT</h3>
                <p>
                Savor success with our restaurant solutions. From online menus to reservation systems, we enhance your digital presence for a delightful dining experience
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="tf__single_service fade_left"
                data-trigerid="service"
              >
                <span className="icon1">
                  <i class="fa-regular fa-handshake"></i>
                </span>
                <h3>FINANCE</h3>
                <p>
                Navigate financial success with our comprehensive finance solutions. From budgeting to investment strategies, trust us to optimize your fiscal journey
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="tf__single_service fade_left"
                data-trigerid="service"
              >
                <span className="icon1">
                <i class="fa-solid fa-award"></i>
                </span>
                <h3>EDUCATION</h3>
                <p>
                Elevate education with our website services. Engaging designs, intuitive navigation, and powerful functionalities for a seamless online learning experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
