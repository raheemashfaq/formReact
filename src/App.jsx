import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(username,password);
  }
  return (
    <>
     <form onSubmit='handleSubmit'>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          onChange={(e)=>setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button className="btn" onChange={handleSubmit}>Login</button>
        <p>Not Registered? <span className="color"> Create an account </span></p>
      </form>
    </>
  )
}

export default App
