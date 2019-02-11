const Router = require('nextjs-dynamic-routes')
const router = new Router()

router.add({ name: 'articles', pattern: '/articles/:slug' })

module.exports = router
