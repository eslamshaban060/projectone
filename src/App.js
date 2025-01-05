// !!!!!!!!!!!!!!!!!!!! APP JS FILLE !!!!!!!!!!!!!!!!!!!!!!!!!!!

// ==================== IMPORTING COMPONENT =========================

import {React , useState} from "react";
//--------------- to make routing ----------------------
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
// --------------- navbar component -------------------
import NaveBar from "./components/navbar";
// --------------- home page  -------------------
import Home from "./pages/Home";
// --------------- products page  -------------------
import Products from "./pages/products";
// --------------- About page  -------------------
import About from "./pages/About";
// --------------- Contact page  -------------------
import Contact from "./pages/Contact";
// --------------- Login page  -------------------
import Login from "./pages/Login";
// --------------- Register page  -------------------
import Register from "./pages/Register";
// --------------- Cart page  -------------------
import Cart from "./pages/Cart";
// --------------- PageNotFound page  -------------------
import PageNotFound from "./pages/pageNotFound";
// ---------------- Allproduct--------------------
import Allproduct from "./pages/allproduct";
// ---------------- chekout page --------------------
import Chekout from "./pages/Chekout";
// ---------------- Productpage ---------------
import Productpage from "./pages/product";




// ======================= App Main =================================

function App() {
  return (

    <BrowserRouter>

    <Routes>

      <Route  path="/"  element={<Home/>}  >
        <Route path="" element={<Allproduct/>}/>
      </Route>
      <Route  path="/productpage"  element={<Productpage/>}/>
      <Route  path="/products"  element={<Products/>}/>
      <Route  path="/about"  element={<About/>}  />
      <Route  path="/contact"  element={<Contact/>}  />
      <Route  path="/login"  element={<Login/>}  />
      <Route  path="/register"  element={<Register/>}  />
      <Route  path="/chekout"  element={<Chekout/>}  />
      <Route  path="/cart"  element={<Cart/>}  />
      <Route  path="*"  element={<PageNotFound/>}  />
    </Routes>

  </BrowserRouter>
    

    
  );
}

export default App;
