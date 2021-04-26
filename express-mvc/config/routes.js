const express = require('express')
const router = express.Router()
const tasksCltr = require('../app/controllers/tasksCltr')


router.get('/api/tasks',tasksCltr.list)
router.post('/api/tasks', tasksCltr.create)
router.get('/api/tasks/:id',tasksCltr.show)






module.exports = router

