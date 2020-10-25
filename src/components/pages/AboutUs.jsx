import React from "react";

//CSS
import "../../App.css";

//Billeder
import AboutUs1 from "../../images/omos1.jpg";
import AboutUs2 from "../../images/omos2.jpg";

const AboutUs = () => {
  return (
    <>
    <a className="anchor" id="aboutus"></a>
      <section className="container-fluid grey py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>
                Velkommen til{" "}
                <span className="text-green">Viborg Haveservice</span>
              </h3>
              <span className="text-green">________________</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since
              </p>
              <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since
              </p>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={AboutUs1}
                    alt="om os billede"
                    className="img-fluid"
                  />
                  <h4 className="py-2">Anlængsgardnari</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src={AboutUs2}
                    alt="om os billede"
                    className="img-fluid"
                  />
                  <h4 className="py-2">Plænepleje</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button className="btn btn-primary">Se alle ydelser</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default AboutUs;
