import React from 'react'
import Shop  from './component/Shob'
import About from './component/About';
import Collection from './component/Collection';
import Sale from './component/Sale';
import Last from './component/Last';
import Feature from './component/Feature';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './component/form';
import Menu from './component/Menuu';

const App = () => {
  return (
    <div>
      <Menu/>
      <Shop/>
      <About/>
      <Collection/>
      <Feature/>
      <Sale/>
      <Last/>
      <Form/>
     
    </div>
  )
}

export default App