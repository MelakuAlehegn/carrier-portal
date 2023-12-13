const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, getAllUser, updateUser, deleteUser, addAdmin, verifyEmail, verifyPage, updateSelf } = require('../../controllers/userController')
const { protect } = require('../../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get("/verify/:userId/:uniqueString", verifyEmail)
router.get("/verified", verifyPage)
router.get('/me', protect, getMe)
router.get('/allusers', protect, getAllUser)
router.put('/:id',  updateUser)
// router.put('/:id', protect, updateUser)
// router.put('/:id', updateSelf)
router.post('/addadmin', protect, addAdmin)
router.delete('/:id',  deleteUser)


module.exports = router