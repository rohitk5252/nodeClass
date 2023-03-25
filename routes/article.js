const express = require('express')
const router = express.Router()
const { getAll, getMatching, getOutlet} = require('../controllers/articleController')
const requireAuth = require('../middleware/requireAuth')


// Middleware Auth 
// router.use(requireAuth)

//  Route GET all Articles 
router.get('/all', getAll)

router.get('/outlet/:searchQuery', getOutlet)

//  Route GET Matching Articles 
router.get('/:searchQuery', getMatching)

module.exports =  router;
