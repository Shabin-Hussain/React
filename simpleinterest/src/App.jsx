import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function App() {


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

          <div className="d-flex">
           
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default App
