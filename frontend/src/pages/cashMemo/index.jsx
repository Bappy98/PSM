import CashTable from '@/components/shared/dataTable/CashTable'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import {ReactToPrint} from 'react-to-print'

function CashMemo() {
    const location = useLocation()
    const {medicines,totalPrice, customer} = location.state
    const componentRef = useRef(null);
    //console.log(location);
    const COLUMN = [
        {
          Header:'No.',
          accessor:(row,i) =>i+1
        },
        {
          Header:'Name',
          accessor:'name'
        },
        {
          Header:'quantity',
          accessor:'quantity'
        },
        {
          Header:'unitPrice',
          accessor:'unitPrice'
        },
        {
          Header:'Total price',
          accessor: (row) => {
            const totalPrice = row.quantity * row.unitPrice;
            return totalPrice ? totalPrice.toFixed(2) : '0.00'; // Return '0.00' if undefined or NaN
          },
        }
      ]
    
  return (
    <div>
      <ReactToPrint
      trigger={()=>{
        return <div className='btnDiv justify-center'>
           <button className='button'>Print</button>
        </div>
      }}
      content={()=>componentRef.current}
      documentTitle='New Document'
      />
      <div className='mx-32' ref={componentRef}>
        <div className='text-center text-2xl font-bold'>BRK Medicine Shop</div>
        <div className='text-center text-xl'>Trishal Branch</div>
        <div className='text-xl uppercase'>Customer : {customer}</div>
        <CashTable data={medicines} column={COLUMN}/>
        <div className='flex justify-end mx-12 font-bold text-xl'>Total price : {totalPrice.toFixed(2)} </div>
    </div>
    </div>
  )
}

export default CashMemo