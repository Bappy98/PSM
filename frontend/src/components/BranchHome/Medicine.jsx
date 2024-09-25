import Title from '@/components/title/Title'
import { useGetMedicineQuery } from '@/store/api/medicine/medicineApiSlice'


function Medicine() {
  const {data:medicine,error} = useGetMedicineQuery()
 // console.log(data);
  //const {data} = medicine

  
  return (
    <div>
      <Title>Medicine</Title>
      <div>
      {medicine?.map((item,i)=>(
        <div>
          <div>  <img src={item.image} alt={item.name} /></div>
          <div>{item.name}</div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Medicine