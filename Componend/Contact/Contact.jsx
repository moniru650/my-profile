import React from 'react'

export default function Contact() {
  return (
    <>
     <section
        className="tf__design mt_135 xs_mt_40 mb_120 xs_mb_80"
        id="counter"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tf__design_text">
                <img
                  src="https://alihossain.com/wp-content/uploads/2022/03/contact1.png"
                  alt=""
                />
                <div className="cont">
                <h3>MD MONIRUZZAMAN</h3>
                <h4>WEB DEVOLOPER</h4>
                <p>
                  Are You Looking For Your Business Online Presence? I am here.
                </p>
                <p className="allicon"><i class="fa-solid fa-location-dot"></i>   KOLKATA . INDIA</p>
                <p className="allicon"><i class="fa-solid fa-envelope"></i>   monicompu7@gmail.com</p>
                <p className="allicon"><i class="fa-solid fa-mobile"></i>   +918436241035</p>
                </div>
              </div>
            
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tf__design_form">
                <h2 className="has-animation1">Contact Me</h2>
                <p className="contact-para">
                For web development excellence, contact me Years of experience, 
                and client satisfaction are guaranteed. Let's bring your grow your carrier.
                </p>
                <form action="#">
                  <input className="" type="text" placeholder="Your Name" />
                  <input className="" type="email" placeholder="Your Email" />
                  <input className="" type="text" placeholder="Phone Number" />
                  <textarea
                    className=""
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                  <button type="submit" className="common_btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
