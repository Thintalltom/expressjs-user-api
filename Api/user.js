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
    const found = user.some(user =>  user.id === parseInt(req.params.id))
// funtion is used to find user based on the id 
    if(found) {
       res.json(user.filter((user) => user.id  === parseInt(req.params.id)))
    } else 
    {
        res.sendStatus(400)
    }
});

// used to add a new user
router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }
    if(!newUser.name || !newUser.email) {
        return res.sendStatus(400)
    } 
    user.push(newUser)
    res.json(user)
})

// always export the module 
module.exports = router