import express from 'express'
import { intersect } from '../Controllers/intersect.js'

const router = express.Router()
router.post('/chk',intersect)

export default router
