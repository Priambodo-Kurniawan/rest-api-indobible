const router = require('express').Router()
const bibleRouter = require('./bible')

router.use('/bible', bibleRouter)

module.exports = router