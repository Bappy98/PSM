import React from 'react'
import { useLocation } from 'react-router-dom'

function Check() {
    const location = useLocation()
    //console.log(location);
    const {medicines,userId} = location.state
    console.log(medicines);
    
    
  return (
    <div>
        <div>brk Medicine Shop</div>
        {medicines.map((item,i)=>(
            <div>
                <div>{item.name} {item.medicine.name}</div>
                <div>{item.quantity}</div>

            </div>
        ))}
    </div>
  )
}

export default Check