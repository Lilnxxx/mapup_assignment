import express from 'express'
import { intersect,intersect2 } from '../Controllers/intersect.js'

const router = express.Router()
router.post('/chk',intersect)
//demo
router.get('/demo',intersect2)
export default router
