import React from "react";

const Contact = () => {
  return (
    <>
    <a className="anchor" id="contact"></a>
      <section className="container-fluid grey py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h3>Kontakt os</h3>
              <span className="text-green">_______</span>
              <p>
                Du kan kontakte os med informationerne nedenfor, eller skrive en
                besked til os med kontaktformularen.
              </p>
            </div>

            <div className="col-md-4">
              <h4 className="font-weight-bold text-uppercase">Adresse</h4>
              <span
                style={{
                  color: "rgba(0,0,0,0)",
                  borderTop: "2px solid lightgrey",
                }}
              >
                _______
              </span>
              <p style={{ color: "#3f3f3f", fontSize: "0.9rem" }}>
                Odshøjvej 1G
                <br />
                8800 Viborg
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="font-weight-bold text-uppercase">Åbningstid</h4>
              <span
                style={{
                  color: "rgba(0,0,0,0)",
                  borderTop: "2px solid lightgrey",
                }}
              >
                _______
              </span>
              <p style={{ color: "#3f3f3f", fontSize: "0.9rem" }}>
                Mandag-Lørdag: 07:00 - 18:00
                <br />
                Søndag: LUKKET
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="font-weight-bold text-uppercase">
                Kontakt information
              </h4>
              <span
                style={{
                  color: "rgba(0,0,0,0)",
                  borderTop: "2px solid lightgrey",
                }}
              >
                _______
              </span>
              <p style={{ color: "#3f3f3f", fontSize: "0.9rem" }}>
                Telefon: +45 12 34 56 78
                <br />
                Email: info@viborghaveservice.org
              </p>
            </div>
            <div className="col-md-8 col-12 offset-md-2">
                <h5 className="my-5 text-uppercase" style={{fontSize: "0.9rem"}}>Send os en besked</h5>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" placeholder="Navn" required />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="email" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="form-group col-md-12">
                            <textarea className="form-control" rows="4" placeholder="Besked" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Besked</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
