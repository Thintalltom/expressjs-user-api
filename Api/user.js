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

// in order to update the record we use the http put method 
router.put('/:id', (req, res) => {
    const found = user.some(user =>  user.id === parseInt(req.params.id))

    if(found) {
        const updateUser = req.body;
        user.forEach(user => {
            if(user.id === parseInt(req.params.id)){
                user.name = updateUser.name ? updateUser.name: user.name
                user.email = updateUser.email ? updateUser.email: user.email
                res.json({
                    message: 'user updated',
                    user
                })
            }
        })
    }
})
// to delete user 
router.delete('/:id', (req, res) => {
    const found = user.some(user =>  user.id === parseInt(req.params.id))
    if(found){
        user = user.filter(user => user.id !==  parseInt(req.params.id))
        res.json({
            message: 'user deleted',
            user
        })
    }else {
        res.sendStatus(400)
    }
    
})

// always export the module 
module.exports = router