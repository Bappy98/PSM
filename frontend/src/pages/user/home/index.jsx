import Help from '@/components/BranchHome/Help'
import Type from '@/components/BranchHome/Type'
import MedicineList from '@/components/public/medicineList'
import React from 'react'

function Home() {
  return (
    <div className='mt-32'>
         <Help/>
        <Type/>
        <MedicineList/>
    </div>
  )
}

export default Home