import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Feature = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then(res => res.json())
      .then(data => setdata(data))
  }, [data])
const deleteData = function (id) {
  axios.delete(`http://localhost:8000/users/${id}`)
.then(res=>console.log(res.data))
}
return (
  <div className="feature">
    <div className="container">
    <div className="row">
      <h3 className='mt-3 mb-5'>Featured Product</h3>
        {
          data.map(item => {
            return (
          
              <div className="col-lg-4 col-md-6 col-12 f-card " key={item.id}>
               <img src={item.img} alt="" />
               
                  <h4>{item.Ad}</h4>
                <p>{item.Soz}</p>
                <span>{item.Money}</span>
                <div className="btn">
                <button className='btn1'  onClick={() => deleteData(item.id)}>Delete</button>
                </div>
              </div>
            )
          
          })
        
        }

      </div>
    </div>
  </div>
)

}
export default Feature
