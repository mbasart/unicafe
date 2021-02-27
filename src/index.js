import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Options = (props) => {
  return (
    <div>
      <p>
        {props.option} {props.value}
      </p>
    </div>
  )
}

const App = () => {
  const nameTitle = 'give feedback'
  const nameStati = 'statistics'
  const optionGood = 'good'
  const optionNeutral = 'neutral'
  const optionBad = 'bad'
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Header title={nameTitle} />
      <Button handleClick={increaseGood} text='good' />
      <Button handleClick={increaseNeutral} text='neutral' />
      <Button handleClick={increaseBad} text='bad' />
      <Header title={nameStati} />
      <Options option={optionGood} value={good} />
      <Options option={optionNeutral} value={neutral} />
      <Options option={optionBad} value={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)