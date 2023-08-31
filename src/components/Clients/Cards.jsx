import React from 'react'
import one from "../../assets/Ellipse3.png"
import two from "../../assets/Ellipse4.png"
import three from "../../assets/Ellipse5.png"

const Cards = () => {
  return (
    <div>
        <div class="container mt-5 pt-5">
  <div class="row text-start">
    <div class="col btn btn-outline-secondary mx-4 rounded">
    <div class="card-body shadow p-3 mb-5 text-start">
    <img src={one} class="card-img-top w-25" alt="..."/>
    <h5 class="card-title mt-4  text-white">Jane Cooper</h5>
    <h6 class="card-subtitle mb-2  text-white">Ceo of Hunt</h6>
    <p class="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 
  </div>
    </div>
    <div class="col btn btn-outline-secondary mx-4">
    <div class="card-body shadow p-3 mb-5 rounded text-start">
    <img src={two} class="card-img-top w-25" alt="..."/>
    <h5 class="card-title mt-4  text-white">Devon Lane</h5>
    <h6 class="card-subtitle mb-2  text-white">Ceo of Hunt</h6>
    <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

  </div>
    </div>
    <div class="col btn btn-outline-secondary mx-4">
    <div class="card-body shadow p-3 mb-5 rounded text-start">
    <img src={three} class="card-img-top w-25" alt="..."/>
    <h5 class="card-title mt-4  text-white">Robert Fox</h5>
    <h6 class="card-subtitle mb-2  text-white">Ceo of Hunt</h6>
    <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards