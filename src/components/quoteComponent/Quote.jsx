
import { React , useState, useEffect } from 'react'
import axios from "axios";
import './quote.css'

function Quote() {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    const getQuote = async () => {
       try {
            const response = await axios({
            method: "GET",
            url: "https://api.quotable.io/random"
        })
        if(response.status === 200 ){
            setQuote(response.data.content)
            setAuthor(response.data.author)
        }}
        catch(error){
            console.log("Error",error)
        }
    };

    useEffect(() => {
        getQuote();
    },[]);

    return (
    <div className='quote-container center'>

    <p className='quote-text'>"{quote}"</p>
    <span className='quote-author'>{author}</span>

    </div>
  )
}

export { Quote }