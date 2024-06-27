import React, { useEffect, useState } from 'react';
import { useBranchListQuery } from '../../store/api/branch/branchApi';

const BranchList = () => {
  const [branches, setBranches] = useState([]);
  const { data: branchData, error, isLoading } = useBranchListQuery(); // Assuming this hook fetches branch data
  console.log(branchData);

  useEffect(() => {
    if (branchData) {
      setBranches(branchData.data); // Assuming branchData is an array of branch objects
    }
    // You can add error handling logic here if needed
  }, [branchData, error]);

  const handleEdit = (id) => {
    // Logic for handling edit action
    console.log(`Editing branch with id ${id}`);
  };

  const handleDelete = (id) => {
    // Logic for handling delete action
    console.log(`Deleting branch with id ${id}`);
  };

  return (
    <div className="overflow-hidden border border-gray-200 shadow sm:rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Logo
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {branches.map((branch) => (
              <tr key={branch.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{branch.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{branch.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{branch.address}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{branch.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{branch.logo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                    onClick={() => handleEdit(branch.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(branch.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BranchList;
