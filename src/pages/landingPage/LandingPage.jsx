
import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Quote} from '../../components'

function LandingPage() {
  const [name, setName] = useState('')
  localStorage.setItem('userName', name.charAt(0).toUpperCase()+name.slice(1))
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

export { LandingPage }