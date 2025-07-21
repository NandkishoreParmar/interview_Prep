
import { useState } from 'react'
import './App.css'
function App() {
  const [name,setName] = useState("");
  const [pass,setPassword] = useState(null);

  return (
    <>
     <h1>Hello WOrld</h1>
      <form onSubmit={(e) => {
      e.preventDefault();
      console.log(name)
      setName("")
      setPassword("")
      console.log(pass)
    }}>
      <div>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Please enter your name"
          required
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          value={pass}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter a strong password"
          required
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])(?!.*\s).{8,}$"
          title="Password must be at least 8 characters long and include uppercase, lowercase, number, special character, and no spaces."
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
     
   
    </>
  )
}

export default App
