import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
function App() {
 
  return (
    <>
   <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a nuestra tienda online" />
    </div>
    </>
  )
}

export default App
