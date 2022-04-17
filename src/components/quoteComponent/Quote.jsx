
import { React , useState, useEffect } from 'react'
import './quote.css'

function Quote() {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    const getQuote = () => {
        fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(data => {
            setQuote(data.content)
            setAuthor(data.author)
        });
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