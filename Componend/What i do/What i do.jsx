import React from "react";

export default function Whatido() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 ">
          <div className="whati">
            <h2>WHAT I DO</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 whatdo ">
              <div className="whatdo2">
                <i className="fa-solid fa-pen-nib"></i>
                <h3>DESIGN SKILLS</h3>
                <p>
                  With a keen eye for aesthetics and a knack for user
                  experience, I excel in web design. My skills blend creativity
                  and functionality to craft visually appealing and
                  user-friendly websites.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 whatdo">
              <div className="whatdo2">
                <i className="fa-solid fa-code"></i>
                <h3>FRONT-END DEVELOPER</h3>
                <p>
                  As a front-end developer, I specialize in bringing web designs
                  to life.  I create
                  engaging and responsive user interfaces that elevate the
                  online experience.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 whatdo">
              <div className="whatdo2">
                <i className="fa-solid fa-microchip"></i>
                <h3>ALL DEVICE RESPONSIVE</h3>
                <p>
                Ensuring responsiveness across all devices is crucial for a seamless user experience, enhancing accessibility and usability on various screen sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
