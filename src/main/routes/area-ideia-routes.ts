import { Router } from 'express'
import { createAreaIdeiaController } from '../../usecases/AreaIdeia/CreateAreaIdeia'
import { deleteAreaIdeiaController } from '../../usecases/AreaIdeia/DeleteAreaIdeia'
import { getAreaIdeiaByIdController } from '../../usecases/AreaIdeia/GetAreaIdeiaById'
import AuthMiddleware from '../middlewares/authMiddleware'

const BASE_URL = '/areaideia'

export = (router: Router) => {
  router.post(BASE_URL, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => createAreaIdeiaController.handle(req, res))
  router.get(`${BASE_URL}/:id`, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => getAreaIdeiaByIdController.handle(req, res))
  router.delete(`${BASE_URL}/:id`, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => deleteAreaIdeiaController.handle(req, res))
}
