import { useState } from 'react'
import quotes from './assets/quotes.json'
import { FaQuoteLeft,FaTwitter } from "react-icons/fa6";
import './App.css'

function App() {
  const [quote, setQuote] = useState(firtsQuote);
  const [randColor, setRandCcolor] = useState(firstColor);
  const transition = "all 1s";
  function getRandom() {
    setQuote(firtsQuote);
    setRandCcolor(firstColor);
  }

  function firtsQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function firstColor() {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }


  return (
    <div id="main-box" style={{ backgroundColor: randColor, transition }}>
      <div id="wrapper">
        <div id="quote-box">
          <div id="text">
            <FaQuoteLeft style={{ color: randColor, transition }} className='icon' />
            <span style={{ color: randColor, transition }}>{quote.quote}</span>
          </div>
          <div id="author">
            <span style={{ color: randColor, transition }}>-{quote.author}</span>
          </div>
          <div className="buttons-div">
            <a id="tweet-quote" className="button-icon" style={{ backgroundColor: randColor, transition}} href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+`${quote.quote}` }><FaTwitter /></a>
            <button style={{ backgroundColor: randColor, transition }} id="new-quote" onClick={getRandom}>New quote</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
