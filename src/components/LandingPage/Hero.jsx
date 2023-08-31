import React from 'react'
import avatar from '../../assets/avatar.png';

const Hero = () => {

    const text = {
        width: '571px',
        height: '194px',
        marginTop: '250px',
        marginLeft: '80px',
       fontWeight: '500',
       fontSize: '66px'
      };
      const pic ={
        width: '467.7103271484375px',
        height:' 544.708740234375px',
        marginTop: '90px',
        marginLeft: '60px'
      }
     
  return (
    <div>
        <div class="container">
  <div class="row">
    <div class="col d-block  justify-content-center align-items-center" >
    <h1 style={text}>You don’t have to Fight them Alone.</h1>
   
    <p class="h3 text-white-50">Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
    <form className="d-flex">
      <div className="input-group">
      <span class="input-group-text bi bi-envelope"></span>
  <input
    class="form-control"
    type="email"
    placeholder="Enter Your Email address"
    aria-label="Email"
  />
 

        <button className="btn btn-outline-success" type="submit">
          Lets Talk
        </button>
      </div>
    </form>
    </div>
    <div class="col" style={pic}>
     <img src={avatar}/>
    </div>
  </div>
</div>
        
    </div>
  )
}

export default Hero