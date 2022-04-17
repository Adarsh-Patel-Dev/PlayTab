
import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Quote from '../../components/quoteComponent/Quote'


function LandingPage() {
  const [name, setName] = useState('')
  localStorage.setItem('userName', name)
  return (
    <div className='main-container'>
    <h1 className='heading'>Hello, What's your good name?</h1>
    <input className="input-container username"
    onChange={(e) => setName(e.target.value)}
    value={name}
    type="text"  placeholder=""/>
    <NavLink to ='/home' >
      <button className='btn'>Continue</button>
      </NavLink>
      <Quote/>
    </div>
  )
}

export default LandingPage