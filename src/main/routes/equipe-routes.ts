import { Router } from 'express'
import { createEquipesController } from '../../usecases/Equipe/CreateEquipes'

const BASE_URL = '/equipes'

export = (router: Router) => {
  router.post(BASE_URL, (req, res) => createEquipesController.handle(req, res))
}
