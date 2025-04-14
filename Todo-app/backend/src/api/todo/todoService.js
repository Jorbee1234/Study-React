const express = require('express')
const Todo = require('./todo')

module.exports = function(router) {
  router.get('/todos', async (req, res) => {
    const todos = await Todo.find()
    res.json(todos)
  })

  router.post('/todos', async (req, res) => {
    const todo = new Todo(req.body)
    await todo.save()
    res.status(201).json(todo)
  })

  router.put('/todos/:id', async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true, runValidators: true
    })
    res.json(todo)
  })

  router.delete('/todos/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.status(204).send()
  })
}
