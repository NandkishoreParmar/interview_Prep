// import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/counter/CounterSlice'
import Navbar from './components/Navbar'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <>
     <Navbar/>
      <h1>Vite + React</h1>
      <div className="card">
          count is {count}

   </div>
   <button onClick={()=> dispatch(decrement())}>-</button>

   <button onClick={()=> dispatch(increment())}>+</button>
    </>
  )
}

export default App
