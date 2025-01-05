// !!!!!!!!!!!!!!!!!!!! CONTACT PAGE !!!!!!!!!!!!!!!!!!!!!!!!

// ==================== IMPORTING ELEMENTS ===================

import React from "react";

// ------------- navbar component ------------

import NaveBar from "../components/navbar";
// ------------- FOOTER component ------------

import Footer from "../components/Footer";
// ------------- import link  ------------

import { Link } from "react-router-dom";

// =============== PRODUCTS PAGE CONTENT  ==================

function Contact(){

    return(
        <div className="Contact_continer">

            {/* --------------- navbar component ------------ */}

            <NaveBar/>

            {/* --------------- FOOTER component ------------ */}

            <div className="Contactdiv ">
            <div className="pt-4">
                    <div className="py-5">

                    </div>
                    <h1 className="pt-5 fs-1 text-center fw-bolder">
                        Contact us
                    </h1>
                    <hr className="container"/>

                    {/* ======================= form start ============= */}

                    <form className="w-25 mx-auto my-5 py-5 px-auto">
                    <div class="mb-3 ">
                        <label for="exampleInputEmail1" class="form-label"> Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Enter your name"></input>
                        
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="name@example.com"></input>
                        
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Enter your message"></textarea>
                    </div>
        
                    
                   
                    
                    <button type="submit" className="btn btn-secondary  m-auto d-block">Register</button>
                    
                    </form>


                </div>

                   
            </div>
            {/* --------------- FOOTER component ------------ */}
            <Footer/>

           

        </div>
    )
}

export default Contact