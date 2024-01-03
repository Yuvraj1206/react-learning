import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-400 text-black
      p-4 rounded-xl mb-2'>Tailwind test</h1>
      <Card userName="Yuvraj" btnText="Click me"/>
      <Card userName="Rohit" btnText="Visit me"/>
      <Card userName="Puja" btnText="Aao Chale"/>
      <Card />
    </>
  )
}

export default App
