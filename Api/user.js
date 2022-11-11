const express = require('express')
const router = express.Router()
const uuid = require('uuid')
let user = require('../user')

// this function is used to pull the records of all users information
router.get('/',(req, res) => {
    res.json(user)
})

//this is used to get a particular information of  a user based on the id 
router.get('/:id', (req, res) => {
    const found = user.some(user =>  user.id === parseInt(req.param.id))
})

router.post
// make sure you export the router
module.exports = router