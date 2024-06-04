import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { io } from "socket.io-client";

const socket = io("http://localhost:5000")

function App() {
  const [count, setCount] = useState(0);
  const [countSub, setCountSub] = useState(0)
  console.log(count, countSub)

  useEffect(() => {
    setCountSub(count);
  }, [count]);

  useEffect(() => {
    if (countSub >= 0) {
      setCount(countSub);
    }

  }, [countSub])

  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket connected")
    })
    socket.on("connect_error", () => {
      console.log("socket connection error", socket)
    })
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className='add' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button className='sub' onClick={() => setCountSub((countSub) => countSub - 1)}>
          Sub count is {countSub}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
