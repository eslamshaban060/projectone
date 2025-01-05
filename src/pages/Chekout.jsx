import React from 'react'
import NaveBar from '../components/navbar'
import { Sharedata } from '../components/ContextApi'
import { Total } from '../components/appreducercomponent'

const Chekout = () => {


const {dispatch,Basket}=Sharedata()



const emptycart=((e)=>{
  e.preventDefault()
  dispatch(
    {
      type:"EMPETY_BASKET"
    }
  )

})



  return (
   <div>
        {/* --------------- navbar component ------------ */}

        {
            <NaveBar/>
            
            }
    <div className='container py-5 '>
            <div className='pt-5'>

            </div>
         <h1 className="text-capitalize h-100 w-100 pt-5 pb-2 text-center fw-bold">
            Chack out
          </h1>
          <hr />
    <div className=' row pt-5' >
      <form class="row pt-5 needs-validation col-md-7 px-4 pb-5 mb-3 pt-3 ms-5 border border-dark rounded-3" novalidate>
        <div className=" bg-body-tertiary p-4 rounded-3">
            <h2>
            Billing Adress
            </h2>
        </div>
        <div class="col-md-6">
            <label for="validationCustom01" class="form-label">First name</label>
            <input type="text" class="form-control w-100" id="validationCustom01"  required></input>
            <div class="valid-feedback">
            Looks good!
            </div>
        </div>
        <div class="col-md-6">
            <label for="validationCustom02" class="form-label">Last name</label>
            <input type="text" class="form-control w-100" id="validationCustom02"  required></input>
            <div class="valid-feedback">
            Looks good!
            </div>
        </div>
        <div class="col-md-12">
            <label for="validationCustomUsername" class="form-label">Email</label>
            <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
            <div class="invalid-feedback">
                Please choose a email.
            </div>
            </div>
        </div>
        <div class="col-md-12">
            <label for="validationCustom01" class="form-label"> Address</label>
            <input type="text" class="form-control w-100" id="validationCustom01" placeholder="123 Minya "  required></input>
            <div class="valid-feedback">
            Looks good!
            </div>
        </div>
        <div class="col-md-12">
            <label for="validationCustom01" class="form-label"> Address 2</label>
            <input type="text" class="form-control w-100" id="validationCustom01" placeholder="123 Minya "  ></input>
            <div class="valid-feedback">
            Looks good!
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <label for="validationCustom03" class="form-label">City</label>
            <input type="text" class="form-control" id="validationCustom03" required></input>
            <div class="invalid-feedback">
            Please provide a valid city.
            </div>
        </div>
        <div class="col-md-3">
            <label for="validationCustom04" class="form-label">State</label>
            <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Choose...</option>
            <option>Egypt</option>
            </select>
            <div class="invalid-feedback">
            Please select a valid state.
            </div>
        </div>
        <div class="col-md-3 mb-3">
            <label for="validationCustom05" class="form-label">Zip</label>
            <input type="text" class="form-control" id="validationCustom05" required></input>
            <div class="invalid-feedback">
            Please provide a valid zip.
            </div>
        </div>
        
        <hr />
        <div class="col-md-6 ">
          <label for="nameOnCard" class="form-label">Name on card</label>
          <input type="text" class="form-control" id="nameOnCard"required ></input>
          <label htmlFor="">
          Full name as displayed on card
          </label>
        </div>
        <div class="col-md-6">
          <label for="cardNumber" class="form-label">Credit card number</label>
          <input type="text" class="form-control" id="cardNumber" placeholder="Card number" required></input>
        </div>
      <div class="row mb-3 mt-3">
        <div class="col-md-3">
          <label for="expiration" class="form-label">Expiration</label>
          <input type="text" class="form-control" id="expiration" placeholder="MM/YY" required></input>
        </div>
        <div class="col-md-3">
          <label for="cvv" class="form-label">CVV</label>
          <input type="text" class="form-control" id="cvv" placeholder="CVV" required></input>
        </div>
      </div>

      <button type="submit" class="btn btn-dark" onClick={(e)=>{
        emptycart(e)
      }} >Submit Payment</button>
    </form>
    <div className="totalprice col-md-4  pt-3  ms-5 border border-dark rounded-3 h-100">
        <h2 className='bg-body-tertiary py-3 ps-2 rounded-3'>
            Order Summary
        </h2>
        <div className='py-4 px-4'>
            <ul class="list-unstyled">
            <li class="d-flex justify-content-between">
                <p >Products (0)</p>
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
        </div>
    </div>
    </div>
    </div>
    </div>

  )
}

export default Chekout
