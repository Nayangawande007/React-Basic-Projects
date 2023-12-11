import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  //use State (15) 15 hamne default value di hai ham yaha kuchbi de sakte hai ,true,false,[],{} of function kuch bhi de sakte hai
  //useState se hame 2 chize milti hai array ke formate me 1st chiz counter (name but you can write anything you want sirf name hai mere bhai)
  //dusri chiz hoti hai function yahape setcounter is function
  
  //let counter = 15

  //behind the scene let counter hi banaya hai iss ne (const [counter, setCounter] = useState(15)}

  const addValue = () => {

    //counter = counter + 1
    if(counter >= 20){
      counter = 20;
    }else{
      counter = counter + 1;
    }
    setCounter(counter)
    
  }

  //here one interview question will be ask 

  //1)make counter app which increase or decrease value of counter
  //2)what if you increase setCounter(counter + 1)multiple times

  //ans if we are add multiple setCounter(counter + 1) on one no increase to 15 to 16 then
  //again click value increse to 17 useState see the work and pass work as group and only one type of work only done 
  //here so only one type of work can be carried out like setCounter(counter + 1)

  /*previous code without out if else
  const addValue = () => {

    //counter = counter + 1
    
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    
    
  }


  jab value direct 15 se 19 karni ho tab to setCounter() iss me or 1 callback function dena padta hai jo 
  previous counter ki value leta hai or use firse badhata hai
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)
  
  ab pichli wali value pakdi jayegi or use badha sakte hai



  */


  const removeValue = () => {
    if(counter <= 0){
      counter = 0 ;
    }else{
      counter = counter - 1;
    }
    setCounter(counter)
  
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value:{counter}</h2>
      
      <button onClick={addValue}> Add value:{counter}</button>
      <br/>
      <button onClick={removeValue}>remove value:{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App 
