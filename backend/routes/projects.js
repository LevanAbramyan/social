const router = require('express').Router();
let Project = require('../models/projects.model');
const verify = require('./verifyToken')


router.route('/', verify).get((req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add', verify).post(async (req, res) => {
    const projectName = req.body.projectName;
    const status = req.body.status;
    const tax = Number(req.body.tax);

    const newProject = new Project({
        projectName,
        status,
        tax
    });
    try {
        await newProject.save()
        res.json('Project added!')
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }

    // .then(() => res.json('Project added!'))
    // .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id', verify).delete((req, res) => {
    Project.findByIdAndDelete(req.params.id)
        .then(() => res.json('Project deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;