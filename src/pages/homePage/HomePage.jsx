
import { React, useState} from 'react'
import Clock from '../../components/clock/Clock'
import Quote from '../../components/quoteComponent/Quote'

function HomePage() {
    const name = localStorage.getItem('userName')
    const [ focus, setFocus ] = useState("")
    const [ display, setDisplay ] = useState("block")
    const [ display1, setDisplay1 ] = useState("none")

   
    function keyHandler(e){
        if(e.key === 'Enter'){
            localStorage.setItem('focus', focus)
            setDisplay("none")
            setDisplay1("flex")
        }
    }
  return (
    <div className='main-container'>
    
        <Clock/>
        <h1 className='heading'>Good Evening, {name}.</h1>

        <div style={{display:display}}>
        <p className="para">What is your main focus for today?</p>
        <input 
        onKeyPress={keyHandler} 
        onChange={(e) => setFocus(e.target.value)}
        type="text" className='input-container-focus' placeholder=""/>
        </div>

        <div className='focus-container' style={{display:display1}}>
        <input type="checkbox" className='checkbox' placeholder=""/>
        <p className='para-focus'> {localStorage.getItem('focus')}</p>
        </div>
        <Quote/>
    </div>
  )
}

export default HomePage