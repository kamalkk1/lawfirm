import React from 'react'
import eclip from "../../assets/Ellipse1.svg"
import eclips from "../../assets/Ellipse2.svg"
import Cards from './Cards'
const Clients = () => {
  return (
   <>
    {/* <div class="container mt-5 pt-5 d-flex flex-row bd-highlight mb-3">
        <h1 class="mt-5 ms-5 text-start fs-1 p-2 bd-highlight">What says our<br></br> happy Clients</h1>
        <div class="d-flex">
   <img className="p-2 bd-highlight" src={eclip}/>
   <img className="p-2 bd-highlight" src={eclips}/>
   </div>
    </div> */}
    <div class="row mx-5 ms-5">
    <div class="col-md-4 ms-5"><h1 class="mt-5 ms-5 text-start fs-1 p-2 bd-highlight">What says our<br></br> happy Clients</h1>
</div>
    <div class="col-md-4 ms-auto d-flex">
    <img className="p-2 bd-highlight w-25" src={eclips}/>
    <img className="p-2 bd-highlight w-25" src={eclip}/>
   
    </div>
  </div>
   <Cards />
   </>
  )
}

export default Clients