
import { socket } from "@/util/soket"
import { useEffect } from "react"


const Dashboard = () => {
  useEffect(() => {
    socket.on('medicineRequestAccepted', (data) => {
      console.log('Medicine request accepted:');
      // Update the UI or state with the new data
    });
  }, []);
  
  
  return (
    <div>

        Pharmachy mannagment System
      
    </div>
  )
}

export default Dashboard
