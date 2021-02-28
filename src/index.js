import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={props.increaseGood} text='good' />
      <Button handleClick={props.increaseNeutral} text='neutral' />
      <Button handleClick={props.increaseBad} text='bad' />
    </div>
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>
        {props.option} 
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  )
}

const Statistics = (props) => {
  var valueAll = props.good+props.neutral+props.bad
  var valAverage = (props.good*1 + props.bad*(-1))/(valueAll)
  var valPositive = (props.good*100)/valueAll

  if (valueAll === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic option='good' value={props.good} />
          <Statistic option='neutral' value={props.neutral} />
          <Statistic option='bad' value={props.bad} />
          <Statistic option='all' value={valueAll} />
          <Statistic option='average' value={valAverage} />
          <Statistic option='positive' value={valPositive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Header increaseGood={increaseGood} increaseNeutral={increaseNeutral} increaseBad={increaseBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)