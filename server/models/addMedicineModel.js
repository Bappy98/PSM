const addMedicineSchema = new mongoose.Schema({
    medicines: {
      type: [],  // Array of medicines
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  });
  
  const AddMedicine = mongoose.model('AddMedicine', addMedicineSchema);
  
  module.exports = AddMedicine;