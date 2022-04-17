
import {React, useState} from 'react'
import { Clock,Quote } from '../../components'

function MainPage() {
  const [ style, setStyle ] = useState('none')
  const [ check, setCheck ] = useState(true)

  function focusHandler(e){
    if(check){
      setCheck(false)
      setStyle('line-through')
    } else {
      setStyle('none')
      setCheck(true)
    }

  }
    const myfocus = localStorage.getItem('focus');
  return (
    <div className='main-container main'>
        <Clock/>
        <h1 className='heading'>Good Evening, {localStorage.getItem('userName')}.</h1>
       
        <div className='focus-container'>
            <input 
            onChange={focusHandler}
            value={check}
            type="checkbox" className='checkbox' placeholder=""/>
            <p className='para-focus' style={{textDecorationLine: style }}>{myfocus}</p>
        </div>
        <Quote/>
    </div>
  )
}

export { MainPage }