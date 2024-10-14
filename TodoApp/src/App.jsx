import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todo'

function App() {

  return (
    <>
    <div className="App"/>
    <div style = {{color:"blue", justifyContent:"center",alignItems:"center"}}>
      <h1>
      Learning about redux toolkit </h1>
      <AddTodo/>
      <Todos/>
     
    </div>
    </>
  )
}

export default App
