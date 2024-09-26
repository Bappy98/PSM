const express = require('express')
const { protect, isSuperAdmin } = require('../middleware/auth')
const { getStock, addStock } = require('../controllers/stockController')
const { requestMedicine, acceptMedicineRequest, getAllRequest, getRequestById,  } = require('../controllers/requestController')

const router = express.Router()


router.route('/stock/:userId').get(getStock)
router.route('/stock/add/:userId/:id').post(protect,isSuperAdmin,addStock)

// Route to request medicine
router.post('/medicine-request',protect, requestMedicine);

// Route to accept medicine request
router.post('/accept-request/:requestId',protect,isSuperAdmin,acceptMedicineRequest);
router.route('/all-request').get(protect,isSuperAdmin,getAllRequest)
router.route('/request/:id').get(protect,getRequestById)

module.exports = router