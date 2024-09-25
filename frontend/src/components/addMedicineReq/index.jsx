
import { selectCurrentUser } from '@/store/api/auth/authSlice';
import fetchWrapper from '@/util/fetchWrapper';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function AddMedicine({ data }) {
   const userId = useSelector(selectCurrentUser)
    const [addMedicine, setAddMedicine] = useState([]);

    useEffect(() => {
        const result = data.map(cur => ({
            medicine: cur.original.medicine._id,
            name:cur.original.medicine.name,
            quantity: 0,
        }));
        setAddMedicine(result);
    }, [data]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newValue = Number(value);

        setAddMedicine(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, [name]: newValue } : item
            )
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestBody = {
            userId, // The user requesting the medicines
            medicines: addMedicine // The list of medicines and their quantities
        };

        try {
            await fetchWrapper.post('/medicine-request', requestBody);
            console.log('Request successful:', requestBody);
        } catch (error) {
            console.error('Error submitting medicine request:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {addMedicine.map((item, index) => (
                    <div key={index}>
                        <label>Medicine name: {item.name}</label>
                        <input
                            type="number"
                            name="quantity"
                            value={item.quantity}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddMedicine;
