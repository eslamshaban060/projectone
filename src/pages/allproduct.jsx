
import React, { useState, useEffect } from "react";
import axios from "axios";
import Productscomponent from "../components/Productcomponent";


function Allproduct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");



  // =============== FETCHING DATA FROM FAKE STORE API =============
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);

        const uniqueCategories = [
          "All",
          ...new Set(response.data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);


  // ------------------------ gitting data of cart from local storage ----------------------------




  let filteredProducts;
  if (selectedCategory === "All") {
    filteredProducts = data;
  } else {
    filteredProducts = data.filter((product) => product.category === selectedCategory);
  }


  return (
    <div className="products_container">
      <div className="container py-4">
        <div className="d-flex justify-content-center mb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`btn me-2 ${
                selectedCategory === category ? "btn-dark" : "btn-outline-dark"
              }`}
              onClick={() => setSelectedCategory(category)}
            > 
              {category}
            </button>
          ))}
        </div>

        {/* Loading Spinner */}

        {loading && (
         <div className="py-5 my-5">
           <div className="d-flex justify-content-center my-5 py-5">
            <div className="spinner-border text-primary" role="status"></div>
            <h2 className="ms-3">Loading...</h2>
          </div>
         </div>
        )}

        {!loading &&(
          
          <div className="row">
     
            <Productscomponent products={filteredProducts}/>

          </div>

          )}
        

       
        {!loading && filteredProducts.length === 0 && (
          <h4 className="text-center mt-5">No products found for this category.</h4>
        )}
      </div>
    </div>
  );
}



export default Allproduct
