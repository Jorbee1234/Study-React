const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  description: { type: String, required: true },
  done: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Todo', todoSchema)
