import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Videocard from './Videocard'

function Category() {
  return (
    <>
    <div className='w-100 mt-md-1 mt-5 p-4'>
        <button className='btn btn-warning w-100'>Add New Category<FontAwesomeIcon icon={faPlus} /></button>
    </div>

    <div className='mt-md-5 mt-2'>
        <div className='border border-secondary mt-3 rounded p-3 ms-4 ms-md-0'>
            <div className='d-flex'>
               <h6>Movie Title</h6>
               <button className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            <Videocard/>
        </div>
    </div>
    
    </>
  )
}

export default Category