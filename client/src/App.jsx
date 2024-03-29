import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/users", {mode: "cors"}).then(res => res.json().then(data => setUsers(data)));
  }, [])  

  return (
    <>
      {users.map((user) => <div>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <p>{user.password}</p>
      </div>)}
    </>
  )
}

export default App
