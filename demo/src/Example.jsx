import React from 'react'

function Example({ sub,age }) { //props
 /*  console.log(props); */

 console.log(sub);

 //function without argument
  const buttonclick = ()=>{
  alert('button clicked')
 }
  

/*  function buttonclick(){
  alert('button clicked')
 }
 */

 //function with arguments
 const addUser = (uname)=>{
  alert(`${uname} added successfully`)
 }

 //function without arguments
 const getName = (e)=>{
  console.log(e.target.value);
  
 }
  return (
    <>
      <div>Example</div>
      {/*    <p style={{color:'green',fontSize:'100px'}}>The subject is : {props.sub}</p> */}
      {sub=='REACT' ? 
      <p style={{ color: 'green', fontSize: '50px' }}>The subject is : {sub} </p>
    :
    <p style={{ color: 'red', fontSize: '50px' }}>data shared is not react </p>}

    {age==27 && 
      <p>age is {age}</p>
    }

      <button className='btn btn-success' onClick={buttonclick}>click</button>
       <button className='btn btn-primary ms-2' onClick={()=>addUser('Raj')}>click</button>

       <div className='d-flex mt-4'>
        <input type="text" placeholder='course' className='form-control w-25' onChange={(e)=>getName(e)}/>

       </div>
    </>
  )
}

export default Example