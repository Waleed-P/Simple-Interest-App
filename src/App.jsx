
import { TextField,Button } from '@mui/material'
import Stack from '@mui/material/Stack';

import './App.css'
import { useState } from 'react';
function App() {
  //create  state to store datas
  const [ineterest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const [principleAmountValid,setPrincipleAmountValid]=useState(true)
  const [rateAmountValid,setRateAmountValid]=useState(true)
  const [yearAmountValid,setYearAmountValid]=useState(true)

  //Functio reset
  function handleReset(){
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
  }

  function handleCalculate(){
    if(principle && rate && year){
      setInterest(principle*year*rate/100)
    }else{
      alert('please fill the form completely')
    }
  }

  function handleValidation(e){
    const {value,name}=e
    if(!!value.match(/^\d*\.?\d+$/)){
      if(name=='principle'){
      setPrinciple(value)
      setPrincipleAmountValid(true)
      }else if(name=='rate'){
        setRate(value)
        setRateAmountValid(rate)
      }else{
        setYear(value)
        setYearAmountValid(true)
      }
    }else{
      if(name=='principle'){
        setPrinciple(value)
        setPrincipleAmountValid(false)
        }else if(name=='rate'){
          setRate(value)
          setRateAmountValid(false)
        }else{
          setYear(value)
          setYearAmountValid(false)
        }
    }
  }

  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center 
    align-items-center bg-dark'>
    <div style={{width:'600px'}} className='bg-light p-5 rounded shadow'>
      <h3>Simple interest Calculator</h3>
      <p>Calculate your simple interest easily</p>
      <div className="text-light d-flex align-items-center justify-content-center bg-warning p-5 rounded shadow flex-column">
      <h1>₹ {ineterest}</h1>
      <p className='fw-bolder'>Total Simple Interest</p>
      </div>

      <form  className="mt-5">
        <div className="mb-3">
        <TextField className='w-100' id="outlined-basic-principle" label="Principle Amount" variant="outlined" value={principle || ''} onChange={(e)=>handleValidation(e.target)} name='principle'/>
        </div>
        { !principleAmountValid && <div className="text-danger mb-3">*Invalid User input</div>}

        <div className="mb-3">
        <TextField className='w-100' id="outlined-basic-rate" label="Rate of interest" variant="outlined" value={rate || ''} onChange={(e)=>handleValidation(e.target)} name='rate'/>
        </div>
        { !rateAmountValid && <div className="text-danger mb-3">*Invalid User input</div>}

        <div className="mb-3">
        <TextField className='w-100' id="outlined-basic-time" label="Time period" variant="outlined" value={year || ''} onChange={(e)=>handleValidation(e.target)} name='year'/>
        </div>
        { !yearAmountValid && <div className="text-danger mb-3">*Invalid User input</div>}

        <Stack direction="row" spacing={2}>
          <Button onClick={handleCalculate} disabled={!principleAmountValid || !rateAmountValid || !yearAmountValid} style={{width:'50%' ,height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
          <Button onClick={handleReset} style={{width:'50%' ,height:'70px'}} variant="outlined">Reset</Button>
        </Stack>
      </form>
      
    </div>
    </div>
  )
}

export default App
