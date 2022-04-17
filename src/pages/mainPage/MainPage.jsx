
import React from 'react'
import { Clock } from '../../components'

function MainPage() {
    const myfocus = localStorage.getItem('focus');
  return (
    <div>
        <Clock/>
        <h1>Good Evening, {localStorage.getItem('userName')}.</h1>
        <div>
            <input type="checkbox" className='input-container' placeholder=""/>
            <p>{myfocus}</p>
        </div>
    </div>
  )
}

export { MainPage }