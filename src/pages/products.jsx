// !!!!!!!!!!!!!!!!!!!! PRODUCTS PAGE !!!!!!!!!!!!!!!!!!!!!!!!

// ==================== IMPORTING ELEMENTS ===================

import React, { useContext, useState,useEffect, createContext } from "react";
// ------------- navbar component ------------
import NaveBar from "../components/navbar";
// ------------- axios -----------------
import axios from "axios";
// ------------------ footer component ----------------
import Footer from "../components/Footer";
// -------------- product component-----------------
import Allproduct from "./allproduct";




const Products = () => {

    // const [loading,setLoading]= useState(false)
    // const [data,setdata]=useState([])

    // useEffect(()=>{
        
    //     const fetchdata = async() =>{
    //         setLoading(true)
    //         try{
    //              await axios.get("https://fakestoreapi.com/products").then((data)=>{
    //                 setdata(data.data)
    //             })
    //         }catch(error){
    //             console.error("it is an error in fetching data",error)
    //         }
           
    //     }
    //     fetchdata()
    //     setLoading(false)
    // },[])

  return (

    <div className="productsContiner">

        {/* ---------------- header component --------- */}
        <NaveBar/>
        <div className="spacing py-5">
            <div className="spacing pt-5">

            </div>
        </div>
        {/* ---------------- all product component ---------- */}
        <Allproduct/>
      
      {/* -------------------- footer component ----------------- */}
        <div className="spacing">

        </div>
        <Footer/>
        
    </div>
  )
}

export default Products

