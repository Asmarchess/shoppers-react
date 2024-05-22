import React from 'react'
import { IoFootstepsSharp } from 'react-icons/io5'

const Last = () => {
  return (
  <div className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-sm-3">
                <span>Naviqations</span>
                <div className="row">
                    <div className="col-lg-4"><ul>
                        <li>Sell online</li>
                        <li>Features</li>
                        <li>Shopping cart</li>
                        <li>Store builder</li></ul>
                        </div>
                    <div className="col-lg-4">
                        <ul>
                            <li>Mobile commerce</li>
                            <li>Dropshipping</li>
                            <li>wbsites development</li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <ul>
                            <li>Point of sale</li>
                            <li>Hardware</li>
                            <li>Software</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-sm-3">
                <div className="row">
                    <div className="col-lg-6">
                        <span>Promo</span>
                        <ul>
                        <li><img src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp" className='lit-img' alt="" /></li>
                        <li><p>Find Your Perfect Shoes</p></li>
                        <li>Promo from nuary 15-25,2019</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <span>Contact info</span>
                        <ul>
                            <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
                            <li>+2 392 3929 210</li>
                            <li>emailaddress@domain.com</li>
                            <li>
                                <span>Subscribe</span>
                            </li>
                            <li id="last">
                                <input type="text" placeholder='Email' />
                                <button className='btn1'>SEND</button>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>       
                 </div>
    
    </div>
  </div>
  )
}

export default Last