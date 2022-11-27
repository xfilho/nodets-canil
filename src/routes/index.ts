import { Router } from 'express'
import * as PageController from '../controllers/pageControllers'
import * as SearchController from '../controllers/searchControllers'

const router = Router()

router.get('/', PageController.home)
router.get('/dogs', PageController.dogs)
router.get('/cats', PageController.cats)
router.get('/fishes', PageController.fishes)
router.get('/search', SearchController.search)


export default router