import React from 'react'
import '../Header/Header.css'
import { pic } from '../../assets/images'
import img1 from '../../assets/images/rose.jpeg'
import img2 from '../../assets/pink.jpeg'
import img3 from '../../assets/cactus.jpeg'
import img4 from '../../assets/jamanthi.jpeg'
import img5 from '../../assets/sunflower.jpeg'
import img6 from '../../assets/violet.jpeg'


function Header() {
  return (
    <div>
      <div className='Header'><span className='florist'>Florist  </span>Logo</div>
      <div>
      <ul className="nav  justify-content-center">
      <li className="nav-item">
        <div className='searchbutton'>
        <svg className='search' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
     
    <a className="nav-link" href="#">Search</a>
    </div>
  </li>
  <span className='flex1'></span>

  
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#"> <span className='home'>Home</span></a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#">Shop</a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#">Portfolio</a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#">Blog</a>
  </li>
  <span className='flex1'></span>
  <li className="nav-item">
    <a className="nav-link" href="#">Cart</a>
  </li>

</ul>
</div>
<div className="card1">
  <img src= {pic.img1} className="card-img-top flower" alt="..."/>
  <div className="card-body">
    {/* <h5 className="card-title">Card title</h5> */}
    {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
    {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}

    
  </div>
  <div className='main'>
    <div className='box'>
      <div className='circle'></div>
      <div><h6>Freshness</h6> <p>Fresh from our fields</p></div>
    </div>
    <div className='box'>
      <div className='circle'>
        </div>
        <div><h6>Free Delivery</h6> <p>On all orders above$50</p></div>
    </div>
    <div className='box'>
      <div className='circle'>
        </div>
        <div><h6>Safety Package</h6> <p>Quick Flower Delivery</p></div>
    </div>
    <div className='box'>
      <div className='circle'>
       </div>
       <div><h6>Support24/7</h6> <p>100% Secure Checkout</p></div>
  </div>
</div>
</div>
  <div className='box2'><span className='our'> Our </span> Catogery <p className='lorem'>Lorem ipsum doler sit amet,consecteture adipicing elit</p></div>
  <div className='flowers'>
  {/* <div className="card-group"> */}
  <div className="card">
    <img src={img1} className="card-img-top flowr" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Popular</h5>
      {/* <p className="card-text"></p> */}
    </div>
    
  </div>

  <div className="card">
    <img src={img2} className="card-img-top flowr" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Exotic</h5>
      <p className="card-text"></p>
    </div>
    
  </div>

  <div className="card">
    <img src={img3} className="card-img-top flowr" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Cactus</h5>
      <p className="card-text"></p>
    </div>
    
  </div>

 
  <div className="card">
    <img src={img4} className="card-img-top flowr" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Daily</h5>
      <p className="card-text"></p>
    </div>
    
  </div>

  <div className="card">
    <img src={img5} className="card-img-top flowr" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Various</h5>
      <p className="card-text"></p>
    </div>
    
  </div>

  <div className="card">
    <img src={img6} className="card-img-top flowr" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Winter</h5>
      <p className="card-text"></p>
    </div>
    
  </div>
{/* </div> */}





  </div>
    
    </div>
  )
}

export default Header
