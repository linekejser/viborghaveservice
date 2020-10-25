import React from "react";
//CSS
import "../../App.css";
import "./NavCss.css";
//JQUERY
import $ from "jquery";

const Navbar = () => {
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      
    });

    //Find alle med denne dataform
    $("[data-navlink]").click(function () {
      //let galleryId = $(this).data("gallerybutton");

      //Her tilføjer/fjerner vi classes alt efter hvilken knap vi har trykket på sidst
      $("[data-navlink]").each(function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this).addClass("unactive");
        }
      });
      $(this).removeClass("unactive");
      $(this).addClass("active");
    });
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-4">
        <div className="container">
          <a className="navbar-brand active" href="#" data-navlink>
            Viborg Haveservice
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item pl-5">
                <a className="nav-link unactive" href="#aboutus" data-navlink>
                  Om Os <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item pl-5">
                <a className="nav-link unactive" href="#services" data-navlink>
                  Ydelser
                </a>
              </li>
              <li className="nav-item pl-5">
                <a className="nav-link unactive" href="#gallery" data-navlink>
                  Galleri
                </a>
              </li>
              <li className="nav-item pl-5">
                <a className="nav-link unactive" href="#reviews" data-navlink>
                  Det siger kunderne
                </a>
              </li>
              <li className="nav-item pl-5">
                <a className="nav-link unactive" href="#contact" data-navlink>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
