import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



function App() {
  //states to hold data
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)


  return (
    <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
      <div className='bg-light p-5 rounded' style={{ width: '500px' }}>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest easily</p>

        <div className='mt-5 d-flex bg-warning justify-content-center align-items-center rounded shadow flex-column p-4'>
          <h2 className='fs-1 fw-bolder'>₹ 0</h2>
          <p>Total simple interest</p>
        </div>

        <form className='mt-5'>
          <div className='mb-3'>
            <TextField id="outlined-basic" label="₹ Principle amount" variant="outlined" className='w-100' />

          </div>
          <div className='mb-3'>
            <TextField id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" className='w-100' />
          </div>
          <div className='mb-3'>
            <TextField id="outlined-basic" label="Year (Yr)" variant="outlined" className='w-100' />
          </div>

          <div className="d-flex justify-content-between w-100 mt-4">

            <Button variant="contained" color='success' style={{ width: '190px', height: '60px' }}>Calculate</Button>
            <Button variant="outlined" style={{ width: '190px', height: '60px' }}>Reset</Button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default App
