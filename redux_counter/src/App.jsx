import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset } from './redux/counterslice'

function App() {
    
   const count = useSelector((state)=>state.counterReducer.value)
  /*  console.log(count); */

  const dispatch = useDispatch()
   

  return (
    <>
    <div style={{backgroundColor:'black', height:'100vh'}} className='d-flex align-items-center justify-content-center'>

      <div style={{backgroundColor:'white', width:'500px'}} className='p-5 rounded'>
        <h1 className='text-info'>Counter Application</h1>

        <h1 className='text-center my-5' style={{fontSize:'70px'}}>{count}</h1>

        <div className='mt-5 d-flex justify-content-evenly'>
          <button className='btn btn-warning' onClick={()=>{dispatch(decrement())}}>Decrement</button>
          <button className='btn btn-danger' onClick={()=>{dispatch(reset())}}>Reset</button>
          <button className='btn btn-success' onClick={()=>{dispatch(increment())}}>Increment</button>

        </div>

        <div className='d-flex mt-5'>
          <input type="text" placeholder='Range' className='form-control'/>
          <button className='btn btn-primary ms-3'>Click</button>

        </div>

      </div>

    </div>
    </>
  )
}

export default App
