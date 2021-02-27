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

const Option = (props) => {
  return (
    <div>
      <p>
        {props.option} {props.value}
      </p>
    </div>
  )
}

const Statistics = (props) => {
  var valueAll = props.good+props.neutral+props.bad
  var valAverage = (props.good*1 + props.bad*(-1))/(valueAll)
  var valPositive = (props.good*100)/valueAll

  if (valueAll === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <Option option='good' value={props.good} />
      <Option option='neutral' value={props.neutral} />
      <Option option='bad' value={props.bad} />
      <Option option='all' value={valueAll} />
      <Option option='average' value={valAverage} />
      <Option option='positive' value={valPositive} />
    </div>
  )
}

const App = () => {
  const nameTitle = 'give feedback'
  const nameStati = 'statistics'

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)