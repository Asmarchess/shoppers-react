import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Menuu = () => {
  return (
   
  <div className="menu">
   <div className="container">
    <div className="menu-top">
        <div className="search icon"><CiSearch /><input type="text" placeholder='Search' /></div>
        <div className="logo"><h3>SHOPPERS</h3></div>
        <div className="nav-icons icon"></div>
    </div>
    <hr />
    <ul className='menu-botm'>
        <li className='purpl'>HOME
          <ul className='drpdown'>
            <li>Menu one</li>
            <li>Menu two</li>
            <li>Menu tree</li>
          </ul>
        </li>
        <li className='purpl'>ABOUT
        <ul className='drpdown'>
            <li>Menu one</li>
            <li>Menu two</li>
            <li>Menu tree</li>
          </ul>
        </li>
        <li>SHOP</li>
        <li>CATALOGUE</li>
        <li>NEW ARRIVALS</li>
        <li>CONTACT</li>
    </ul>
    </div>
  </div>

  )
}

export default Menuu