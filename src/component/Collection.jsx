import React from 'react'
import { CgColorBucket } from 'react-icons/cg'

const Collection = () => {
  return (
   
    <div className="collection">
        <div className="container">
            <div className="row">
            <div className="col-lg-4  col-6 img"><img src="https://preview.colorlib.com/theme/shoppers/images/women.jpg" alt="" /><div className="txt"><span>COLLECTIONS</span> <h3>Women</h3></div></div>
            <div className="col-lg-4 col-6  img"><img src="https://preview.colorlib.com/theme/shoppers/images/children.jpg" alt="" /><div className="txt"><span>COLLECTIONS</span><h3>Children</h3></div></div>
            <div className="col-lg-4  col-6 img "><img src="https://preview.colorlib.com/theme/shoppers/images/men.jpg" alt="" /><div className="txt"><span>COLLECTIONS</span><h3>Men</h3></div></div>
        </div>
        </div>
    </div>
  )
}

export default Collection