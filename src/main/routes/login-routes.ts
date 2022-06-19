import { Router } from 'express'
import { authController } from '../../usecases/Login'

const BASE_URL = '/login'

export = (router: Router) => {
  router.post(BASE_URL, (req, res) => authController.handle(req, res))
}
