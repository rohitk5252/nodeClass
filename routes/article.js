const express = require('express')
const router = express.Router()
const { getAll, getMatching } = require('../controllers/articleController')
const requireAuth = require('../middleware/requireAuth')


// Middleware Auth 
// router.use(requireAuth)

//  Route GET all Articles 
router.get('/all', getAll)

//  Route GET Matching Articles 
router.get('/:searchQuery', getMatching)

module.exports =  router;
