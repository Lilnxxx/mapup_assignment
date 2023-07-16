import express from 'express'
import { intersect,home } from '../Controllers/intersect.js'

const router = express.Router()
router.post('/chk',intersect)
router.get('/',home)

export default router
