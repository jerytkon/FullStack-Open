import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const arrSum = total => total.reduce((a,b) => a + b, 0) / total.length

const Percentage = (total, good) => (good / total.length) * 100

const App = () => {
  // tallenna napit omaan tilaansa
  const name = "Give Feedback"
  const name1 = "Statistics"

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState([])

  const handleGoodClick = () =>{
    setTotal(total.concat(1))
    setGood(good + 1 )
  }
  const handleNeutralClick = () =>{
    setTotal(total.concat(0))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () =>{
    setTotal(total.concat(-1))
    setBad(bad + 1)
  }
  return (
    
    <div>
      <Header course={name} />
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Header course={name1} />
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total.length}</p>
      <p>Average: {arrSum(total)}</p>
      <p>Positive: {Percentage(total, good)} %</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

