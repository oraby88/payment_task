import React from "react";

export default function MyFooter() {
  return (
    <>
      <footer className="text-center text-lg-start bg-blue text-muted">

        <div>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-github"></i>
          </a>
        </div>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-primary"></i>n9dar
                </h6>
                <p>
                N9dar platform is an educational platform which aims to deliver professional courses and academic lessons from various disciplines. It is led by a specialized team of lecturers, trainers, and pedagogical and scientific committee from different universities and academies inside and outside Morocco.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="fw-bold mb-4 text-danger">contact & information</h6>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    N9dar
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Lot El Amal N 1138
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    45900 Zagora (Morocco)
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    +212611241079
                    +33745316110
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    support@n9dar.com
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="fw-bold mb-4 text-danger">About N9dar</h6>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Get to Know us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Our team
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Become a trainer
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Become a partner
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Contact us
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="fw-bold mb-4 text-danger  ">Important links</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> Our offerings
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  Terms and condittions
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> Privacy policies
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> Recruitment
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> FAQs
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4">
          <p className="text-center text-danger">Newsletter</p>
          <form className="form-inline">
          <div className="form-group mx-sm-3 w-50 mb-2 d-inline-block">
          <input type="text" className="form-control" placeholder="Enter your mail"/>
          </div>
          <button className="btn btn-danger mb-2">Send</button>
          </form>
          <br/>
          Copyright N9dar 2023. All rights reserved
        </div>
      </footer>
    </>
  );
}
