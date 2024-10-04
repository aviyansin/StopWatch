import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Prev } from 'react-bootstrap/esm/PageItem'

function App() {
  const [time, settime] = useState(0)
  const [Running , setRunning]=useState(false)
  useEffect(()=>{

    let interval;
    if(Running){

      interval= setInterval(()=>{

        settime((Prevtime)=>Prevtime+10)
      },10);
    } else if (!Running){
      clearInterval(interval)
    }

      return()=>clearInterval(interval);

  },[Running])
  return (
    <>
    
    <h1>STOPWATCH</h1>

    <div>
      <span>{("0" + Math.floor((time/60000)%60)).slice(-2)}</span>:
     <span>{("0" + Math.floor((time/1000)%60)).slice(-2)}</span>:
       <span>{("0" + ((time/10)%100)).slice(-2)}</span>
    </div>

    <div>

      <button onClick={()=>{setRunning(true)}}>Start</button>
      <button onClick={()=>{setRunning(false)}}>Stop</button>
      <button onClick={()=>{settime(0)}}>reset</button>


    </div>
    </>
  )
} 

export default App
