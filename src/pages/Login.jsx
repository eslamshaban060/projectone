// !!!!!!!!!!!!!!!!!!!! LOGIN PAGE !!!!!!!!!!!!!!!!!!!!!!!!

// ==================== IMPORTING ELEMENTS ===================

import React from "react";

// ------------- navbar component ------------

import NaveBar from "../components/navbar";
// ------------- FOOTER component ------------

import Footer from "../components/Footer";

// ---------------- import link -------------------

import { Link } from "react-router-dom";


// =============== LOGIN PAGE CONTENT  ==================

function Login(){

    return(
        <div className="Login-continer">

            {/* --------------- navbar component ------------ */}

            <NaveBar/>

            {/* --------------- LOGIN FORM ------------ */}

                <div className="pt-4">
                    <div className="py-5">

                    </div>
                    <h1 className="pt-5 fs-1 text-center fw-bolder">
                        Login
                    </h1>
                    <hr className="container"/>

                    {/* ======================= form start ============= */}

                    <form className="w-25 mx-auto my-5 py-5 px-auto">
                    <div class="mb-3 ">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="name@example.com"></input>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"  placeholder="Password"></input>
                    </div>
        
                    <p>
                    New Here? <Link to="/register"> Register </Link>
                    </p>
                   
                    
                    <button type="submit" className="btn btn-secondary  m-auto d-block">Login</button>
                    
                    </form>


                </div>
            



            {/* --------------- FOOTER component ------------ */}
            <Footer/>
           

           

        </div>
    )
}

export default Login