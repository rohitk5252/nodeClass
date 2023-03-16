const express = require('express')
const router = express.Router()
// controller functions
const {getAll, signupUser, loginUser, deleteUser } = require('../controllers/userController')

// Middleware Auth 
const requireAuth = require('../middleware/requireAuth')

//  Route Login
router.post(('/login'), loginUser)

//  Route Signup
router.post('/signup', signupUser)


// Middleware Auth 
// since i dont have other routes,
//  i will use this delete route 
// to check if the user exist 
// by using the requireAuth middleware 
router.use(requireAuth)

// below routes will only be fired 
// if the above middleware approves access

//  Route GET all users 
router.get(('/all'), getAll)

//  Route Delete
router.delete('/delete', deleteUser )

module.exports =  router;