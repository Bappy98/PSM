import BranchTable from '@/components/shared/dataTable/BranchTable'
import { selectCurrentUser } from '@/store/api/auth/authSlice'
import { getStock } from '@/store/api/stock/stockSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function BranchStore() {
    const userId = useSelector(selectCurrentUser)
    const {stock } = useSelector((state)=> state.stock)
    const dispatch = useDispatch()
    useEffect(() => {
        if (userId) {
          dispatch(getStock({ userId }));
        }
      }, [dispatch, userId]);
      const COLUMN = [
        {
          Header: "No.",
          accessor: (row, i) => i + 1,
        },
        {
          Header: 'Medicine',
          accessor: row => row.medicine?.name,
        },
        {
          Header: 'Company',
          accessor: row => row.medicine?.company.name,
        },
        {
          Header: 'Quantity',
          accessor: 'quantity',
        },
        
      ];
      
     return (
    <div>
       <BranchTable data={stock} column={COLUMN}/>
    </div>
  )
}

export default BranchStore