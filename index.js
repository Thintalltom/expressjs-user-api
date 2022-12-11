const express = require('express');
const app = express();

//this app.use state what functions are to be used in the express framework
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// function the access the users api
//while using the postman  you must state the /user
app.use('/user', require('./Api/user'))
// app.listen is to state the port to be used
app.listen(4000, () => {

    console.log('Server started on port 4000')
})