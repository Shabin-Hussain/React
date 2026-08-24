import React, { useState } from 'react'

function User() {
    const [color, setColor] = useState(
        {
            color1: 'Red',
            color2: 'Blue',
            color3: 'Black'
        })



    const [userDetails, setUserDetails] = useState([
        { username: 'neel', age: '27', designation: 'frontend developer' },
        { username: 'max', age: '20', designation: 'Backend developer' },
        { username: 'nithin', age: '29', designation: 'full stack developer' },
        { username: 'nivya', age: '30', designation: 'HR' }
    ])

    const change = (data) => {       //... rest operator to get all the remaining values
        setColor({ ...color, color3: data })     //setcolor can be given directly to onclick as well
    }

    return (
        <>
            <div>User Component</div>

            <ul>
                <li>{color.color1}</li>
                <li>{color.color2}</li>
                <li>{color.color3}</li>
            </ul>

            <button className='btn btn-warning' onClick={() => change('blue')}>Click</button>

            {/* TABLE */}

            <table className='table w-50 rounded shadow table-border border border-secondary mt-5'>
                <thead>
                    <tr>
                        <th className='p-3 bg-secondary'>SL NO</th>
                        <th className='p-3 bg-secondary'>NAME</th>
                        <th className='p-3 bg-secondary'>AGE</th>
                        <th className='p-3 bg-secondary'>DESIGNATION</th>
                    </tr>
                </thead>
                <tbody>
                    {/* array.map((item)=>()) */}
                   {userDetails.map((item,index)=>(<tr>
                        <td>{index+1}</td>
                        <td>{item.username}</td>
                        <td>{item.age}</td>
                        <td>{item.designation}</td>
                   </tr>))}
                </tbody>
            </table>
        </>
    )
}

export default User