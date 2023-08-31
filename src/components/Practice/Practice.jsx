import React from 'react'
import styles from "./Practice.module.css"
import one from "../../assets/one.png"
import three from "../../assets/three.png"
import two from "../../assets/two.png"
import four from "../../assets/four.png"

import five from "../../assets/five.png"

import six from "../../assets/six.png"

const Practice = () => {
  return (
    <div>
        <div class="container w-50 ">
            <h1>Area of Practices</h1>
  <div class="row mt-5">
    <div class="col-md-8"><img src={three}/></div>
    <div class="col-6 col-md-4"><img  src={one}/></div>
  </div>

  <div class="row mt-3">
    <div class="col-6 col-md-4"><img  src={four}/></div>
    <div class="col-6 col-md-4 w-50"><img  src={five}/></div>
   
  </div>

  <div class="row mt-3">
    <div class="col-8"><img  src={six}/></div>
    <div class="col-4"><img  src={two}/></div>
  </div>
</div>
    </div>
  )
}

export default Practice