import React from 'react';
import styles from './Choose.module.css'; // Import your custom CSS module
import gift from '../../assets/gift.png'
const Choose = () => {
  return (
  
      <div className={`text-center ${styles.section}`}>
        <h1>Why Choose Us?</h1>
        <div className='card-group d-flex align-items-center justify-content-center mt-5 pt-5'>
        <div class="card m-5 w-25 bg-dark rounded" >
          <img src={gift} class="card-img-top w-25 m-5" alt="..."/>
          <div class="card-body text-start">
    <h2 class="card-title">98% Success Rate</h2>
    <p class="card-text text-muted">Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
    <a href="#" class="btn btn-warning rounded-pill">Go somewhere</a>
  </div>
        </div>
        <div class="card m-5 w-25 bg-dark rounded">
          <img src={gift} class="card-img-top w-25 m-5" alt="..."/>
          <div class="card-body text-start">
    <h2 class="card-title">100% Success Rate</h2>
    <p class="card-text text-muted">Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
    <a href="#" class="btn btn-warning rounded-pill">Go somewhere</a>
  </div>
        </div>
        <div class="card m-5 w-25 bg-dark rounded">
          <img src={gift} class="card-img-top w-25 m-5" alt="..."/>
          <div class="card-body text-start">
    <h2 class="card-title">100% Success Rate</h2>
    <p class="card-text text-muted">Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
    <a href="#" class="btn btn-warning rounded-pill">Go somewhere</a>
  </div>
        </div>
      </div>
      </div>
  );
}

export default Choose;
