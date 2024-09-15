// import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>This is a my second React App</h1>
      <br/>
      <br/>
      <Card username = "Abhilash" more="click" />
      <Card />
    </>
  )
}

export default App
