import { useGetMedicineQuery } from "@/store/api/medicine/medicineApiSlice";
import { Cell, Pie, PieChart } from "recharts";

const Dashboard = () => {
  const { data } = useGetMedicineQuery();

  // Ensure data is loaded before filtering
  if (!data) {
    return <div>Loading...</div>;
  }
const total = data.length

  // Create the pie chart data array
  const pieData = [
    { name: "Medicines", value: total },
    { name: "Stocks", value: 2000 },
    { name: "Daily sells", value: 2000 },
  ];


  return (
    <div className="flex justify-around flex-wrap">
     {
      pieData.map((item)=>(
        <div  className="bg-white rounded-2xl shadow-lg h-24 w-96 m-4 flex justify-center items-center">
        <div className="text-center text-2xl font-bold text-blue-500">
          <div>{item.value}</div>
          <div>{item.name}</div>
        </div>
      </div>
      ))
     }
    </div>
  );
};

export default Dashboard;
