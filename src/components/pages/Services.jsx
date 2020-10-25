import React from 'react'

//CSS
import '../../App.css'

//Images
import Service1 from '../../images/ydelser/ydelser1.jpg'
import Service2 from '../../images/ydelser/ydelser2.jpg'
import Service3 from '../../images/ydelser/ydelser3.jpg'
import Service4 from '../../images/ydelser/ydelser4.jpg'

const Services = () => {
    return (
        <>
        <a className="anchor" id="services"></a>
            <section className="container-fluid py-5 green text-white text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h3>Vores Ydelser</h3>
                            <span>_________</span>
                            <p>
                                Herunder har du en oversigt over vores services.
                                <br />
                                Hvis du måtte have flere spørgsmål er du velkommen til at kontakte os. 
                            </p>
                        </div>
                        <article className="col-md-6 col-lg-3">
                            <img src={Service1} className="img-fluid img-style" />
                            <h4 className="py-3">Plænepleje</h4>
                            <p>
                            Herunder har du en oversigt over vores services.
                            </p>
                        </article>

                        <article className="col-md-6 col-lg-3">
                            <img src={Service2} className="img-fluid img-style" />
                            <h4 className="py-3">Anlægsgartneri</h4>
                            <p>
                            Herunder har du en oversigt over vores services.
                            </p>
                        </article>

                        <article className="col-md-6 col-lg-3">
                            <img src={Service3} className="img-fluid img-style" />
                            <h4 className="py-3">Træpleje</h4>
                            <p>
                            Herunder har du en oversigt over vores services.
                            </p>
                        </article>

                        <article className="col-md-6 col-lg-3">
                            <img src={Service4} className="img-fluid img-style" />
                            <h4 className="py-3">Forår- og efterårs rengøring</h4>
                            <p>
                            Herunder har du en oversigt over vores services.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
