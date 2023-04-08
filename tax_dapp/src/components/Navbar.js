import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Connect from './Connect'

const Navbar = () => {
  return (
    <div class="nav">
      <button className='connect' onClick={()=> {<Connect/>}}>connect wallet</button>
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      ScMa

      <span style={{"position": "relative", "color":"green", "left":"80%", "background":"white", "borderRadius":"8px"}}>{"HiN...bx2"}</span>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <Link to='/calculate'> Calculate Tax </Link>
    <Link to='/payment' >Payment</Link>
    <Link to="/settings">Settings</Link>
    <Link to='/'>Home</Link>
    
    {/* <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a> */}
  </div>
  
</div>
  )
}

export default Navbar