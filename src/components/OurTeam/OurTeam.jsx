import React from 'react'
import team1 from "../../assets/team1.svg"
const OurTeam = () => {
  return (
    <div className='mt-5'>
    <div class="container ">
    <div class="row justify-content-evenly mt-5 pt-5">
    <div class="col-4 text-start">
     <h1>FAQ</h1>
     <p className='text-muted'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
    </div>
    <div class="col-4 mt-5 text-start">
      <h5>Do I need a personal injury report?</h5>
      <p className='text-muted'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
      <div class="accordion accordion-flush bg-secondary text-white" id="accordionFlushExample">
  <div class="accordion-item bg-secondary text-white">
    <h2 class="accordion-header" id="flush-headingOne bg-secondary text-white">
      <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      How much is my case worth?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body bg-secondary text-white">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header bg-secondary text-white" id="flush-headingTwo">
      <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What should I do right after car accidect
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse text-warning bg-dark" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body bg-secondary text-white">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How much is my case worth?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default OurTeam