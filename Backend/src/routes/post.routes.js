const {Router} = require('express')
const { PostCreateController } = require('../controllers/post.controller')
const {AuthUser} = require('../middlewares/user.middlewares')

const router = Router()

router.post('/create',AuthUser ,PostCreateController )

module.exports = router