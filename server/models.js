const  mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: {type: String, required: true},
    user: {type: String},
    story: {type: String},
    tools: {type: Array},
    status: {type: String},
    improvements: {type: Array}
});

const Project = mongoose.model('Project', projectSchema);

module.exports = {Project};
