import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Nayan",
    age:22
  }

  let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black P-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card username="chaiaurcode" btnText="click me"/>
     <Card username="Nayan" btnText=""/>

    </>
  )
}

export default App
