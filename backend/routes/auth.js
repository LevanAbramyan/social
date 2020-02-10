const router = require('express').Router()
const User = require('../models/users.model');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {logVal} = require('../validation')


router.post('/sign-in', async (req, res) => {
    const {error} = logVal(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    //Checking email exists
    const user = await User
        .findOne({ email: req.body.email });
    if (!user) return res.status(400)
        .send('Email is wrong or doesnot exists')

    //Pass is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Invalid Pass')

    //JWT
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)

    res.send('Logged in')


})


module.exports = router;