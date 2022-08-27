const mongoose = require('mongoose')

const JobsSchema = new mongoose.Schema({
   
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Jobs', JobsSchema)