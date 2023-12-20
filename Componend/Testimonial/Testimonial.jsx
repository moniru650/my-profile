import React from "react";

export default function Testimonial() {
  return (
    <>
      <section className="tf__testimonial pt_115 xs_pt_75">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto mb_30">
              <div className="tf__section_heading">
                <h2 className="has-animation">Clients Says</h2>
              </div>
            </div>
          </div>
          <div className="row testi_slider">
            <div className="col-xl-6">
              <div className="tf__single_testimonial">
                <div className="img">
                  <img
                    src="images/testimonial/images1.jpg"
                    alt="clients"
                    className="img-fluid w-100"
                  />
                </div>
                <p className="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>
                </p>
                <h3>Kuljit Sing</h3>
                <p className="description">
                  Moni proved to be a stellar collaborator for my website's
                  landing page design. Their exceptional communication skills,
                  keen understanding of my needs, and prompt implementation of
                  requested changes made the experience truly outstanding.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tf__single_testimonial">
                <div className="img">
                  <img
                    src="images/testimonial/img2.jpg"
                    alt="clients"
                    className="img-fluid w-100"
                  />
                </div>
                <p className="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                <h3>Mahammad Sain Kadir</h3>
                <p className="description">
                  A pleasure to collaborate with. Flexibility was evident when
                  we adjusted the project scope midway, and they willingly
                  modified the agreed deliverables. Delighted with the outcomes
                  achieved through their accommodating approach.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tf__single_testimonial">
                <div className="img">
                  <img
                    src="images/testimonial/img3.jpg"
                    alt="clients"
                    className="img-fluid w-100"
                  />
                </div>
                <p className="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                <h3>Smith Mayer</h3>
                <p className="description">
                  Moni's design prowess is exceptional. Swiftly achieving a
                  modern design aligned with requirements, I highly recommend
                  collaborating with them. A detailed design brief or initial
                  idea enhances the process, ensuring a smoother and more
                  tailored outcome.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tf__single_testimonial">
                <div className="img">
                  <img
                    src="images/testimonial/img4.jpg"
                    alt="clients"
                    className="img-fluid w-100"
                  />
                </div>
                <p className="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>
                </p>
                <h3></h3>
                <h3>James Smith</h3>
                <p className="description">
                  Collaborating with Moni was excellent; she delivered precisely
                  as discussed, demonstrating a deep understanding of the
                  project. Her commitment to exceeding expectations ensured the
                  work was completed as promised, making the experience highly
                  satisfying.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tf__single_testimonial">
                <div className="img">
                  <img
                    src="images/testimonial/img6.jpg"
                    alt="clients"
                    className="img-fluid w-100"
                  />
                </div>
                <p className="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>
                </p>
                <h3>Ashok Gupta</h3>
                <p className="description">
                  Moni's customer relationship skills were exceptional—friendly,
                  patient, and highly knowledgeable. Swiftly resolving my issue
                  with efficiency, he has gained my satisfaction and loyalty. A
                  heartfelt thank you to Moni for a fantastic experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
