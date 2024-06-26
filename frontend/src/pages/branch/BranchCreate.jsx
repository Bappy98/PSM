import React, { useState } from 'react';
import { useBranchCreateMutation } from '../../store/api/branch/branchApi';

const BranchCreate = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    logo: '',
  });

  const [branchCreate, { isLoading, isError, error }] = useBranchCreateMutation();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    branchCreate(formData);
    // Optionally, you can reset the form after submission
    setFormData({
      name: '',
      address: '',
      phone: '',
      logo: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-md mx-auto py-4 px-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Create Branch</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="logo" className="block text-sm font-medium text-gray-700">
            Logo (Optional)
          </label>
          <input
            type="text"
            id="logo"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
        {isError && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
      </form>
    </div>
  );
};  

export default BranchCreate;
