import React from "react";

//Billeder
import ReviwBG from "../../images/udtalelserbg.jpg";

const Reviews = () => {
  return (
    <>
    <a className="anchor" id="reviews"></a>
      <section className="container-fluid py-5 text-center green text-white position-relative overflow-hidden">
        <img src={ReviwBG} className="reviewHolderStyle" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Kundeudtalelser</h3>
              <span className="d-block my-3">_____________</span>
            </div>
          </div>

          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                  <div className="reviewStyle">
                      "Her er en anmeldelse"
                      <br/>
                      <br/>
                      - Test
                  </div>
              </div>
              <div className="carousel-item">
              <div className="reviewStyle">
                      "Her er en anmeldelse"
                      <br/>
                      <br/>
                      - Test
                  </div>
              </div>
              <div className="carousel-item">
              <div className="reviewStyle">
                      "Her er en anmeldelse"
                      <br/>
                      <br/>
                      - Test
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
