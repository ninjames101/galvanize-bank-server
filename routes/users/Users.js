const express = require('express')
const router = express.Router()
const users = require('../../queries/users.js')

router.get('/', (req, res, next) => {
  users.getAllUsers()
    .then(users => res.json({ users }))
    .catch(next)
})

module.exports = router
