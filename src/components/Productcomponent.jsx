// !!!!!!!!!!!!!!!!!!!! PRODUCTS component !!!!!!!!!!!!!!!!!!!!!!!!

// ==================== IMPORTING ELEMENTS ===================

import React, { useContext } from "react";

// ------------- import Productcontext ------------
import Productsm from "./productsm";
import Productpage from "../pages/product";



// =============== PRODUCTS component   ==================


const Productcomponent = ({products}) => {

    
    return(
        <>
        {products.map((product) => (

          <Productsm  id={product.id} image={product.image} title={product.title} description={product.description} price={product.price}  category={product.category}  rating={product.rating} products={products}/>
       
      
     ))}

     {<div className="d-none">
          <Productpage products={products} />
     </div>}
   </>
)
  
}

export default Productcomponent



