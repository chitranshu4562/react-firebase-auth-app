import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthenticationPage from "./pages/authentication/AuthenticationPage.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import AuthContext from "./authContext.jsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <>
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {isAuthenticated ? <HomePage/> : <AuthenticationPage/> }
        </AuthContext.Provider>
    </>
  )
}

export default App
