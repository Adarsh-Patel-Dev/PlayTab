
import { React, useState} from 'react'
import { Clock, Quote} from '../../components'
import { useNavigate } from 'react-router-dom'
// import Quote from '../../components/quoteComponent/Quote'

function HomePage() {
    const name = localStorage.getItem('userName')
    const [ focus, setFocus ] = useState("")
    const [ display, setDisplay ] = useState("block")
    const [ display1, setDisplay1 ] = useState("none")

    const navigate = useNavigate();
    const myfocus = localStorage.getItem('focus');
    function keyHandler(e){
        if(e.key === 'Enter'){
            localStorage.setItem('focus', focus)
            setDisplay("none")
            setDisplay1("flex")
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