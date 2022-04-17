
import { React, useState} from 'react'
import { Clock, Quote} from '../../components'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const name = localStorage.getItem('userName')
    const [ focus, setFocus ] = useState("")
    const [ display, setDisplay ] = useState("block")

    const navigate = useNavigate();
    const myfocus = localStorage.getItem('focus');
    function keyHandler(e){
        if(e.key === 'Enter'){
            localStorage.setItem('focus', focus)
            setDisplay("none")
            navigate('/main')
        }
    }
  return (
    <div className='main-container home'>
    
        <Clock/>
        <h1 className='heading'>Good Evening, {name}.</h1>

        <div style={{display:display}}>
        <p className="para">What is your main focus for today?</p>
        <input 
        onKeyPress={keyHandler} 
        onChange={(e) => setFocus(e.target.value)}
        type="text" className='input-container-focus' placeholder="" required/>
        </div>

        <Quote/>
    </div>
  )
}

export { HomePage }