const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName:{type: String,
        required: true},
    status:{type: String,
        required: true},
    tax:{type: Number,
        required: true}

},{
    timestamps:true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;