const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  const exampleData = {fullName: 'Zdeněk Hásek'}
  res.send(exampleData)
})

module.exports = router