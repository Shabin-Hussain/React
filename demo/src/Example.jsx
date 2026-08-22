import React from 'react'

function Example(props) {
  console.log(props);
  
  return (
   <> 
   <div>Example</div>
   <p style={{color:'green',fontSize:'100px'}}>The subject is : {props.sub}</p>
   </>
  )
}

export default Example