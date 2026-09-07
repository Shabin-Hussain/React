import React from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'





function Home() {
  return (
    <div className='d-flex mt-5 p-5'>
     <Add/>

     <h5 className='ms-auto'><Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}>Watch History<FontAwesomeIcon icon={faClockRotateLeft} /></Link></h5>
    </div>
  )
}

export default Home