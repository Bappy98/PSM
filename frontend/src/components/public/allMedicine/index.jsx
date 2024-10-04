import { useGetMedicineForOrderQuery } from '@/store/api/userOrder/userOrderApiSlice'
import React from 'react'

function AllMedicine() {
    const {data} = useGetMedicineForOrderQuery()
    console.log(data);
    if(!data) {
        return <div>loading ...</div>
    }
  return (
    <div>
        <div>Medicine</div>
        <div className='flex flex-wrap gap-5 justify-evenly mx-auto items-center'>{
        data.slice(0,6).map((item, i) => ( // Access  the nested data array
                        <div key={i} className='border-2 w-60 p-4 shadow-2xl'>
                            <div className='h-32 w-52'>
                                <img src={item.medicine.image} alt="" className='h-full w-full object-contain' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <div>{item.medicine.name} {item.medicine.dosages}</div>
                                    <div>{item.medicine.type}</div>
                                    <div>Price:{item.medicine.unitPrice}</div>
                                    <div>Stock: {item.quantity}</div>
                                </div>
                                    <div className='h-8 w-8'>
                                        <img src={item.medicine.company.logo} alt="" className='h-full w-full' />
                                    </div>
                            </div>
                           <div className='flex justify-between'>
                           <button className='bg-orange-300 px-2 text-sm'>Add to card</button>
                           <div className='bg-orange-300 px-2 text-sm cursor-pointer'>Red more</div>
                           </div>
                        </div>
                    ))}
        </div>
    </div>
  )
}

export default AllMedicine