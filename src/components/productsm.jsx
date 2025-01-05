
import React, { useContext } from "react";
// ------------- import Productcontext ------------
import { Productcontext } from "../pages/allproduct";
// ------------------toast-------------------
import toast from "react-hot-toast";

// ----------------- Sharedata --------------------
import { Sharedata } from "./ContextApi";

// ----------------- Link to make a link  --------------------

import { Link, useNavigate } from "react-router-dom";



export default function Productsm({id,image,title,description,price,category,rating ,products}) {

  
     // -------------- impotrt product from context api ---------
   const {dispatch ,Product,Basket}= Sharedata()
    const navigate = useNavigate()
   //  --------------------- to open product -------------
   const Openproduct=()=>{
     
        dispatch({
            type:"PRODUCT_CASE",
            iteam:{
              id:id,
              image:image,
              title:title,
              description:description,
              price:price,
              rating:rating,
              category:category
            }
          }
        )
       
     navigate("/productpage")
   }
    // ----------------------- to add product to cart --------------
    const cartfunction = () => {
        toast("You added this product successfully");

        dispatch({

            type:"BASKET_CASE",

            iteam:{
                id:id,
                image:image,
                title:title,
                description:description,
                price:price,
                rating:rating,
                category:category
            }
          })
    };
   

  return (
    <div className="col-md-3 col-sm-6 mb-4" key={id}>
    <div className="card" style={{ width: "100%", height: "33.2rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt=""
        style={{
          width: "100%",
          height: "17rem",
          objectFit: "cover",
          padding: "5px",
        }}
      />

      <div className="card-body d-flex flex-column">
        <h5
          className="card-title m-auto"
          style={{
            textOverflow: "ellipsis",
            width: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h5>
        <p
          className="card-text text-center px-0 pt-1"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxHeight: "3rem",
            lineHeight: "1.5rem",
            whiteSpace: "normal",
            width: "100%",
          }}
        >
          {description}
        </p>
        <h4 className="productPrice text-center w-100">
          <hr className="w-100" />
          {price}$
          <hr />
        </h4>
        <div className="d-flex text-center m-auto">
        
        <button className="btn btn-dark mt-auto d-inline me-3" onClick={()=>{
           Openproduct(id)
          }}>
            Buy Now
          </button>
      
          <button className="btn btn-dark mt-auto d-inline"onClick={()=>{
           cartfunction(id)
          }}>
            Add to Cart
          </button>
          
        </div>
      </div>
    </div>
  </div>
  )
}
