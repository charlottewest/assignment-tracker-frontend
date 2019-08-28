const mongoose = require('mongoose')
const Assignment = require('./assignment')

const schema = mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  assignments: [Assignment]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model('User', schema)
