import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*[]{}-_+=~`"
    
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index)
    }

    setPassword(pass)
    
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0, 24)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <> 
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-6 py-3 my-8 text-orange-500 bg-gray-700 text-center'>
        <h1 className='text-2xl mb-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password} 
            className='outline-none w-full py-1 px-3' 
            placeholder='Password' 
            readOnly 
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={4} max={24} value={length} className='cursor-pointer' 
              onChange={(e) => 
                setLength(e.target.value)
                } />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev) 
                }}
              />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev )
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;