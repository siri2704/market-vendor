import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterLogin from './RegisterLogin'
import Dashboard from './Dashboard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <>
      {isLoggedIn ? <Dashboard /> : <RegisterLogin onLogin={() => setIsLoggedIn(true)} />}
    </>
  )
}

export default App
