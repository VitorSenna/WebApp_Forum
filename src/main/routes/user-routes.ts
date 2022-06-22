import { Router } from 'express'
import { createUsuarioController } from '../../usecases/Usuario/CreateUsuarios'
import { deleteUsuarioController } from '../../usecases/Usuario/DeleteUsuario'
import { getUsuariosByIdController } from '../../usecases/Usuario/GetUsuariosById'
import { listUsuariosController } from '../../usecases/Usuario/ListUsuarios'
import { updateUsuariosController } from '../../usecases/Usuario/UpdateUsuario'
import AuthMiddleware from '../middlewares/authMiddleware'

const BASE_URL = '/users'

export = (router: Router) => {
  router.post('/users', (req, res) => createUsuarioController.handle(req, res))
  router.get('/users', (req, res, next) => AuthMiddleware(req, res, next), (req, res) => listUsuariosController.handle(req, res))
  router.get('/users/:id', (req, res, next) => AuthMiddleware(req, res, next), (req, res) => getUsuariosByIdController.handle(req, res))
  router.delete(`${BASE_URL}/:id`, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => deleteUsuarioController.handle(req, res))
  router.put(BASE_URL, (req, res, next) => AuthMiddleware(req, res, next), (req, res) => updateUsuariosController.handle(req, res))
}
