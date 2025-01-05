// !!!!!!!!!!!!!!!!!! product deteals  page !!!!!!!!!!!!!!!!!!!

// ===================== importing element ==================
import React from 'react'
import { Sharedata } from '../components/ContextApi'
import NaveBar from '../components/navbar'
import {  useNavigate } from 'react-router-dom'



const Productpage = () => {
  const navigate = useNavigate()
  const {Product,dispatch}=Sharedata()


  const Opencart=()=>{
    navigate("/cart")
  }


  const cartfunction=()=>{
    dispatch({
      type:"BASKET_CASE",
      iteam:{
        id:Product.id,
        image:Product.image,
        title:Product.title,
        description:Product.description,
        price:Product.price,
        rating:Product.rating,
        category:Product.category
    }
    })
  }

  return (
    <div className="Product_page_continer">
      
      {/* --------------------- header component -------------- */}

      <NaveBar/>
    {/* ------------------- product detels----------------- */}
    <div className="spacing pt-5">

    </div>
    <div className="container py-5 mt-5">
    <div className="row pt-5">

      {/* ----------------- product img ------------------ */}
      <div className="product_img col-md-6">
        <img className='w-75' src={Product.image} alt="" />
      </div>
      {/* ------------------- product deteils ---------------- */}
      <div className="produc_detelis col-md-6 px-5 ">
        <h3 className='pt-5 text-capitalize '>
        {Product.category}
        </h3>
        <p className='fs-1 pe-5 pt-2'>
          {Product.title}
        </p>
        <p className='fs-3 '>
        {Product.rating.rate}<i className='fas fa-star ps-2'></i>
        </p>
       <p className='py-2 fs-1'>
          
          ${Product.price}
       </p>
        <p className='fs-5' >
          {Product.description}
        </p>
        <div className='pt-3'>
        <button className="btn btn-outline-dark mt-auto d-inline me-3" onClick={()=>{
           Opencart()
          }}>
            Go to Cart
          </button>
      
          <button className="btn btn-outline-dark mt-auto d-inline"onClick={()=>{
           cartfunction()
          }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    </div>
    </div>
  )
}

export default Productpage
