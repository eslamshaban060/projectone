// !!!!!!!!!!!!!!!!!!!!! MAIN COPONENT FILLE !!!!!!!!!!!!!!!!!!!!!!

// ===================== IMPORTING ELEMENT ======================

import React from "react";
function Main(){

    return(

        <div className="main_continer">

            <div id="carouselExampleCaptions" className="carousel slide container">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="assets/1.jfif" className="d-block w-100 " alt="main-img"></img>                <div className="carousel-caption d-none d-md-block">
                    <h3 >Shop with ease and comfort – discover the best deals on your favorite products every time you visit our store.</h3>
                    
                </div>
                </div>
                <div className="carousel-item">
                <img src="assets/2.jpg" className="d-block w-100 " alt="main-img"></img>                <div className="carousel-caption d-none d-md-block">
                <h3 >Shop with ease and comfort – discover the best deals on your favorite products every time you visit our store.</h3>
                    
                </div>
                </div>
            
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>

        </div>
    )
}

export default Main