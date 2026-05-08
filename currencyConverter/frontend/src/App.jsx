import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [currencies, setCurrencies] = useState({})

  useEffect(() => {
    async function getCurrencies() {
      try {
        const responce = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
        const data = await responce.json();

        setCurrencies(data)
      } catch (error) {
        console.log("Effor fetching currencies:", error)
      }
    }

    getCurrencies()
  },[])

  return (
    <>
    <div className='flex gap-6 p-8'>
      <input type="Number" className='border rounded px-3 py-2 bg-white'/>
      <select name="currencies" id="" className='border rounded px-3 py-2 bg-white'>
        <option value="">Select Currencies</option>
        {Object.entries(currencies).map(([code, name]) => (
          <option value={code}>
            {code.toUpperCase()} - {name}
          </option>
        ))}
      </select>
    </div>
    <div className='flex gap-6 p-8'>
      <input type="Number" className='border rounded px-3 py-2 bg-white'/>
      <select name="currencies" id="" className='border rounded px-3 py-2 bg-white'>
        <option value="">Select Currencies</option>
        {Object.entries(currencies).map(([code, name]) => (
          <option key={codea} value={code}>
            {code.toUpperCase()} - {name}
          </option>
        ))}
      </select>
      <button type="submit" className='border rounded px-3 py-2 bg-white cursor-pointer'>Convert</button>
    </div>
    </>
  )
}

export default App
