import React, { useState } from 'react'
import { Sharedata } from './ContextApi'



const Increaseiteam = ({id,image,title,description,price,category,rating}) => {


      // --------------------- virables -----------------
      const {dispatch,Basket} =Sharedata()

// ---------------------------------------------------



      // ------------------- functions -------------------
    
      const increase=(e)=>{
        e.preventDefault()
    
        dispatch(
          {
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
          }
        )
      }
    
    
    
    const decrease=(e)=>{
        e.preventDefault()
    
        dispatch(
          {
            type:"REMOVE_PRODUCT",
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
    
    }



  return (
    <div className="iteam d-flex justify-content-between  border container " key={id}>

                              
    <div className="row">

        <div className="productimg col-3 ">
          <img className=' p-4 w-100'  src={image} alt="" />
        </div>
        <div className="producttitle pt-5 col-5 fs-5">
          <p>
            {title}
          </p>
        </div>
        <div className="buttons d-flex col-3">
          <div className="decrease btn  pt-4 btn-outline-dark my-5" onClick={(e)=>{
            decrease(e)
          }}>
              -
          </div>
          <div className='my-5 p-3 text-center'>
            <div className="counter">
              1
            </div>
            <div className="final pt-3">
              1*{price}
            </div>
          </div>
          <div className=" btn btn-outline-dark increase my-5 pt-4" onClick={(e)=>{
            increase(e)
          }}>
              +
          </div>
         
        </div>
    </div>
    </div>
  )
}

export default Increaseiteam
