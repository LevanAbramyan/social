const router = require('express').Router();
const bcrypt = require('bcryptjs')
const {regVal} =require('../validation')
const verify = require('./verifyToken')
let User = require('../models/users.model');

router.route('/',verify).get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post(async (req, res) => {
  //Lets VALIDATE
  const {error} = regVal(req.body)
  if(error) return res.status(400).send(error.details[0].message)
  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(req.body.password, salt)

  //Checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already exists')
  //Create a new user
  const newUser = new User({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email,
    projects:req.body.projects,
    currentProject:req.body.currentProject,
    about:req.body.about,
    password:hashPassword,
    avatar:req.body.avatar,
  });

  try {
    await newUser.save()
    res.send('User added!')
  }
  catch (err) {
    res.status(400).send('Error: ' + err);
  }

});

router.route('/:id',verify).get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;