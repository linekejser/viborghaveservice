import React from "react";

//CSS
import "../../App.css";

//Billede
import Banner from "../../images/banner-bg.jpg";

const Header = () => {
  return (
    <>
      <header className="headerStyle">
        {/* Dette er for at headeren for den samme størrelse som billedet, men den har en visibility: hidden */}
        <img src={Banner} className="imgBannerStyle img-fluid" />
        <div className="toastStyle container-fluid">
          <div className="row h-100">
            <div className="col-12 my-auto">
              <div className="m-auto w-50 text-center text-white">
                <h2 style={{fontSize: "4.5rem"}}>Kvalitet og Service</h2>
                <p style={{fontSize: "1.5rem"}}>
                  Hos Viborg Haveservice bliver kvalitet og service sat i
                  højsædet. Vi sætter stor ære og pris på at tilbyde
                  professionel haveservice til både private og erhverv.
                </p>
                <button className="btn btn-primary">Læs Mere</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
