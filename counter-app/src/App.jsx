import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const Increment = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      window.alert("Value cannot be greter than zero")
    }
  }
  const Decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      window.alert("Value cannot be less than zero")
    }
  }
  
  return (
    <>
      <h1>React Counter App</h1>
      <p>Count : <span className='count'>{counter}</span></p>
      <button onClick={Decrement}>Dec</button>
      <button onClick={Increment}>Inc</button>
    </>
  )
}

export default App
