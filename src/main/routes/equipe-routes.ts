import { Router } from 'express'
import { createEquipesController } from '../../usecases/Equipe/CreateEquipes'
import { getEquipesByIdController } from '../../usecases/Equipe/GetEquipeById'
import { listEquipesController } from '../../usecases/Equipe/ListEquipes'

const BASE_URL = '/equipes'

export = (router: Router) => {
  router.post(BASE_URL, (req, res) => createEquipesController.handle(req, res))
  router.get(BASE_URL, (req, res) => listEquipesController.handle(req, res))
  router.get(`${BASE_URL}/:id`, (req, res) => getEquipesByIdController.handle(req, res))
}
