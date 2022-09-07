const { Router } = require('express')
// const { isModuleNamespaceObject } = require('util/types')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('oh oh oh its magic'))

router.get('/pics', controllers.getAllPics)

router.get('/pics/:id', controllers.getPicsById)

router.post('/pics', controllers.createPics)

router.put('/pics/:id', controllers.updatePics)

router.delete('/pics/:id', controllers.deletePics)

router.post('/account', controllers.createAccount)

module.exports = router
