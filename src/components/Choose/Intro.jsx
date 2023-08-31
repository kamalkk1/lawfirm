import React from 'react';
import styles from './Choose.module.css';
import Choose from './Choose';
const Intro = () => {

  

  return (
   <>
<div className={styles.sectionContainer}>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
        <div className={`col-md-6 ${styles.bigText} text-start`}>
            <h1 className={styles.text}>Let’s Introduce
<br></br>Ourself</h1>
          </div>
          <div className={`col-md-6 order-2 text-start mt-4 ${styles.colWrapper}`}>
            <h3>Criminal Lawyer</h3>
            <p className='text-muted'>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.</p>
          </div>
         
        </div>
      </div>
     
     
    </div>
    <div><Choose /></div>
    </>
  
  )
}

export default Intro