import { Router } from 'express'
import { addUserToEquipeController } from '../../usecases/AddUserToEquipe'
import { createEquipesController } from '../../usecases/Equipe/CreateEquipes'
import { deleteEquipesController } from '../../usecases/Equipe/DeleteEquipes'
import { getEquipesByIdController } from '../../usecases/Equipe/GetEquipeById'
import { listEquipesController } from '../../usecases/Equipe/ListEquipes'
import { updateEquipesController } from '../../usecases/Equipe/UpdateEquipes'
import { createIdeiaController } from '../../usecases/Ideia/CreateIdeia'
import { deleteIdeiasController } from '../../usecases/Ideia/DeleteIdeia'
import { getIdeiasByIdController } from '../../usecases/Ideia/GetIdeiasById'
import { listIdeiasController } from '../../usecases/Ideia/ListIdeias'
import { listAllUsersByEquipeController } from '../../usecases/ListAllUsersByEquipe'
import AuthMiddleware from '../middlewares/authMiddleware'

const BASE_URL = '/equipes'

export = (router: Router) => {
  router.post(BASE_URL, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => createEquipesController.handle(req, res))
  router.get(BASE_URL, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => listEquipesController.handle(req, res))
  router.get(`${BASE_URL}/:id`, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => getEquipesByIdController.handle(req, res))
  router.delete(`${BASE_URL}/:id`, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => deleteEquipesController.handle(req, res))
  router.put(`${BASE_URL}/:id`, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => updateEquipesController.handle(req, res))

  router.post(`${BASE_URL}/:idEquipe/ideias`, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => createIdeiaController.handle(req, res))
  router.get(`${BASE_URL}/:idEquipe/ideias`, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => listIdeiasController.handle(req, res))
  router.get(`${BASE_URL}/:idEquipe/ideias/:idIdeia`, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => getIdeiasByIdController.handle(req, res))
  router.delete(`${BASE_URL}/:idEquipe/ideias/:idIdeia`, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => deleteIdeiasController.handle(req, res))

  router.post(`${BASE_URL}/:idEquipe/adduser`, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => addUserToEquipeController.handle(req, res))
  router.get(`${BASE_URL}/:idEquipe/listusers`, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => listAllUsersByEquipeController.handle(req, res))
}
