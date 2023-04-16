import React, { useState } from 'react'



export default function App() {
  
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")
  const ops = ['/', '*', '+', '-', '.']
  
  function createDigits(){
    const digits = []
  
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={()=>{updateCalc(i.toString())}} key={i}>{i}</button>
      )
    }
    return digits
  }

  function updateCalc(value){

    if(ops.includes(value) && (calc==='' || ops.includes(calc.slice(-1)))){
      return
    }

    setCalc(calc + value)

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString())
    }
  }

  function calculate(){
    if(ops.includes(calc.slice(-1))){
      return
    }
    setCalc(result.toString())
    setResult('')
  }

  function deleteLast(){
    if(calc === ''){
      return
    }

    
    const value = calc.slice(0, -1)
    setCalc(value)
    
    if(ops.includes(value.slice(-1))){
      setResult("x")
    }
    else{
      setResult(eval(value))
    }
  }

  function clear(){
    setCalc('')
    setResult('')
  }

  return (
    <div className='app'>
        <div className="calculator">

          <div className="display">
            {result ? <span>({result})</span> : ''}
            &nbsp;
            {calc || "0"}
          </div>

          <div className="operators">
            <button onClick={()=>{updateCalc('/')}}>/</button>
            <button onClick={()=>{updateCalc('*')}}>*</button>
            <button onClick={()=>{updateCalc('+')}}>+</button>
            <button onClick={()=>{updateCalc('-')}}>-</button>

            <button onClick={deleteLast}>DEL</button>
          </div>

          <div className="digits">
            
            {createDigits()}
            <button onClick={()=>{updateCalc('0')}}>0</button>
            <button onClick={()=>{updateCalc('.')}}>.</button>

            <button onClick={calculate}>=</button>
          </div>
        <button onClick={clear} className='clear'>CLEAR</button>
        </div>

    </div>
  )
}
