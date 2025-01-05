// !!!!!!!!!!!!!!!!!!!! NAVEBAR COMPONENT FILLE !!!!!!!!!!!!!!!!!!!

// ==================== IMPORTING COMPONENT =========================

import {React , useState,useContext} from "react";

// ----------------- import link --------------------
import { Link } from "react-router-dom";

// ----------------------- importing context api ----------------
import { Sharedata } from "./ContextApi";



// ======================= NAVBAR CONTENT =================================

function NaveBar() {
  const[x,setx]=useState("d-block")
  const {Basket}= Sharedata()
  
  return (

    // =============== NAVBAR DESIGN CODE ====================
    <div className="NaveBar_continer position-absolute z-3 w-100 ">
    
     <nav  className="navbar navbar-expand-lg bg-body-tertiary p-3" >
        <div  className="container">
          <a  className="navbar-brand fw-bold fs-2" href="">
          <Link className="text-decoration-none text-dark" to="/">
          E-comerce
          </Link>
          </a>
          <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon"></span>
          </button>
          <div  className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul  className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li  className="nav-item">
                <a  className="nav-link active fs-5 text-decoration-none" aria-current="page" href="#"><Link className="text-decoration-none text-dark" to="/">
                      Home
                  </Link></a>
              </li>
              <li  className="nav-item">
                <a  className="nav-link fs-5" aria-current="page" 
                href="#"><Link className="text-decoration-none text-dark" to="/Products">
                    Products
                </Link></a>
              </li>
              <li  className="nav-item">
                <a  className="nav-link fs-5" aria-current="page" href="#"><Link className="text-decoration-none text-dark" to="/about">
                      About
                  </Link></a>
                  
              </li>
              <li  className="nav-item">
                <a  className="nav-link fs-5 " aria-current="page" href="#"><Link className="text-decoration-none text-dark" to="/contact">
                Contact
                  </Link></a>
              </li>
             
            </ul>
            <form  className="d-flex" role="search">
              
              <Link className="text-decoration-none text-dark" to="/login">
              <button className="btn btn-outline-dark ms-2">
              <i className="fas fa-sign-in-alt me-1"></i>
                Login
              </button>
                </Link>
              
              <Link className="text-decoration-none text-dark " to="/Register">
              <button className="btn btn-outline-dark ms-2">
                <i className="fas fa-user-plus"></i> Register
              </button>
              </Link>

              <Link className="text-decoration-none text-dark" to="/Cart">
              <button className="btn btn-outline-dark ms-2">
                <i className="fas fa-shopping-cart"></i> Cart ({Basket.length})
              </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
        

        
    </div>
  );
}

export default NaveBar;