// !!!!!!!!!!!!!!!!!!!! HOME PAGE FILLE !!!!!!!!!!!!!!!!!!!!!!!!!!!

// ==================== IMPORTING COMPONENT =========================
import React, { createContext, useEffect, useState } from "react";
// --------------- navbar component -----------
import NaveBar from "../components/navbar";
// ------------- main component -------------
import Main from "../components/Main";
// ------------- main component -------------
import Footer from "../components/Footer";
// ------------- products component -------------
import Productcomponent from "../components/Productcomponent";
// ------------ context api ------------
import { useContext } from "react";
// -------------------- routing------------------
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
// ========================= HOME PAGE CONTENT ======================



function Home(){

    // ================= our vairables ===============================



    return(
        <>
        {/* ============== navebar ================ */}

        <NaveBar/>
        
     
        {/* ============= main ==================== */}
        <Main/>
        {/* --------------- title  ------------ */}
        
        <div className="pt-5">
          
        </div>
        <Outlet/>
        
     
        
        {/* ============= main ==================== */}

         <Footer/>
        </>
    )
}
export default Home
