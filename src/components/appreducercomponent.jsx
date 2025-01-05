import React from "react";

// الحالة الأولية
export const Initialaztion = {
  User: null,
  Basket: [],
  Categoures: [],
  Product: null,
};

// const loadFromLocalStorage = () => {
//   const data = localStorage.getItem("appState");
//   return data ? JSON.parse(data) : Initialaztion;
// };


// const saveToLocalStorage = (state) => {
//   localStorage.setItem("appState", JSON.stringify(state));
// };

const Appreducer = (state, action) => {
  let newState;

  switch (action.type) {
    case "PRODUCT_CASE":
      newState = {
        ...state,
        Product: action.iteam,
      };
      // saveToLocalStorage(newState); 
      return newState;

    case "BASKET_CASE":
      newState = {
        ...state,
        Basket: [...state.Basket, action.iteam],
      };
      // saveToLocalStorage(newState); 
      return newState;

      
    case "EMPETY_BASKET":
      newState = {
        ...state,
        Basket: [],
      };
      // saveToLocalStorage(newState); 
      return newState;

    case "REMOVE_PRODUCT":
      const index = state.Basket.findIndex(
        (iteam) => iteam.id === action.iteam.id
      );
      var newbasket = [...state.Basket];
      if (index >= 0) {
        newbasket.splice(index, 1);
      }
      newState = {
        ...state,
        Basket: newbasket,
      };
      // saveToLocalStorage(newState); 
      return newState;

    default:
      return state;
  }
};

export const Total =(Basket)=>{
  return Basket.reduce((totalprice,iteamprice)=>{
    return totalprice+(iteamprice.price)
  },0)
}



export default Appreducer;

// export { loadFromLocalStorage };
