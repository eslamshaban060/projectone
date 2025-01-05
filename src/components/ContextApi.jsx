// !!!!!!!!!!!!!!!!!!!!!!!! Context api component !!!!!!!!!!!!!!!!!!!!

/*
    we use this compont to shar data in outher components

*/

// ==================== importing elements ================

import { Children, createContext, useContext, useReducer } from "react";

// ------------------ appreducer function -------------------
// import Appreducer from "./appreducercomponent";

// ----------------- Initialaztion value ---------------
import { Initialaztion } from "./appreducercomponent";
import React from "react";
import Appreducer, { loadFromLocalStorage } from "./appreducercomponent";


export const OurProvidr = createContext()

const ContextApiProvidr = ({children}) => {

  const [state, dispatch] = useReducer(Appreducer,Initialaztion);

  return (
    <OurProvidr.Provider value={{Basket:state.Basket,Product:state.Product,User:state.User,dispatch:dispatch}}>
      {children}
    </OurProvidr.Provider>
  )
}

export default ContextApiProvidr





// ================== context use function ==================

/*
    i use it to importing data of basket ,product and user in any component 
*/
export const Sharedata=()=>{

    return(
    
    useContext(OurProvidr)
    
 )
}
  