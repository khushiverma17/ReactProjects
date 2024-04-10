import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setLength]= useState(8);
  const [numberallowed, setNumberallowed]=useState(false);
  const [charactersallowed, setCharactersallowed]=useState(false);

  const [password, setPassword]=useState("");

  const passwordRef= useRef(null);



  // since passwordGenerator is going to use frequenty so make it by useCallback
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberallowed) str+="1234567890";
    if(charactersallowed) str+="!@#$%^&*()~`";
    for(let i=1;i<=length;i++)
    {
        let char= Math.floor(Math.random()*str.length +1) ;
        // console.log(char);
        pass+=str.charAt(char);
    }
    setPassword(pass);


  }, [length, numberallowed, charactersallowed]);

  const copyPasswordtoClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
    // console.log("copied");
  }, [password]);
  
  useEffect(()=>{
    passwordGenerator();

  }, [length, numberallowed, charactersallowed, passwordGenerator])

  return (
    <>
      <div className="w-screen max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow-sm rounded-lg overflow-hidden mb-4'>
          <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}

          ></input>
          <button 
          onClick={copyPasswordtoClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            ></input>
            <label>Length: {length}</label>
          </div>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numberallowed}
          id='numberInput'
          onChange={()=>{
            setNumberallowed((prev) => !prev)
          }}
          ></input>
          <label>Numbers</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={charactersallowed}
          id='characterInput'
          onChange={()=>{
            setCharactersallowed((prev) => !prev)
          }}
          ></input>
          <label>Characters</label>

        </div>
      </div>



    </>
  )
}

export default App
