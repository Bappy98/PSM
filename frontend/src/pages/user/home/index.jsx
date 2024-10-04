import Help from '@/components/BranchHome/Help'
import Type from '@/components/BranchHome/Type'
import AllMedicine from '@/components/public/allMedicine'
import Branches from '@/components/public/branches'
import { useBranchListQuery } from '@/store/api/branch/branchApi'


function Home() {
  const {data} = useBranchListQuery()
  console.log(data);
  
  return (
    <div className='mt-32'>
         <Help/>
        <Type/>
        <AllMedicine/>
        <Branches data={data}/>
    </div>
  )
}

export default Home