// !!!!!!!!!!!!!!!!!!!! REGISTER PAGE !!!!!!!!!!!!!!!!!!!!!!!!

// ==================== IMPORTING ELEMENTS ===================

import {React,useState} from "react";

// ------------- navbar component ------------

import NaveBar from "../components/navbar";
// ------------- FOOTER component ------------

import Footer from "../components/Footer";

// ------------- import link  ------------

import { Link,useNavigate } from "react-router-dom";


// =============== REGISTER PAGE CONTENT  ==================

function Register(){
    const logindirect = useNavigate()
    const [name , setname]= useState("")
    const [email , setemail]= useState("")
    const [password , setpassword]= useState("")
    const submiting=(e)=>{
        e.preventDefault()
        if(name ===""|| email===""||password===""){
            alert("Enter your data for register ")
            

        }
        else{
            setTimeout(() => {
                window.location="/login"
            }, 200);
            return(
                localStorage.setItem("loginData",JSON.stringify({name,email,password}))
               
            )
            
        }
       


    }
    
    return(
        <div className="Register-continer">

            {/* --------------- navbar component ------------ */}

            <NaveBar/>

            {/* --------------- Register FORM ------------ */}

            <div className="pt-4">
                    <div className="py-5">

                    </div>
                    <h1 className="pt-5 fs-1 text-center fw-bolder">
                        Register
                    </h1>
                    <hr className="container"/>

                    {/* ======================= form start ============= */}

                    <form className="w-25 mx-auto my-5 py-5 px-auto"  onSubmit={submiting}
                    >
                    <div class="mb-3 ">
                        <label for="exampleInputEmail1" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Enter your name" value={name} onChange={(e)=>setname(
                            e.target.value
                        )}  ></input>
                        
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="name@example.com" value={email} onChange={(e)=>setemail(
                            e.target.value
                        )}   ></input>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"  placeholder="Password" value={password} onChange={(e)=>setpassword(
                            e.target.value
                        )
                        }  ></input>
                    </div>
        
                    <p>
                    Aready have an account <Link to="/login"> Login </Link>
                    </p>
                   
                    
                    <button type="submit" className="btn btn-secondary  m-auto d-block">Register</button>
                    
                    </form>


                </div>



            {/* --------------- FOOTER component ------------ */}
            <Footer/>
           

           

        </div>
       
    )
    
}

export default Register