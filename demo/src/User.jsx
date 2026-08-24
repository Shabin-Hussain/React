import React, { useState } from 'react'

function User() {
    const[color,setColor]=useState(
        {
            color1:'Red',
            color2:'Blue',
            color3:'Black'
        })

        const change = (data)=>{       //... rest operator to get all the remaining values
           setColor({...color,color3:data})     //setcolor can be given directly to onclick as well
        }

  return (
    <>
        <div>User Component</div>
    
        <ul>
            <li>{color.color1}</li>
            <li>{color.color2}</li>
            <li>{color.color3}</li>
        </ul>

        <button className='btn btn-warning' onClick={()=>change('blue')}>Click</button>
    </>
  )
}

export default User