// !!!!!!!!!!!!!!!!!!!! PageNotFound PAGE !!!!!!!!!!!!!!!!!!!!!!!!

// ==================== IMPORTING ELEMENTS ===================

import React from "react";

// ------------- navbar component ------------

import NaveBar from "../components/navbar";



// =============== PageNotFound PAGE CONTENT  ==================

function PageNotFound(){

    return(
        <div className="PageNotFound-continer">

            {/* --------------- navbar component ------------ */}

            <NaveBar/>

            {/* --------------- PageNotFound content ------------ */}

             <div className="py-5">


             <h1 className="text-capitalize h-100 w-100 py-5 text-center fw-bold">
                         
            </h1>
             <h1 className="text-capitalize h-100 w-100 py-5 text-center fw-bold">
             Page not found : Error 404
            </h1>

             </div>
           

           

        </div>
    )
}

export default PageNotFound