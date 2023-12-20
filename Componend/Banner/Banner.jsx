import React from 'react'

export default function Banner() {
  return (
    <>
     <section className="tf__banner banner" style={{background: `url("images/bg/banner.jpg")`}}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-6 col-lg-8">
            <div className="tf__banner_text">
              <h1>
                Hi, I'm MONI
                <span className="cd-headline rotate-1">
                  <span className="cd-words-wrapper">
                    <b className="is-visible">WEB</b>
                    <b>DEVOLOPER</b>
                    
                  </span>
                </span>
              </h1>
              <p>
              Hello, I'm Md Moniruzzaman, a dedicated web developer with a passion for crafting innovative and user-centric digital solutions. Proficient in a variety of programming languages and frameworks, I specialize in mention any specific areas of expertise, e.g., front-end development, back-end development, full-stack development.
              </p>
            </div>
          </div>
          <div className="col-xl-5 col-lg-4">
            <div className="tf__banner_img">
              <div className="img">
                <img src="images/banner_img_1.png" alt="ZYAN" className="img-fluid w-100"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
