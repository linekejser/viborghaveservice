import React from 'react'
import $ from 'jquery'

//Små thumbnail billeder
import Gallery1 from '../../images/galleri/thumbnails/01small.jpg'
import Gallery2 from '../../images/galleri/thumbnails/02small.jpg'
import Gallery3 from '../../images/galleri/thumbnails/03small.jpg'
import Gallery4 from '../../images/galleri/thumbnails/04small.jpg'
import Gallery5 from '../../images/galleri/thumbnails/05small.jpg'
import Gallery6 from '../../images/galleri/thumbnails/06small.jpg'
import Gallery7 from '../../images/galleri/thumbnails/07small.jpg'
import Gallery8 from '../../images/galleri/thumbnails/08small.jpg'
import Gallery9 from '../../images/galleri/thumbnails/09small.jpg'
import Gallery10 from '../../images/galleri/thumbnails/10small.jpg'
import Gallery11 from '../../images/galleri/thumbnails/11small.jpg'
import Gallery12 from '../../images/galleri/thumbnails/12small.jpg'

const Gallery = () => {

    $(function(){
        //Find alle der har denne dataform
        $("[data-gallerybutton]").click(function() {
            let galleryId = $(this).data("gallerybutton");

            //Her tilføjer/fjerner vi classes alt efter hvilken knap vi har trykket på sidst
            $("[data-gallerybutton]").each(function() {
                if($(this).hasClass("btn-primary")) {
                    $(this).removeClass("btn-primary");
                    $(this).addClass("btn-secondary");
                }
            })
            $(this).removeClass("btn-secondary");
            $(this).addClass("btn-primary");

            //Nu filtrer vi i billederne alt efter hvilken knap vi trykker på
            $("[data-galleryitem]").each((function() {
                let galleryItem = $(this);

                //Hvis vi har trykket på alle så viser vi alle billeder
                if(galleryId === ""){
                    galleryItem.fadeIn("fast");
                }
                //Ellers skal du matche knap id med id på billeder
                else {
                    let isCorrectItem = $(this).data("galleryitem") === galleryId;
                    isCorrectItem ? galleryItem.fadeIn("fast") : galleryItem.fadeOut("fast")
                }
            }))
        })
    })

    return (
        <>
        <a className="anchor" id="gallery"></a>
            <section className="container-fluid grey py-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Galleri</h3>
                            <span className="text-green d-block my-3">_______</span>
                            <p className="mb-3">Herunder et valg af billeder taget af vores arbejde</p>
                            <button className="btn btn-primary mx-2" data-gallerybutton="">Alle</button>
                            <button className="btn btn-secondary mx-2" data-gallerybutton="1">Plænepleje</button>
                            <button className="btn btn-secondary mx-2" data-gallerybutton="2">Anlægsgartneri</button>
                            <button className="btn btn-secondary mx-2" data-gallerybutton="3">Plantning</button>

                            <div className="row mt-4">
                                <div className="col-md-6 col-lg-4 mb-4" data-galleryitem="1">
                                    <img src={Gallery1} className="img-fluid"></img>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4" data-galleryitem="2">
                                    <img src={Gallery2} className="img-fluid"></img>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4" data-galleryitem="3">
                                    <img src={Gallery3} className="img-fluid"></img>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4" data-galleryitem="1">
                                    <img src={Gallery4} className="img-fluid"></img>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4" data-galleryitem="2">
                                    <img src={Gallery5} className="img-fluid"></img>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4" data-galleryitem="3">
                                    <img src={Gallery6} className="img-fluid"></img>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4" data-galleryitem="1">
                                    <img src={Gallery7} className="img-fluid"></img>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4" data-galleryitem="2">
                                    <img src={Gallery8} className="img-fluid"></img>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4" data-galleryitem="3">
                                    <img src={Gallery9} className="img-fluid"></img>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4" data-galleryitem="1">
                                    <img src={Gallery10} className="img-fluid"></img>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4" data-galleryitem="2">
                                    <img src={Gallery11} className="img-fluid"></img>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4" data-galleryitem="3">
                                    <img src={Gallery12} className="img-fluid"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery
