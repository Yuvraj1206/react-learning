import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10);  //isko hooks bolte hai ,ye react me variable ko harr jagha 
                                            //define, initialise and  karne ke kaam atta hai

  const addValue = () =>{
                                           //alag style hai funtion ka
    if(counter<20){
      setCounter(counter+1);
    }
    else{
      alert("Baas kar bhai aur maat add kar");
    }
  }

  const decreaseValue = () =>{                //named funtion hai ye normal wala

    if (counter > 0) {
      setCounter(counter - 1);
    }
    else {
      alert("Baas kar bhai aur kaam maat kar");
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
