// !!!!!!!!!!!!!!!!!!!!!! cart page !!!!!!!!!!!!!!!!!!!!!!!!

// ==================== importing elements ===================

import React, { useState } from 'react'
import { Sharedata } from '../components/ContextApi'
import NaveBar from '../components/navbar'
import Increaseiteam from '../components/increaseiteam'
import { Link } from 'react-router-dom'
import { Total } from '../components/appreducercomponent'

// ================== main function ======================

const Cart = () => {

  // --------------------- virables -----------------
  const {Basket} =Sharedata()
  const [count,setcount]=useState(0)
 
  const uniqueBasket = Basket.reduce((acc, product) => {
    if (!acc.find((item) => item.id === product.id)) {
      acc.push(product);
    }
    return acc;
  }, []);

  // const repeatedItemsCount = Basket.reduce((acc, product) => {
  //   acc[product.id] = (acc[product.id] || 0) + 1; // زيادة العدد لكل منتج بناءً على الـ ID
  //   return acc;
  // }, {});
  
  // // فلترة العناصر المكررة فقط
  // const repeatedItems = Object.entries(repeatedItemsCount).filter(([id, count]) => count > 1);
  
  // console.log("Count of repeated items:", repeatedItems);
  
  return (

    <div className='cart_continer'>

        <div>
              {/* --------------- navbar component ------------ */}
      
              {
                  <NaveBar/>
                  
              }
                  <div className='container py-5 '>
                    <div className='pt-5'>
              
                    </div>

                    <h1 className="text-capitalize h-100 w-100 pt-5 pb-2 text-center fw-bold">
                          Your Cart
                      </h1>
                      <hr />
                    <div className=' row pt-5' >
                    <form class="row pt-5 needs-validation col-md-7 px-4 pb-5 mb-3 pt-3 ms-5 border border-dark rounded-3" novalidate>
                      <div className=" bg-body-tertiary p-4 rounded-3">
                          <h2>
                          Iteam List
                          </h2>
                      </div>
                      <div className="iteamlist mt-5 ">
                        
                      {
                      (Basket.length)=== 0 ?(<noproduct  className="text-center">
                          <h2>
                              No Products
                          </h2>
                          <Link to="/products" className='text-decoration-none'>
                          <buttontton className="btn btn-outline-dark mx-auto d-block mt-4 text-decoration-none">
                              Go to Products page 
                          </buttontton>
                          </Link>
                      </noproduct>):(
                          uniqueBasket.map((iteam)=>(
                            
                            <Increaseiteam  id={iteam.id} image={iteam.image} title={iteam.title} description={iteam.description} price={iteam.price}  category={iteam.category}  rating={iteam.rating}/>
                           
                           ))
                         )
                        }
                      </div>
            


                  </form>
                  <div className="totalprice col-md-4  pt-3  ms-5 border border-dark rounded-3 h-100">
                      <h2 className='bg-body-tertiary py-3 ps-2 rounded-3'>
                          Order Summary
                      </h2>
                      <div className='py-4 px-4'>
                          <ul class="list-unstyled">
                          <li class="d-flex justify-content-between">
                              <p >Products ({Basket.length})</p>
                              <span>${Math.round(Total(Basket))}</span>
                          </li>
                          <li class="d-flex justify-content-between">
                              <p>Shipping</p>
                              <span>$35</span>
                          </li>
                          <li class="d-flex justify-content-between fw-bold mt-3">
                              <span>Total amount</span>
                              <span>${Math.round(Total(Basket)+35)}</span>
                          </li>
                          </ul>
                                        
                       <Link to="/chekout">
                        <button type="submit" class="btn btn-dark w-100 mt-3 text-decoration-none">Go to Check out</button>
                       </Link>
                      </div>
                  </div>
                  </div>
                  </div>
              </div>
    </div>
  )
}

export default Cart
