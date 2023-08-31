import React from 'react'

const Subscribe = () => {
  return (
  <div className='mt-5 d-flex justify-content-center bg-dark'>
<div class="card w-75 h-100 mt-5">
  <div class="card-body bg-dark">
    <h1 class="card-title">Subscribe Our Newsletter</h1>
   
    <div class="input-group mb-3 gap-3 mt-5 w-75">
    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's email" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary bg-warning" type="button" id="button-addon2">Send</button>
</div>
  </div>
 
</div>
</div>

  )
}

export default Subscribe